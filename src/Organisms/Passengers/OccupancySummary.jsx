import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { IconContext } from 'react-icons'
import { FiUser } from 'react-icons/fi'
import IconsFont from '../../Atoms/IconsFont'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

class OccupancySummary extends React.PureComponent {
	render() {
		const {
			rooms,
			passengers,
			marginLeft,
			iconSize,
			useBeds,
			classes: { displayFlex }
		} = this.props
		return (
			<React.Fragment>
				<div className={displayFlex}>
					{/* <IconsFont size={iconSize} icon="flaticon-user-2" /> */}
					<IconContext.Provider value={{ style: { color: 'rgb(113, 112, 112)', height: 35, verticalAlign: 'middle' } }}>
						<FiUser size={55} icon="flaticon-user-2" />
					</IconContext.Provider>

					<Text content={passengers} style={{ marginLeft }} />
				</div>
				{useBeds === true && (
					<div className={displayFlex}>
						<IconsFont size={iconSize} icon="flaticon-bed" />
						<Text content={rooms} style={{ marginLeft }} />
					</div>
				)}
			</React.Fragment>
		)
	}
}

OccupancySummary.defaultProps = {
	iconSize: 25,
	marginLeft: 5,
	useBeds: true
}

OccupancySummary.propTypes = {
	iconSize: PropTypes.number,
	marginLeft: PropTypes.number,
	passengers: PropTypes.string.isRequired,
	rooms: PropTypes.string.isRequired,
	useBeds: PropTypes.bool
}

export default withStyles(() => ({
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	}
}))(OccupancySummary)
