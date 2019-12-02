import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
/* import { Text } from '../../Atoms/TitleLabel/TitleLabel' */
import { Tag } from '../Notification/Tags/TagsNotification'

const RecommendedFlight = ({ classes, children, discount, seatsRemaining }) => (
	<Paper elevation={2} className={classes.ContentRecomended}>
		<div style={{ padding: 10 }}>
			<Tag icon="none" iconSize={18} size={11} content="¡Este es el vuelo que estas buscando!" color="white" />
		</div>
		{children}
	</Paper>
)

RecommendedFlight.defaultProps = {
	totalFare: 0,
	onSelect: () => {},
	seatsRemaining: 0
}

RecommendedFlight.propTypes = {

	totalFare: PropTypes.number,
	onSelect: PropTypes.func,
	seatsRemaining: PropTypes.number
}

const styles = ({ palette }) => ({
	itinerary: {
		width: '100%',
		backgroundColor: palette.primary.main,
		boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
	},
	ContentRecomended: {
		border: `1px solid ${palette.secondary.main}`,
		background: palette.secondary.main,
		overflow: 'hidden'
	},
	icon: {
		':before': {
			fontSize: 35
		}
	}
})

export default withStyles(styles)(RecommendedFlight)
