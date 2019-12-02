import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { FaSearch } from 'react-icons/fa'
import momentPropTypes from 'react-moment-proptypes'
import { withStyles } from '@material-ui/styles'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import Button from '../../Atoms/Button/Button'
import Calendar from '../../Molecules/Calendar/Calendar'
import Passengers from '../Passengers/Passengers'
import HotelOccupancy from './Occupancy/HotelOccupancy'

const searchStyles = {
	absolute: {
		position: 'absolute',
		right: 0,
		top: 0
	},
	DateRangePicker: {
		width: '100%',
		cursor: 'pointer'
	},
	listMenuBorderLine: {
		borderRight: '0.5px solid #ccc',
		paddingRight: 20
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	}
}

class SearchMartial extends React.PureComponent {
	constructor(props) {
		super(props)
		const passengers = props.occupancy.reduce((r, e) => r + e.adults.length + e.childs.length, 0)
		const rooms = props.occupancy.length

		this.state = {
			anchorEl: null,
			calendar: { startDate: props.startDate, endDate: props.endDate },
			destination: props.destination,
			occupancy: props.occupancy,
			passengers,
			rooms
		}
	}

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	onCalendarChange = values => {
		this.setState({ calendar: values })
	}

	onSubmit = () => {
		const { onSubmit } = this.props
		const { calendar, destination, occupancy } = this.state
		if (onSubmit) onSubmit({ calendar, destination, occupancy })
	}

	handePassengersSubmit = values => {
		this.handleClose()
		this.setState({ ...values })
	}

	handlePassengersClose = () => {
		const { handlePassengersClose } = this.props
		if (handlePassengersClose) handlePassengersClose()
	}

	render() {
		const { classes, startDate, endDate, suggestions } = this.props

		const { anchorEl, occupancy, destination } = this.state
		const open = Boolean(anchorEl)
		return (
			<ContainerCard radius={10} overflow="visible">
				<Grid container spacing={0} className={classNames(classes.contentButtonSearch)}>
					<Grid container className={classNames(classes.contentDataSearch)}>
						<Grid
							item
							className={classNames(classes.calendar)}
							xs={6}
							sm={9}
							style={{
								...searchStyles.displayFlex,
								borderRight: '1px solid silver'
							}}
						>
							<Calendar initialStartDate={startDate} initialEndDate={endDate} onChange={this.onCalendarChange} />
						</Grid>
						<Grid
							className={classNames(classes.people)}
							item
							xs={6}
							sm={3}
							style={{
								display: 'flex',
								justifyContent: 'space-around',
								cursor: 'pointer'
							}}
							onClick={this.handleMenu}
						>
							<HotelOccupancy>
								<Passengers />
							</HotelOccupancy>
						</Grid>
					</Grid>
					<Grid container spacing={0} className={classNames(classes.content_btn_search)}>
						<Button
							fullWidth
							style={{ borderRadius: '0 6px 6px 0' }}
							iconLeft={<FaSearch size={25} />}
							onClick={this.onSubmit}
						/>
					</Grid>
				</Grid>
			</ContainerCard>
		)
	}
}

const acceptedValues = PropTypes.shape({
	label: PropTypes.string.isRequired,
	secondaryLabel: PropTypes.string,
	value: PropTypes.string.isRequired
})

SearchMartial.defaultProps = {
	destination: null,
	startDate: null,
	endDate: null,
	suggestions: [],
	occupancy: [
		{
			id: Math.random()
				.toString(36)
				.substring(7),
			adults: { length: 2 },
			childs: []
		}
	],
	hasError: [
		{
			childs: []
		}
	],
	onPassengersClose: () => {},
	onAutocompleteChange: () => {},
	onDateChange: () => {},
	onOccupancyChange: () => {},
	getSuggestions: function() {},
	onSubmit: function() {}
}
SearchMartial.propTypes = {

	onSubmit: PropTypes.func.isRequired,
	onPassengersClose: PropTypes.func,
	onAutocompleteChange: PropTypes.func,
	onDateChange: PropTypes.func,
	onOccupancyChange: PropTypes.func,
	getSuggestions: PropTypes.func.isRequired,
	startDate: momentPropTypes.momentObj,
	endDate: momentPropTypes.momentObj,
	destination: acceptedValues,
	suggestions: PropTypes.arrayOf(acceptedValues),
	occupancy: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			adults: PropTypes.shape({
				length: PropTypes.number
			}),
			childs: PropTypes.arrayOf(PropTypes.number)
		})
	),
	hasError: PropTypes.arrayOf(
		PropTypes.shape({
			childs: PropTypes.array
		})
	)
}

export default withStyles(({ mauri: { color, variables } }) => ({
	contentButtonSearch: {
		minHeight: variables.searchMinHeight,
		fontFamily: 'Roboto, sans-serif',
		backgroundColor: 'white',
		position: 'relative',
		borderRadius: 6,
		boxSizing: 'border-box',
		boxShadow: '0 1px 1px rgba(0,0,0,0.3)',
		'@media (max-width: 800px)': {
			display: 'none'
		}
	},
	menu: {
		paddingTop: 0,
		margin: 0,
		ul: {
			paddingTop: 0
		}
	},
	contentDataSearch: {
		width: `calc(100% / 1 - ${variables.searchWidthBtn})`
	},
	autocompletar: {
		minHeight: 35,
		paddingLeft: 20
	},
	calendar: {
		input: {
			textAlign: 'center'
		}
	},
	content_btn_search: {
		width: variables.searchWidthBtn,
		minHeight: variables.searchMinHeight,
		position: 'absolute',
		right: 0
	},
	calendar: {
		display: 'flex',
		'@media (max-width: 800px)': {
			display: 'none'
		}
	},
	people: {
		display: 'flex',
		'@media (max-width: 800px)': {
			display: 'none'
		}
	},
	btnSearch: {
		minHeight: 60,
		borderRadius: '0px 6px 6px 0px'
	}
}))(SearchMartial)
