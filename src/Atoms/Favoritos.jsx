import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import amber from '@material-ui/core/colors/amber'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import { withStyles } from '@material-ui/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

const classes1 = theme => ({
	success: {
		backgroundColor: 'gray'
	},
	error: {
		backgroundColor: theme.palette.error.dark
	},
	info: {
		backgroundColor: theme.palette.primary.dark
	},
	warning: {
		backgroundColor: amber[700]
	},
	icon: {
		fontSize: 20
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing.unit
	},
	message: {
		display: 'flex',
		alignItems: 'center'
	}
})

function MySnackbarContent(props) {
	const { classes, className, message, onClose, variant, ...other } = props

	return (
		<SnackbarContent
			className={classNames(classes[variant], className)}
			aria-describedby="client-snackbar"
			message={
				<span id="client-snackbar" className={classes.message}>
					<Favorite className={classNames(classes.icon, classes.iconVariant)} />
					{message}
				</span>
			}
			action={[
				<IconButton key="close" aria-label="Close" color="inherit" className={classes.close} onClick={onClose}>
					<CloseIcon className={classes.icon} />
				</IconButton>
			]}
			{...other}
		/>
	)
}

MySnackbarContent.propTypes = {
	variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
}

const MySnackbarContentWrapper = withStyles(classes1)(MySnackbarContent)

const classes2 = theme => ({
	margin: {
		margin: theme.spacing.unit
	}
})

class CustomizedSnackbars extends React.Component {
	state = {
		open: false
	}

	handleClick = () => {
		this.setState({
			open: true
		})
	}

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({
			open: false
		})
	}

	render() {
		const { open } = this.state
		return (
			<div
				style={{
					position: 'relative',
					zIndex: 5
				}}
			>
				<FormControlLabel
					style={{
						margin: 0
					}}
					control={
						<Checkbox
							onClick={this.handleClick}
							icon={
								<FavoriteBorder
									style={{
										color: 'white'
									}}
								/>
							}
							checkedIcon={<Favorite />}
							value="checkedH"
						/>
					}
				/>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					open={open}
					autoHideDuration={2000}
					onClose={this.handleClose}
				>
					<MySnackbarContentWrapper
						onClose={this.handleClose}
						variant="success"
						message="Se agrego a tu lista de Favoritos"
					/>
				</Snackbar>
			</div>
		)
	}
}

CustomizedSnackbars.propTypes = {}

export default withStyles(classes2)(CustomizedSnackbars)
