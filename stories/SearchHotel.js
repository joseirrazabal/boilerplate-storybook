import React from 'react'
import { storiesOf, obj } from '@storybook/react'

import { boolean } from '@storybook/addon-knobs/react'

import {
	GenericSearch,
	Calendar,
	HotelOccupancy,
	Autocompletar,
	Autocompletar2,
	Passengers,
	HotelsSearchDialog,
	TestGenericSearch
} from '../src'

const stories = storiesOf('Search', module)

const vuelosSuggestions = [
	{ label: 'Aeropuerto Nuevo 1', code: 1 },
	{ label: 'Aeropuerto Nuevo 2', code: 2 },
	{ label: 'Aeropuerto Nuevo 3', code: 3 },
	{ label: 'Aeropuerto Nuevo 4', code: 4 },
	{ label: 'Aeropuerto Nuevo 5', code: 5 }
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

/*
stories.add('Hotel Search Dialog', () => <HotelsSearchDialog open={boolean('open', false)} />)

stories.add('Search Hotels Generic', () => {
	// const getHotelSuggestions = value => {
	// 	console.log('VALUE', value)
	// 	const escapedValue = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	// 	if (escapedValue === '') {
	// 		return []
	// 	}

	// 	const regex = new RegExp('^' + escapedValue, 'i')

	// 	return hotelSuggestions
	// 		.map(section => {
	// 			return {
	// 				title: section.title,
	// 				values: section.values.filter(val => regex.test(val.label))
	// 			}
	// 		})
	// 		.filter(section => section.values.length > 0)
	// }

	// const handleClick = props => {}

	return (
		<GenericSearch
			leftComponent={<Autocompletar suggestions={hotelSuggestions} multiSection />}
			centerComponent={<Calendar />}
			rightComponent={
				<HotelOccupancy>
					<Passengers />
				</HotelOccupancy>
			}
		/>
	)
})

stories.add('Test Search Hotels Generic', () => {
	return (
		<TestGenericSearch
			error={{
				leftComponent: 'error on AUTOSUGGEST',
				centerComponent: 'error on CALENDAR',
				rightComponent: 'error on PASSENGERS'
			}}
			leftComponent={<Autocompletar2 suggestions={hotelSuggestions} multiSection />}
			centerComponent={<Calendar />}
			rightComponent={
				<HotelOccupancy>
					<Passengers />
				</HotelOccupancy>
			}
		/>
	)
})

*/
