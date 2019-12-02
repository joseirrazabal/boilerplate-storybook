import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

const styles = {
	ContainerRowCard: {
		background: 'white',
		boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
		borderRadius: 6,
		minHeight: 60,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		overflow: 'hidden'
	}
}

function ContainerRowCard(props) {
	const { classes, children } = props

	return <div className={classes.ContainerRowCard}>{children}</div>
}

ContainerRowCard.propTypes = {

}

export default withStyles(styles)(ContainerRowCard)
