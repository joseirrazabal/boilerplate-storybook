import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

const Avatar = ({ classes, maxHeight, radius, size, image, alt, title, name, notifications }) => (
	<div className={classes.displayFlex}>
		<div>
			{notifications > 0 && <div className={classes.badge}>{notifications}</div>}
			<img src={image} className={(classes.global, classes.circle)} alt={alt} title={title} />
		</div>
		<span className={classes.name}>{name}</span>
	</div>
)

Avatar.defaultProps = {
	radius: 0,
	image:
		'https://lh3.googleusercontent.com/-P9AP4vdTugM/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfxUquwVBMfRqw56TqgcO0XYriu86Q/s64-c-mo/photo.jpg',
	elevation: 0,
	notifications: 0,
	maxHeight: 40,
	size: 15,
	alt: null,
	title: null,
	name: null
}

Avatar.propTypes = {
	radius: PropTypes.number,
	image: PropTypes.string,
	elevation: PropTypes.number,
	size: PropTypes.number,
	maxHeight: PropTypes.number,
	alt: PropTypes.string,
	title: PropTypes.string,
	name: PropTypes.string,
	notifications: PropTypes.number
}
const styles = ({ styles, palette, maxHeight, radius, size }) => ({
	global: {
		height: 'auto',
		maxHeight
	},
	circle: {
		borderRadius: radius,
		overFlow: 'hidden'
	},
	displayFlex: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	name: {
		marginLeft: 10,
		fontSize: size,
		color: '#000',
		fontFamily: 'Roboto, sans-serif'
	},
	badge: {
		background: palette.primary.main,
		height: 25,
		width: 25,
		borderRadius: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 11,
		color: palette.primary.contrastText,
		position: 'absolute',
		top: 0
	}
})

export default withStyles(styles)(Avatar)
