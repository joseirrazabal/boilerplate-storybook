import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

const Tags = ({ classes, background, circle, elevation, image, iconLeft, iconRight, name, palette }) => (
	<div className={classNames(classes.global, classes.elevation)}>
		<div className={classes.displayFlex}>
			{image ? (
				<img alt={name} src={image} className={classes.image} />
			) : iconLeft ? (
				<a className={classes.icon}>{iconLeft}</a>
			) : (
				<span />
			)}
			<span className={classes.name}>{name}</span>
			{iconRight && <span className={classes.icon}>{iconRight}</span>}
		</div>
	</div>
)

Tags.defaultProps = {
	iconRight: null,
	iconLeft: null,
	circle: 50,
	elevation: 0,
	image: undefined,
	background: ''
}

Tags.propTypes = {
	circle: PropTypes.number,
	elevation: PropTypes.number,
	iconRight: PropTypes.node,
	iconLeft: PropTypes.node,
	name: PropTypes.string.isRequired,
	image: PropTypes.string,
	background: PropTypes.string
}
const styles = ({ palette, background, circle, elevation }) => ({
	global: {
		padding: 0,
		marginRight: 5,
		width: 'auto',
		background: palette.primary.main || background,
		borderRadius: 50,
		overFlow: 'hidden',
		display: 'inline-block'
	},
	elevation: {
		boxShadow: `0 ${elevation}px 4px rgba(0,0,0,0.3)`
	},
	displayFlex: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	name: {
		marginLeft: 5,
		marginRight: 15,
		color: 'white',
		fontSize: 13,
		fontFamily: 'Roboto, sans-serif'
	},
	icon: {
		fontSize: 14,
		background: 'white',
		color: '#606060',
		margin: 5,
		borderRadius: 40,
		padding: 4,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 35,
		marginLeft: 0,
		width: 35,
		borderRadius: 50
	}
})
export default withStyles(styles)(Tags)
