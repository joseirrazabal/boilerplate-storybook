import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

import Button from '@material-ui/core/Button'

const styles = theme => ({
	root: {
		display: 'flex',
		alignItems: 'center'
	},
	wrapper: {
		margin: theme.spacing.unit,
		position: 'relative'
	},
	buttonClassname: {
		padding: 15
	},
	buttonSuccess: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700]
		}
	},
	buttonError: {
		backgroundColor: red[500],
		'&:hover': {
			backgroundColor: red[700]
		}
	},
	fabProgress: {
		color: green[500],
		position: 'absolute',
		top: -6,
		left: -6,
		zIndex: 1
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12
	}
})

const SaveButton = ({ classes, loading, success, error, onClick, children, terms }) => (
	<div className={classes.root}>
		<div className={classes.wrapper}>
			<Button
				variant="contained"
				color="primary"
				className={classNames({
					[classes.buttonSuccess]: success,
					[classes.buttonError]: error
				})}
				disabled={loading || terms}
				onClick={() => !success && !loading && !error && onClick()}
			>
				{children}
			</Button>
			{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
		</div>
	</div>
)

SaveButton.propTypes = {
	classes: PropTypes.isRequired,
	onClick: PropTypes.func
}

SaveButton.defaultProps = {
	onClick: () => {}
}

export default withStyles(styles)(SaveButton)
