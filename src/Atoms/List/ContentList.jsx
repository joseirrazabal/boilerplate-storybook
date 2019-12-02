import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

const styles = () => ({
	global: {
		width: '100%',
		display: 'flex'
	}
})

const ContentList = ({ classes, paddingConfig, children, flex, justify, align }) => (
	<ul
		className={classNames(classes.global)}
		style={{
			padding: paddingConfig,
			flexDirection: flex,
			alignSelf: align,
			justifyContent: justify
		}}
	>
		{children}
	</ul>
)
ContentList.defaultProps = {
	paddingConfig: 0,
	flex: 'column',
	justify: 'flex-start',
	align: 'flex-start'
}

ContentList.propTypes = {
	paddingConfig: PropTypes.number,
	flex: PropTypes.string,
	justify: PropTypes.string,
	align: PropTypes.string
}

export default withStyles(styles)(ContentList)
