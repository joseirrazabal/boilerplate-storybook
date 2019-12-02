import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

const styles = {
	ContainerSm: {
		margin: '0 auto',
		width: '100%',
		maxWidth: 500
	}
}

function ContainerSm(props) {
	const { classes, children } = props

	return <div className={classes.ContainerSm}>{children}</div>
}
ContainerSm.defaultProps = {}
ContainerSm.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(ContainerSm)
