import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { MdFlightLand, MdFlightTakeoff } from 'react-icons/md'
import Tooltip from '@material-ui/core/Tooltip'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

const IndicadorMapaVuelos = ({ classes, destination, airport, Dince, Until }) => (
	<Tooltip
		title={
			<div>
				<Text color="white" size={11} center>
					{destination}
				</Text>
				<Text color="white" size={10} italic center>
					{airport}
				</Text>
			</div>
		}
		placement="top"
	>
		<div style={{ maxWidth: 35, position: 'relative' }}>
			<ContainerCard>
				<CardContent flex="row" align="stretch" justify="space-between">
					{Dince ? (
						<div className="iconLocate ida">
							<MdFlightTakeoff size={25} color="white" />
						</div>
					) : (
						<div className="iconLocate vuelta">
							<MdFlightLand size={25} color="white" />
						</div>
					)}
				</CardContent>
			</ContainerCard>
		</div>
	</Tooltip>
)

IndicadorMapaVuelos.defaultProps = {
	destination: 'Miami',
	airport: 'Aeropuerto Falopa',
	Dince: false,
	Until: false
}

IndicadorMapaVuelos.propTypes = {

	destination: PropTypes.string,
	airport: PropTypes.string,
	Dince: PropTypes.bool,
	Until: PropTypes.bool
}
const styles = () => {}

export default withStyles(styles)(IndicadorMapaVuelos)
