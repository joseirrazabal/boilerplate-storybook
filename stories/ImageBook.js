import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, array, boolean, number, select } from '@storybook/addon-knobs/react'
import { ImageBook, ImageBookPaquetes } from '../src'

const stories = storiesOf('ImageBook', module)

stories.add('ImageBook', () => {
	return (
		<ImageBook
			hotelName={text('Nombre del Hotel', 'Hotel Internacional Buenos Aires')}
			buttonImgName={text('Nombre Botón Slider', 'Ver Fotos')}
			alt={text('Alternative', 'Hotel Bou')}
			height={number('height', 400)}
			width={number('width', 600)}
			max={number('Cantidad Máxima Renderizado', 10)}
			imageSize={number('imageSize', 800)}
			images={array('imagenes', [
				'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
				'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
				'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
				'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
				// 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
				// 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
				// 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
				// 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
				// 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
				// 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
			])}
		/>
	)
})

stories.add('ImageBook Paquetes', () => {
	return <ImageBookPaquetes />
})
// slim  -  admin ->
