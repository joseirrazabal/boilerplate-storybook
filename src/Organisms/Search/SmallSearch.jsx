import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import Button from '../../Atoms/Button/Button'
import Autocompletar from '../../Molecules/Autocompletar/Autocompletar'
import IconsFont from '../../Atoms/IconsFont'

const suggestions = [
	{ label: 'Afghanistan' },
	{ label: 'Aland Islands' },
	{ label: 'Albania' },
	{ label: 'Algeria' },
	{ label: 'American Samoa' },
	{ label: 'Andorra' },
	{ label: 'Angola' },
	{ label: 'Anguilla' },
	{ label: 'Antarctica' },
	{ label: 'Antigua and Barbuda' },
	{ label: 'Argentina', type: 'city', value: 'ARG' },
	{ label: 'Armenia' },
	{ label: 'Aruba' },
	{ label: 'Australia' },
	{ label: 'Austria' },
	{ label: 'Azerbaijan' },
	{ label: 'Bahamas' },
	{ label: 'Bahrain' },
	{ label: 'Bangladesh' },
	{ label: 'Barbados' },
	{ label: 'Belarus' },
	{ label: 'Belgium' },
	{ label: 'Belize' },
	{ label: 'Benin' },
	{ label: 'Bermuda' },
	{ label: 'Bhutan' },
	{ label: 'PlurinationalBolivia State of, Bolivia, Plurinational State of' },
	{ label: 'Bonaire, Sint Eustatius and Saba' },
	{ label: 'Bosnia and Herzegovina' },
	{ label: 'Botswana' },
	{ label: 'Bouvet Island' },
	{ label: 'Brazil' },
	{ label: 'British Indian Ocean Territory' },
	{ label: 'Brunei Darussalam' }
]

class SearchHotels extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			auth: true,
			anchorEl: null,
			calendar: {},
			passenger: {},
			place: '',
			suggestions: []
		}
	}

	onChange = (value, name = 'place') => {
		var obj = {}
		obj[name] = value
		this.setState(obj)
	}

	submit = () => {
		this.props.onSubmit && this.props.onSubmit(this.state)
	}

	getSuggestions = value => {
		const inputValue = value.trim().toLowerCase()
		const inputLength = inputValue.length
		let count = 0

		var result =
			inputLength === 0
				? []
				: suggestions.filter(suggestion => {
						const keep = count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue

						if (keep) {
							count += 1
						}

						return keep
				  })

		this.setState({
			suggestions: result
		})
	}

	render() {
		const { classes, useDefaultCursor } = this.props

		const clazz = classnames({
			btnSearch: true
		})

		const { auth, anchorEl } = this.state
		const open = Boolean(anchorEl)

		return (
			<Grid container spacing={0} className={classNames(classes.contentButtonSearch, classes.flexStartEnd)}>
				<div style={{ minWidth: 200, paddingLeft: 15 }}>
					<Autocompletar
						name="destination"
						onChange={this.onChange}
						placeholder={'Cambiar Destino'}
						getSuggestions={this.props.getSuggestions || this.getSuggestions}
						suggestions={this.props.suggestions || this.state.suggestions}
					/>
				</div>
				<div className={classNames(classes.searchBtn)}>
					<Button
						fullWidth
						size={'small'}
						primary={true}
						iconLeft={<IconsFont color={'white'} iconSize={30} icon="flaticon-search" />}
						onClick={this.submit}
						style={{ borderRadius: '0 6px 6px 0' }}
					/>
				</div>
			</Grid>
		)
	}
}
SearchHotels.defaultProps = {
	image: '',
	fixed: false
}

SearchHotels.propTypes = {

	image: PropTypes.string,
	fixed: PropTypes.bool
}

export default withStyles(({ mauri: { color, variables, flexStartEnd } }) => ({
	contentButtonSearch: {
		position: 'relative',
		backgroundColor: 'white',
		fontFamily: 'Roboto, sans-serif',
		borderRadius: 6,
		padding: 0,
		boxSizing: 'border-box',
		border: '1px solid silver'
	},
	searchBtn: {
		right: 0
	},
	flexStartEnd
}))(SearchHotels)
