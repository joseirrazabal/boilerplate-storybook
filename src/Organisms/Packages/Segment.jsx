import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import get from 'lodash/get'
import Tooltip from '@material-ui/core/Tooltip'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import IconsFont from '../../Atoms/IconsFont'
import FlightCoord from './FlightCoord'
import AirlineIconChildren from '../../Molecules/AirlineIcon/AirlineIcon'

const formatTotalDuration = val => {
	const time = moment.duration(val, 'minutes').locale('es')
	const minutes = time.minutes()
	const hours = Math.floor(time.asHours())
	let duration = hours ? `${hours}hs ` : ''
	duration += minutes ? `${minutes}min` : ''
	return duration
}

const getAirlineName = (airline, marketingAirline) => {
	const marketingName = get(marketingAirline, 'name') || get(marketingAirline, 'code')
	const airlineName = get(airline, 'name') || get(airline, 'code')
	return marketingName ? `${marketingName} operado por ${airlineName}` : airlineName
}

const FlightDesc = ({ flightNumber, airline, operatingAirline }) => (
	<div style={{ margin: 'auto', textAlign: 'center' }}>
		<div style={{ display: 'inline-flex' }}>
			{/* <img
				style={{ marginRight: 5, height: 20, width: 20 }}
				src={`http://ar.staticontent.com/flights-images/12.33.0/common/airlines/25x25/${airline.code}.png`}
			/> */}
			<AirlineIconChildren code={airline.code} iso />
			<Text style={{ marginRight: 20 }} bold content={airline.name} size={14} color="black" />
		</div>
		<Text
			center
			content={`Vuelo ${flightNumber}${
				operatingAirline.code !== airline.code ? ` operado por ${operatingAirline.name}` : ''
				}`}
			size={11}
			color="black"
		/>
	</div>
)

const Segment = ({ segment, nextSegment }) => {
	if (!segment || !segment.flightNumber) {
		return null
	}

	const { flightNumber, departure, arrival, elapsedTime, scaleTime, cabin, airline, marketingAirline } = segment
	const differentAirport = nextSegment && get(nextSegment, 'departure.airport.code') !== get(arrival, 'airport.code')
	return (
		<Grid container direction="column" spacing={0} style={{ backgroundColor: 'white' }}>
			<Grid item className="borderB padding5" style={{ display: 'flex' }} xs={12}>
				<FlightDesc flightNumber={flightNumber} airline={marketingAirline} operatingAirline={airline} />
			</Grid>
			<Grid container item>
				<Grid item xs={12} sm={4} className="paddingBox">
					<FlightCoord coord={departure} />
				</Grid>
				<Grid xs={12} sm={4} item className="paddingBox flexCenterVerticalRow">
					<Text center content={`- Clase:  ${cabin.name} -`} size={11} color="black" />
					<Text bold center content={`Tiempo de vuelo ${formatTotalDuration(elapsedTime)}`} size={12} color="black" />
					{get(segment, 'stops.length') > 0 && (
						<Text
							bold
							center
							content={segment.stops.map(stop => (
								<div>
									<div style={{ display: 'inline-flex' }}>
										{'Parada técnica en  '}{' '}
										<Tooltip
											style={{ margin: '0 5px' }}
											title={`${stop.arrival.airport.name}, ${stop.arrival.airport.city}`}
											placement="down"
										>
											<div>{stop.arrival.airport.code}</div>
										</Tooltip>
										{`de ${formatTotalDuration(stop.duration)}`}
									</div>
								</div>
							))}
							size={10}
							color="black"
						/>
					)}
				</Grid>
				<Grid xs={12} sm={4} item className="paddingBox">
					<FlightCoord coord={arrival} arriving />
				</Grid>
				{scaleTime &&
					(differentAirport ? (
						<CambioAeropuerto scaleTime={scaleTime} />
					) : (
							<CambioAvion airport={arrival.airport} scaleTime={scaleTime} />
						))}
			</Grid>
		</Grid>
	)
}

Segment.propTypes = {
	segment: PropTypes.object.isRequired
}

const CambioAvion = ({ scaleTime, airport }) => (
	<Grid item className="background-gray-secuondary padding10" xs={12}>
		<Grid container spacing={0}>
			<Grid item xs={2} sm={2} className="flexCenterVertical">
				<Text size={10} content="Cambio de Avión" />
			</Grid>
			<Grid item xs={2} sm={2} className="flexCenterVertical">
				<IconsFont style={{ margin: 'auto' }} size={20} icon="flaticon-take-off" />
			</Grid>
			<Grid item xs={4} sm={4} className="flexCenterVertical">
				<Text center size={10} content={`Espera de ${formatTotalDuration(scaleTime)} en ${airport.name}`} />
			</Grid>
			<Grid item xs={4} sm={4} className="flexCenterVertical">
				<IconsFont style={{ margin: 'auto' }} size={20} icon="flaticon-transport-5" />
			</Grid>
		</Grid>
	</Grid>
)

CambioAvion.propTypes = {
	scaleTime: PropTypes.number.isRequired,
	airport: PropTypes.shape({
		code: PropTypes.string,
		name: PropTypes.string
	}).isRequired
}

const CambioAeropuerto = ({ scaleTime, airport }) => (
	<Grid item className="padding10 flexCenterVertical" xs={12} style={{ background: 'gray' }}>
		<div className="flexCenterVertical">
			<Text size={10} color="white" content="Cambio de Aeropuerto" />
		</div>
		<div className="flexCenterVertical">
			<IconsFont color="white" style={{ margin: 'auto' }} size={20} icon="flaticon-traveler-with-a-suitcase" />
		</div>
		<div className="flexCenterVertical">
			<Text center size={10} color="white" content={`Tiempo estimado en traslado: ${formatTotalDuration(scaleTime)}`} />
		</div>
		<div className="flexCenterVertical">
			<IconsFont color="white" style={{ margin: 'auto' }} size={20} icon="flaticon-ticket-1" />
		</div>
	</Grid>
)

CambioAeropuerto.propTypes = {
	scaleTime: PropTypes.number.isRequired,
	airport: PropTypes.shape({
		code: PropTypes.string,
		name: PropTypes.string
	}).isRequired
}

export default Segment
