import React from 'react'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

const LoadingFlight = ({ classes }) => (
	<div className={classNames(classes.contentCard, classes.flex)}>
		<div className={classes.content}>
			<div className={classes.bloque} />
			<div className={classes.padding20}>
				<div className="linear-background" />
				{/* <div className={classes.textLoading} /> */}
			</div>
			<div className={classes.bloque} />
			<div className={classes.padding20}>
				<div className="linear-background" />
			</div>
		</div>
	</div>
)

LoadingFlight.defaultProps = {}

LoadingFlight.propTypes = {

}

const styles = ({ mauri: { flex, padding20 } }) => ({
	content: { backgroundColor: 'white', width: '100%' },
	contentCard: {
		background: 'white',
		boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
		borderRadius: 6,
		minHeight: 60
	},
	bloque: {
		width: '100%',
		minHeight: 30,
		background: '#f9f8f7'
	},
	textLoading: {
		width: '100%',
		minHeight: 20,
		background: '#f9f8f7'
	},
	padding20,
	flex
})

export default withStyles(styles)(LoadingFlight)
