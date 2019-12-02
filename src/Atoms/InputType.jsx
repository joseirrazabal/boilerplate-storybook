import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

class InputSimple extends React.PureComponent {
	handleChange = name => event => {
		this.setState({ [name]: event.target.checked || event.target.value })
	}

	render() {
		const { classes, error, type, name, editable, required, label, value, onChange, onBlur, items } = this.props

		return (
			<div>
				<div className="card padding10">
					{String(type) === 'checkbox' ? (
						<FormControlLabel
							control={
								<Switch
									id={name}
									name={name}
									checked={value}
									onChange={e => {
										const response = this.handleChange(name)
										onChange(e)
										return response(e)
									}}
								/>
							}
							label={label}
						/>
					) : String(type) === 'list' ? (
						<Select
							value={value}
							onChange={e => {
								const response = this.handleChange(name)
								onChange(e)
								return response(e)
							}}
							inputProps={{
								id: name,
								name
							}}
						>
							{!required && (
								<MenuItem value={null}>
									<em>None</em>
								</MenuItem>
							)}
							{items.map(item => (
								// eslint-disable-next-line no-underscore-dangle
								<MenuItem value={item._id}>{item.title}</MenuItem>
							))}
						</Select>
					) : (
						<TextField
							disabled={editable === false}
							id={name}
							label={label}
							value={value}
							className={classes.textField}
							helperText={error !== false ? error : required ? '* Campo obligatorio' : ''}
							margin="normal"
							onChange={onChange}
							onBlur={onBlur}
						/>
					)}
				</div>
			</div>
		)
	}
}

InputSimple.defaultProps = {
	classes: null,
	onChange: () => {},
	onBlur: null,
	error: false,
	type: '',
	editable: true,
	required: false,
	label: '',
	value: '',
	items: []
}

InputSimple.propTypes = {
	classes: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	error: PropTypes.string,
	type: PropTypes.string,
	editable: PropTypes.bool,
	required: PropTypes.bool,
	label: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	items: PropTypes.array,
	value: PropTypes.node
}

const styles = () => ({
	textField: {
		margin: 0,
		width: '100%',
		fontSize: 12,
		color: 'gray'
	}
})

export default withStyles(styles)(InputSimple)
