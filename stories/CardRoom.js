import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array, object } from '@storybook/addon-knobs/react'
import { CardRoom } from '../src'
import { Icon } from '../src'

const stories = storiesOf('Rooms', module)

/**
 * Facilities: Los nombres para los íconos se encuentran en
 *             el componente Icons. Este tiene todos los nombres
 *             y el render de cada ícono.
 */
stories.add('Card Room', () => {
	return (
		<CardRoom
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
				{ amount: 3000, description: 'Con Desayuno' },
				{ amount: 4000, description: 'Con Media Pensión' }
			])}
			cancellationPolicy={text('Políticas de Cancelación', 'Hasta 2 días la cancelación es gratis')}
			finances={array('Financiación', ['6, 12 cuotas sin interes'])}
		/>
	)
})
