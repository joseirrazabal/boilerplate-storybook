import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import momentPropTypes from 'react-moment-proptypes'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import moment from 'moment'

import { IconContext } from 'react-icons'
import { FaPencilAlt } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'
// import MenuItem from '@material-ui/core/MenuItem'

// import clsx from 'clsx'
import SelectR, { components } from 'react-select'
import { emphasize, makeStyles, useTheme } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import CancelIcon from '@material-ui/icons/Cancel'

import GenericSearchMobile from './MobileGeneric'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import SearchGeneric from './SearchGeneric'
import IconsFont from '../../Atoms/IconsFont'
import Button from '../../Atoms/Button/Button'
import OccupancySummary from '../Passengers/OccupancySummary'

const Menu = props => {
	{
		/* <div style={{ position: 'fixed', width: '300px', zIndex: 9 }}> */
	}
	return <components.Menu {...props}>{props.children}</components.Menu>
}

const MenuList = props => {
	return (
		<components.MenuList {...props}>
			{/* <div style={{}>Custom Menu List</div> */}
			{props.children}
		</components.MenuList>
	)
}

const IndicatorsContainer = props => {
	return <div style={{}}>{/* <components.IndicatorsContainer {...props} /> */}</div>
}

const customStyles = {
	menu: styles => ({ ...styles, zIndex: 999 }),
	menuPortal: styles => {
		return {
			...styles,
			zIndex: 1000
		}
	},
	option: (provided, state) => ({
		...provided
		// borderBottom: '1px dotted pink'
		// 	color: state.isSelected ? 'red' : 'blue',
		// 	padding: 20
	}),
	container: (base, state) => {
		return {
			...base,
			width: '100%'
			// zIndex: 9
		}
	},
	control: provided => {
		return {
			// ...provided,
			'&:after': {
				content: "''",
				position: 'absolute',
				right: 0,
				width: '40%',
				height: '98%',
				backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,1))',
				pointerEvents: 'none',
				top: '0px'
			},
			border: 'none',
			width: '100%'
		}
	}
	// singleValue: (provided, state) => {
	// 	const opacity = state.isDisabled ? 0.5 : 1
	// 	const transition = 'opacity 300ms'
	//
	// 	return { ...provided, opacity, transition }
	// }
}

const meses = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre'
]

var monthActual = new Date().getMonth()
var yearActual = new Date().getFullYear()

const mesesFinal = []
Array.from(new Array(12)).map((item, i) => {
	if (monthActual > 11) {
		monthActual = 0
		yearActual++
	}
	mesesFinal.push({ label: `${meses[monthActual]} - ${yearActual}`, value: monthActual, year: yearActual })
	monthActual++
})

class SearchVuelos extends React.Component {
	constructor(props) {
		super(props)
		const rooms = props.occupancy.length

		let destination
		let origin
		if (props.initialValues && props.initialValues.origin && props.initialValues.origin.value) {
			origin = {
				label: (props.initialValues && props.initialValues.origin && props.initialValues.origin.label) || '',
				value: (props.initialValues && props.initialValues.origin && props.initialValues.origin.value) || ''
			}
		}
		if (props.initialValues && props.initialValues.destination && props.initialValues.destination.value) {
			destination = {
				label: (props.initialValues && props.initialValues.destination && props.initialValues.destination.label) || '',
				value: (props.initialValues && props.initialValues.destination && props.initialValues.destination.value) || ''
			}
		}

		var mesSelected = ''
		if (props.startDate && Number.isInteger(moment(props.startDate).month())) {
			let sel = mesesFinal.filter(
				i => i.value == moment(props.startDate).month() && i.year == moment(props.startDate).year()
			)
			mesSelected = sel && sel[0]
		}

		this.state = {
			charged: false,
			origin,
			destination,
			passengers: (props.initialValues && props.initialValues.passengers) || { adults: 2, childs: 0, babies: 0 },
			calendar: { startDate: props.startDate, endDate: props.endDate },
			mesSelected,
			occupancy: props.initialValues && props.initialValues.occupancy,
			rooms,
			errors: {}
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		// cuando seleccionas otras card
		if (nextState.changed === true) {
			this.setState({
				changed: false
			})
			return true
		}

		if (
			nextState.errors !== this.state.errors ||
			nextProps.initialValues !== this.props.initialValues ||
			nextState.origin !== this.state.origin ||
			nextState.destination !== this.state.destination ||
			nextState.mesSelected !== this.state.mesSelected ||
			nextState.occupancy !== this.state.occupancy ||
			nextState.open !== this.state.open
		) {
			const props = nextProps
			const rooms = props.occupancy.length

			let destination = nextState.destination || this.state.destination
			let origin = nextState.origin || this.state.origin
			let mesSelected = nextState.mesSelected || this.state.mesSelected

			if (nextProps.initialValues !== this.props.initialValues) {
				if (props.initialValues && props.initialValues.origin && props.initialValues.origin.value) {
					origin = {
						label: (props.initialValues && props.initialValues.origin && props.initialValues.origin.label) || '',
						value: (props.initialValues && props.initialValues.origin && props.initialValues.origin.value) || ''
					}
				}
				if (props.initialValues && props.initialValues.destination && props.initialValues.destination.value) {
					destination = {
						label:
							(props.initialValues && props.initialValues.destination && props.initialValues.destination.label) || '',
						value:
							(props.initialValues && props.initialValues.destination && props.initialValues.destination.value) || ''
					}
				}

				if (props.startDate && Number.isInteger(moment(props.startDate).month())) {
					let sel = mesesFinal.filter(
						i => i.value == moment(props.startDate).month() && i.year == moment(props.startDate).year()
					)
					mesSelected = sel && sel[0]
				}
			}

			this.setState({
				charged: false,
				origin,
				destination,
				passengers: (props.initialValues && props.initialValues.passengers) || { adults: 2, childs: 0, babies: 0 },
				calendar: { startDate: props.startDate, endDate: props.endDate },
				mesSelected,
				occupancy: props.initialValues && props.initialValues.occupancy,
				rooms,
				errors: nextState.errors,
				changed: true
			})
			return false
		} else {
			return false
		}
	}

	onCalendarChange = values => {
		this.setState({ calendar: values })
	}

	handePassengersSubmit = values => {
		this.handleClose()
		this.setState({ ...values })
	}

	handlePassengersClose = () => {
		const { handlePassengersClose } = this.props
		if (handlePassengersClose) handlePassengersClose()
	}

	// ------
	onChangeOrigin = value => {
		const err = {}
		if (!value) err.origin = 'Debe ingresar un origen'

		this.setState({ origin: value, errors: err })
	}

	onChangeDestination = value => {
		const err = {}
		if (!value) err.destination = 'Debe ingresar un destino'

		this.setState({ destination: value, errors: err })
	}

	submit = values => {
		const { onSubmit } = this.props
		const { mesSelected, origin, destination, calendar } = this.state
		const err = {}

		if (!origin || !origin.value) err.origin = 'Debe ingresar un origen'
		if (!destination || !destination.value) err.destination = 'Debe ingresar un destino'

		if (!mesSelected) err.calendar = 'Debe ingresar un fecha'

		if (Object.keys(err).length) {
			console.log({ err })
			this.setState({ errors: err })
		} else {
			this.setState({ open: false })
		}

		if (onSubmit && !Object.keys(err).length) {
			var initDay = new Date(mesSelected.year, mesSelected.value, 1)
			var lastDay = new Date(mesSelected.year, mesSelected.value + 1, 0)

			// this.setState({ open: false }, onSubmit({ origin, destination, calendar, occupancy: values.passengers }))
			this.setState(
				{ open: false },
				onSubmit({
					origin,
					destination,
					calendar: { startDate: initDay, endDate: lastDay },
					occupancy: values.passengers
				})
			)
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
		const {
			isMobile,
			startDate,
			endDate,
			suggestionsOrigin,
			getSuggestionsOrigin,
			suggestions,
			getSuggestions,
			initialValues,
			isSummary,
			classes
		} = this.props
		const { open, charged, errors, origin, destination, passengers, occupancy } = this.state

		let aResultOriginJson = []
		let aResultDestinationJson = []
		suggestionsOrigin.map(item => {
			if (item.values) {
				return aResultOriginJson.push({
					label: item.title,
					options: item.values.map(i => {
						return { label: i.label, value: i.value }
					})
				})
			}
		})
		suggestions.map(item => {
			if (item.values) {
				return aResultDestinationJson.push({
					label: item.title,
					options: item.values.map(i => {
						return { label: i.label, value: i.value }
					})
				})
			}
		})

		if (isMobile) {
			return (
				<React.Fragment>
					{isSummary && (
						<div key={1} className={classes.contentCard}>
							<div className={classes.contentinfo}>
								<div className={classes.headerCard}>
									<Text content={(origin && origin.label) || 'Ubicacion'} size={15} left color="black" />
									<Text content={(destination && destination.label) || 'Ubicacion'} size={15} left color="black" />
								</div>
								<div className={classNames(classes.flex, classes.padding)}>
									<div className={classes.flex}>
										<IconsFont size={20} icon="flaticon-calendar" />
										<Text
											content={`Del ${startDate && startDate.format('DD/MM')} a ${endDate && endDate.format('DD/MM')}`}
											size={14}
											left
											style={{ marginLeft: 10 }}
											color="black"
										/>
									</div>
									<div className={classes.flex} style={{ maxWidth: 100 }}>
										<OccupancySummary
											marginLeft={10}
											passengers={(initialValues && initialValues.passengers) || 2}
											rooms={1}
											useBeds={false}
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
						isMobile
						summary={isSummary}
						open={open}
						onClose={this.onClose}
						initialPassengers={{ passengersResult: (initialValues && initialValues.passengers) || 2 }}
						initialOccupancy={initialValues && initialValues.occupancy}
						isHotel
						text="¿A dónde querés viajar?"
						iconLeft={<IconsFont iconSize={30} icon="flaticon-briefcase" />}
						iconRight={<IconsFont iconSize={30} icon="flaticon-search" />}
						usePassengers
						useBeds={false}
						onSubmit={this.submit}
						error={errors}
						useFlexItem={false}
						items={[
							{
								icon: '',
								error: errors.origin,
								component: (
									<SelectR
										name="origin"
										placeholder={'Origen'}
										styles={customStyles}
										value={origin}
										onChange={this.onChangeOrigin}
										options={aResultOriginJson}
										components={{ MenuList, IndicatorsContainer, Menu }}
									/>
								)
							},
							{
								icon: '',
								error: errors.destination,
								component: (
									<SelectR
										name="destination"
										placeholder={'Destino'}
										styles={customStyles}
										value={destination}
										onChange={this.onChangeDestination}
										options={aResultDestinationJson}
										components={{ MenuList, IndicatorsContainer }}
									/>
								)
							},
							{
								icon: '',
								error: errors.calendar,
								component: (
									<SelectR
										name="calendar"
										placeholder={'Fecha'}
										styles={customStyles}
										value={(this.state && this.state.mesSelected) || ''}
										onChange={e => this.setState({ mesSelected: e })}
										options={mesesFinal}
										components={{ MenuList, IndicatorsContainer }}
									/>
								)
							}
						]}
					/>
				</React.Fragment>
			)
		}

		return (
			<SearchGeneric
				// isMobile
				usePassengers
				extendCalendar
				useBeds={false}
				isHotel
				initialPassengers={{ passengersResult: (initialValues && initialValues.passengers) || 2 }}
				initialOccupancy={occupancy}
				onSubmit={this.submit}
				itemsSearch={[
					{
						// icon: 'flaticon-briefcase',
						icon: (
							<IconContext.Provider
								value={{ style: { color: 'rgb(113, 112, 112)', height: 35, verticalAlign: 'middle' } }}
							>
								<MdWork size={22} />
							</IconContext.Provider>
						),
						error: errors.origin,
						component: (
							<SelectR
								name="origin"
								placeholder={'Origen'}
								styles={customStyles}
								value={origin}
								onChange={this.onChangeOrigin}
								options={aResultOriginJson}
								components={{ MenuList, IndicatorsContainer }}
							/>
						)
					},
					{
						// icon: 'flaticon-briefcase',
						icon: (
							<IconContext.Provider
								value={{ style: { color: 'rgb(113, 112, 112)', height: 35, verticalAlign: 'middle' } }}
							>
								<MdWork size={22} />
							</IconContext.Provider>
						),
						error: errors.destination,
						component: (
							<SelectR
								name="destination"
								placeholder={'Destino'}
								styles={customStyles}
								value={destination}
								onChange={this.onChangeDestination}
								options={aResultDestinationJson}
								components={{ MenuList, IndicatorsContainer }}
							/>
						)
					}
				]}
				calendar={{
					error: errors.calendar,
					component: (
						<SelectR
							name="calendar"
							placeholder={'Fecha'}
							styles={customStyles}
							value={(this.state && this.state.mesSelected) || ''}
							onChange={e => this.setState({ mesSelected: e })}
							options={mesesFinal}
							components={{ MenuList, IndicatorsContainer }}
						/>
					)
				}}
			/>
		)
	}
}

const acceptedValues = PropTypes.shape({
	label: PropTypes.string.isRequired,
	secondaryLabel: PropTypes.string,
	value: PropTypes.string.isRequired
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
	onPassengersClose: () => {},
	onAutocompleteChange: () => {},
	onDateChange: () => {},
	onOccupancyChange: () => {},
	getSuggestions() {},
	onSubmit() {},
	error: {
		origin: 'error on origin',
		destination: 'error on destination',
		calendar: 'error calendar',
		passengers: 'error in passengers'
	}
}

SearchVuelos.propTypes = {
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
}))(SearchVuelos)
