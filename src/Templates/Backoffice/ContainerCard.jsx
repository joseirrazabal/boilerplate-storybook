import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

const styles = {
	ContainerCard: {
		background: 'white',
		boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
		borderRadius: 6,
		minHeight: 30,
		display: 'flex'
	}
}

function ContainerCard(props) {
	const { classes, children, flex, overflow, radius } = props

	return (
		<div style={{ flexDirection: flex, overflow, borderRadius: radius }} className={classes.ContainerCard}>
			{children}
		</div>
	)
}
ContainerCard.defaultProps = {
	flex: 'column',
	overflow: 'hidden',
	radius: 6
}
ContainerCard.propTypes = {
	classes: PropTypes.isRequired,
	flex: PropTypes.string,
	radius: PropTypes.number,
	overflow: PropTypes.string
}

export default withStyles(styles)(ContainerCard)
