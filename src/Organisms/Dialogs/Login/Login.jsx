import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import Divider from '@material-ui/core/Divider'
import Button from '../../../Atoms/Button/Button'

import InputSimple from '../../../Atoms/Input'
import { TitleSecondary, Text } from '../../../Atoms/TitleLabel/TitleLabel'

const headerStyles = {
	paddingResponsive: {
		'@media (max-width: 360px)': {
			padding: 10
		}
	}
}

class Login extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			open: false
		}
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	render() {
		const { fullScreen } = this.props
		return (
			<Dialog
				fullScreen={fullScreen}
				open={this.state.open}
				onClose={this.handleClose}
				aria-labelledby="responsive-dialog-title"
			>
				<AppBar color="#f2f2f2" position="relative" styles={{ ...headerStyles.paddingResponsive }}>
					<Toolbar style={{ minHeight: 40 }}>
						<TitleSecondary content="Registro / Login" size={14} left />
						<IconButton
							style={{ right: 0, position: 'absolute', padding: 0 }}
							color="inherit"
							onClick={this.handleClose}
							aria-label="Close"
						>
							<CloseIcon style={{ fontSize: 30, padding: 0 }} />
						</IconButton>
					</Toolbar>
				</AppBar>
				<DialogContent style={{ background: '#f2f2f2', padding: 10 }}>
					<Grid container spacing={2} style={{ marginTop: 30, marginBottom: 30 }}>
						<Grid item xs={12} sm={6}>
							<Button
								text="Google"
								fullWidth
								border
								radius
								style={{ background: '#FFFFFF', color: 'red' }}
								primary={false}
								iconLeft={<FaGoogle color="red" />}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								text="Facebook"
								fullWidth
								border
								radius
								style={{ background: '#3B5998', color: 'white' }}
								primary={false}
								iconLeft={<FaFacebook />}
							/>
						</Grid>
						<Divider style={{ width: '100%', marginTop: 15, marginBottom: 15 }} />
						<Grid item xs={12} sm={6}>
							<InputSimple name="Nombre" defaultName="Luciano" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputSimple name="Apellido" defaultName="Recchini" />
						</Grid>
						<Grid item xs={12} sm={12}>
							<InputSimple name="Email" defaultName="luciano@idea.me" />
						</Grid>
						<Grid item xs={12} sm={12}>
							<InputSimple name="Clave" defaultName="" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button text="Entrar" size={'medium'} fullWidth border radius primary={true} />
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions style={{ margin: 0 }}>
					<Button text="¡Ya tengo Cuenta!" size={'medium'} fullWidth primary={true} />
				</DialogActions>
			</Dialog>
		)
	}
}

Login.defaultPropTypes = {
	open: PropTypes.bool
}

Login.propTypes = {
	fullScreen: PropTypes.bool.isRequired,
	open: PropTypes.bool
}

export default Login
