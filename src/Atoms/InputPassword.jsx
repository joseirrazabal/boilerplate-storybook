import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'

const styles = theme => ({
	textField: {
		margin: 0,
		width: '100%',
		fontSize: 12,
		color: 'gray'
	}
})

class InputPassword extends React.Component {
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	render() {
		const { classes } = this.props

		return (
			<div>
				<div className={'card padding10'}>
					<TextField
						id={this.props.idValue}
						label={this.props.name}
						defaultValue={this.props.defaultName}
						className={classes.textField}
						onChange={this.props.onChange}
						onBlur={this.props.onBlur}
						type="password"
						autoComplete="current-password"
						margin="normal"
					/>
					{this.props.error && <FormHelperText id="name-text">{this.props.error}</FormHelperText>}
				</div>
			</div>
		)
	}
}

InputPassword.propTypes = {
	classes: PropTypes.isRequired,
	//inputName: PropTypes.string,
	name: PropTypes.string
}

export default withStyles(styles)(InputPassword)
