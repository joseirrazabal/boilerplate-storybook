import React from 'react'
import PropTypes from 'prop-types'
import { StickyContainer, Sticky } from 'react-sticky'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import CloseIcon from '@material-ui/icons/Close'
import Expander from '../../Atoms/Expander'
import Button from '../../Atoms/Button/Button'

import Steppers from './Steppers'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import Resumen from './Resumen'

class Checkout extends React.Component {
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
		const { open } = this.state
		return (
			<div>
				<StickyContainer>
					<div className={classNames(classes.containerCheckout, classes.paddingBox)}>
						<Grid container style={{ margin: 0 }}>
							<Grid item xs={12} spacing={0} sm={12} md={8} lg={8}>
								<Steppers />
							</Grid>
							<Grid item xs={12} spacing={0} sm={4}>
								<div className={classNames(classes.resumen)}>
									<Sticky>
										{({ style }) => (
											<div
												style={{
													...style,
													zIndex: 5
												}}
											>
												<Expander
													expansion
													title={
														<div className={classNames(classes.flexStartEnd, { width: '100%' })}>
															<div>
																<Text left content="Total" />
															</div>
															<div>
																<TitleSecondary bold right content="$12000" />
															</div>
														</div>
													}
													background="#f2f2f2"
													content={
														<div style={{ width: '100%', padding: 10 }}>
															<div
																className={classNames(classes.flexStartEnd, classes.itemsResumen, { width: '100%' })}
															>
																<div>
																	<Text left italic content="Tarifa por adulto" />
																</div>
																<div>
																	<Text right size={16} content="$4980" />
																</div>
															</div>
															<div
																className={classNames(classes.flexStartEnd, classes.itemsResumen, { width: '100%' })}
															>
																<div>
																	<Text left italic content="Adultos (1)" />
																</div>
																<div>
																	<Text right size={16} content="$4980" />
																</div>
															</div>
															<div
																className={classNames(classes.flexStartEnd, classes.itemsResumen, { width: '100%' })}
															>
																<div>
																	<Text left italic content="Impuestos y tasas" />
																</div>
																<div>
																	<Text right size={16} content="$2100" />
																</div>
															</div>
															<div
																className={classNames(classes.flexStartEnd, classes.itemsResumen, { width: '100%' })}
															>
																<div>
																	<Text left italic content="Cargos" />
																</div>
																<div>
																	<Text right size={16} content="$900" />
																</div>
															</div>
														</div>
													}
												/>
											</div>
										)}
									</Sticky>
									<div className={classNames(classes.buttonResumen)}>
										<Button text="ver detalle de mi compra" onClick={this.handleClickOpen} fullWidth />
									</div>
								</div>
								<div className={classNames(classes.miCompra)}>
									<Grid item xs={12}>
										<div className={classNames(classes.paddingBox)}>
											<TitleSecondary center content="ver detalle de mi compra" />
										</div>
										<Resumen />
									</Grid>
								</div>
							</Grid>
						</Grid>
					</div>
				</StickyContainer>
				<Dialog
					fullScreen={fullScreen}
					open={open}
					onClose={this.handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<AppBar color="#f2f2f2" position="relative">
						<Toolbar>
							<TitleSecondary content="Resumen de mi compra" left />
							<IconButton style={{ right: 10, position: 'absolute' }} onClick={this.handleClose} aria-label="Close">
								<CloseIcon style={{ fontSize: 40 }} />
							</IconButton>
						</Toolbar>
					</AppBar>
					<DialogContent style={{ background: '#f2f2f2' }}>
						<Grid container style={{ paddingTop: 30, paddingBottom: 30 }}>
							<Resumen />
						</Grid>
					</DialogContent>
					<DialogActions style={{ margin: 0 }}>
						<Button text="volver" size="medium" fullWidth primary onClick={this.handleClose} />
					</DialogActions>
				</Dialog>
			</div>
		)
	}
}
Checkout.defaultProps = {
	fixed: false
}

Checkout.propTypes = {
	fixed: PropTypes.string
}

const styles = ({ mauri: { containerCheckout, flex, flexStartEnd, paddingBox } }) => ({
	containerCheckout,
	paddingBox,
	flex,
	flexStartEnd,
	itemsResumen: {
		paddingTop: 10
	},
	buttonResumen: {
		display: 'none',
		'@media (max-width: 960px)': {
			display: 'block'
		}
	},
	miCompra: {
		'@media (max-width: 960px)': {
			display: 'none'
		}
	},
	resumen: {
		'@media (max-width: 960px)': {
			position: 'fixed',
			bottom: 0,
			width: '100%',
			left: 0
		}
	}
})
export default withMobileDialog()(withStyles(styles)(Checkout))
