import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

const styles = {
	ContainerLg: {
		margin: '0 auto',
		width: '100%',
		maxWidth: 1250
	}
}

function ContainerLg(props) {
	const { classes, children } = props

	return <div className={classes.ContainerLg}>{children}</div>
}
ContainerLg.defaultProps = {}
ContainerLg.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(ContainerLg)
