import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { TagsNotification, Tag } from './TagsNotification'
import IconsFontComponent from '../../../Atoms/IconsFont'

const GenericTags = ({ classes, lastMinute, offer, tagDay, creditCard }) => (
	<div className={classes.tag}>
		{lastMinute ? (
			<TagsNotification background="white" height={30} padding={5}>
				<Tag icon="fire" iconSize={12} content="Last Minute" color="FF4D4D" />
			</TagsNotification>
		) : (
			<React.Fragment />
		)}
		{offer ? (
			<TagsNotification background="#55C443" height={30} padding={5}>
				<Tag icon="offer" iconSize={15} content="20%off" color="white" />
			</TagsNotification>
		) : (
			<React.Fragment />
		)}
		{tagDay ? (
			<TagsNotification background="violet" height={30} padding={5}>
				<Tag iconSize={15} content="Cyber Monday" color="white" />
			</TagsNotification>
		) : (
			<React.Fragment />
		)}
		{creditCard ? (
			<TagsNotification background="orange" padding={0}>
				<div style={{ paddingRight: 10 }}>
					<IconsFontComponent color="white" title="12 cuotas con visa" icon="flaticon-credit-card-5" />
				</div>
			</TagsNotification>
		) : (
			<React.Fragment />
		)}
	</div>
)
GenericTags.defaultProps = {
	tagDay: false,
	lastMinute: false,
	offer: false,
	creditCard: false
}
GenericTags.propTypes = {
	tagDay: PropTypes.string,
	lastMinute: PropTypes.string,
	offer: PropTypes.string,
	creditCard: PropTypes.string
}
const styles = () => ({
	tag: {
		position: 'absolute',
		top: 10,
		left: 0
	}
})
export default withStyles(styles)(GenericTags)
