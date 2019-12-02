import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

function ContainerCard(props) {
	const { classes, children, flex, overflow, radius, background, shadow, margin, position } = props

	return (
		<div
			style={{ background, flexDirection: flex, overflow, borderRadius: radius, margin, position }}
			className={classNames(classes.ContainerCard, shadow && classes.ContainerCardShadow)}
		>
			{children}
		</div>
	)
}

const styles = () => ({
	ContainerCard: {
		borderRadius: 6,
		minHeight: 30,
		display: 'flex'
	},
	ContainerCardShadow: {
		boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
	}
})
ContainerCard.defaultProps = {
	flex: 'column',
	background: 'white',
	overflow: 'hidden',
	radius: 6,
	shadow: false
}
ContainerCard.propTypes = {
	flex: PropTypes.string,
	background: PropTypes.string,
	radius: PropTypes.number,
	shadow: PropTypes,
	overflow: PropTypes.string,
	margin: PropTypes.string
}

export default withStyles(styles)(ContainerCard)
