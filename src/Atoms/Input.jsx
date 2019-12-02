import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'

const styles = () => ({
	textField: {
		margin: 0,
		width: '100%',
		fontSize: 12,
		color: 'gray'
	}
})

class InputSimple extends React.PureComponent {
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	render() {
		const { classes, error } = this.props

		return (
			<div>
				<div className="card padding10">
					<TextField
						id={this.props.idValue}
						label={this.props.name}
						defaultValue={this.props.defaultName}
						className={classes.textField}
						helperText={error ? error : this.props.required ? '* Campo obligatorio' : ''}
						margin="normal"
						onChange={this.props.onChange}
						onBlur={this.props.onBlur}
					/>
				</div>
			</div>
		)
	}
}

InputSimple.defaultProps = {
	classes: null,
	onChange: () => {},
	onBlur: null
}

InputSimple.propTypes = {
	classes: PropTypes.string,
	defaultName: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	onBlur: PropTypes.func
}

export default withStyles(styles)(InputSimple)
