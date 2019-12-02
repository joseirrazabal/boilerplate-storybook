import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import { Tag } from '../Notification/Tags/TagsNotification'
import Button from '../../Atoms/Button/Button'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import Fare from '../../Atoms/Fare'

const FlightItinerary = ({ classes, children, totalFare, onSelect, seatsRemaining }) => (
	<ContainerCard shadow>
		<article className={classNames(classes.itinerary, classes.icon)}>
			{children}
			<ExpansionPanelActions className={classNames(classes.padding)}>
				<CardContent background="transparent" flex="row" justify="space-between" align="center">
					<div>
						<div style={{ marginBottom: 5 }}>
							<Tag icon="none" iconSize={15} size={10} color="red" content={`¡Últimos ${seatsRemaining} asientos!`} />
						</div>
						<Text bold italic content={<Fare amount={totalFare} />} size={25} color="black" />
						<Text content="Precio final" italic size={11} color="black" />
					</div>
					<div>
						<Button text="COMPRAR" radius border onClick={() => onSelect()} />
					</div>
				</CardContent>
			</ExpansionPanelActions>
		</article>
	</ContainerCard>
)

FlightItinerary.defaultProps = {
	totalFare: 0,
	onSelect: () => { },
	seatsRemaining: 0
}

FlightItinerary.propTypes = {

	totalFare: PropTypes.string,
	onSelect: PropTypes.func,
	seatsRemaining: PropTypes.number
}

const styles = () => ({
	itinerary: {
		width: '100%',
		backgroundColor: '#F9F8F7'
	},
	padding: { padding: 10 },
	icon: {
		':before': {
			fontSize: 35
		}
	}
})

export default withStyles(styles)(FlightItinerary)
