import React from 'react'
import PropTypes from 'prop-types'
import { StickyContainer, Sticky } from 'react-sticky'
import FormControl from '@material-ui/core/FormControl'
import { Element, animateScroll as scroll, scroller } from 'react-scroll'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import ResDialog from '../../Organisms/Dialogs/ResDialog'
import Header from '../../Organisms/Header/Header'
import Footer from '../../Organisms/Footer/Footer'
import ImageBook from '../../Organisms/ImageBook/ImageBook'

import SimpleContentCard from '../../Organisms/Card/SimpleContentCard'
import DesplegableContentCard from '../../Organisms/Card/DesplegableContentCard'
import TabSlider from '../../Molecules/Tabs/TabSlider'
import HeaderRooms2 from '../../Organisms/Rooms/HeaderRooms/HeaderRooms2'
import ContentCard from '../../Organisms/Card/ContentCard'
import HotelSearchSummary from '../../Organisms/ResumenBusqueda/HotelSearchSummary'
import DetailRoom from '../../Organisms/Rooms/DetailRoom'
import CardRoom from '../../Organisms/Rooms/CardRoom'
import LandingTitle from '../../Organisms/LandingComponents/LandingTitle'
import Indicador from '../../Molecules/Indicadores/IndicadorMapa'
import AbstracMap from '../../Atoms/Map/Map'
import IconsFontComponent from '../../Atoms/IconsFont'

/**
 * Simula el servicio de datos para la carga de landing:
 * images, facilities, description, y por último el objeto que espera: Rooms.
 */
const imagesRoom1 = [
	'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
	'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
	'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
	'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
	'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
	'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
	'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg'
]

const imagesRoom2 = [
	'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_004.jpg',
	'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_002.jpg',
	'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_003.jpg'
]

const facilitiesRoom1 = [
	{ icon: <IconsFontComponent title="Wifi Gratis" icon="flaticon-computer-2" borderBottom /> },
	{
		icon: (
			<IconsFontComponent
				title="Aire Acondicionado en las Habitaciones"
				icon="flaticon-conditioning-air"
				borderBottom
			/>
		)
	}
]

const facilitiesRoom2 = [
	{ icon: <IconsFontComponent title="Wifi Gratis" icon="flaticon-computer-2" borderBottom />, name: 'Wifi Gratis' },
	{
		icon: (
			<IconsFontComponent
				title="Aire Acondicionado en las Habitaciones"
				icon="flaticon-conditioning-air"
				borderBottom
			/>
		),
		name: 'Aire Acondicionado'
	},
	{
		icon: <IconsFontComponent title="el tele" icon="flaticon-conditioning-air" borderBottom />,
		name: 'Television por cable'
	}
]

const descriptionRoom1 = [
	{ amount: 2000, description: 'Solo habitación', cancellationPolicy: 'Hasta 1 día la cancelación es gratis' },
	{ amount: 3000, description: 'Con Desayuno', cancellationPolicy: 'Hasta 2 días la cancelación es gratis' },
	{ amount: 4000, description: 'Con Media Pensión', cancellationPolicy: 'Hasta 3 días la cancelación es gratis' }
]

const descriptionRoom2 = [
	{ amount: 4500, description: 'Media Pensión', cancellationPolicy: 'Hasta 1 día la cancelación es gratis' },
	{ amount: 5200, description: 'Todo incluido', cancellationPolicy: 'Hasta 2 días la cancelación es gratis' }
]

const descriptionRoom3 = [
	{ amount: 6000, description: 'Todo incluido', cancellationPolicy: 'Hasta 1 día la cancelación es gratis' },
	{ amount: 6250, description: 'Todo incluido', cancellationPolicy: 'Hasta 2 día la cancelación es gratis' }
]

const generalDescription =
	'El Obelisco, el Teatro Colón y la Avenida 9 de Julio pueden apreciarse desde el mirador del Panamericano Buenos Aires, hotel situado a 200 m de la Avenida Corrientes y a 600 m de la \n calle peatonal Florida, ofrece piscina cubierta climatizada y gimnasio en su piso 23. El \n Aeropuerto Internacional de Ezeiza queda a 32 km.'

const rooms = [
	{
		lastPlaces: 4,
		roomName: 'Suite Vista al Mar',
		images: imagesRoom1,
		facilities: facilitiesRoom1,
		bedType: 'King Size',
		descriptionRoom: descriptionRoom1,
		finances: ['6, 12 cuotas sin interes']
	},
	{
		lastPlaces: 2,
		roomName: 'Suite Vista al Mar',
		images: imagesRoom2,
		facilities: facilitiesRoom2,
		bedType: 'Queen Size',
		descriptionRoom: descriptionRoom2,
		finances: ['6, 12 cuotas sin interes']
	},
	{
		lastPlaces: 1,
		roomName: 'Suite Vista al Mar',
		images: imagesRoom2,
		facilities: facilitiesRoom2,
		bedType: 'Super King Size',
		descriptionRoom: descriptionRoom3,
		finances: ['6 cuotas sin interes']
	}
]

const FacilityComponent = () => (
	<div>
		<Grid item xs={12} sm={6}>
			<IconsFontComponent title="Wifi Gratis" icon="flaticon-computer-2" borderBottom />
			<IconsFontComponent
				title="Aire Acondicionado en las Habitaciones"
				icon="flaticon-conditioning-air"
				borderBottom
			/>
			<IconsFontComponent title="Gimnasio" icon="flaticon-dumbbell" borderBottom />
			<IconsFontComponent title="Pisina" icon="flaticon-pool" borderBottom />
		</Grid>
		<Grid item xs={12} sm={6}>
			<IconsFontComponent title="Wifi Gratis" icon="flaticon-computer-2" borderBottom />
			<IconsFontComponent
				title="Aire Acondicionado en las Habitaciones"
				icon="flaticon-conditioning-air"
				borderBottom
			/>
			<IconsFontComponent title="Gimnasio" icon="flaticon-dumbbell" borderBottom />
			<IconsFontComponent title="Pisina" icon="flaticon-pool" borderBottom />
		</Grid>
	</div>
)

class Landing extends React.PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			selectedValue: '00'
		}

		this.scrollToTop = this.scrollToTop.bind(this)
	}

	scrollToTop = () => {
		scroll.scrollToTop()
	}

	scrollTo = element => {
		scroller.scrollTo(element, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		})
	}

	handleChange = event => {
		this.setState({ selectedValue: event.target.value })
	}

	tabChange = (event, value) => {
		this.scrollTo(String(value))
		this.setState({ tabValue: value })
	}

	handleClickOpen = () => {
		this.setState({ openP: true })
	}

	handleClose = () => {
		this.setState({ openP: false })
	}

	handleClick = images => {
		console.log('room --> ', images)

		this.setState({
			openP: true,
			imageRoom: images
		})
	}

	render() {
		const { classes, fullScreen, images } = this.props
		const tabsArray = [
			{ content: 'pepe' },
			{ content: 'mujica' },
			{ content: 'presidente' },
			{ content: 'de' },
			{ content: 'uruguay' }
		]
		return (
			<div>
				<Header />
				<div className={classNames(classes.resumenBusqueda)}>
					<HotelSearchSummary />
				</div>
				<section className={classNames(classes.infoHotel)}>{/* aca va NavHeader */}</section>
				<ImageBook
					hotelName="Hotel Internacional Buenos Aires"
					buttonImgName="Ver Fotos"
					imageSize={600}
					alt="Hotel Bou"
					height={400}
					max={5}
					images={[
						'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg',
						'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg',
						'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg'
					]}
				/>
				<section style={{ background: '#f9f8f7' }}>
					<div>
						<LandingTitle name="Habitación DeLuxe" price="1500" loading={false} scrollSection="rooms" isAvailable />
					</div>
				</section>
				<StickyContainer>
					<section className={classNames(classes.infoHotels)}>
						<Sticky>
							{({ style }) => (
								<div style={{ ...style, zIndex: 5 }}>
									<div>
										<TabSlider tabValue={this.newFunction()} tabChange={this.tabChange} />
									</div>
								</div>
							)}
						</Sticky>
						<div className={classNames(classes.container)}>
							<div className={classNames(classes.info)}>
								<Element name="0" className="element">
									<div className={classNames(classes.marginT20)}>
										<DesplegableContentCard
											title="Descripción del Hotel"
											content={
												<Text>
													{generalDescription}
													<br />
													{generalDescription}
													<br />
													<br />
													{generalDescription}
												</Text>
											}
										/>
									</div>
								</Element>
								<div className={classNames(classes.marginT20)}>
									<Element name="1" className="element">
										<SimpleContentCard title="Mapa de Ejemplo" padding={0}>
											<AbstracMap
												center={{ lat: -34.6019076, lng: -58.3809921 }}
												defaultZoom={15}
												height={300}
												text="Buenos Aires"
												width="100%"
											>
												<Indicador point={6} isSelected principalText="hotel tres vagos" />
											</AbstracMap>
										</SimpleContentCard>
									</Element>
								</div>
								<div className={classNames(classes.marginT20)}>
									<Element name="2" className="element">
										<DesplegableContentCard
											title="Servicios"
											content={
												<div className={classNames(classes.padding10)}>
													<FacilityComponent />
												</div>
											}
										/>
									</Element>
								</div>
							</div>
						</div>
					</section>
				</StickyContainer>
				<Element name="rooms" className="element">
					<StickyContainer>
						<section style={{ paddingTop: 40 }}>
							<Sticky>
								{({ style }) => (
									<div
										style={{
											...style,
											zIndex: 10,
											padding: 0,
											marginBottom: 20,
											display: 'flex',
											boxShadow: `2px 1px 4px rgba(0,0,0,0.3)`,
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<HeaderRooms2 tabs={tabsArray} />
									</div>
								)}
							</Sticky>
							<Grid container spacing={0} className={classNames(classes.GlobalContainer, classes.containerlg)}>
								<Grid item xs={9} className={classNames(classes.contentRooms)}>
									{/* card room */}
									<FormControl>
										{rooms.map((room, key) => (
											<CardRoom
												lastPlaces={room.lastPlaces}
												images={room.images}
												roomName={room.roomName}
												facilities={room.facilities}
												bedType={room.bedType}
												descriptionRoom={room.descriptionRoom}
												finances={room.finances}
												roomKey={key}
												selectedValue={this.state.selectedValue}
												change={this.handleChange}
												handleClick={() => this.handleClick(room.images)}
											/>
										))}
									</FormControl>
								</Grid>

								<Grid item xs={3} className={classNames(classes.sidebarRooms)}>
									<Sticky>
										{({ style }) => (
											<div
												style={{
													...style,
													zIndex: 5,
													height: '100%',
													padding: '0px 0px 5px 15px',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center'
												}}
											>
												<DetailRoom />
											</div>
										)}
									</Sticky>
								</Grid>
							</Grid>
						</section>
					</StickyContainer>
				</Element>

				<ResDialog fullScreen={fullScreen} open={this.state.openP} onClose={this.handleClose} title="Habitación DeLuxe">
					<DialogContent className={classNames(classes.popup)}>
						<ContentCard images={this.state.images} description={generalDescription}>
							<FacilityComponent />
						</ContentCard>
					</DialogContent>
				</ResDialog>
				<Footer />
			</div>
		)
	}

	newFunction() {
		return this.state.tabValue
	}
}
Landing.defaultProps = {
	fixed: false
}

Landing.propTypes = {
	fullScreen: PropTypes.bool.isRequired,

	fixed: PropTypes.string
}

export default withMobileDialog()(
	withStyles(({ mauri: { marginT40, marginT20, simpleFlex, paddingBox, paddingObject, padding10, containerlg } }) => ({
		noWrapper: {
			overflowX: 'scroll',
			background: '#f2f2f2',
			padding: 10,
			whiteSpace: 'nowrap',
			width: '100%',
			'@media (max-width: 800px)': {
				position: 'fixed',
				zIndex: 5,
				padding: 5,
				background: 'transparent',
				backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(0,0,0,.4))',
				bottom: 0,
				left: 0
			}
		},
		viewRooms: {
			width: '100%',
			display: 'flex'
		},
		padding10,
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
		infoHotel: {
			background: '#f2f2f2',
			'@media (max-width: 600px)': {
				display: 'none'
			}
		},
		marginTop10: {
			marginTop: 10
		},
		popup: {
			padding: 0
		},
		infoHotels: {
			width: '100%',
			display: 'inline-block',
			background: '#f2f2f2'
		},
		container: {
			width: '100%',
			maxWidth: 800,
			margin: 'auto',
			padding: '0 10px',
			height: 'auto'
		},
		footerFixed: {
			background: 'white',
			boxShadow: '0 -4px 12px rgba(0,0,0,0.2)',
			padding: '0 20px',
			position: 'fixed',
			width: '100%',
			bottom: 0,
			left: 0
		},
		displayFlex: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			alignSelf: 'center',
			justifyContent: 'space-between'
		},
		marginLeft20: { marginLeft: 20 },
		itemRomm: {
			width: 290,
			margin: 5
		},

		global: {
			background: '#f2f2f2',
			position: 'relative',
			boxSizing: 'border-box'
		},
		borderRight: {
			borderRight: '1px solid #F2F2F2'
		},
		GlobalContainer: {
			padding: 15
		},
		flexRow: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-around',
			alignItems: 'center'
		},
		flexCenter: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		},
		bloqueGrande: {
			width: '100%',
			height: 600,
			background: 'gray'
		},
		total: {
			width: '100%',
			background: 'white',
			padding: 10,
			borderRadius: 6,
			boxShadow: `0px 1px 4px rgba(0,0,0,0.3)`
		},

		paddingObject,
		containerlg,
		paddingBox,
		marginT40,
		marginT20,
		simpleFlex
	}))(Landing)
)
