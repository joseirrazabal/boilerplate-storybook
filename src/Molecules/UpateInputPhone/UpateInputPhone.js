import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import { withStyles } from '@material-ui/styles'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Input from '@material-ui/core/Input'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		margin: theme.spacing.unit
	}
})

function TextMaskCustom(props) {
	const { textmask, inputRef, ...other } = props
	return (
		<MaskedInput
			{...other}
			ref={inputRef}
			mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
			placeholderChar={'\u2000'}
			showMask
		/>
	)
}

class PhoneNumberUpate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			textmask: '(011)   -    '
		}
	}

	handleChange = event => {
		const { onChange } = this.props
		this.setState({
			textmask: event.target.value,
			phone: event.target.value
		})
		onChange(event)
	}

	onChange = data => {
		this.setState({
			textmask: data.target.value,
			phone: data.target.value
		})
	}

	render() {
		const { classes, error, idValue, labelValue, nameValue, onChange, onBlur, valued, placeholderValue } = this.props
		const { textmask, numberformat, phone } = this.state

		return (
			<div className="card padding10" style={{ width: '100%' }}>
				<FormControl error={error} aria-describedby="name-text" style={{ width: '100%' }}>
					<Text size={12} color="gray">
						Teléfono
					</Text>
					<Input
						value={valued ? valued : textmask}
						onBlur={onBlur}
						onChange={this.handleChange}
						id={idValue}
						inputComponent={TextMaskCustom}
					/>
					{error && <FormHelperText id="name-text">{error}</FormHelperText>}
				</FormControl>
			</div>
		)
	}
}
PhoneNumberUpate.defaultProps = {
	nameValue: '',
	onChange: () => {},
	onBlur: () => {},
	placeholderValue: 'placeHolder',
	classes: null,
	valued: null,
	idValue: 'datte'
}
PhoneNumberUpate.propTypes = {
	error: PropTypes.bool.isRequired,
	idValue: PropTypes.string,
	labelValue: PropTypes.string.isRequired,
	nameValue: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	valued: PropTypes.string,
	placeholderValue: PropTypes.string,
	classes: PropTypes.string
}

export default withStyles(styles)(PhoneNumberUpate)
