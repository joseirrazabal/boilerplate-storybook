import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
	textField: {
		margin: 0,
		width: 'auto',
		fontSize: 12,
		color: 'gray'
	},
	textFieldSmall: {
		margin: 0,
		width: 'auto',
		fontSize: 12,
		color: 'gray',
		maxWidth: 100
	},
	flexBox: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})

class MultiInput extends React.Component {
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	render() {
		const { classes } = this.props

		return (
			<div>
				<div className={classNames('card padding10', classes.flexBox)}>
					<div>
						<TextField
							id="helperText"
							label={this.props.name1}
							defaultValue={this.props.defaultName1}
							className={classes.textFieldSmall}
							//helperText="* Campo obligatorio"
							InputLabelProps={{
								shrink: true
							}}
							margin="normal"
						/>
					</div>
					<div>
						<TextField
							id="helperText"
							label={this.props.name2}
							defaultValue={this.props.defaultName2}
							className={classes.textFieldSmall}
							//helperText="* Campo obligatorio"
							InputLabelProps={{
								shrink: true
							}}
							margin="normal"
						/>
					</div>
					<div>
						<TextField
							id="helperText"
							label={this.props.name3}
							defaultValue={this.props.defaultName3}
							className={classes.textFieldSmall}
							//helperText="* Campo obligatorio"
							InputLabelProps={{
								shrink: true
							}}
							margin="normal"
						/>
					</div>
					<div>
						<TextField
							id="helperText"
							label={this.props.name4}
							defaultValue={this.props.defaultName4}
							className={classes.textFieldSmall}
							//helperText="* Campo obligatorio"
							InputLabelProps={{
								shrink: true
							}}
							margin="normal"
						/>
					</div>
				</div>
			</div>
		)
	}
}

MultiInput.propTypes = {
	classes: PropTypes.isRequired,
	inputName: PropTypes.string,
	defaultName1: PropTypes.string,
	defaultName2: PropTypes.string,
	defaultName3: PropTypes.string,
	defaultName4: PropTypes.string,
	name1: PropTypes.string,
	name2: PropTypes.string,
	name3: PropTypes.string,
	name4: PropTypes.string
}

export default withStyles(styles)(MultiInput)
