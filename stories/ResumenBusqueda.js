import React from 'react'
import { storiesOf } from '@storybook/react'
import { ResumenBusquedaVuelos, HotelSearchSummary, ResumenBusquedaPaquetes } from '../src'
import SearchHotelGeneric from '../src/Organisms/SearchGeneric/SearchHotelGeneric'

const stories = storiesOf('ResumenBusqueda', module)

stories.add('Resumen Busqueda Vuelos', () => (
	<ResumenBusquedaVuelos
		getSuggestions={val => console.log('getSuggestions')}
		suggestions={[{ value: 'bue', label: 'Buenos Aires' }]}
		initialValues={{
			origin: { label: 'Buenos Aires', value: 'BUE' },
			destination: { label: 'Paris', value: 'PAR' },
			departuredate: '2018-08-09',
			returndate: '2018-11-09',
			passengers: { adults: 1, childs: 2, babies: 3 }
		}}
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

stories.add('Resumen Busqueda Hoteles', () => (
	<React.Fragment>
		<HotelSearchSummary
			date="Del 10 al 20 de Junio"
			// destination={{ label: 'Miami Beach', code: 'MIA' }}
			destination="Miami Beach"
			dateString="20"
			passengers={2}
			rooms={1}
			occupancy={[
				{
					id: Math.random()
						.toString(36)
						.substring(7),
					adults: { length: 2 },
					childs: []
				}
			]}
		/>
		<SearchHotelGeneric
			// open={open}
			// onClose={onClose}
			isMobile
			suggestions={suggestionsHotel}
			getSuggestions={() => suggestionsHotel}
			onSubmit={values => console.log(values)}
		/>
	</React.Fragment>
))

stories.add('Resumen Busqueda Paquetes', () => <ResumenBusquedaPaquetes />)
