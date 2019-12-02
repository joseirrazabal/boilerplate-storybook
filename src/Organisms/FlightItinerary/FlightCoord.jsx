import React from 'react'
import moment from 'moment'
import Tooltip from '@material-ui/core/Tooltip'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

const FlightCoord = ({ simple, differentAirport, coord, diffDays, arriving }) => {
	if (simple)
		return (
			<Tooltip title={coord.airport.name} placement="right">
				<div>
					<Text
						style={differentAirport ? { border: '0.5px gray solid' } : null}
						center
						content={coord.airport.code}
						size={12}
						color="black"
					/>

					<Text
						center
						content={
							<div style={{ display: 'flex' }} >
								<span>
									{moment(coord.date)
										.parseZone()
										.format('HH:mm')}

								</span>
								<i style={{ color: '#FF4D4D', fontSize: 9, fontWeight: '900' }}>{diffDays}</i>
							</div>
						}
						size={10}
						color="black"
					/>
				</div>
			</Tooltip>
		)

	return (
		<div>
			<Text
				center
				content={moment(coord.date)
					.parseZone()
					.format('LL')}
				size={11}
				color="black"
			/>
			<Text bold center content={coord.airport.code} size={14} color="black" />
			<Text
				center
				content={`${arriving ? 'Llegada' : 'Salida'}: ${moment(coord.date)
					.parseZone()
					.format('HH:mm')}`}
				size={11}
				color="black"
			/>
			<Text center content={coord.airport.name} size={12} color="black" />
			<Text center content={coord.airport.city} size={11} color="black" />
		</div>
	)
}

export default FlightCoord
