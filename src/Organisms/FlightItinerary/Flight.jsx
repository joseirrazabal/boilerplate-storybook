import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import moment from 'moment'
import Hidden from '@material-ui/core/Hidden'
import { Tag, TagsNotification } from '../Notification/Tags/TagsNotification'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import IconsFont from '../../Atoms/IconsFont'
import Image from '../../Atoms/Images/Image'
import FlightCoord from './FlightCoord'
import Segment from './Segment'
import AirlineIconChildren from '../../Molecules/AirlineIcon/AirlineIcon'
const formatDiffDays = (departure, arrival) => {
	const departuredate = moment(departure.date).parseZone()
	const arrivaldate = moment(arrival.date).parseZone()

	const diffDays = moment.duration(arrivaldate.startOf('day').diff(departuredate.startOf('day'))).days()
	return diffDays ? ` +${diffDays}` : ''
}

const formatTotalDuration = val => {
	const time = moment.duration(val, 'minutes').locale('es')
	const minutes = time.minutes()
	const hours = Math.floor(time.asHours())
	let duration = hours ? `${hours}hs ` : ''
	duration += minutes ? `${minutes}min` : ''
	return duration
}

const formatScales = scales =>
	scales === 1 ? '- Directo -' : scales === 2 ? `- 1 escala -` : `- ${scales - 1} escalas -`

const FlightTitle = ({ routeDir, coord }) => (
	<span>
		<strong>{routeDir ? 'VUELTA' : 'IDA'}</strong> - {moment(coord.date).format('LL')}
	</span>
)

const FlightIcon = ({ routeDir }) => (
	<div style={{ transform: `rotate(${routeDir ? '225deg' : '45deg'})`, marginLeft: 5 }}>
		<IconsFont className="icon" color="#F23434" size={26} icon="flaticon-transport-1" />
	</div>
)

const AirlineIcon = ({ airline }) => (
	<Tooltip title={airline.name} placement="right">
		<div style={{ width: '100%' }}>
			<AirlineIconChildren code={airline.code} iso />
		</div>
	</Tooltip>
)

class Flight extends React.Component {
	state = { expanded: false }

	render() {
		const { classes, routeDir, airline, trip, diffArrival, diffDeparture, iconMore } = this.props
		const { expanded } = this.state
		if (!trip || !trip.segments.length) return null

		const { departure } = trip.segments[0]
		const { arrival } = trip.segments.slice(-1)[0]

		return (
			<div>
				<div className={classes.navIdaVuelta}>
					<div style={{ width: '100%' }}>
						<Text italic size={11} color="white" content={<FlightTitle routeDir={routeDir} coord={departure} />} />
					</div>

					{(diffArrival || diffDeparture) && (
						<div
							style={{
								borderRadius: 6,
								overflow: 'hidden',
								border: '0.5px solid white',
								minWidth: 150,
								marginRight: 10
							}}
						>
							<TagsNotification>
								<Tag icon="airport" iconSize={15} size={11} content="Cambio de aeropuerto" color="white" />
							</TagsNotification>
						</div>
					)}
					<div style={{ display: 'flex', alignItems: 'flex-end' }}>
						<Tooltip title="Incluye un equipaje de mano" placement="top">
							<div>
								<div className="bag_small active" />
								{/* <div className="bag_small disable" /> */}
							</div>
						</Tooltip>
						<Tooltip
							title={
								trip.baggage
									? `Incluye ${trip.baggage} equipaje/s para despachar`
									: `No incluye equipaje para despachar`
							}
							placement="top"
						>
							<div>{trip.baggage ? <div className="bag_big active" /> : <div className="bag_big disable" />}</div>
						</Tooltip>
					</div>
				</div>

				<ExpansionPanel
					onChange={() => this.setState(state => ({ expanded: !state.expanded }))}
					// className={classes.margin0}
					style={{ padding: 0, margin: 0 }}
				>
					<ExpansionPanelSummary
						// className={classes.margin0}
						expanded={expanded}
						expandIcon={iconMore ? <ExpandMoreIcon /> : null}
						style={{ padding: '0 8px 0 8px' }}
					>
						<Grid container>
							<Grid item xs={2} sm={1} md={1} className="flexCenterVertical">
								<FlightIcon routeDir={routeDir} />
							</Grid>
							<Grid item xs={2} sm={1} md={1} lg={2} className="flexCenterVerticalCenter">
								{trip.segments
									.reduce((acc, cur) => {
										const currentAirline = cur.marketingAirline
										if (!acc.find(airline => airline.code === currentAirline.code)) acc.push(currentAirline)
										return acc
									}, [])
									.map(airline => (
										<AirlineIcon key={airline.code} airline={airline} />
									))}
							</Grid>
							<Grid item xs={8} sm={10} md={9} lg={8} style={{ margin: 'auto', display: 'flex' }}>
								<FlightCoord simple coord={departure} differentAirport={diffDeparture} />
								<div style={{ minHeight: 40, padding: '0 10px', width: '100%' }}>
									<Text
										center
										bold
										italic
										size={11}
										style={{ position: 'relative', bottom: 10 }}
										content={formatScales(trip.segments.length)}
									/>
									<div className={classes.line}>
										{trip.segments.map((segment, i) => {
											if (i > 0)
												return (
													<Tooltip key={i} title={segment.departure.airport.name} placement="top">
														<div className={classes.escala}>
															<Hidden xsDown>
																<Text
																	size={10}
																	style={{
																		marginTop: -16,
																		marginLeft: -8,
																		position: 'absolute',
																		width: 'auto'
																	}}
																	content={segment.departure.airport.code}
																/>
															</Hidden>
														</div>
													</Tooltip>
												)
										})}
									</div>
									<Text center size={11} content={formatTotalDuration(trip.elapsedTime)} />
								</div>
								<FlightCoord
									simple
									coord={arrival}
									diffDays={formatDiffDays(departure, arrival)}
									differentAirport={diffArrival}
								/>
							</Grid>
						</Grid>
					</ExpansionPanelSummary>

					<Divider />

					{expanded && (
						<ExpansionPanelDetails style={{ display: 'block', padding: 5, backgroundColor: '#f2f2f2' }}>
							{trip.segments.map((segment, i) => (
								<Segment key={i} segment={segment} nextSegment={trip.segments[i + 1]} />
							))}
							<Equipaje hand checked={trip.baggage} />
							<Grid item className="background-gray-secuondary marginT10 padding10" xs={12}>
								<Grid container spacing={0}>
									<Grid item xs={12} sm={12} className="flexCenterVerticalRow">
										<div className="flexCenterVertical">
											<div style={{ marginRight: 10 }}>
												<IconsFont size={18} icon="flaticon-time" />
											</div>
											<Text size={10} content={` Duración total ${formatTotalDuration(trip.elapsedTime)}`} />
										</div>
									</Grid>
								</Grid>
							</Grid>
						</ExpansionPanelDetails>
					)}
				</ExpansionPanel>
			</div>
		)
	}
}

Flight.defaultProps = {
	airline: { code: 'IB' },
	iconMore: true
}

Flight.propTypes = {
	iconMore: PropTypes.bool
}

const Equipaje = ({ hand, checked }) => (
	<Grid item className="background-gray-secuondary padding10" xs={12}>
		<Grid container spacing={0}>
			<Grid item xs={12} sm={2} className="flexCenterVertical">
				<Text size={10} content="Equipaje" />
			</Grid>
			{hand && (
				<Grid item xs={12} sm={5} className="flexCenterVertical">
					<IconsFont size={20} icon="flaticon-luggage" />
					<Text left size={10} style={{ marginLeft: 10 }} content="Incluye equipaje de mano" />
				</Grid>
			)}
			<Grid item xs={12} sm={5} className="flexCenterVertical">
				<IconsFont size={20} icon="flaticon-suitcase" />
				<Text
					left
					size={10}
					style={{ marginLeft: 10 }}
					content={
						checked
							? checked > 1
								? `Incluye ${checked} valijas para despachar`
								: `Incluye una valija a despachar`
							: `El vuelo no incluye valijas para despachar`
					}
				/>
			</Grid>
		</Grid>
	</Grid>
)

Equipaje.defaultProps = {
	hand: false,
	checked: 0
}

Equipaje.propTypes = {
	hand: PropTypes.bool,
	checked: PropTypes.number
}

const styles = ({ palette }) => ({
	marginR15: {
		marginRight: 15
	},
	margin0: {
		margin: 0,
		padding: 0,
		paddingRight: '8px'
	},
	luggage: {
		background: palette.primary.green,
		borderRadius: 50
	},
	icon: {
		'&:before': {
			margin: 0,
			fontSize: 25
		}
	},
	multiAirline: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	navIdaVuelta: {
		backgroundColor: 'gray',
		padding: '5px 10px',
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	line: {
		height: 1,
		width: '100%',
		margin: 'auto',
		backgroundColor: palette.primary.main,
		position: 'relative',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',

		':before': {
			content: "''",
			backgroundColor: 'red',
			height: 6,
			width: 6,
			left: 0,
			position: 'absolute',
			marginTop: 0,
			borderRadius: 50
		},
		':after': {
			content: "''",
			backgroundColor: 'red',
			height: 6,
			width: 6,
			right: 0,
			position: 'absolute',
			marginTop: 0,
			borderRadius: 50
		}
	},
	escala: {
		width: 6,
		height: 6,
		borderRadius: 50,
		backgroundColor: 'white',
		border: `1px solid${palette.primary.main}`
	}
})

export default withStyles(styles)(Flight)
