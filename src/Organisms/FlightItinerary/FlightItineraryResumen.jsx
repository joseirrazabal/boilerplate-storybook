import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
/* import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions' */
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
/* import RadioGroup from '@material-ui/core/RadioGroup' */
import Tooltip from '@material-ui/core/Tooltip'
import moment from 'moment'
/* import momentDurationFormatSetup from 'moment-duration-format' */
/* import Button from '../../Atoms/Button/Button' */
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import IconsFont from '../../Atoms/IconsFont'
import Image from '../../Atoms/Images/Image'

class Flight extends Component {
	render() {
		const { classes, segments, routeDir, iconMore } = this.props

		segments.reduce((total, item, index) => total + item.elapsedTime, 0)

		const totalTimeAir = segments.reduce((total, item, index) => total + item.elapsedTime, 0)

		let origin = segments[0]
		let destination = segments.slice(-1)[0]

		const timeStart = moment(origin.departureDate.date).utcOffset(origin.departureDate.gmt)
		const timeEnd = moment(destination.arrivalDate.date).utcOffset(destination.arrivalDate.gmt)
		let totalTime = timeEnd.diff(timeStart, 'seconds')

		return (
			<div>
				<div key={1} className={classNames(classes.navIdaVuelta)}>
					<Text
						italic
						size={11}
						color="white"
						content={
							<span>
								<strong>{(routeDir && 'IDA') || 'VUELTA'}</strong> -{' '}
								{moment(origin.departureDate.date)
									.utcOffset(origin.departureDate.gmt)
									.format('LL')}
							</span>
						}
					/>
				</div>

				<ExpansionPanel key={2} className={classNames(classes.margin0)}>
					<ExpansionPanelSummary
						className={classNames(classes.margin0)}
						expandIcon={iconMore ? <ExpandMoreIcon /> : null}
					>
						<Grid container style={{ padding: '0 60px 0 10px' }}>
							<Grid item xs={5} sm={4} xl={3} className="flexCenterVertical">
								<div>
									<IconsFont className="icon" color="#F23434" size={26} icon="flaticon-transport-1" />
								</div>
								<div style={{ width: '50%' }}>
									<Image
										className="airline"
										alt={origin.operatingAirline.name}
										height={25}
										// image="//ar.staticontent.com/flights-images/12.33.0/common/airlines/25x25/L0.png"
										image="http://prod-upate.s3.amazonaws.com/images/airlines/iso/AV.png"
									/>
								</div>
								<div>
									<FormControlLabel style={{ diplay: 'table', margin: 'auto' }} control={<Radio />} />
								</div>
								<div>
									<Text center content={origin.departureAirport.code} size={13} color="black" />
									<Text
										center
										content={moment(origin.departureDate.date)
											.utcOffset(origin.departureDate.gmt)
											.format('HH:mm')}
										size={11}
										color="black"
									/>
								</div>
							</Grid>
							<Grid item xs={5} sm={7} xl={7} style={{ margin: 'auto' }}>
								<div className="flexCenterVerticalRow" style={{ minHeight: 40, padding: '0 10px' }}>
									<div key={1} className={classNames(classes.line)}>
										{segments.map((item, i) => {
											if (i > 0)
												return (
													<Tooltip title={item.departureAirport.name} placement="top">
														<div className={classNames(classes.escala)}>
															<Text
																size={10}
																style={{
																	marginTop: -16,
																	marginLeft: -8,
																	position: 'absolute'
																}}
																content={item.departureAirport.code}
															/>
														</div>
													</Tooltip>
												)
										})}
									</div>
									<Text
										key={2}
										center
										size={11}
										content={`${moment
											.duration(totalTimeAir, 'minutes')
											.locale('es')
											.humanize()} hs en vuelo`}
									/>
								</div>
							</Grid>
							<Grid item xs={2} sm={1} xl={2} className="flexCenterVertical">
								<div>
									<Text center content={destination.arrivalAirport.code} size={13} color="black" />
									<Text
										center
										content={moment(destination.arrivalDate.date)
											.utcOffset(destination.arrivalDate.gmt)
											.format('HH:mm')}
										size={11}
										color="black"
									/>
								</div>
							</Grid>
						</Grid>
					</ExpansionPanelSummary>

					<Divider />

					{segments.map((item, i) => (
						<ExpansionPanelDetails style={{ padding: 5, backgroundColor: '#f2f2f2' }}>
							<Grid container spacing={0} style={{ backgroundColor: 'white' }}>
								<Grid item className={'borderB padding5'} item xs={12}>
									<Text
										center
										size={12}
										content={'Vuelo ' + item.operatingAirline.flightNumber + ' - ' + item.operatingAirline.code}
									/>
								</Grid>
								<Grid item container spacing={0} item xs={12}>
									<Grid xs={12} sm={4} className={'paddingBox'}>
										<Text
											center
											content={moment(item.departureDate.date)
												.utcOffset(item.departureDate.gmt)
												.format('LL')}
											size={11}
											color={'black'}
										/>
										<Text center content={item.departureAirport.name} size={14} color={'black'} />
										<Text
											center
											content={
												'Salida: ' +
												moment(item.departureDate.date)
													.utcOffset(item.departureDate.gmt)
													.format('HH:mm')
											}
											size={11}
											color={'black'}
										/>
										<Text center content={item.departureAirport.name} size={11} color={'black'} />
									</Grid>
									<Grid xs={12} sm={4} className={'paddingBox flexCenterVerticalRow'}>
										<Text center content={'- Clase:  Económica -'} size={11} color={'black'} />
										<Text
											bold
											center
											content={
												'Tiempo de Vuelo ' +
												moment
													.duration(item.elapsedTime, 'minutes')
													.locale('es')
													.humanize()
											}
											size={12}
											color={'black'}
										/>
									</Grid>
									<Grid xs={12} sm={4} className={'paddingBox'}>
										<Text
											center
											content={moment(item.arrivalDate.date)
												.utcOffset(item.arrivalDate.gmt)
												.format('LL')}
											size={11}
											color={'black'}
										/>
										<Text center content={item.arrivalAirport.name} size={14} color={'black'} />
										<Text
											center
											content={
												'LLegada: ' +
												moment(item.arrivalDate.date)
													.utcOffset(item.arrivalDate.gmt)
													.format('HH:mm')
											}
											size={11}
											color={'black'}
										/>
										<Text center content={item.arrivalAirport.name} size={11} color={'black'} />
									</Grid>
								</Grid>

								{i != segments.length - 1 && <CambioAvion />}
								{i == segments.length - 1 && <Equipaje />}
								{i == segments.length - 1 && (
									<Grid item className={'background-gray-secuondary marginT10 padding10'} item xs={12}>
										<Grid container spacing={1}>
											<Grid item xs={12} sm={12} className={'flexCenterVerticalRow'}>
												<div className={'flexCenterVertical'}>
													<IconsFont key={1} className={classNames(classes.marginR15)} size={20} icon="flaticon-time" />
													<Text
														key={2}
														size={10}
														content={
															'Duración total ' +
															moment
																.duration(totalTime, 'second')
																.locale('es')
																.humanize()
														}
													/>
												</div>
											</Grid>
										</Grid>
									</Grid>
								)}
							</Grid>
						</ExpansionPanelDetails>
					))}
				</ExpansionPanel>
			</div>
		)
	}
}

class CambioAvion extends React.Component {
	render() {
		return (
			<Grid item className="background-gray-secuondary padding10" item xs={12}>
				<Grid container spacing={1}>
					<Grid item xs={2} sm={3} className="flexCenterVertical">
						<Text size={10} content="Cambio de Avion" />
					</Grid>
					<Grid item xs={8} sm={5} className="flexCenterVertical">
						<IconsFont size={20} icon="flaticon-traveler-with-a-suitcase" />
						<Text right size={10} content="Espera de 1h 15m en Santiago de Chile" />
					</Grid>
					<Grid item xs={2} sm={4} className="flexCenterVertical">
						<IconsFont size={20} icon="flaticon-travel-1" />
					</Grid>
				</Grid>
			</Grid>
		)
	}
}
class Equipaje extends React.Component {
	render() {
		return (
			<Grid item className="background-gray-secuondary padding10" item xs={12}>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={2} className="flexCenterVertical">
						<Text size={10} content="Equipaje" />
					</Grid>
					<Grid item xs={12} sm={5} className="flexCenterVertical">
						<IconsFont size={20} icon="flaticon-luggage" />
						<Text left size={10} style={{ marginLeft: 10 }} content="Incluye equipaje de mano" />
					</Grid>
					<Grid item xs={12} sm={5} className="flexCenterVertical">
						<IconsFont size={20} icon="flaticon-suitcase" />
						<Text left size={10} style={{ marginLeft: 10 }} content="Incluye equipaje para despachar" />
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

class FlightItineraryResumen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { classes } = this.props

		return (
			<article className={classNames(classes.FlightItinerary, classes.icon)}>
				{this.props.goingSegments && <Flight classes={classes} routeDir segments={this.props.goingSegments} />}
				{this.props.returnSegments && (
					<Flight classes={classes} routeDir={false} segments={this.props.returnSegments} />
				)}
			</article>
		)
	}
}

FlightItineraryResumen.defaultProps = {
	image: '',
	iconMore: null
}

FlightItineraryResumen.propTypes = {
	image: PropTypes.string,
	iconMore: PropTypes.bool
}

export default withStyles(({ mauri: { color } }) => ({
	FlightItinerary: {
		width: '100%',
		backgroundColor: '#F9F8F7',
		boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
	},
	marginR15: {
		marginRight: 15
	},
	margin0: {
		margin: 0,
		padding: 0
	},
	icon: {
		':before': {
			fontSize: 35
		}
	},
	navIdaVuelta: {
		backgroundColor: color.secondary,
		padding: '5px 15px',
		position: 'relative'
	},
	line: {
		height: 1,
		width: '100%',
		margin: 'auto',
		backgroundColor: color.primary,
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
		border: '1px solid red'
	}
}))(FlightItineraryResumen)
