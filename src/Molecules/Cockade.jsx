import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Tag, TagsNotification } from '../Organisms/Notification/Tags/TagsNotification'

class Cockade extends React.PureComponent {
	render() {
		const {
			title,
			icon,
			classes: { cucarda }
		} = this.props
		return (
			<div className={cucarda}>
				<TagsNotification background="#FFFFFF">
					<Tag width={30} height={25} icon={icon} iconSize={20} size={12} content={title} />
				</TagsNotification>
			</div>
		)
	}
}

Cockade.propTypes = {

	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
}

export default withStyles(() => ({
	cucarda: {
		position: 'absolute',
		left: 0,
		top: 0,
		zIndex: 1,
		display: 'flex'
	}
}))(Cockade)
