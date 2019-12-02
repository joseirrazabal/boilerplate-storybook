import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { StickyContainer, Sticky } from 'react-sticky'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import Header from '../../Organisms/Header/Header'
import ImageBook from '../../Organisms/ImageBook/ImageBook'
import NavLanding from '../../Molecules/Navigation/NavLanding'
import NavFixed from '../../Molecules/Navigation/NavFixed'
import SimpleContentCard from '../../Organisms/Card/SimpleContentCard'
import DesplegableContentCard from '../../Organisms/Card/DesplegableContentCard'
import SearchPaquetes from '../../Organisms/Search/SearchPaquetes'
import TabSlider from '../../Molecules/Tabs/TabSlider'
import IconsFontComponent from '../../Atoms/IconsFont'
import ContentCard from '../../Organisms/Card/ContentCard'
import ResumenBusquedaPaquetes from '../../Organisms/ResumenBusqueda/ResumenBusquedaPaquetes'
import DateContainer from '../../Organisms/DateContainer/DateContainer'

const FacilityComponent = () => (
	<div style={{ width: '100%' }}>
		<IconsFontComponent title="Wifi Gratis" icon="flaticon-computer-2" borderBottom />
		<IconsFontComponent title="Aire Acondicionado en las Habitaciones" icon="flaticon-conditioning-air" borderBottom />
		<IconsFontComponent title="Gimnasio" icon="flaticon-dumbbell" borderBottom />
		<IconsFontComponent title="Pisina" icon="flaticon-pool" borderBottom />
		<IconsFontComponent title="Wifi Gratis" icon="flaticon-computer-2" borderBottom />
		<IconsFontComponent title="Aire Acondicionado en las Habitaciones" icon="flaticon-conditioning-air" borderBottom />
		<IconsFontComponent title="Gimnasio" icon="flaticon-dumbbell" borderBottom />
		<IconsFontComponent title="Pisina" icon="flaticon-pool" borderBottom />
		<IconsFontComponent title="Wifi Gratis" icon="flaticon-computer-2" borderBottom />
		<IconsFontComponent title="Aire Acondicionado en las Habitaciones" icon="flaticon-conditioning-air" borderBottom />
		<IconsFontComponent title="Gimnasio" icon="flaticon-dumbbell" borderBottom />
		<IconsFontComponent title="Pisina" icon="flaticon-pool" borderBottom />
		<IconsFontComponent title="Wifi Gratis" icon="flaticon-computer-2" borderBottom />
		<IconsFontComponent title="Aire Acondicionado en las Habitaciones" icon="flaticon-conditioning-air" borderBottom />
		<IconsFontComponent title="Gimnasio" icon="flaticon-dumbbell" borderBottom />
		<IconsFontComponent title="Pisina" icon="flaticon-pool" borderBottom />
	</div>
)

const city = {
	destination_id: 30775,
	destination_name: 'Bruselas',
	destination_code: 'BRU',
	ola_code: 'BRU',
	country_name: 'Bélgica',
	country_code: 'BE',
	description:
		'\n\t\t\t <p>\n\t&nbsp;</p>\n<p>\n\tBruselas es la capital pol&iacute;tica de la Uni&oacute;n Europea, y por supuesto, actualmente tambi&eacute;n es la capital del Reino de B&eacute;lgica. Es una ciudad que re&uacute;ne las caracter&iacute;sticas de una gran urbe junto con el encanto de las peque&ntilde;as ciudades m&aacute;s tranquilas. Modernas pero con un toque cl&aacute;sico, las calles de Bruselas est&aacute;n cargadas de encanto y de historia.</p>\n<p>\n\tCon cerca de un mill&oacute;n de habitantes, Bruselas, Bruxelles en Franc&eacute;s, o Brussel en Flamenco, Habitada por gente de multitud de pa&iacute;ses, Bruselas es una de las ciudades m&aacute;s internacionales y multiculturales de Europa.</p>\n<p>\n\tUn paseo por Bruselas nos permitir&aacute; disfrutar de maravillas arquitect&oacute;nicas como la Grand Place, el encanto de rincones como en el que se sit&uacute;a la estatua del Maneken Pis y podremos disfrutar de las peque&ntilde;as delicias gastron&oacute;micas t&iacute;picas de la ciudad como el chocolate, la cerveza o los mejillones.</p>\n<p>\n\tAdem&aacute;s, a muy pocos kil&oacute;metros de Bruselas, tenemos lugares muy interesantes para visitar. Ciudades como Gante, Amberes o Brujas o lugares hist&oacute;ricos de importancia fundamental en las dos guerras mundiales est&aacute;n al alcance de una excursi&oacute;n de un d&iacute;a. Yendo un poco m&aacute;s lejos, tanto Amsterdam como Colonia o Luxemburgo, son ciudades de gran inter&eacute;s situadas a apenas una hora de Bruselas y muy bien comunicadas con la capital.</p>\n<p>\n\tToda una ciudad a nuestra disposici&oacute;n que seguro disfrutaremos al m&aacute;ximo.</p>\n \n\t\t',
	country_ola_code: 'BE',
	region_name: 'Europa',
	region_code: 'EU',
	region_ola_code: '3',
	images: [
		{
			image_id: 600,
			path:
				'https://aleani-temp-assets.s3-sa-east-1.amazonaws.com/web/images/geo/3938a556-bd1c-4e9e-8cbc-f3546d16c413__Bruselas.jpg',
			name: '3938a556-bd1c-4e9e-8cbc-f3546d16c413__Bruselas.jpg',
			temporal: 1,
			deleted: 0,
			type: 'image/jpeg',
			size: 907985,
			originalName: 'Bruselas.jpg',
			bucket: 'aleani-temp-assets',
			folder: 'web/images/geo/',
			last_update: '2017-07-21T13:16:27.000Z',
			destination_id: 30775
		},
		{
			image_id: 601,
			path:
				'https://aleani-temp-assets.s3-sa-east-1.amazonaws.com/web/images/geo/f7062839-2a60-4eb0-adbc-e20ccecf1351__Bruselass.jpg',
			name: 'f7062839-2a60-4eb0-adbc-e20ccecf1351__Bruselass.jpg',
			temporal: 1,
			deleted: 0,
			type: 'image/jpeg',
			size: 1012398,
			originalName: 'Bruselass.jpg',
			bucket: 'aleani-temp-assets',
			folder: 'web/images/geo/',
			last_update: '2017-07-21T13:16:27.000Z',
			destination_id: 30775
		},
		{
			image_id: 1014,
			path:
				'https://aleani-assets.s3.amazonaws.com/web/images/geo/05b56605-c7c6-43d2-952c-97f609742f95__shutterstock_246498589 Bruselas.jpg',
			name: '05b56605-c7c6-43d2-952c-97f609742f95__shutterstock_246498589 Bruselas.jpg',
			temporal: 0,
			deleted: 0,
			type: 'image/jpeg',
			size: 950015,
			originalName: 'shutterstock_246498589 Bruselas.jpg',
			bucket: 'aleani-assets',
			folder: 'web/images/geo/',
			last_update: '2018-01-25T20:08:04.000Z',
			destination_id: 30775
		}
	]
}

const hotels = [{ name: 'Hotel Standard', stars: 'Standard', condition: 'con desayuno' }]

class LandingPaquetes extends React.Component {
	state = {
		openP: false
	}

	/* 	handleClickOpen = () => {
		this.setState({ openP: true })
	}

	handleClose = () => {
		this.setState({ openP: false })
	} */

	render() {
		const { classes, fullScreen } = this.props

		return (
			<React.Fragment>
				<Header />
				<div className={classes.resumenBusqueda}>
					<ResumenBusquedaPaquetes />
				</div>
				<NavLanding title="Paquete a Buzios para 144 personas">
					<SearchPaquetes />
				</NavLanding>

				<ImageBook
					hotelName="Paquete a Buzios"
					buttonImgName="Ver Fotos"
					imageSize={600}
					alt="Paquete a La Condelalo"
					height={380}
					max={18}
					images={[
						'https://cdn.austria.info/media/17083/thumbnails/1146855-blick-auf-stephans-dom--oesterreich-werbung-Wiesenhofer.jpg.3044623.jpg',
						'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg',
						'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg'
					]}
				/>

				<DateContainer />

				<StickyContainer>
					<Sticky>
						{({ style }) => (
							<div style={{ ...style, zIndex: 5 }}>
								<TabSlider options={['Vuelo', 'Itinerario', 'Hoteles', 'Ciudades']} />
							</div>
						)}
					</Sticky>
					<section className={classes.infoHotels}>
						<div className={classes.container}>
							<div className={classes.info}>
								<div className={classes.marginT20}>
									<SimpleContentCard title="Vuelo" padding={0} />
								</div>
								<div className={classes.marginT20}>
									<DesplegableContentCard title="Itinerario" content={<FacilityComponent />} />
								</div>
								<div className={classes.marginT20}>
									<DesplegableContentCard
										title="Hoteles"
										content={hotels.map(({ name, stars, condition }) => (
											<div>
												{name}
												{stars}
												{condition}
											</div>
										))}
									/>
								</div>
								<div className={classes.marginT20}>
									<ContentCard title="Ciudades" {...city} />
								</div>
							</div>
						</div>
					</section>
					<NavFixed />
				</StickyContainer>
			</React.Fragment>
		)
	}
}
LandingPaquetes.defaultProps = {
	fixed: false
}

LandingPaquetes.propTypes = {
	fullScreen: PropTypes.bool.isRequired,

	fixed: PropTypes.string
}

export default withMobileDialog()(
	withStyles(() => ({
		padding10: {
			padding: 10
		},
		resumenBusqueda: {
			display: 'none',
			width: '100%',

			'@media (max-width: 600px)': {
				position: 'absolute',
				zIndex: 2,
				top: 35,
				display: 'block'
			}
		},
		infoHotel: {
			background: '#f2f2f2',
			'@media (max-width: 600px)': {
				display: 'none'
			}
		},
		info: {
			width: '100%',
			height: 'auto',
			float: 'left'
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
			height: 70
		},
		displayFlex: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			alignSelf: 'center',
			justifyContent: 'space-between'
		},
		marginLeft20: { marginLeft: 20 },
		marginT20: { marginTop: 20 }
	}))(LandingPaquetes)
)
