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
	const departuredate = moment(departure).parseZone()
	const arrivaldate = moment(arrival).parseZone()

	const diffDays = moment.duration(arrivaldate.startOf('day').diff(departuredate.startOf('day'))).days()
	return diffDays ? ` +${diffDays}` : ''
}
const formatMinuteFligths = (departure, arrival) => {
	const departuredate = moment(departure).parseZone()
	const arrivaldate = moment(arrival).parseZone()

	const result = moment.duration(arrivaldate.diff(departuredate)).asHours()
	return result ? `${Math.round(result, 2)} Hs` : ''
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

const FlightTitle = ({ routeDir, date }) => (
	<span>
		<strong>{routeDir ? 'VUELTA' : 'IDA'}</strong> - {moment(date).format('LL')}
	</span>
)

const FlightIcon = ({ routeDir }) => (
	<div style={{ transform: `rotate(${routeDir ? '225deg' : '45deg'})`, marginLeft: 5 }}>
		<IconsFont className="icon" color="#F23434" size={26} icon="flaticon-transport-1" />
	</div>
)

const AirlineIcon = ({ airline }) => (
	<Tooltip title={airline.label} placement="right">
		<div style={{ width: '100%' }}>
			<AirlineIconChildren code={airline.value} iso />
		</div>
	</Tooltip>
)

class FlightPackage extends React.Component {
	render() {
		const { classes, trip, routeDir } = this.props

		if (!trip) return null

		const { departure_date, arrival_date, origin, destination, supplier } = trip //.segments[0]

		return (
			<div>
				<div className={classes.navIdaVuelta}>
					<div style={{ width: '100%' }}>
						<Text italic size={11} color="white" content={<FlightTitle routeDir={routeDir} date={departure_date} />} />
					</div>
				</div>

				<ExpansionPanel expanded={false} className={classes.margin0}>
					<ExpansionPanelSummary className={classes.margin0}>
						<Grid container style={{ padding: '0 60px 0 10px' }}>
							<Grid item xs={2} sm={1} md={1} className="flexCenterVertical">
								<FlightIcon routeDir={routeDir} />
							</Grid>
							<Grid item xs={2} sm={1} md={1} lg={2} className="flexCenterVerticalCenter">
								<AirlineIcon key={supplier.value} airline={supplier} />
							</Grid>
							<Grid item xs={8} sm={10} md={9} lg={8} style={{ margin: 'auto', display: 'flex' }}>
								<FlightCoord
									simple
									coord={{
										airport: {
											code: origin.value,
											name: origin.label
										},
										date: departure_date
									}}
								/>
								<div style={{ minHeight: 40, padding: '0 10px', width: '100%', marginTop: 15 }}>
									<Text center size={11} content={' '} />

									<div className={classes.line} />
									<Text center size={11} content={formatMinuteFligths(departure_date, arrival_date)} />
								</div>
								<FlightCoord
									simple
									coord={{
										airport: {
											code: destination.value,
											name: destination.label
										},
										date: arrival_date
									}}
									diffDays={formatDiffDays(departure_date, arrival_date)}
								/>
							</Grid>
						</Grid>
					</ExpansionPanelSummary>
				</ExpansionPanel>
			</div>
		)
	}
}

FlightPackage.defaultProps = {
	airline: { code: 'IB' }
}

FlightPackage.propTypes = {

}

const styles = ({ palette }) => ({
	marginR15: {
		marginRight: 15
	},
	margin0: {
		margin: 0,
		padding: 0
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

export default withStyles(styles)(FlightPackage)
