import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'; import classNames from 'classnames'

class VideoBg extends React.Component {
	render() {
		const { classes, useDefaultCursor } = this.props
		return (
			<div className={classNames(classes.contentVideo)}>
				<video autoPlay loop className={classNames(classes.videoBackground)} muted >
					<source
						src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761"
						type="video/mp4"
					/>
				</video>
			</div>
		)
	}
}
VideoBg.defaultProps = {}

VideoBg.propTypes = {

}

export default withStyles(mauri => ({
	/* The only rule that matters */
	contentVideo: {
		minHeight: 400,
		width: '100%'
	},
	videoBackground: {
		position: 'fixed',
		right: 0,
		bottom: 0,
		minWidth: '100%',
		minHeight: '100%',
		width: 'auto',
		height: 'auto',
		zIndex: -100
	}
}))(VideoBg)
