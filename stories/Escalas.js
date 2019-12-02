import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { Escalas, LoadingEscalas } from '../src'

const stories = storiesOf('Escalas', module)

const airlinesScales = [
	{
		airline: {
			code: 'LA',
			name: 'Lan Airlines'
		},
		fare: 98510.3984375,
		count: 50,
		scales: [
			{
				fare: 98510.3984375,
				count: 44,
				scales: 2
			},
			{
				fare: 120797.703125,
				count: 6,
				scales: 3
			}
		]
	},
	{
		airline: {
			code: 'AF',
			name: 'Air France'
		},
		fare: 176455.5,
		count: 11,
		scales: [
			{
				fare: 176455.5,
				count: 10,
				scales: 2
			},
			{
				fare: 176455.5,
				count: 1,
				scales: 1
			}
		]
	},
	{
		airline: {
			code: 'UX',
			name: 'Air Europa'
		},
		fare: 118067.3984375,
		count: 8,
		scales: [
			{
				fare: 118067.3984375,
				count: 8,
				scales: 2
			}
		]
	}
]

stories.add('Escalas', () => {
	return <Escalas onSelect={airlineScale => console.log(airlineScale)} selected={{ airline: 'AF', scales: 2 }} airlinesScales={airlinesScales} />
})

stories.add('LoadingEscalas', () => {
	return <LoadingEscalas items={5} />
})
