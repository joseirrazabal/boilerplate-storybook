import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { AltDates } from '../src'

const stories = storiesOf('AltDates', module)

const alternativeDates = [
	{
		date: '2018-09-04T00:00:00.000Z',
		returnDates: [
			{ date: '2018-09-06T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-07T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-08T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-09T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-10T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-11T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-12T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' }
		],
		__typename: 'DateFacet'
	},
	{
		date: '2018-09-05T00:00:00.000Z',
		returnDates: [
			{ date: '2018-09-06T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-07T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-08T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-09T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-10T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-11T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-12T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' }
		],
		__typename: 'DateFacet'
	},
	{
		date: '2018-09-06T00:00:00.000Z',
		returnDates: [
			{ date: '2018-09-06T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-07T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-08T00:00:00.000Z', fare: 50636, __typename: 'DateLeafFacet' },
			{ date: '2018-09-09T00:00:00.000Z', fare: 51977.1015625, __typename: 'DateLeafFacet' },
			{ date: '2018-09-10T00:00:00.000Z', fare: 51977.1015625, __typename: 'DateLeafFacet' },
			{ date: '2018-09-11T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-12T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' }
		],
		__typename: 'DateFacet'
	},
	{
		date: '2018-09-07T00:00:00.000Z',
		returnDates: [
			{ date: '2018-09-06T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-07T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-08T00:00:00.000Z', fare: 57499.19921875, __typename: 'DateLeafFacet' },
			{ date: '2018-09-09T00:00:00.000Z', fare: 57499.19921875, __typename: 'DateLeafFacet' },
			{ date: '2018-09-10T00:00:00.000Z', fare: 51977.1015625, __typename: 'DateLeafFacet' },
			{ date: '2018-09-11T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-12T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' }
		],
		__typename: 'DateFacet'
	},
	{
		date: '2018-09-08T00:00:00.000Z',
		returnDates: [
			{ date: '2018-09-06T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-07T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-08T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-09T00:00:00.000Z', fare: 57499.19921875, __typename: 'DateLeafFacet' },
			{ date: '2018-09-10T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-11T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-12T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' }
		],
		__typename: 'DateFacet'
	},
	{
		date: '2018-09-09T00:00:00.000Z',
		returnDates: [
			{ date: '2018-09-06T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-07T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-08T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-09T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-10T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-11T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-12T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' }
		],
		__typename: 'DateFacet'
	},
	{
		date: '2018-09-10T00:00:00.000Z',
		returnDates: [
			{ date: '2018-09-06T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-07T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-08T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-09T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-10T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-11T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' },
			{ date: '2018-09-12T00:00:00.000Z', fare: null, __typename: 'DateLeafFacet' }
		],
		__typename: 'DateFacet'
	}
]

stories.add('AltDates', () => {
	return <AltDates onSelect={departureReturn => console.log(departureReturn)} alternativeDates={alternativeDates} />
})
