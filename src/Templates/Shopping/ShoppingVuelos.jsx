import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { FaFilter, FaAngleDown } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import CloseIcon from '@material-ui/icons/Close'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import moment from 'moment'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import { Route, BrowserRouter } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import Header from '../../Organisms/Header/Header'
import MapComponent from '../../Atoms/MapComponent'
import FiltersHotels from '../../Organisms/Filters/FiltersHotels'
import Expander from '../../Atoms/Expander'
/* import SlideCard from '../../Organisms/Card/SlideCard' */
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import TabsOrdenar from '../../Molecules/TabsOrdenar/TabsOrdenar'
import SearchShoppingVuelos from '../../Organisms/Search/SearchShoppingVuelos'
import FlightItinerary from '../../Organisms/FlightItinerary/FlightItinerary'
import Flight from '../../Organisms/FlightItinerary/Flight'
import LoadingFlight from '../../Organisms/FlightItinerary/LoadingFlight'
import Escalas from '../../Organisms/Escalas/Escalas'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'
import ResumenBusquedaVuelos from '../../Organisms/ResumenBusqueda/ResumenBusquedaVuelos'

const flight = {
	airline: { code: 'IB', name: 'Iberia' },
	cabin: { code: 'Y', name: 'Economy' },
	scales: 2,
	totalFare: 3002.32,
	going: {
		elapsedTime: 1280,
		scalesTime: 410,
		baggage: 1,
		segments: [
			{
				aircraft: { code: '332', name: 'Airbus 332' },
				airline: { code: 'IB', name: 'Iberia' },
				cabin: { code: 'Y', name: 'Economy' },
				meal: 'G',
				seatsRemaining: '9',
				marriageGrp: 'O',
				resBookDesigCode: 'O',
				elapsedTime: 760,
				scaleTime: 410,
				flightNumber: 'IB2602',
				airportChange: false,
				departure: {
					airport: { code: 'EZE', name: 'Ministro Pistarini' },
					date: '2018-07-07T12:05:00+0200'
				},
				arrival: {
					airport: { code: 'BCN', name: 'El Prat Barcelona' },
					date: '2018-07-08T05:45:00+0200'
				}
			},
			{
				aircraft: '320',
				airline: { code: 'VY', name: 'VY airline' },
				marketingAirline: { code: 'VY', name: 'VY airline' },
				cabin: { code: 'Y', name: 'Economy' },
				meal: 'G',
				seatsRemaining: '9',
				marriageGrp: 'I',
				resBookDesigCode: 'O',
				elapsedTime: 110,
				scaleTime: null,
				flightNumber: 'VY8030',
				airportChange: false,
				departure: {
					airport: { code: 'BCN', name: 'El Prat Barcelona' },
					date: '2018-07-08T12:35:00+0200'
				},
				arrival: {
					airport: { code: 'ORY', name: 'ORY Airport' },
					date: '2018-07-08T14:25:00+0200'
				}
			}
		]
	},
	return: {
		elapsedTime: 1415,
		scalesTime: 815,
		baggage: 2,
		segments: [
			{
				aircraft: { code: '320', name: 'Airbus 320' },
				airline: { code: 'VY', name: 'VY Airline' },
				cabin: { code: 'Y', name: 'Economy' },
				meal: 'G',
				seatsRemaining: '9',
				marriageGrp: 'O',
				resBookDesigCode: 'O',
				elapsedTime: 100,
				scaleTime: 515,
				flightNumber: 'VY8031',
				airportChange: false,
				departure: {
					airport: { code: 'ORY', name: 'ORY Airport' },
					date: '2018-07-09T15:15:00+0200'
				},
				arrival: {
					airport: { code: 'BCN', name: 'El Prat Barcelona' },
					date: '2018-07-09T16:55:00+0200'
				}
			},
			{
				aircraft: { code: '332', name: 'Airbus 332' },
				airline: { code: 'IB', name: 'Iberia' },
				cabin: { code: 'Y', name: 'Economy' },
				meal: 'G',
				seatsRemaining: '9',
				marriageGrp: 'I',
				resBookDesigCode: 'O',
				elapsedTime: 800,
				scaleTime: null,
				flightNumber: 'IB2601',
				airportChange: false,
				departure: {
					airport: { code: 'BCN', name: 'El Prat Barcelona' },
					date: '2018-07-10T01:30:00-0300'
				},
				arrival: {
					airport: { code: 'EZE', name: 'Ministro Pistarini' },
					date: '2018-07-10T09:50:00-0300'
				}
			}
		]
	}
}
const initialValues = {
	origin: { value: 'EZE', label: 'Ministro Pisculichi' },
	destination: { value: 'PAR', label: 'Paris' },
	departuredate: moment('2018-09-07'),
	returndate: moment('2018-09-09'),
	passangers: 5
}

class ShoppingVuelos extends React.Component {
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
		const { classes, fullScreen, useDefaultCursor } = this.props

		return (
			<Grid>
				<BrowserRouter>
					<Header fixed={true} />
				</BrowserRouter>
				<div className={classNames(classes.resumenBusqueda)}>
					<ResumenBusquedaVuelos />
				</div>
				<section className={classNames(classes.marginTop)}>
					<Grid container spacing={0}>
						<Grid item xs={12} sm={4} lg={5} xl={7} className={classNames(classes.map)}>
							<div className={classNames(classes.escalas)}>
								<SearchShoppingVuelos initialValues={initialValues} onSubmit={values => console.log(values)} />
							</div>
							<MapComponent />
						</Grid>
						<Grid container className={classNames(classes.contentResult)} spacing={0} xs={12} sm={12} lg={7} xl={5}>
							<div className={classNames(classes.searchFilter)}>
								<Grid container spacing={1}>
									<Escalas />
									<div className={classNames(classes.tabsordenar, { marginTop: 5 })}>
										<TabsOrdenar />
									</div>
									<Grid xs={12} className={classNames(classes.flexBox, classes.filterPc, { marginTop: 10 })}>
										<div className={classNames(classes.iconFilter, classes.flexBox)}>
											<div>
												<IconsFont size={20} icon={'flaticon-levels'} />
											</div>
											<div>
												<Text style={{ width: '100%', marginLeft: 10 }} size={13} content={'Filtros'} color={'black'} />
											</div>
										</div>
										<FiltersHotels />
									</Grid>
								</Grid>
							</div>
							<Grid xs={12}>
								<LinearProgress style={{ height: 3 }} />
							</Grid>
							<Grid container spacing={2} className={classNames(classes.contentHotels)}>
								<Grid item xs={12}>
									<LoadingFlight />
								</Grid>
								<Grid item xs={12}>
									<LoadingFlight />
								</Grid>
								<Grid item xs={12}>
									<FlightItinerary totalFare={flight.totalFare}>
										<Flight trip={flight.going} airline={flight.airline} />
										<Flight routeDir trip={flight.return} airline={flight.airline} />
									</FlightItinerary>
								</Grid>
								<Grid item xs={12}>
									<FlightItinerary totalFare={flight.totalFare}>
										<Flight trip={flight.going} airline={flight.airline} />
										<Flight routeDir trip={flight.return} airline={flight.airline} />
									</FlightItinerary>
								</Grid>
								<Grid item xs={12}>
									<FlightItinerary totalFare={flight.totalFare}>
										<Flight trip={flight.going} airline={flight.airline} />
										<Flight routeDir trip={flight.return} airline={flight.airline} />
									</FlightItinerary>
								</Grid>
								<Grid item xs={12}>
									<FlightItinerary totalFare={flight.totalFare}>
										<Flight trip={flight.going} airline={flight.airline} />
										<Flight routeDir trip={flight.return} airline={flight.airline} />
									</FlightItinerary>
								</Grid>
								<Grid item xs={12}>
									<FlightItinerary totalFare={flight.totalFare}>
										<Flight trip={flight.going} airline={flight.airline} />
										<Flight routeDir trip={flight.return} airline={flight.airline} />
									</FlightItinerary>
								</Grid>
								<Grid item xs={12}>
									<FlightItinerary totalFare={flight.totalFare}>
										<Flight trip={flight.going} airline={flight.airline} />
										<Flight routeDir trip={flight.return} airline={flight.airline} />
									</FlightItinerary>
								</Grid>
								<Grid item xs={12}>
									<FlightItinerary totalFare={flight.totalFare}>
										<Flight trip={flight.going} airline={flight.airline} />
										<Flight routeDir trip={flight.return} airline={flight.airline} />
									</FlightItinerary>
								</Grid>
								<Grid item xs={12}>
									<FlightItinerary totalFare={flight.totalFare}>
										<Flight trip={flight.going} airline={flight.airline} />
										<Flight routeDir trip={flight.return} airline={flight.airline} />
									</FlightItinerary>
								</Grid>
								<Grid item xs={12} className={classNames(classes.paddingBox)}>
									<Button text="MOSTRAR MAS RESULTADOS" fullWidth primary={false} iconRight={<FaAngleDown />} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</section>
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
					<AppBar color={'white'} position={'relative'}>
						<Toolbar>
							<TitleSecondary content={'Filtrar y Ordenar'} left />
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
									<Button
										size={'small'}
										text="$1000"
										iconRight={<MdClose />}
										style={{ borderRadius: 50 }}
										primary={true}
									/>
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button
										size={'small'}
										text="Desayuno"
										iconRight={<MdClose />}
										style={{ borderRadius: 50 }}
										primary={true}
									/>
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button
										size={'small'}
										text="Buenos Aires"
										iconRight={<MdClose />}
										style={{ borderRadius: 50 }}
										primary={true}
									/>
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button
										size={'small'}
										text="$1000"
										iconRight={<MdClose />}
										style={{ borderRadius: 50 }}
										primary={true}
									/>
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button
										size={'small'}
										text="$1000"
										iconRight={<MdClose />}
										style={{ borderRadius: 50 }}
										primary={true}
									/>
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button
										size={'small'}
										text="$1000"
										iconRight={<MdClose />}
										style={{ borderRadius: 50 }}
										primary={true}
									/>
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Button
										size={'small'}
										text="$1000"
										iconRight={<MdClose />}
										style={{ borderRadius: 50 }}
										primary={true}
									/>
								</div>
							</div>
							<Expander title={'Precio'} content={'soy un desplegable'} />
							<Expander title={'Estrellas'} content={'soy un desplegable'} />
							<Expander title={'Categoria'} content={'soy un desplegable'} />
							<Expander title={'Régimen'} content={'soy un desplegable'} />
							<Expander title={'Área'} content={'soy un desplegable'} />
							<Expander title={'Área'} content={'soy un desplegable'} />
							<Expander title={'Forma de pago'} content={'soy un desplegable'} />
							<Expander title={'Nombre'} content={'soy un desplegable'} />
						</div>
					</DialogContent>
					<DialogActions style={{ background: '#f2f2f2', margin: 0, padding: 10 }}>
						<Button text={'Filtrar Busqueda'} fullWidth onClick={this.handleClose} />
					</DialogActions>
				</Dialog>
			</Grid>
		)
	}
}
ShoppingVuelos.defaultProps = {
	fixed: false
}

ShoppingVuelos.propTypes = {

	fullScreen: PropTypes.bool.isRequired,
	fixed: PropTypes.string
}

export default withMobileDialog()(
	withStyles(({ mauri: { color, variables, paddingBox } }) => ({
		map: {
			position: 'fixed',
			top: 60,
			right: 0,
			zIndex: 0,
			width: '100%',
			//paddingLeft: 10,
			maxHeight: 'calc(100% - 40px)',

			'@media (max-width: 1024px)': {
				display: 'none'
			}
		},
		contentResult: {
			boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
			background: '#f2f2f2',
			zIndex: 1,
			position: 'fixed',
			height: '100vh',
			overflowX: 'scroll',

			'@media (max-width: 1024px)': {
				position: 'relative',
				zIndex: 0
			}
		},
		escalas: {
			position: 'absolute',
			backgroundImage: 'linear-gradient(to bottom,rgba(204,204,204,1),rgba(204,204,204,0))',
			zIndex: 2,
			height: 'auto',
			width: '100%',
			padding: 10
		},
		resumenBusqueda: {
			display: 'none',
			width: '100%',

			'@media (max-width: 600px)': {
				position: 'absolute',
				zIndex: 2,
				top: 60,
				display: 'block'
			}
		},
		marginTop: {
			marginTop: 60,

			'@media (max-width: 600px)': {
				marginTop: 60
			}
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
			padding: 15,
			zIndex: 0,
			paddingBottom: 100,

			'@media (max-width: 600px)': {
				marginTop: 80
			}
		},
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
			padding: 10,
			borderBottom: '1px solid silver',
			width: '100%',
			background: '#FFFFFF',

			'@media (max-width: 600px)': {
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
		paddingBox,
		tabsordenar: {
			width: '100%',
			'@media (max-width: 600px)': {
				display: 'none'
			}
		}
	}))(ShoppingVuelos)
)
