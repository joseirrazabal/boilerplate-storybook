import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import momentPropTypes from 'react-moment-proptypes'
import classNames from 'classnames'
import { withStyles } from '@material-ui/styles'

import { IconContext } from 'react-icons'
import { FaPencilAlt } from 'react-icons/fa'
import { FaConciergeBell } from 'react-icons/fa'



import IconsFont from '../../Atoms/IconsFont'
import Button from '../../Atoms/Button/Button'

import { Text } from '../../Atoms/TitleLabel/TitleLabel'

import SearchGeneric from './SearchGeneric'
import GenericSearchMobile from './MobileGeneric'

import OccupancySummary from '../Passengers/OccupancySummary'

const Calendar = lazy(() => import('src/emmaterial/Molecules/Calendar/Calendar'))
const CalendarFullWidthVertical = lazy(() => import('src/emmaterial/Molecules/Calendar/CalendarFullWidthVertical'))
const Autocompletar = lazy(() => import('src/emmaterial/Molecules/Autocompletar/Autocompletar'))

class SearchVuelos extends React.Component {
	constructor(props) {
		super(props)
		const rooms = props.occupancy.length

		this.state = {
			charged: false,
			origin: {
				label: (props.initialValues && props.initialValues.origin && props.initialValues.origin.label) || '',
				code: (props.initialValues && props.initialValues.origin && props.initialValues.origin.code) || ''
			},
			passengers: (props.initialValues && props.initialValues.passengers) || { adults: 2, childs: 0, babies: 0 },
			calendar: { startDate: props.startDate, endDate: props.endDate },
			occupancy: props.initialValues && props.initialValues.occupancy,
			rooms,
			errors: {}
		}
	}

	onChangeOrigin = value => {
		const err = {}
		const { origin } = this.state
		if (!origin) err.origin = 'Debe ingresar un origen'

		this.setState({ origin: value, errors: err })
	}

	onCalendarChange = values => {
		this.setState({ calendar: values })
	}

	submit = values => {
		const { origin, calendar } = this.state
		const err = {}

		if (!origin.code) err.origin = 'Debe ingresar un origen'
		if (!calendar.startDate || !calendar.endDate) err.calendar = 'debe ingresar un fecha'

		this.setState({ errors: err })
		if (Object.keys(err).length) this.setState({ errors: err })

		if (this.props.onSubmit) {
			this.setState({ open: false }, this.props.onSubmit({ origin, calendar, occupancy: values }))
		}
	}

	onClick = () => {
		this.setState({ open: true })
	}

	onClose = () => {
		this.setState({ open: false })
	}

	componentDidMount() {
		this.setState({ charged: true })
	}

	render() {
		const { classes, isMobile, startDate, endDate, suggestions, getSuggestions, initialValues, isSummary } = this.props
		const { occupancy, charged } = this.state
		const { errors, origin } = this.state

		const strDate = `Del ${startDate && startDate.format('DD/MM')} a ${endDate && endDate.format('DD/MM')}`

		if (isMobile) {
			return (
				<React.Fragment>
					{isSummary && (
						<div key={1} className={classes.contentCard}>
							<div className={classes.contentinfo}>
								<div className={classes.headerCard}>
									<Text content={(origin && origin.label) || 'Ubicacion'} size={15} left color="black" />
								</div>
								<div className={classNames(classes.flex, classes.padding)}>
									<div className={classes.flex}>
										<IconsFont size={20} icon="flaticon-calendar" />
										<Text content={strDate} size={14} left style={{ marginLeft: 10 }} color="black" />
									</div>
									<div className={classes.flex} style={{ maxWidth: 100 }}>
										<OccupancySummary
											marginLeft={10}
											passengers={(initialValues && initialValues.passengers) || 2}
											rooms={1}
										/>
									</div>
								</div>
							</div>
							<div className={classes.edit}>
								<Button
									onClick={this.onClick}
									style={{ borderRadius: '0 6px 6px 0', position: 'absolute', height: '100%' }}
									text=""
									iconLeft={<FaPencilAlt />}
								/>
							</div>
						</div>
					)}

					<GenericSearchMobile
						summary={isSummary}
						open={this.state.open}
						onClose={this.onClose}
						isHotel
						isMobile
						text="¿A dónde querés viajar?"
						iconLeft={<IconsFont iconSize={30} icon="flaticon-reception-bell" />}
						iconRight={<IconsFont iconSize={30} icon="flaticon-search" />}
						usePassengers
						initialPassengers={{ passengersResult: (initialValues && initialValues.passengers) || 2 }}
						initialOccupancy={occupancy}
						onSubmit={this.submit}
						error={errors}
						items={[
							{
								icon: '',
								error: errors.origin,
								component:
									charged === true ? (
										<Suspense fallback={<div></div>}>
											<Autocompletar
												name="origin"
												placeholder="¿Dónde querés hospedarte?"
												initialValue={origin}
												onChange={this.onChangeOrigin}
												getSuggestions={getSuggestions}
												suggestions={suggestions}
												suggestWhenCharsAreBiggerThan={2}
												multiSection
											/>
										</Suspense>
									) : (
											<div></div>
										)
							},
							{
								icon: '',
								error: errors.calendar,
								component:
									charged === true ? (
										<Suspense fallback={<div></div>}>
											<CalendarFullWidthVertical
												initialStartDate={startDate}
												initialEndDate={endDate}
												onChange={this.onCalendarChange}
											/>
										</Suspense>
									) : (
											<div></div>
										)
							}
						]}
					/>
				</React.Fragment>
			)
		}

		return (
			<SearchGeneric
				oneSearch
				usePassengers
				initialPassengers={{ passengersResult: (initialValues && initialValues.passengers) || 2 }}
				initialOccupancy={occupancy}
				isHotel
				onSubmit={this.submit}
				itemsSearch={[
					{
						// icon: 'flaticon-reception-bell',
						icon: (
							<IconContext.Provider
								value={{ style: { color: 'rgb(113, 112, 112)', height: 35, verticalAlign: 'middle' } }}
							>
								<FaConciergeBell size={22} />
							</IconContext.Provider>
						),
						error: errors.origin,
						component:
							charged === true ? (
								<Suspense fallback={<div></div>}>
									<Autocompletar
										name="origin"
										placeholder="¿Dónde querés hospedarte?"
										initialValue={origin}
										onChange={this.onChangeOrigin}
										getSuggestions={getSuggestions}
										suggestions={suggestions}
										suggestWhenCharsAreBiggerThan={2}
										multiSection
									/>
								</Suspense>
							) : (
									<div></div>
								)
					}
				]}
				calendar={{
					error: errors.calendar,
					component:
						charged === true ? (
							<Suspense fallback={<div></div>}>
								<Calendar
									useTooltip
									initialStartDate={startDate}
									initialEndDate={endDate}
									onChange={this.onCalendarChange}
								/>
							</Suspense>
						) : (
								<div></div>
							)
				}}
			/>
		)
	}
}

const acceptedValues = PropTypes.shape({
	label: PropTypes.string.isRequired,
	secondaryLabel: PropTypes.string,
	code: PropTypes.string.isRequired
})

SearchVuelos.defaultProps = {
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
	onPassengersClose: () => { },
	onAutocompleteChange: () => { },
	onDateChange: () => { },
	onOccupancyChange: () => { },
	getSuggestions() { },
	onSubmit() { },
	error: {
		origin: 'error on origin',
		destination: 'error on destination',
		calendar: 'error calendar',
		passengers: 'error in passengers'
	},
	isMobile: false,
	summary: false,
	onClose: () => { }
}

SearchVuelos.propTypes = {

	isMobile: PropTypes.bool,
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
	),
	summary: PropTypes.bool,
	onClose: PropTypes.func
}

export default withStyles(({ mauri: { flex } }) => ({
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	},
	// summary
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
	//-----
}))(SearchVuelos)
