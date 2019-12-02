import React from 'react'
import { storiesOf, obj } from '@storybook/react'
import moment from 'moment'
import { withKnobs, text, boolean, number, object, date } from '@storybook/addon-knobs/react'

import SearchPaquetesGeneric from '../src/Organisms/SearchGeneric/SearchPaquetesGeneric'
import SearchVuelosGeneric from '../src/Organisms/SearchGeneric/SearchVuelosGeneric'
import SearchHotelGeneric from '../src/Organisms/SearchGeneric/SearchHotelGeneric'

import {
	SearchHotels,
	SearchVuelos,
	SimpleSearch,
	SmallSearch,
	SearchShoppingVuelos,
	// SearchPaquetes,
	SearchHotelsMobile,
	SearchVuelosMobile,
	Search
} from '../src'

const stories = storiesOf('Search', module)

const vuelosSuggestions = [
	{ label: 'Aeropuerto Nuevo 1', code: 1 },
	{ label: 'Aeropuerto Nuevo 2', code: 2 },
	{ label: 'Aeropuerto Nuevo 3', code: 3 },
	{ label: 'Aeropuerto Nuevo 4', code: 4 },
	{ label: 'Aeropuerto Nuevo 5', code: 5 }
]

const getSuggestions = [
	{ label: 'MCZ', value: 'Maceio' },
	{ label: 'PAR', value: 'Paris' },
	{ label: 'EZE', value: 'Ministro Pisculichi' }
]

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

const getSuggestionsVuelos = [
	{ value: 'MCZ', label: 'Maceio' },
	{ value: 'PAR', label: 'Paris' },
	{ value: 'EZE', label: 'Ministro Pisculichi' }
]

/*
stories.add('Search Hotels', () => {
	const getHotelSuggestions = value => {
		const escapedValue = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
		if (escapedValue === '') {
			return []
		}

		const regex = new RegExp(`^${escapedValue}`, 'i')

		return hotelSuggestions
			.map(section => ({
				title: section.title,
				values: section.values.filter(val => regex.test(val.label))
			}))
			.filter(section => section.values.length > 0)
	}

	return (
		<SearchHotels
			onSubmit={({ calendar, destination, occupancy }) => {
				console.log('calendar', calendar)
				console.log('destination', destination)('occupancy', occupancy)
			}}
			getSuggestions={getHotelSuggestions}
			suggestions={hotelSuggestions}
			destination={{
				code: 'a',
				label: 'Zarandonga'
			}}
			startDate={moment()}
			endDate={moment()}
		/>
	)
})

stories.add('Search Vuelos', () => <SearchVuelos getSuggestions={() => vuelosSuggestions} />)

stories.add('Search Shopping Vuelos', () => {
	const initialValues = {
		origin: object('origin', { value: 'EZE', label: 'Ministro Pisculichi' }),
		destination: object('destination', { value: 'PAR', label: 'Paris' }),
		departuredate: moment('2018-09-07'),
		returndate: moment('2018-09-09'),
		passengers: { adults: 3, childs: 2, babies: 5 }
	}

	return (
		<SearchShoppingVuelos
			getSuggestions={() => getSuggestionsVuelos}
			suggestions={getSuggestionsVuelos}
			initialValues={initialValues}
			onSubmit={values => console.log(values)}
		/>
	)
})

stories.add('Simple Search', () => <SimpleSearch />)

stories.add('Small Search', () => <SmallSearch />)

stories.add('Search', () => <Search />)

stories.add('Search Hoteles Mobile', () => <SearchHotelsMobile />)

stories.add('Search Vuelos Mobile', () => <SearchVuelosMobile />)
*/

stories.add('Search Shopping Vuelos', () => {
	const initialValues = {
		origin: object('origin', { value: 'EZE', label: 'Ministro Pisculichi' }),
		destination: object('destination', { value: 'PAR', label: 'Paris' }),
		departuredate: moment('2018-09-07'),
		returndate: moment('2018-09-09'),
		passengers: { adults: 3, childs: 1, babies: 0 },
		type: text('type', 'ida_vsuelta')
	}

	return (
		<SearchShoppingVuelos
			getSuggestions={() => getSuggestionsVuelos}
			suggestions={getSuggestionsVuelos}
			initialValues={initialValues}
			onSubmit={values => console.log(values)}
		/>
	)
})

stories.add('Search Vuelos generic', () => (
	<SearchVuelosGeneric
		isSummary={boolean('isSummary', false)}
		isMobile={boolean('isMobile', false)}
		initialValues={{
			// departuredate: object('departuredate', moment()),
			// returndate: object('returndate', moment()),
			origin: object('origin', { label: 'Buenos aires', value: 'BUE' }),
			destination: object('destination', { label: 'Paris', value: 'PAR' }),
			passengers: { adults: 3, childs: 1, babies: 0 }
		}}
		onSubmit={values => console.log({ values })}
		suggestions={suggestions}
		getSuggestions={() => vuelosSuggestions}
	/>
))

const suggestionsHotel = [
	{
		title: 'Hoteles',
		icon: '',
		values: [
			{ label: 'Hotel Internacional Buenos Aires 1', code: 1 },
			{ label: 'Hotel Internacional Buenos Aires 2', code: 2 },
			{ label: 'Hotel Internacional Buenos Aires 3', code: 3 },
			{ label: 'Destino Hotel 7', value: 6 }
		]
	},
	{
		title: 'Destinos',
		icon: '',
		values: [
			{ label: 'Destino 1', code: 11 },
			{ label: 'Destino 2', code: 22 },
			{ label: 'Destino 3', code: 33 },
			{ label: 'Hotel Destino 7', code: 66 }
		]
	}
]

stories.add('Search Hoteles Generic', () => (
	<SearchHotelGeneric
		isSummary={boolean('isSummary', false)}
		isMobile={boolean('isMobile', true)}
		initialValues={{
			// origin: { label: 'bien', code: 'ARG' },
			passengers: 3,
			// calendar: { startDate: initialStartDate, endDate: initialEndDate },
			occupancy: [{ id: 'f7ib1t', adults: { length: 2 }, childs: [3] }]
			// rooms
		}}
		// startDate={moment('01/08/2019', 'DD/MM/YYYY')}
		// endDate={moment('30/08/2019', 'DD/MM/YYYY')}
		suggestions={suggestionsHotel}
		getSuggestions={() => suggestionsHotel}
		onSubmit={values => console.log({ values })}
	/>
))

const suggestions = [
	{ label: 'Antigua and Barbuda' },
	{ label: 'Argentina', type: 'city', value: 'ARG' },
	{ label: 'Armenia' }
]

stories.add('Search Paquetes', () => (
	<SearchPaquetesGeneric
		isMobile={boolean('isMobile', true)}
		initialValues={{
			// origin: { code: 'BUE', label: 'Buenos Aires' },
			// destination: { code: 'MIA', label: 'Miami' },
			passengers: 3,
			// calendar: { startDate: initialStartDate, endDate: initialEndDate },
			occupancy: [{ id: 'f7ib1t', adults: { length: 2 }, childs: [3] }]
			// rooms
		}}
		// startDate={moment('01/08/2019', 'DD/MM/YYYY')}
		// endDate={moment('30/08/2019', 'DD/MM/YYYY')}
		suggestions={suggestions}
		getSuggestions={() => suggestionsHotel}
		onSubmit={values => console.log(values)}
	/>
))
/*
stories.add('Search Paquetes Mobile generic', () => (
	<SearchPaquetesMobileGeneric
		getSuggestions={term => console.log('get')}
		suggestions={suggestions}
		onSubmit={values => console.log('submit', values)}
	/>
))
*/
