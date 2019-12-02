import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'

const ResponsiveDialog = ({ fullScreen, children, open, handleClose, title }) => (
	<div>
		<Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
			<DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{children}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					VER CONSULTA
				</Button>
				<Button onClick={handleClose} color="primary" autoFocus>
					CERRAR
				</Button>
			</DialogActions>
		</Dialog>
	</div>
)

ResponsiveDialog.defaultProps = {
	children: PropTypes.node,
	title: 'Título de Ejemplo',
	open: false
}
ResponsiveDialog.propTypes = {
	fullScreen: PropTypes.bool.isRequired,
	title: PropTypes.string,
	children: PropTypes.node,
	open: PropTypes.bool,
	handleClose: PropTypes.func.isRequired
}

export default withMobileDialog()(ResponsiveDialog)
