import React from 'react'
import { storiesOf } from '@storybook/react'
import IndicadorMapaVuelos from './../src/Molecules/Indicadores/IndicadorMapaVuelos'
import Indicador from './../src/Molecules/Indicadores/IndicadorMapa'
import { Map } from '../src'

const stories = storiesOf('LandingMap', module)
const initialProps = { lat: -59.95, lng: 30.33 }

const places = [
	{
		city: null,
		lat: -9.511667,
		lng: -35.8,
		name: 'Maceio',
		type: 'city'
	},
	{
		city: 'Buenos Aires',
		lat: -34.818611,
		lng: -58.535278,
		name: 'Ezeiza Ministro Pistarini',
		type: 'airport'
	}
]
const fitBounds = (places, map, maps) => {
	const bounds = new maps.LatLngBounds()
	for (const marker of places) {
		bounds.extend(new maps.LatLng(marker.lat, marker.lng))
	}

	map.fitBounds(bounds)
	map.setZoom(map.zoom - 2)
}

const renderPolylines = places => (map, maps) => {
	/** Example of rendering geodesic polyline */
	let geodesicPolyline = new maps.Polyline({
		path: places,
		geodesic: true,
		strokeColor: '#e1122e',
		strokeOpacity: 1.0,
		strokeWeight: 4
	})
	geodesicPolyline.setMap(map)

	/** Example of rendering non geodesic polyline (straight line) */
	let nonGeodesicPolyline = new maps.Polyline({
		path: places,
		geodesic: false,
		strokeColor: 'black',
		strokeOpacity: 0.3,
		strokeWeight: 3
	})
	nonGeodesicPolyline.setMap(map)

	fitBounds(places, map, maps)
}

stories.add('Map vuelos generic', () => {
	return (
		<Map center={{ lat: places[0].lat, lng: places[0].lng }} renderPolylines={renderPolylines(places)}>
			{places.map((place, i) => (
				<Indicador
					key={i}
					lat={place.lat}
					lng={place.lng}
					text={place.name}
					point={6}
					isSelected
					principalText={'hotel tres vagos'}
				/>
			))}
		</Map>
	)
})

stories.add('Map hotel generic', () => {
	return (
		<Map center={{ lat: -34.6019076, lng: -58.3809921 }} defaultZoom={15} height={300} text="Buenos Aires" width="100%">
			<Indicador point={6} isSelected principalText="hotel tres vagos" lat={-34.6019076} lng={-58.3809921} />
		</Map>
	)
})
