import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

const classes = theme => ({
	root: {
		flexGrow: 1
	},
	formControl: {
		/* margin: theme.spacing.unit, */
		width: '100%'
	}
})

class Grid2 extends React.Component {
	state = {
		name: 'Composed TextField'
	}

	handleChange = event => {
		this.setState({ name: event.target.value })
	}

	render() {
		const { classes } = this.props

		return (
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<div className="card" style={{ padding: 10 }}>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="name-simple">Nombre</InputLabel>
							<Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
						</FormControl>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div className="card" style={{ padding: 10 }}>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="name-simple">Nombre</InputLabel>
							<Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
						</FormControl>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div className="card" style={{ padding: 10 }}>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="name-simple">Nombre</InputLabel>
							<Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
						</FormControl>
					</div>
				</Grid>
			</Grid>
		)
	}
}

Grid2.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(classes)(Grid2)
