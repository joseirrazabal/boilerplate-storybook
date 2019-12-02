import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { FaFilter, FaAngleDown } from 'react-icons/fa'
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
import FiltersHotels from '../../Organisms/Filters/FiltersHotels'
import Expander from '../../Atoms/Expander'
import PaquetesCard from '../../Organisms/Card/PaquetesCard'
import LoadingCardPaquetes from '../../Organisms/Card/LoadingCardPaquetes'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import TabsOrdenar from '../../Molecules/TabsOrdenar/TabsOrdenar'
import SearchPaquetes from '../../Organisms/Search/SearchPaquetes'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'
import ResumenBusquedaPaquetes from '../../Organisms/ResumenBusqueda/ResumenBusquedaPaquetes'

class ShoppingPaquetes extends React.Component {
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
			<Grid style={{ background: '#ebebeb' }}>
				<BrowserRouter>
					<Header fixed={false} />
				</BrowserRouter>
				<div className={classNames(classes.searchFilter)}>
					<Grid container className={classNames(classes.container)} spacing={10}>
						<Grid xs={12}>
							<SearchPaquetes />
						</Grid>
						<Grid xs={12} className={classNames(classes.flexBox, classes.filterPc)}>
							<div className={classNames(classes.iconFilter, classes.flexBox)}>
								<div>
									<IconsFont size={20} icon="flaticon-levels" />
								</div>
								<div>
									<Text style={{ width: '100%', marginLeft: 10 }} size={13} content="Filtros" color="black" />
								</div>
							</div>
							<div style={{ width: '100%' }}>
								<FiltersHotels />
							</div>
						</Grid>
					</Grid>
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
									<TitleSecondary center content="Paquetes a Buzios" />
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<LoadingCardPaquetes />
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<LoadingCardPaquetes />
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<LoadingCardPaquetes />
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<LoadingCardPaquetes />
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<PaquetesCard
										title="Búzios con Cenas de Regalo!"
										fecha="11 de Marzo"
										noches="7 noches desde Buenos Aires"
										precio="26850"
										offer
										imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<PaquetesCard
										title="Búzios con Cenas de Regalo!"
										fecha="11 de Marzo"
										noches="7 noches desde Buenos Aires"
										precio="26850"
										lastMinute
										imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<PaquetesCard
										title="Búzios con Cenas de Regalo!"
										fecha="11 de Marzo"
										noches="7 noches desde Buenos Aires"
										precio="26850"
										tagDay
										imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<PaquetesCard
										title="Búzios con Cenas de Regalo!"
										fecha="11 de Marzo"
										noches="7 noches desde Buenos Aires"
										precio="26850"
										tagDay
										imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<PaquetesCard
										title="Búzios con Cenas de Regalo!"
										fecha="11 de Marzo"
										noches="7 noches desde Buenos Aires"
										precio="26850"
										lastMinute
										imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<PaquetesCard
										title="Búzios con Cenas de Regalo!"
										fecha="11 de Marzo"
										noches="7 noches desde Buenos Aires"
										precio="26850"
										offer
										imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<PaquetesCard
										title="Búzios con Cenas de Regalo!"
										fecha="11 de Marzo"
										noches="7 noches desde Buenos Aires"
										precio="26850"
										tagDay
										imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={4} xl={3}>
									<PaquetesCard
										title="Búzios con Cenas de Regalo!"
										fecha="11 de Marzo"
										noches="7 noches desde Buenos Aires"
										precio="26850"
										offer
										imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
		searchFilter: {
			padding: '40px 10px',
			width: '100%',
			background: '#F9F8F7',
			marginTop: 2,

			'@media (max-width: 800px)': {
				display: 'none'
			}
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
