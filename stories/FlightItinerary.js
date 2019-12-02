import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, object, select, array } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import {
	RecommendedFlight,
	FlightItinerary,
	Flight,
	FlightItineraryResumen,
	LoadingFlight,
	FlightPackage
} from '../src'

const stories = storiesOf('FlightItinerary', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

stories.add('FlightItinerary Final', () => {
	const flight = {
		airline: { code: 'IB', name: 'Iberia' },
		cabin: { code: 'Y', name: 'Economy' },
		scales: 2,
		totalFare: 3002.32,
		going: {
			elapsedTime: 1280,
			scalesTime: 410,
			baggage: 1,
			segments: [
				{
					aircraft: { code: '332', name: 'Airbus 332' },
					airline: { code: 'IB', name: 'Iberia' },
					marketingAirline: { code: 'AV', name: 'VY airline' },
					cabin: { code: 'Y', name: 'Economy' },
					meal: 'G',
					seatsRemaining: '9',
					marriageGrp: 'O',
					resBookDesigCode: 'O',
					elapsedTime: 760,
					scaleTime: 410,
					flightNumber: 'IB2602',
					airportChange: false,
					stops: [
						{
							elapsedTime: 760,
							duration: 410,
							arrival: {
								airport: { code: 'EZE', name: 'Ministro Pistarini', city: 'Buenos Aires' },
								date: '2018-07-07T12:05:00+0200'
							},
							departure: {
								airport: { code: 'BCN', name: 'El Prat Barcelona' },
								date: '2018-07-08T05:45:00+0200'
							}
						}
					],
					departure: {
						airport: { code: 'EZE', name: 'Ministro Pistarini' },
						date: '2018-07-07T12:05:00+0200'
					},
					arrival: {
						airport: { code: 'BCN', name: 'El Prat Barcelona' },
						date: '2018-07-08T05:45:00+0200'
					}
				},
				{
					aircraft: '320',
					airline: { code: 'AV', name: 'VY airline' },
					marketingAirline: { code: 'AV', name: 'VY airline' },
					cabin: { code: 'Y', name: 'Economy' },
					meal: 'G',
					seatsRemaining: '9',
					marriageGrp: 'I',
					resBookDesigCode: 'O',
					elapsedTime: 110,
					scaleTime: null,
					flightNumber: 'VY8030',
					airportChange: false,
					departure: {
						airport: { code: 'BCN', name: 'El Prat Barcelona' },
						date: '2018-07-08T12:35:00+0200'
					},
					arrival: {
						airport: { code: 'ORY', name: 'ORY Airport' },
						date: '2018-07-08T14:25:00+0200'
					}
				}
			]
		},
		return: {
			elapsedTime: 1415,
			scalesTime: 815,
			baggage: 2,
			segments: [
				{
					aircraft: { code: '320', name: 'Airbus 320' },
					airline: { code: 'AV', name: 'VY Airline' },
					marketingAirline: { code: 'AV', name: 'VY airline' },
					cabin: { code: 'Y', name: 'Economy' },
					meal: 'G',
					seatsRemaining: '9',
					marriageGrp: 'O',
					resBookDesigCode: 'O',
					elapsedTime: 100,
					scaleTime: 515,
					flightNumber: 'VY8031',
					airportChange: false,
					departure: {
						airport: { code: 'ORY', name: 'ORY Airport' },
						date: '2018-07-09T15:15:00+0200'
					},
					arrival: {
						airport: { code: 'BCN', name: 'El Prat Barcelona' },
						date: '2018-07-09T16:55:00+0200'
					}
				},
				{
					aircraft: { code: '332', name: 'Airbus 332' },
					airline: { code: 'IB', name: 'Iberia' },
					marketingAirline: { code: 'AV', name: 'VY airline' },
					cabin: { code: 'Y', name: 'Economy' },
					meal: 'G',
					seatsRemaining: '9',
					marriageGrp: 'I',
					resBookDesigCode: 'O',
					elapsedTime: 800,
					scaleTime: null,
					flightNumber: 'IB2601',
					airportChange: false,
					departure: {
						airport: { code: 'BCN', name: 'El Prat Barcelona' },
						date: '2018-07-10T01:30:00-0300'
					},
					arrival: {
						airport: { code: 'EZE', name: 'Ministro Pistarini' },
						date: '2018-07-10T09:50:00-0300'
					}
				}
			]
		}
	}

	return (
		<RecommendedFlight discount={20}>
			<FlightItinerary
				seatsRemaining={number('Asientos restantes', 3)}
				totalFare={text('precio total', flight.totalFare)}
			>
				<Flight differentAirport="arrival" trip={flight.going} airline={flight.airline} />
				<Flight differentAirport="departure" routeDir trip={flight.return} airline={flight.airline} />
			</FlightItinerary>
		</RecommendedFlight>
	)
})

stories.add('FlightItinerary', () => {
	const flight = {
		directionInd: 'Return',
		totalFare: 302.99,
		departureDate: {
			date: '2018-07-07T07:00:00',
			gmt: 1
		},
		goingSegments: [
			{
				operatingAirline: {
					code: 'AS',
					name: 'Alaska Airlines',
					flightNumber: 'AS1399'
				},
				departureAirport: {
					code: 'JFK',
					name: 'John F Kennedy International'
				},
				departureDate: {
					date: '2018-07-07T07:00:00',
					gmt: -4
				},
				arrivalAirport: {
					code: 'LAX',
					name: 'Los Angeles International'
				},
				arrivalDate: {
					date: '2018-07-07T10:18:00',
					gmt: -7
				},
				elapsedTime: 378
			}
		],
		returnDate: {
			date: '2018-07-09T17:20:00',
			gmt: 1
		},
		returnSegments: [
			{
				operatingAirline: {
					code: 'AS',
					name: 'Alaska Airlines',
					flightNumber: 'AS1480'
				},
				arrivalDate: {
					date: '2018-07-09T18:20:00',
					gmt: -7
				},
				arrivalAirport: {
					code: 'LAS',
					name: 'Mc Carran International'
				},
				elapsedTime: 60,
				departureDate: {
					date: '2018-07-09T17:20:00',
					gmt: -7
				},
				departureAirport: {
					code: 'LAX',
					name: 'Los Angeles International'
				}
			},
			{
				operatingAirline: {
					code: 'AS',
					name: 'Alaska Airlines',
					flightNumber: 'AS1260'
				},
				arrivalDate: {
					date: '2018-07-10T05:55:00',
					gmt: -4
				},
				arrivalAirport: {
					code: 'JFK',
					name: 'John F Kennedy International'
				},
				elapsedTime: 300,
				departureDate: {
					date: '2018-07-09T21:55:00',
					gmt: -7
				},
				departureAirport: {
					code: 'LAS',
					name: 'Mc Carran International'
				}
			}
		]
	}

	return (
		<FlightItineraryResumen
			goingSegments={object('Segmentos', flight.goingSegments)}
			returnSegments={object('Segmentos', flight.returnSegments)}
		/>
	)
})

stories.add('LoadingFlight', () => <LoadingFlight />)

stories.add('FlightItinerary Package', () => {
	const flights = {
		segments: [
			{
				departure_date: '2019-05-27 18:20',
				arrival_date: '2019-05-27 21:20',
				supplier: {
					value: 'AR',
					label: 'Aerolineas Argentinas',
					__typename: 'Supplier'
				},
				origin: {
					label: 'Ezeiza, Argentina',
					value: 'EZE',
					__typename: 'OriginSegment'
				},
				destination: {
					label: 'Río de Janeiro, Brasil',
					value: 'RIO',
					__typename: 'OriginSegment'
				},
				__typename: 'Segment'
			}
		],
		__typename: 'Trip'
	}

	return (
		<React.Fragment>
			<FlightPackage differentAirport="arrival" trip={flights.segments[0]} airline={flights.segments[0]} />
			<FlightPackage differentAirport="departure" routeDir trip={flights.segments[0]} airline={flights.segments[0]} />
		</React.Fragment>
	)
})
