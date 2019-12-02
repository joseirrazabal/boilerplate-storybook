import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'

import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { withStyles } from '@material-ui/styles'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

import IconsFontComponent from '../../Atoms/IconsFont'
import SimpleList from '../../Molecules/List/SimpleList'

function Transition(props) {
	return <Slide direction="up" {...props} />
}

const variantIcon = {
	success: () => <IconsFontComponent iconSize={20} icon="flaticon-question-1" />,
	warning: () => <IconsFontComponent iconSize={20} icon="flaticon-reception-bell" />,
	error: () => <IconsFontComponent iconSize={20} icon="flaticon-rest" />,
	info: () => <IconsFontComponent iconSize={20} icon="flaticon-rest" />
}

const classes1 = theme => ({
	success: {
		backgroundColor: '#55C443'
	},
	error: {
		backgroundColor: '#E53512'
	},
	info: {
		backgroundColor: '#4A90E2'
	},
	warning: {
		backgroundColor: '#E53512'
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

const MySnackbarContent = ({ classes, className, message, onClose, variant, ...other }) => {
	const Icon = variantIcon[variant]

	return (
		<SnackbarContent
			className={classNames(classes[variant], className)}
			aria-describedby="client-snackbar"
			message={
				<span id="client-snackbar" className={classes.message}>
					<Icon className={classNames(classes.icon, classes.iconVariant)} />
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

MySnackbarContent.defaultProps = {
	className: '',
	onClose: () => {}
}

MySnackbarContent.propTypes = {
	className: PropTypes.string,
	onClose: PropTypes.func,
	variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
}

export const MySnackbarContentWrapper = withStyles(classes1)(MySnackbarContent)

const styles = theme => ({
	margin: {
		margin: theme.spacing.unit
	}
})

class Alertas extends React.Component {
	state = {
		open: false,
		open2: true
	}

	handleClose2 = () => {
		this.setState({ open2: false })
	}

	handleClick = () => {
		this.setState({ open: true })
	}

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ open: false })
	}

	render() {
		const { classes } = this.props
		const { open, open2 } = this.state

		return (
			<div>
				<Button className={classes.margin} onClick={this.handleClick}>
					Open success snackbar
				</Button>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					open={open}
					autoHideDuration={6000}
					onClose={this.handleClose}
				>
					<MySnackbarContentWrapper onClose={this.handleClose} variant="success" message="Correcto!" />
				</Snackbar>
				<MySnackbarContentWrapper variant="error" className={classes.margin} message="Error!" />
				<MySnackbarContentWrapper variant="warning" className={classes.margin} message="Alerta" />
				<MySnackbarContentWrapper variant="info" className={classes.margin} message="Atento!" />
				<MySnackbarContentWrapper variant="success" className={classes.margin} message="Correcto!" />
				<Dialog
					open={open2}
					TransitionComponent={Transition}
					keepMounted
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description"
				>
					<DialogTitle id="alert-dialog-slide-title">Últimas Actualizaciones</DialogTitle>
					<DialogContent id="alert-dialog-slide-description">
						<div style={{ padding: 0, width: '100%' }}>
							<SimpleList title="Se cambiaron las Card de lugar a:" subtitle="Organisms/Card/" borderBottom />
							<SimpleList title="Se cambio de lugar LandingMap y LandignTitle a:" subtitle="Organisms//" borderBottom />
							<SimpleList title="Se cambio Passengers a:" subtitle="Organisms/Passengers" borderBottom />
							<SimpleList title="Se cambio Passengers a:" subtitle="Organisms/Passengers" borderBottom />
						</div>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose2} color="primary">
							CERRAR
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		)
	}
}

Alertas.propTypes = {}

export default withStyles(styles)(Alertas)
