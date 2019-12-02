import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
/* import InputLabel from '@material-ui/core/InputLabel' */
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

const styles = theme => ({
	button: {
		display: 'block',
		marginTop: 0
	},
	formControl: {
		margin: theme.spacing.unit,
		display: 'none',
		minWidth: 120
	}
})

class OpenSelect extends React.Component {
	state = {
		age: '',
		open: false
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	handleOpen = () => {
		this.setState({ open: true })
	}

	render() {
		const { classes, filters } = this.props

		return (
			<form autoComplete="off">
				<Button className={classes.button} color="primary" onClick={this.handleOpen}>
					FILTRAR
				</Button>
				<FormControl className={classes.formControl}>
					<Select
						open={this.state.open}
						onClose={this.handleClose}
						onOpen={this.handleOpen}
						value={this.state.age}
						onChange={this.handleChange}
						inputProps={{
							name: 'age',
							id: 'demo-controlled-open-select'
						}}
					>
						{filters.map(item => (
							<MenuItem value={item.value}>{item.label}</MenuItem>
						))}
					</Select>
				</FormControl>
			</form>
		)
	}
}

OpenSelect.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(OpenSelect)
