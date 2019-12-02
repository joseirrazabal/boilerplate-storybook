import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { FaAngleDown, FaFilter } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import Header from '../../Organisms/Header/Header'
import Footer from '../../Organisms/Footer/Footer'
import Expander from '../../Atoms/Expander'
import SimpleCard from '../../Organisms/Card/SimpleCard'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'
import TabsOrdenar from '../../Molecules/TabsOrdenar/TabsOrdenar'
import SearchMartial from '../../Organisms/Search/SearchMartial'
import Button from '../../Atoms/Button/Button'
import ResumenBusquedaPaquetes from '../../Organisms/ResumenBusqueda/ResumenBusquedaPaquetes'

class ShoppingPaquetes extends React.PureComponent {
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
			<Grid>
				<BrowserRouter>
					<Header
						image={
							<img
								src="https://www.google.com/a/cpanel/upate.com/images/logo.gif?service=google_gsuite"
								style={{ height: 30 }}
							/>
						}
						fixed={false}
					/>
				</BrowserRouter>
				<div className="contentSearchCerro">
					<div style={{ width: '100%', maxWidth: 800 }}>
						<SearchMartial />
					</div>
				</div>
				<div className={classNames(classes.resumenBusqueda)}>
					<ResumenBusquedaPaquetes />
				</div>
				<section>
					<Grid xs={12}>
						<LinearProgress style={{ height: 3 }} />
					</Grid>
					<Grid container spacing={0}>
						<Grid container spacing={0} className={classNames(classes.containerlg)}>
							<Grid container spacing={2} className={classNames(classes.contentHotels)}>
								<Grid xs={12} className={classNames(classes.padding20)}>
									<TitleSecondary size={18} center content="¡Entra las mejores vacaciones!" />
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<SimpleCard
										title="Tu Sky Week!"
										subtitle="Últimos lugares"
										price={1200}
										previousPrice={1600}
										imageUrl="https://st2.depositphotos.com/1401963/11440/i/950/depositphotos_114401732-stock-photo-glaciar-martial-near-ushuaia.jpg"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<SimpleCard
										title="Actividades en Familia!"
										subtitle="Hasta 30%Off con visa"
										price={1200}
										imageUrl="https://i2.wp.com/elmundodepeapa.com/wp-content/uploads/2017/07/Erlantz-05ene.2017-55.jpg?fit=1200%2C750&ssl=1"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<SimpleCard
										title="Vuelos en Ofertas"
										subtitle="¡Quedan pocos lugares!"
										imageUrl="https://www.voyagevirtuel.net/argentine/glacier-martial/bigphotos/ushuaia-glaciar-martial-montee-initiale-24.jpg"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<SimpleCard
										title="Hoteles en Miamioooooooo"
										subtitle="Últimos lugares"
										price={1200}
										previousPrice={1600}
										imageUrl="https://media.elpatagonico.com/adjuntos/193/imagenes/009/828/0009828863.jpg"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<SimpleCard
										title="Hoteles en Miamioooooooo"
										subtitle="Últimos lugares"
										price={1200}
										previousPrice={1600}
										imageUrl="https://thumbnails.trvl-media.com/gWvi8pD7sbCFoDVx1IwT1VDa3cs=/768x432/images.trvl-media.com/media/content/shared/images/travelguides/destination/3654/Glaciar-Martial-121975.jpg"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<SimpleCard
										title="Hoteles en Miamioooooooo"
										subtitle="Últimos lugares"
										price={1200}
										previousPrice={1600}
										imageUrl="http://photos.hotelbeds.com/giata/bigger/00/003486…"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<SimpleCard
										title="Hoteles en Miamioooooooo"
										subtitle="Últimos lugares"
										price={1200}
										previousPrice={1600}
										imageUrl="http://photos.hotelbeds.com/giata/bigger/00/003486…"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<SimpleCard
										title="Hoteles en Miamioooooooo"
										subtitle="Últimos lugares"
										price={1200}
										previousPrice={1600}
										imageUrl="http://photos.hotelbeds.com/giata/bigger/00/003486…"
									/>
								</Grid>
								<Grid item xs={12} className={classNames(classes.paddingBox)}>
									<Button text="MOSTRAR MAS RESULTADOS" fullWidth primary={false} iconRight={<FaAngleDown />} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</section>
				<Footer />
				<div className={classNames(classes.buttonFiter)}>
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
					fullScreen={fullScreen}
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<AppBar color="white" position="relative">
						<Toolbar>
							<TitleSecondary content="Filtrar y Ordenar" left />
							<IconButton
								style={{ right: 10, position: 'absolute' }}
								color="inherit"
								onClick={this.handleClose}
								aria-label="Close"
							>
								<CloseIcon style={{ fontSize: 40 }} />
							</IconButton>
						</Toolbar>
					</AppBar>
					<DialogContent style={{ background: '#f2f2f2', padding: 0 }}>
						<div>
							<TabsOrdenar />
							<div className={classNames(classes.contentFiltersMobile)}>
								<div className={classNames(classes.buttonMobile)}>
									<Button size="small" text="$1000" iconRight={<MdClose />} style={{ borderRadius: 50 }} primary />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button size="small" text="Desayuno" iconRight={<MdClose />} style={{ borderRadius: 50 }} primary />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button
										size="small"
										text="Buenos Aires"
										iconRight={<MdClose />}
										style={{ borderRadius: 50 }}
										primary
									/>
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button size="small" text="$1000" iconRight={<MdClose />} style={{ borderRadius: 50 }} primary />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button size="small" text="$1000" iconRight={<MdClose />} style={{ borderRadius: 50 }} primary />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button size="small" text="$1000" iconRight={<MdClose />} style={{ borderRadius: 50 }} primary />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button size="small" text="$1000" iconRight={<MdClose />} style={{ borderRadius: 50 }} primary />
								</div>
							</div>
							<Expander title="Precio" content="soy un desplegable" />
							<Expander title="Estrellas" content="soy un desplegable" />
							<Expander title="Categoria" content="soy un desplegable" />
							<Expander title="Régimen" content="soy un desplegable" />
							<Expander title="Área" content="soy un desplegable" />
							<Expander title="Área" content="soy un desplegable" />
							<Expander title="Forma de pago" content="soy un desplegable" />
							<Expander title="Nombre" content="soy un desplegable" />
						</div>
					</DialogContent>
					<DialogActions style={{ background: '#f2f2f2', margin: 0, padding: 10 }}>
						<Button text="Filtrar Busqueda" fullWidth onClick={this.handleClose} />
					</DialogActions>
				</Dialog>
			</Grid>
		)
	}
}
ShoppingPaquetes.defaultProps = {
	fixed: false
}

ShoppingPaquetes.propTypes = {

	fullScreen: PropTypes.bool.isRequired,
	fixed: PropTypes.string
}

export default withMobileDialog()(
	withStyles(({ mauri: { color, variables, container, containerlg, paddingBox, padding20 } }) => ({
		color,
		variables,
		resumenBusqueda: {
			display: 'none',
			width: '100%',

			'@media (max-width: 800px)': {
				position: 'absolute',
				zIndex: 2,
				top: 70,
				display: 'block'
			}
		},

		marginTop: {
			marginTop: 80,

			'@media (max-width: 800px)': {
				marginTop: 60
			}
		},
		filterPc: {
			marginTop: 15
		},
		iconFilter: {
			minWidth: 100
		},
		flexBox: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		contentFilters: {
			overflowX: 'scroll',
			whiteSpace: 'nowrap',
			width: '100%'
		},
		contentHotels: {
			marginTop: 0,
			zIndex: 0,
			'@media (max-width: 800px)': {
				marginTop: 100
			}
		},
		padding20,
		paddingBox,
		containerlg,
		container,
		button: {
			border: '1px solid silver',
			width: 'auto',
			marginRight: 10,
			display: 'inline-block',
			borderRadius: 6
		},
		buttonMobile: {
			border: '1px solid silver',
			width: 'auto',
			marginRight: 10,
			display: 'inline-block',
			borderRadius: 30
		},
		contentFiltersMobile: {
			overflowX: 'scroll',
			whiteSpace: 'nowrap',
			width: '100%',
			padding: 10
		},
		buttonFiter: {
			display: 'none',

			'@media (max-width: 600px)': {
				display: 'block',
				position: 'fixed',
				bottom: 10,
				right: 10
			}
		},
		tabsordenar: {
			width: '100%',
			'@media (max-width: 600px)': {
				display: 'none'
			}
		}
	}))(ShoppingPaquetes)
)
