import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/styles'
import { FaSearch } from 'react-icons/fa'
import Grid from '@material-ui/core/Grid'
import Button from '../../Atoms/Button/Button'
import Autocompletar from '../../Molecules/Autocompletar/Autocompletar'
import Calendar from '../../Molecules/Calendar/Calendar'

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

const searchStyles = {
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'center',
		alignItem: 'center'
	},
	absolute: {
		position: 'absolute',
		right: 0,
		top: 0
	},
	DateRangePicker: {
		width: '100%'
	},
	listMenuBorderLine: {
		borderRight: '0.5px solid #ccc',
		paddingRight: 20
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	}
}
class SearchAir extends React.Component {
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

	handleChange = (event, checked) => {
		this.setState({ auth: checked })
	}

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	onChange = (value, name = 'place') => {
		var obj = {}
		obj[name] = value
		this.setState(obj)
	}

	calendar = values => {
		this.setState({ calendar: values })
	}

	passenger = values => {
		this.setState({ passenger: values })
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
			<Grid
				container
				spacing={2}
				style={{ ...searchStyles.global }}
				className={classNames(classes.contentButtonSearch)}
			>
				<Grid container className={classNames(classes.contentDataSearch)}>
					<Grid
						item
						xs={12}
						sm={4}
						style={{ ...searchStyles.displayFlex }}
						className={classNames(classes.autocompletar)}
					>
						<Autocompletar
							name="origin"
							onChange={this.onChange}
							getSuggestions={this.props.getSuggestions || this.getSuggestions}
							suggestions={this.props.suggestions || this.state.suggestions}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						sm={4}
						style={{ ...searchStyles.displayFlex }}
						className={classNames(classes.autocompletar)}
					>
						<Autocompletar
							name="destination"
							placeholder="destino"
							onChange={this.onChange}
							getSuggestions={this.props.getSuggestions || this.getSuggestions}
							suggestions={this.props.suggestions || this.state.suggestions}
						/>
					</Grid>

					<Grid
						className={classNames(classes.calendar)}
						item
						xs={4}
						sm={4}
						style={{
							...searchStyles.displayFlex,
							borderLeft: '1px solid silver',
							borderRight: '1px solid silver'
						}}
					>
						<Calendar onChange={this.calendar} style={{ ...SearchAir.DateRangePicker }} />
					</Grid>
				</Grid>
				<Grid container spacing={0} className={classNames(classes.content_btn_search)}>
					<Button fullWidth className={clazz} iconLeft={<FaSearch />} onClick={this.submit} />
				</Grid>
			</Grid>
		)
	}
}
SearchAir.defaultProps = {
	image: '',
	fixed: false
}

SearchAir.propTypes = {

	image: PropTypes.string,
	fixed: PropTypes.bool
}

export default withStyles(({ mauri: { color, variables } }) => ({
	contentButtonSearch: {
		// overflow: 'hidden',
		minHeight: variables.searchMinHeight,
		fontFamily: 'Roboto, sans-serif',
		backgroundColor: 'white',
		position: 'relative',
		borderRadius: 6,
		boxSizing: 'border-box',
		boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
	},
	contentDataSearch: {
		width: 'calc(100% / 1 - ' + variables.searchWidthBtn + ')'
	},
	autocompletar: {
		minHeight: 35,
		paddingLeft: 20
	},
	calendar: {
		input: {
			textAlign: 'center'
		}
	},
	content_btn_search: {
		width: variables.searchWidthBtn,
		minHeight: variables.searchMinHeight,
		position: 'absolute',
		right: 0
	},
	calendar: {
		display: 'flex',
		'@media (max-width: 690px)': {
			display: 'none'
		}
	},
	people: {
		display: 'flex',
		'@media (max-width: 690px)': {
			display: 'none'
		}
	},
	btnSearch: {
		minHeight: 60,
		borderRadius: '0px 6px 6px 0px'
	}
}))(SearchAir)
