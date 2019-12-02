import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, select } from '@storybook/addon-knobs/react'
import { IndicadorMapa, IndicadorMapaVuelos } from '../src'

const stories = storiesOf('Indicadores', module)

stories.add('Indicador Mapa', () => {
	return (
		<IndicadorMapa
			point={number('puntaje', 2)}
			isSelected={boolean('seleccionado', true)}
			principalText={text('principal', '150.000,20')}
			secondatyText={text('secundario', '2.2')}
		/>
	)
})
stories.add('Indicador Mapa Vuelos', () => {
	return (
		<IndicadorMapaVuelos />
	)
})
