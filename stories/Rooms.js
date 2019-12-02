import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, object, array } from '@storybook/addon-knobs/react'

import { TableRooms, DetailRoom, DetailRoomMobile, CardRoom, HeaderRooms, Icon, LandingMap, LandingTitle } from '../src'

const stories = storiesOf('Rooms', module)

stories.add('TableRooms', () => {
	return <TableRooms />
})
stories.add('HeaderRooms', () => {
	return <HeaderRooms />
})
stories.add('LandingMap', () => {
	return (
		<LandingMap
			center={object('centro del mapa', { lat: 39.56947, lng: 2.650017 })}
			zoom={number('Zoom', 15)}
			text={text('Nombre del hotel', 'Hotel Pasadena')}
		/>
	)
})

stories.add('LandingTitle', () => {
	return (
		<LandingTitle
			name={text('Nombre Habitación', 'Habitación DeLuxe ')}
			price={text('Precio', '1500')}
			scrollSections={text('Sección Scroll', 'rooms')}
			loading={boolean('Cargando', false)}
			isAvailable={boolean('Hay disponibilidad ', false)}
		/>
	)
})

/**
 * DetailRoom: Tiene el precio total y la descripción general
 *             de la habitación seleccionada.
 *
 * Tener en cuenta que el atributo: roomDescription
 * tiene las descripciones generales de la habitación,
 * y además el estilo de cada una.
 */
stories.add('DetailRoom', () => {
	return (
		<DetailRoom
			night={text('Cantidad de días', '4 noches ')}
			travelers={text('Cantidad de personas', '2')}
			price={text('precio total', '15000')}
			based={text('Tipo de Base', 'por noche en base doble')}
			roomDescription={object('Descripción', [
				{ name: 'Habitación Estándar', condition: true },
				{ name: 'Incluye Régimen de comida', condition: true },
				{ name: 'Cancelación hasta 2 días sin cargo', condition: false }
			])}
		/>
	)
})
stories.add('DetailRoomMobile', () => {
	return (
		<DetailRoomMobile
			night={text('Cantidad de días', '4 noches ')}
			travelers={text('Cantidad de personas', '2')}
			price={text('precio total', '15000')}
			based={text('Tipo de Base', 'por noche en base doble')}
			roomDescription={object('Descripción', [
				{ name: 'Habitación Estándar', condition: true },
				{ name: 'Incluye Régimen de comida', condition: true },
				{ name: 'Cancelación hasta 2 días sin cargo', condition: false }
			])}
		/>
	)
})
/**
 * Tener en cuanta los siguientes tags:
 * selectedValue, change
 *
 * Ambos valores dependen del estado del componente,
 * como estamos en el story y tenemos: stateless function
 * no podemos replicar el estado del componente padre.
 * Esta Story solo está para ver el diseño del componente,
 * y no la totalidad de su lógica.
 *
 * Para ver su funcionamiento, ir a Landing.jsx:
 * --> emmaterial/src/Templates/Landing/Landing.jsx
 * Landing.jsx simula tanto el comportamiento de la web
 * como la funcionalidad completa de la CardRoom.
 *
 *
 * Facilities: Los nombres para los íconos se encuentran en
 *             el componente Icons. Este tiene todos los nombres
 *             y el render de cada ícono.
 */
stories.add('CardRoom', () => {
	return (
		<div>
			<CardRoom
				lastPlaces={text('Últimos lugares', 4)}
				roomName={text('Nombre Habitacion', 'Suite Vista al Océano')}
				images={array('imagenes', [
					'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
					'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
					'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
					'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
					'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
					'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
					'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg'
				])}
				facilities={[
					{ icon: <Icon name="Wifi" key={1} />, name: 'Wifi Gratis' },
					{ icon: <Icon name="Snowflake" key={2} />, name: 'Aire Acondicionado' },
					{ icon: <Icon name="Television" key={2} />, name: 'Television por cable' },
					{ icon: <Icon name="Signal" key={2} />, name: 'Señal de todo tipo' }
				]}
				bedType={text('Descripción de la cama', 'King Size')}
				descriptionRoom={array('Descripción de la habitacion', [
					{ amount: 2000, description: 'Solo Habitación' },
					{ amount: 3000, description: 'Con Desayuno' },
					{ amount: 4000, description: 'Con Media Pensión' }
				])}
				cancellationPolicy={text('Políticas de Cancelación', 'Hasta 2 días la cancelación es gratis')}
				finances={array('Financiación', ['6, 12 cuotas sin interes'])}
				roomKey={0}
				selectedValue={'00'}
				/*
				selectedValue={this.state.selectedValue}
				change={this.handleChange} 
				*/
			/>
		</div>
	)
})
