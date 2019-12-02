import React from 'react'
/* import PropTypes from 'prop-types' */
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Header from '../../Organisms/Header/Header'
import Footer from '../../Organisms/Footer/Footer'
import SimpleCard from '../../Organisms/Card/SimpleCard'
import SlideCard from '../../Organisms/Card/SlideCard'
import SmallCard from '../../Organisms/Card/SmallCard'
/* import ImageCard from '../../Organisms/Card/ImageCard' */
import PaquetesCard from '../../Organisms/Card/PaquetesCard'
import VerticalCard from '../../Organisms/Card/VerticalCard'
import SimpleNews from '../../Molecules/Newsletters/SimpleNews'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'
import BackgroundImageHome from '../../Organisms/BackgroundImageHome/BackgroundImageHome'

import SearchVuelos from '../../Organisms/SearchGeneric/SearchVuelosGeneric'
import SearchHotel from '../../Organisms/SearchGeneric/SearchHotelGeneric'
import SearchPaquetes from '../../Organisms/SearchGeneric/SearchPaquetesGeneric'

// import SearchPaquetesMobile from '../../Organisms/SearchGeneric/SearchPaquetesMobileGeneric'

import Search from '../../Organisms/Search/Search'

import Image from '../../Atoms/Images/Image'
import ListCards from '../../Organisms/ListCards/ListCards'
import Slider from '../../Organisms/Slider/Slider'

const hotelSuggestions = [
	{
		title: 'Hoteles',
		icon: '',
		values: [
			{ label: 'Hotel Internacional Buenos Aires 1', code: 1 },
			{ label: 'Hotel Internacional Buenos Aires 2', code: 2 },
			{ label: 'Hotel Internacional Buenos Aires 3', code: 3 },
			{ label: 'Hotel Internacional Buenos Aires 4', code: 4 },
			{ label: 'Hotel Internacional Buenos Aires 5', code: 5 },
			{ label: 'Hotel Internacional Buenos Aires 6', code: 6 },
			{ label: 'Destino Hotel 7', code: 6 }
		]
	},
	{
		title: 'Destinos',
		icon: '',
		values: [
			{ label: 'Destino 1', code: 11 },
			{ label: 'Destino 2', code: 22 },
			{ label: 'Destino 3', code: 33 },
			{ label: 'Destino 4', code: 44 },
			{ label: 'Destino 5', code: 55 },
			{ label: 'Destino 6', code: 66 },
			{ label: 'Hotel Destino 7', code: 66 }
		]
	}
]

class Home extends React.PureComponent {
	render() {
		const { classes, useDefaultCursor } = this.props
		return (
			<div style={{ background: '#ebebeb' }}>
				<Header
					image={
						<Image
							height={30}
							image="https://www.google.com/a/cpanel/upate.com/images/logo.gif?service=google_gsuite"
						/>
					}
					fixed={false}
				/>
				<BackgroundImageHome
					contentHotels={
						<div>
							<SearchHotel />
							<SearchHotel isMobile />
						</div>
					}
					contentVuelos={
						<div>
							<SearchVuelos />
							<SearchVuelos isMobile />
						</div>
					}
					contentPaquetes={
						<div>
							<Search />
						</div>
					}
					contentCerros={
						<div>
							<SearchPaquetes />
						</div>
					}
				/>
				<div key={1} className={classNames(classes.container, classes.marginTopNegativo)}>
					<Slider slidesToShow={2} lassName="carousel">
						<div className={classes.items}>
							<SmallCard
								image="https://images.pexels.com/photos/709860/pexels-photo-709860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
								title="Vuelos a Berlin"
								subtitle="desde $17000"
								ImageFull
							/>
						</div>
						<div className={classes.items}>
							<SmallCard
								image="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
								title="Hoteles en Miami"
								subtitle="por noche desde $400"
							/>
						</div>
					</Slider>
				</div>
				<div key={2} className={classes.paddingBox}>
					<ListCards cards={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]} />
				</div>
				<div key={3} className={classes.container}>
					<Grid item xs={12} className={classes.paddingBox}>
						<TitleSecondary center content="Hoteles mas buscados en Miami" />
					</Grid>
					<Slider slidesToShow={3} className="carousel">
						<div className={classes.items}>
							<SlideCard
								title="Hotel Buenos Aires Ejemplo dos titulo largo"
								price={26850}
								previousPrice={50039}
								services={[
									{ icon: 'flaticon-car', title: 'Alquiler de auto' },
									{ icon: 'flaticon-interface-1', title: 'Asistencia al viajero' },
									{ icon: 'flaticon-departure', title: 'Ticket para eventos' }
								]}
							/>
						</div>
						<div className={classes.items}>
							<SlideCard
								title="Hotel Buenos Aires Ejemplo dos titulo largo"
								price={26850}
								previousPrice={50039}
								services={[
									{ icon: 'flaticon-car', title: 'Alquiler de auto' },
									{ icon: 'flaticon-interface-1', title: 'Asistencia al viajero' },
									{ icon: 'flaticon-departure', title: 'Ticket para eventos' }
								]}
							/>
						</div>
						<div className={classes.items}>
							<SlideCard
								title="Hotel Buenos Aires Ejemplo dos titulo largo"
								price={26850}
								previousPrice={50039}
								services={[
									{ icon: 'flaticon-car', title: 'Alquiler de auto' },
									{ icon: 'flaticon-interface-1', title: 'Asistencia al viajero' },
									{ icon: 'flaticon-departure', title: 'Ticket para eventos' }
								]}
							/>
						</div>
					</Slider>
				</div>
				<section style={{ width: '100%' }}>
					<div key={4} className={classes.container}>
						<Grid item xs={12} className={classes.paddingBox}>
							<TitleSecondary center content="Europa a tu medida!" />
						</Grid>
						<Slider slidesToShow={3} className="carousel">
							<div className={classes.items}>
								<SimpleCard
									title="Hoteles en Miami con un titulo mas largo que piropo de tartamudo"
									precio={1200}
									precioAnterior={1600}
									imageUrl="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
								/>
							</div>
							<div className={classes.items}>
								<SimpleCard
									destino="Hoteles en Miami"
									precio={1200}
									precioAnterior={1600}
									imageUrl="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
								/>
							</div>
							<div className={classes.items}>
								<SimpleCard
									destino="Hoteles en Miami"
									precio={1200}
									precioAnterior={1600}
									imageUrl="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
								/>
							</div>
						</Slider>
					</div>
				</section>
				<div key={5} className={classes.container}>
					<Grid item xs={12} className={classes.paddingBox}>
						<TitleSecondary center content="Viajes que te van a encantar" />
					</Grid>
					<Slider slidesToShow={3} className="carousel">
						<div className={classes.items}>
							<PaquetesCard
								title="Búzios"
								fecha="de Junio a Julio"
								text="Final por persona"
								noches="7 noches desde Buenos Aires, Argentina"
								precio={11.489}
								imageUrl="https://images.pexels.com/photos/60204/pexels-photo-60204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
							/>
						</div>
						<div className={classes.items}>
							<PaquetesCard
								title="Punta Cana"
								fecha="Salidas de Junio a Noviembre"
								noches="8 noches desde Buenos Aires, Argentina"
								precio={42.92}
								text="Final por persona"
								imageUrl="https://media.aleanitravel.com/eyJ3IjozNDgsImgiOjI5MCwic3JjIjoiaHR0cHM6Ly9hbGVhbmktYXNzZXRzLnMzLmFtYXpvbmF3cy5jb20vd2ViL2ltYWdlcy9nZW8vNWEzMmFkYTEtNTc0My00M2VkLTk0MDYtMDkzODdkNzY2ZjM1X18xMS5qcGciLCJ2IjoxfQ==.jpg"
							/>
						</div>
						<div className={classes.items}>
							<PaquetesCard
								title="Varadero y La Habana"
								fecha="Salidas de Junio a Noviembre"
								noches="10 noches desde Buenos Aires, Argentina"
								precio={41.917}
								text="Final por persona"
								imageUrl="https://media.aleanitravel.com/eyJ3IjozNDgsImgiOjI5MCwic3JjIjoiaHR0cHM6Ly9hbGVhbmktYXNzZXRzLnMzLmFtYXpvbmF3cy5jb20vd2ViL2ltYWdlcy9nZW8vYTE0YmFiZmQtNGViMi00NTc0LTk1ZjktY2U0ZmJmMTBmNDRkX19oYWJhbmExLmpwZyIsInYiOjF9.jpg"
							/>
						</div>
					</Slider>
				</div>
				<div key={6} className={classes.paddingBox}>
					<SimpleNews />
				</div>
				<div key={7} className={classes.container}>
					<Grid item xs={12} className={classes.paddingBox}>
						<TitleSecondary center content="Ofertas en Vuelos" />
					</Grid>
					<Slider slidesToShow={4} className="carousel">
						<div className={classes.items}>
							<VerticalCard
								title="Vuelos a Londres"
								subtitle="ida y vuelta"
								titleRight="desde"
								subtitleRight="26850"
								lineThrough={false}
								imageSize={600}
								imageUrl="https://images.pexels.com/photos/397431/pexels-photo-397431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
							/>
						</div>
						<div className={classes.items}>
							<VerticalCard
								title="Vuelos a Londres"
								subtitle="ida y vuelta"
								titleRight="desde"
								subtitleRight="26850"
								lineThrough={false}
								imageSize={650}
								imageUrl="https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
							/>
						</div>
						<div className={classes.items}>
							<VerticalCard
								title="Vuelos a Londres"
								subtitle="ida y vuelta"
								titleRight="desde"
								subtitleRight="26850"
								lineThrough={false}
								imageSize={500}
								imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
							/>
						</div>
						<div className={classes.items}>
							<VerticalCard
								title="Vuelos a Londres"
								subtitle="ida y vuelta"
								titleRight="desde"
								subtitleRight="26850"
								lineThrough={false}
								imageSize={690}
								imageUrl="https://images.pexels.com/photos/871488/pexels-photo-871488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
							/>
						</div>
					</Slider>
				</div>
				<Footer />
			</div>
		)
	}
}

export default withStyles(() => ({
	marginTopNegativo: {
		marginTop: '-90px!important',
		position: 'relative',
		zIndex: 1
	},
	items: {
		padding: 10
	},
	container: {
		margin: 'auto',
		width: '100%',
		maxWidth: 1200
	},
	paddingBox: {
		paddingTop: 20,
		paddingBottom: 20
	}
}))(Home)
