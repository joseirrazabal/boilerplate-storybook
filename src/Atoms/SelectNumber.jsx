import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

class SelectNumber extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			age: '',
			open: false,
			subtitle: ''
		}
	}

	filterItems = query =>
		this.props.values.filter(el => {
			let v
			if (el.value === query) {
				v = el.subtitle
			}
			return v
		})

	handleChange = event => {
		const sub = this.filterItems(event.target.value)
		if (sub && sub.length) this.setState({ [event.target.name]: event.target.value, subtitle: sub[0].subtitle })
		if (this.props.onChange) this.props.onChange(event.target.value)
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	handleOpen = () => {
		this.setState({ open: true })
	}

	render() {
		const { classes, error, errorText } = this.props
		const { subtitle } = this.state
		return (
			<div className="card-form padding10">
				<form autoComplete="off">
					<FormControl error={error} className={classNames(classes.formControl)}>
						<InputLabel htmlFor="controlled-open-select">{this.props.label}</InputLabel>
						<Select
							open={this.state.open}
							onClose={this.handleClose}
							onOpen={this.handleOpen}
							value={
								this.state[this.props.inputName] !== undefined ? this.state[this.props.inputName] : this.props.value
							}
							onChange={this.handleChange}
							onBlur={this.handleChange}
							inputProps={{
								name: this.props.inputName,
								id: this.props.inputId
							}}
						>
							{this.props.unselectedOptionText && (
								<MenuItem value=" ">
									<em>{this.props.unselectedOptionText}</em>
								</MenuItem>
							)}
							{this.props.values.map((item, i) => (
								<MenuItem key={i} value={item.value}>
									{item.title || item.value}
								</MenuItem>
							))}
						</Select>
						{error && <FormHelperText>{errorText}</FormHelperText>}
						{/* {subtitle && <FormHelperText>{subtitle}</FormHelperText>} */}
					</FormControl>
				</form>
			</div>
		)
	}
}
SelectNumber.defaultProps = {
	inputName: 'Nombre',
	label: '',
	values: [
		{
			title: 'Valor',
			value: 10
		}
	],
	error: undefined
}
SelectNumber.propTypes = {
	inputName: PropTypes.string,
	inputId: PropTypes.string.isRequired,
	label: PropTypes.string,
	values: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			value: PropTypes.any.isRequired
		})
	),
	error: PropTypes.bool
}

export default withStyles(() => ({
	formControl: {
		width: '100%'
	}
}))(SelectNumber)
