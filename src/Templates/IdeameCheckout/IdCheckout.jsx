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
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import CloseIcon from '@material-ui/icons/Close'
import Expander from '../../Atoms/Expander'
import Button from '../../Atoms/Button/Button'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import HorizontalLinearStepper from '../../Organisms/Steppers/HorizontalLinearStepper'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'

class IdCheckout extends React.Component {
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
				<div className={classNames(classes.containerCheckout, classes.paddingBox)}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} md={8} lg={8}>
							<HorizontalLinearStepper />
						</Grid>

						<Grid item xs={12} sm={4}>
							<StickyContainer>
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
										<Button text="INFORMACIÓN SOBRE ENVÍOS" onClick={this.handleClickOpen} fullWidth />
									</div>
								</div>
							</StickyContainer>
						</Grid>
					</Grid>
				</div>

				<Dialog
					fullScreen={fullScreen}
					open={open}
					onClose={this.handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<AppBar color="#f2f2f2" position="relative">
						<Toolbar>
							<TitleSecondary content="INFORMACIÓN SOBRE ENVÍOS" left />
							<IconButton style={{ right: 10, position: 'absolute' }} onClick={this.handleClose} aria-label="Close">
								<CloseIcon style={{ fontSize: 30 }} />
							</IconButton>
						</Toolbar>
					</AppBar>
					<DialogContent style={{ background: '#f2f2f2', padding: 10 }}>
						<ContainerCard>
							<CardContent flex="column" paddingConfig={15} justify="flex-start">
								<Text left size={14} bold>
									INFORMACIÓN SOBRE ENVÍOS
								</Text>
								<Text left size={12}>
									El tiempo de entrega dependerá del día en que el producto sea despachado (según el momento de tu
									compra) más el tiempo de envío del correo una vez que el producto ingrese.
								</Text>
								<Text left size={14} bold>
									INFORMACIÓN SOBRE ENVÍOS
								</Text>
								<Text left size={12}>
									El tiempo de entrega dependerá del día en que el producto sea despachado (según el momento de tu
									compra) más el tiempo de envío del correo una vez que el producto ingrese.
								</Text>
								<Text left size={14} bold>
									INFORMACIÓN SOBRE ENVÍOS
								</Text>
								<Text left size={12}>
									El tiempo de entrega dependerá del día en que el producto sea despachado (según el momento de tu
									compra) más el tiempo de envío del correo una vez que el producto ingrese.
								</Text>
							</CardContent>
						</ContainerCard>
					</DialogContent>
				</Dialog>
			</div>
		)
	}
}
IdCheckout.defaultProps = {
	fixed: false
}

IdCheckout.propTypes = {
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
		display: 'block',
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
export default withMobileDialog()(withStyles(styles)(IdCheckout))
