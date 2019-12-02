import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/styles'
import classNames from 'classnames'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import Slim from '../../Slim/slim.react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
const styles = theme => ({
	global: {
		backgroundColor: 'white',
		height: 'auto',
		/* maxWidth: 500, */
		boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
		borderRadius: 6,
		overflow: 'hidden'
	},
	flexColumn: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	padding20: {
		padding: 20
	},
	radius: {
		borderRadius: 0,
		overFlow: 'hidden'
	},
	elevation: {
		boxShadow: '0 1px 4px rgba(0,0,0,0.3)'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	bootstrapRoot: {
		padding: 0,
		'label + &': {
			marginTop: theme.spacing.unit * 3
		}
	},
	bootstrapInput: {
		borderRadius: 4,
		border: 'none',
		fontSize: 16,
		textAlign: 'right',
		padding: 3,
		width: 'auto',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		'&:focus': {
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
		}
	},
	bootstrapFormLabel: {
		fontSize: 16
	},
	bootstrapFormLabelRed: {
		color: '#FF4D4D'
	}
})
class AdminSmallCard extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<div className={classNames(classes.global, classes.displayFlex)}>
				<div style={{ minWidth: 160, width: 160, height: 160, overflow: 'hidden', borderRadius: '0 60px 60px 0' }}>
					<Slim ratio="1:1" labelLoading="..." maxFileSize="3">
						<input type="file" className="hide" />
					</Slim>
				</div>
				<div className={classNames(classes.padding20)}>
					<div className={classNames(classes.flexColumn)}>
						<TextField
							defaultValue={this.props.title}
							id="bootstrap-input"
							InputProps={{
								disableUnderline: true,
								classes: {
									root: classes.bootstrapRoot,
									input: classes.bootstrapInput
								}
							}}
							InputLabelProps={{
								shrink: true,
								className: classes.bootstrapFormLabel
							}}
						/>
						<TextField
							defaultValue={this.props.subtitle}
							id="bootstrap-input"
							InputProps={{
								disableUnderline: true,
								classes: {
									root: classes.bootstrapRoot,
									input: classes.bootstrapInput
								}
							}}
							InputLabelProps={{
								shrink: true,
								className: classes.bootstrapFormLabelRed
							}}
						/>
					</div>
				</div>
			</div>
		)
	}
}
AdminSmallCard.defaultProps = {
	image: '',
	title: 'Hoteles en Miami',
	subtitle: 'Ultimos lugares!',
	lineThrough: false
}

AdminSmallCard.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	subtitle: PropTypes.string,
	lineThrough: PropTypes.bool,
	classes: PropTypes.isRequired
}
export default withStyles(styles)(AdminSmallCard)
