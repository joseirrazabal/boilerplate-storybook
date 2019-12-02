import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/styles'
import OccupancySummary from '../../Passengers/OccupancySummary'

class HotelOccupancy extends React.PureComponent {
	render() {
		const {
			classes: { menu },
			anchorEl,
			open,
			passengers,
			rooms,
			children,
			summaryMarginLeft
		} = this.props

		return (
			<React.Fragment>
				<OccupancySummary marginLeft={summaryMarginLeft} passengers={passengers} rooms={rooms} />
				<Menu
					id="menu-appbar"
					anchorEl={anchorEl}
					anchorOrigin={{
						horizontal: 'right',
						vertical: 'top'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					open={open}
					className={menu}
				>
					{children}
				</Menu>
			</React.Fragment>
		)
	}
}

HotelOccupancy.defaultProps = {
	open: false,
	anchorEl: null,
	rooms: '1',
	passengers: '2',
	summaryMarginLeft: undefined
}

HotelOccupancy.propTypes = {

	anchorEl: PropTypes.node,
	open: PropTypes.bool,
	rooms: PropTypes.string,
	passengers: PropTypes.string,
	summaryMarginLeft: PropTypes.number
}

export default withStyles(() => ({
	menu: {
		paddingTop: 0,
		margin: 0,
		cursor: 'pointer'
	}
}))(HotelOccupancy)
