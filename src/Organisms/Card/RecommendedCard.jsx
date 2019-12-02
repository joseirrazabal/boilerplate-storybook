import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import { Tag } from '../Notification/Tags/TagsNotification'

const RecommendedCard = ({ classes, children, title }) => (
	<Paper className={classes.contentRecomended} elevation={1}>
		<div style={{ padding: 10 }}>
			<Tag icon="none" iconSize={16} size={11} content={title} color="white" />
		</div>
		{children}
	</Paper>
)

RecommendedCard.defaultProps = {
	title: '¡Este es el hotel que estas buscando!'
}

RecommendedCard.propTypes = {

	title: PropTypes.string
}

const styles = ({ palette }) => ({
	icon: {
		':before': {
			fontSize: 35
		}
	},
	contentRecomended: {
		border: `1px solid ${palette.secondary.main}`,
		overflow: 'hidden',
		background: palette.secondary.main
	}
})

export default withStyles(styles)(RecommendedCard)
