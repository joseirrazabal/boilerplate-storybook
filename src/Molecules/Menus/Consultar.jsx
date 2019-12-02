import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { FaFilter } from 'react-icons/fa'
import CloseIcon from '@material-ui/icons/Close'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import withMobileDialog from '@material-ui/core/withMobileDialog'

import Button from '../../Atoms/Button/Button'
import IconList from '../List/IconList'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'

class Consultar extends React.Component {
	state = {
		open: false
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	render() {
		const { classes, fullScreen } = this.props

		return (
			<div>
				<div key={1} className={classNames(classes.buttonFiter)}>
					<Button
						variant="fab"
						color="secondary"
						aria-label="edit"
						onClick={this.handleClickOpen}
						style={{
							borderRadius: 50,
							boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
						}}
						iconLeft={<FaFilter />}
					/>
				</div>

				<Dialog
					key={2}
					fullScreen={fullScreen}
					className={classNames(classes.consulta)}
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<AppBar color="inherit" position="sticky">
						<Toolbar style={{ minHeight: 40 }}>
							<TitleSecondary content="Filtrar y Ordenar" size={16} left />
							<IconButton
								style={{ right: 0, position: 'absolute' }}
								color="inherit"
								onClick={this.handleClose}
								aria-label="Close"
							>
								{true && <CloseIcon style={{ fontSize: 30 }} />}
							</IconButton>
						</Toolbar>
					</AppBar>
				</Dialog>
			</div>
		)
	}
}

Consultar.defaultProps = {
	title: null
}
Consultar.propTypes = {

	title: PropTypes.string
}

export default withMobileDialog()(
	withStyles(() => ({
		contentFiltersMobile: {
			overflowX: 'scroll',
			whiteSpace: 'nowrap',
			width: '100%',
			padding: 10
		},
		consulta: {
			'@media (min-width: 800px)': {
				bottom: 80,
				right: 10
			}
		},
		buttonMobile: {
			width: 'auto',
			display: 'inline-block'
		},
		buttonFiter: {
			display: 'block',
			position: 'fixed',
			bottom: 10,
			right: 10,
			zIndex: 3
		}
	}))(Consultar)
)
