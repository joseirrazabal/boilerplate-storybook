import React from 'react'
import ReactDOM from 'react-dom'

import Button from '../src/Atoms/Button/Button'
import Autocompletar from '../src/Molecules/Autocompletar/Autocompletar'
import Tags from '../src/Atoms/Tags'
import IconsFont from '../src/Atoms/IconsFont'
import Image from '../src/Atoms/Images/Image'
import ImageBackground from '../src/Atoms/Images/ImageBackground'
import MapComponent from '../src/Atoms/MapComponent'
import Stars from '../src/Atoms/Stars'
import Map from '../src/Atoms/Map'
import Expander from '../src/Atoms/Expander'
import ExpanderCustomizable from '../src/Atoms/ExpanderCustomizable'
import {
	TitlePrimary,
	TitleSecondary,
	TitleH3,
	TitleH4,
	TitleH5,
	TitleH6,
	Text
} from '../src/Atoms/TitleLabel/TitleLabel'
import InputSimple from '../src/Atoms/Input'
import MultiInput from '../src/Atoms/MultiInput'
import SelectNumber from '../src/Atoms/SelectNumber'
import CustomizedSnackbars from '../src/Atoms/Favoritos'
import Steppers from '../src/Molecules/Steppers/Steppers'
import SimpleList from '../src/Molecules/List/SimpleList'
import AvatarList from '../src/Molecules/List/AvatarList'
import IconList from '../src/Molecules/List/IconList'
import TabSlider from '../src/Molecules/Tabs/TabSlider'
import TabsProfile from '../src/Molecules/Tabs/TabsProfile'
import CustomTabs from '../src/Molecules/Tabs/CustomTabs'
import TabsOrdenar from '../src/Molecules/TabsOrdenar/TabsOrdenar'
import HeaderNav from '../src/Molecules/Navigation/HeaderNav'
import Card from '../src/Molecules/Card/Card'
import LoadingCard from '../src/Molecules/Card/LoadingCard'
import LoadingCardPaquetes from '../src/Molecules/Card/LoadingCardPaquetes'
import SimpleCard from '../src/Molecules/Card/SimpleCard'
import SimpleContentCard from '../src/Molecules/Card/SimpleContentCard'
import SmallCard from '../src/Molecules/Card/SmallCard'
import FavoriteCard from '../src/Molecules/Card/FavoriteCard'
import ComentariosCard from '../src/Molecules/Card/ComentariosCard'
import RoomCard from '../src/Molecules/Card/RoomCard'
import NotificationCard from '../src/Molecules/Card/NotificationCard'
import FechasCard from '../src/Molecules/Card/FechasCard'
import DesplegableContentCard from '../src/Molecules/Card/DesplegableContentCard'
import Calendar from '../src/Molecules/Calendar/Calendar'
import SimpleCalendar from '../src/Molecules/Calendar/SimpleCalendar'
import Passengers from '../src/Molecules/Passengers/Passengers'
import IndicadorMapa from '../src/Molecules/Indicadores/IndicadorMapa'
import SimpleNews from '../src/Molecules/Newsletters/SimpleNews'
import Consultar from '../src/Molecules/Menus/Consultar'
import SlickFixed from '../src/Molecules/SlickFixed/SlickFixed'
import Multiple from '../src/Molecules/Autocompletar/Multiple'
import LoadingFlight from '../src/Organisms/FlightItinerary/LoadingFlight'
import Header from '../src/Organisms/Header/Header'
import Login from '../src/Organisms/Dialogs/Login/Login'
import HeaderNavSimple from '../src/Organisms/Header/HeaderNavSimple'
import Footer from '../src/Organisms/Footer/Footer'
import HeaderPerfil from '../src/Organisms/Header/HeaderPerfil'
import SearchHotels from '../src/Organisms/Search/SearchHotels'
import SearchAir from '../src/Organisms/Search/SearchAir'
import SearchVuelos from '../src/Organisms/Search/SearchVuelos'
import SearchPaquetes from '../src/Organisms/Search/SearchPaquetes'
import SimpleSearch from '../src/Organisms/Search/SimpleSearch'
import SmallSearch from '../src/Organisms/Search/SmallSearch'
import SearchShoppingVuelos from '../src/Organisms/Search/SearchShoppingVuelos'
import SearchVuelosMobile from '../src/Organisms/Search/SearchVuelosMobile'
import SearchPaquetesMobile from '../src/Organisms/Search/SearchPaquetesMobile'
import SearchHotelsMobile from '../src/Organisms/Search/SearchHotelsMobile'
import VideoBg from '../src/Organisms/BackgroundVideo/VideoBg'
import ResumenBusquedaPaquetes from '../src/Organisms/ResumenBusqueda/ResumenBusquedaPaquetes'
import HotelSearchSummary from '../src/Organisms/ResumenBusqueda/HotelSearchSummary'
import ResumenBusquedaVuelos from '../src/Organisms/ResumenBusqueda/ResumenBusquedaVuelos'
import FiltersHotels from '../src/Organisms/Filters/FiltersHotels'
import RangeFilter from '../src/Organisms/Filters/RangeFilter'
import ListFilter from '../src/Organisms/Filters/ListFilter'
import ListFilterItem from '../src/Organisms/Filters/ListFilterItem'
import FiltersHotelsMobile from '../src/Organisms/Filters/FiltersHotelsMobile'
import Profile from '../src/Templates/Profile/Profile'
import Ayuda from '../src/Templates/Ayuda/Ayuda'
import SteppersCheckout from '../src/Templates/Checkout/SteppersCheckout'
import Pasajeros from '../src/Templates/Checkout/Formularios/Pasajeros'
import VerticalCard from '../src/Molecules/Card/VerticalCard'
import PaquetesCard from '../src/Molecules/Card/PaquetesCard'
import { Flight, Segment } from '../src/Organisms/FlightItinerary/FlightItinerary'
import FlightItinerary from '../src/Organisms/FlightItinerary/FlightItinerary'
import FlightItineraryResumen from '../src/Organisms/FlightItinerary/FlightItineraryResumen'
import Resumen from '../src/Templates/Checkout/Resumen'
import ShoppingPaquetes from '../src/Templates/Shopping/ShoppingPaquetes'
//--- slick
import ListCards from '../src/Organisms/ListCards/ListCards'
import ImageBook from '../src/Organisms/ImageBook/ImageBook'
import ImageBookPaquetes from '../src/Organisms/ImageBook/ImageBookPaquetes'
import Escalas from '../src/Organisms/Escalas/Escalas'
import Landing from '../src/Templates/Landing/Landing'
import LandingPaquetes from '../src/Templates/Landing/LandingPaquetes'
import Shopping from '../src/Templates/Shopping/Shopping'
import ShoppingVuelos from '../src/Templates/Shopping/ShoppingVuelos'
import Checkout from '../src/Templates/Checkout/Checkout'
import Carousel from '../src/Molecules/Carousel/Carousel'
import ContentCard from '../src/Molecules/Card/ContentCard'
import SlideCard from '../src/Molecules/Card/SlideCard'
// -- import imagen
// import Home from '../src/Templates/Home/Home'
// import BackgroundImageHome from '../src/Organisms/BackgroundImageHome/BackgroundImageHome'
// import LoadingSearch from '../src/Molecules/Loading/LoadingSearch'

import * as colors from '../src/Constants/colors'
require('@babel/polyfill')

function App() {
	const getSuggestions = value => {
		const inputValue = value.trim().toLowerCase()
		const inputLength = inputValue.length
		let count = 0

		let result =
			inputLength === 0
				? []
				: suggestions.filter(suggestion => {
						const keep = count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue

						if (keep) {
							count += 1
						}

						return keep
				  })
	}

	const onAutocompleteChange = (value, name = 'place') => {
		const obj = {}
		obj[name] = value
	}

	const suggestions = [{ label: 'Antigua and Barbuda' }, { label: 'Argentina', type: 'city', value: 'ARG' }]

	return (
		<div>
			<Button
				text="Buscar"
				size="medium"
				radius={false}
				border
				fullWidth
				primary
				secondary={false}
				disable={false}
				iconLeft={null}
				iconRight={null}
			/>
			<Autocompletar
				name="destination"
				onChange={onAutocompleteChange}
				getSuggestions={getSuggestions}
				suggestions={suggestions}
			/>
			<TitlePrimary name="Luciano Recchini" center={false} right={false} />
			<TitleSecondary name="Luciano Recchini" center={false} right={false} />
			<TitleH3 name="Luciano Recchini" center={false} right={false} />
			<TitleH4 name="Luciano Recchini" center={false} right={false} />
			<TitleH5 name="Luciano Recchini" center={false} right={false} />
			<TitleH6 name="Luciano Recchini" center={false} right={false} />
			<Text
				content="Luciano Recchini"
				center={false}
				lineThrough={false}
				right={false}
				bold={false}
				italic={false}
				color={colors.primary}
			/>
			<VerticalCard
				destino="Vuelos a Londres"
				span="ida y vuelta"
				text="desde"
				precio="26850"
				lineThrough={false}
				imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
			/>
		</div>
	)
}
ReactDOM.render(<App />, document.querySelector('#root'))
