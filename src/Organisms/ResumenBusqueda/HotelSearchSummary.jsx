import React from 'react'
import PropTypes from 'prop-types'
import { FaPencilAlt } from 'react-icons/fa'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'
import OccupancySummary from '../Passengers/OccupancySummary'
import SearchHotelGeneric from '../SearchGeneric/SearchHotelGeneric'
import GenericSearchMobile from '../SearchGeneric/MobileGeneric'

class HotelSearchSummary extends React.PureComponent {
	static displayName = 'HotelSearchSummary'

	render() {
		const { classes, rooms, date, passengers, destination, onClickEditButton } = this.props

		return (
			<div key={1} className={classes.contentCard}>
				<div className={classes.contentinfo}>
					<div className={classes.headerCard}>
						<Text content={destination} size={15} left color="black" />
					</div>
					<div className={classNames(classes.flex, classes.padding)}>
						<div className={classes.flex}>
							<IconsFont size={20} icon="flaticon-calendar" />
							<Text content={date} size={14} left style={{ marginLeft: 10 }} color="black" />
						</div>

						<div className={classes.flex} style={{ maxWidth: 100 }}>
							<OccupancySummary marginLeft={10} passengers={passengers} rooms={rooms} />
						</div>
					</div>
				</div>
				<div className={classes.edit}>
					<Button
						onClick={onClickEditButton}
						style={{ borderRadius: '0 6px 6px 0', position: 'absolute', height: '100%' }}
						text=""
						iconLeft={<FaPencilAlt />}
					/>
				</div>
			</div>
		)
	}
}

HotelSearchSummary.defaultProps = {
	onClickEditButton: () => {},
	destination: undefined
}

HotelSearchSummary.propTypes = {

	destination: PropTypes.string,
	passengers: PropTypes.string.isRequired,
	rooms: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	onClickEditButton: PropTypes.func
}

export default withStyles(({ mauri: { flex } }) => ({
	contentCard: {
		background: 'white',
		width: '100%',
		position: 'relative',
		boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
		borderRadius: 6,
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'stretch'
	},
	headerCard: {
		width: '100%',
		padding: 10,
		borderBottom: '0.5px solid #f2f2f2'
	},
	padding: {
		padding: 10
	},
	flex,
	contentinfo: {
		width: 'calc(100% - 43px)'
	}
}))(HotelSearchSummary)
