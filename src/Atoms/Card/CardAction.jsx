import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

const styles = {
	CardAction: {
		backgroundColor: 'white',
		height: 'auto',
		width: '100%',
		position: 'relative',
		overFlow: 'hidden'
	}
}

function CardAction(props) {
	const { classes, children, paddingConfig } = props

	return (
		<div style={{ padding: paddingConfig }} className={classes.CardAction}>
			{children}
		</div>
	)
}

CardAction.propTypes = {

	paddingConfig: PropTypes.number
}

export default withStyles(styles)(CardAction)
