import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Text } from './TitleLabel/TitleLabel'

const HotelPoint = ({ classes, point, background }) => (
	<div
		className={classes.global}
		style={{
			background
		}}
	>
		<Text center size={12} italic color="white">
			{point}
		</Text>
	</div>
)

HotelPoint.defaultProps = {
	background: 'green',
	point: 8.5
}

HotelPoint.propTypes = {
	background: PropTypes.string,
	point: PropTypes.number
}
const styles = () => ({
	global: {
		padding: '0 5px',
		height: 20,
		borderRadius: 5,
		display: 'flex',
		alignItems: 'center'
	}
})
export default withStyles(styles)(HotelPoint)
