import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		margin: theme.spacing.unit
	}
})

class Inputs extends React.Component {
	state = {
		name: 'Composed TextField'
	}

	handleChange = event => {
		this.setState({ name: event.target.value })
	}

	render() {
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="name-simple">Nombre</InputLabel>
					<Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
				</FormControl>
				<FormControl className={classes.formControl} aria-describedby="name-helper-text">
					<InputLabel htmlFor="name-helper">Nombre</InputLabel>
					<Input id="name-helper" value={this.state.name} onChange={this.handleChange} />
					<FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
				</FormControl>
				<FormControl className={classes.formControl} disabled>
					<InputLabel htmlFor="name-disabled">Nombre</InputLabel>
					<Input id="name-disabled" value={this.state.name} onChange={this.handleChange} />
					<FormHelperText>Disabled</FormHelperText>
				</FormControl>
				<FormControl className={classes.formControl} error aria-describedby="name-error-text">
					<InputLabel htmlFor="name-error">Nombre</InputLabel>
					<Input id="name-error" value={this.state.name} onChange={this.handleChange} />
					<FormHelperText id="name-error-text">Error</FormHelperText>
				</FormControl>
			</div>
		)
	}
}

Inputs.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(Inputs)
