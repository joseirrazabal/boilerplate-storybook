import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'

import { IconContext } from 'react-icons'
import { FaPencilAlt } from 'react-icons/fa'
import { MdFlightLand, MdFlightTakeoff } from 'react-icons/md'

import IconsFont from '../../Atoms/IconsFont'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
// import Autocompletar from '../../Molecules/Autocompletar/Autocompletar'
// import Calendar from '../../Molecules/Calendar/Calendar'
// import CalendarFullWidthVertical from '../../Molecules/Calendar/CalendarFullWidthVertical'
// import SimpleCalendar from '../../Molecules/Calendar/SimpleCalendar'

import Button from '../../Atoms/Button/Button'

import SearchGeneric from './SearchGeneric'
import SearchVuelosShopping from './SearchVuelosShopping'
import GenericSearchMobile from './MobileGeneric'

const Calendar = lazy(() => import('src/emmaterial/Molecules/Calendar/Calendar'))
const CalendarFullWidthVertical = lazy(() => import('src/emmaterial/Molecules/Calendar/CalendarFullWidthVertical'))
const SimpleCalendar = lazy(() => import('src/emmaterial/Molecules/Calendar/SimpleCalendar'))
const Autocompletar = lazy(() => import('src/emmaterial/Molecules/Autocompletar/Autocompletar'))

// import Calendar from 'components/Calendar/Calendar'
// import CalendarFullWidthVertical from 'components/Calendar/CalendarFullWidthVertical'
// import SimpleCalendar from 'components/Calendar/SimpleCalendar'

class SearchVuelos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			charged: false,
			open: false,
			auth: true,
			calendar: {
				startDate: props.initialValues && props.initialValues.departuredate,
				endDate: props.initialValues && props.initialValues.returndate
			},
			passenger: {},
			place: '',
			passangers: 0,
			suggestions: [],
			checkedA: false,
			checkedB: false,
			value: 'idayvuelta',
			cabin: (props.initialValues && props.initialValues.cabin) || 'Y',
			type: (props.initialValues && props.initialValues.type) || 'ida_vuelta',
			origin: {
				label: (props.initialValues && props.initialValues.origin && props.initialValues.origin.label) || '',
				value: (props.initialValues && props.initialValues.origin && props.initialValues.origin.value) || ''
			},
			destination: {
				label: (props.initialValues && props.initialValues.destination && props.initialValues.destination.label) || '',
				value: (props.initialValues && props.initialValues.destination && props.initialValues.destination.value) || ''
			},
			departuredate: (props.initialValues && props.initialValues.departuredate) || '',
			returndate: (props.initialValues && props.initialValues.returndate) || '',
			passengers:
				props.initialValues && props.initialValues.passengers
					? props.initialValues.passengers
					: { adults: 1, childs: 0, babies: 0 },
			errors: {}
		}
	}

	compressArray = original => {
		const compressed = []
		// hago una copia del array
		const copy = original.slice(0)
		// primer loop pasa por cada elemento
		for (let i = 0; i < original.length; i += 1) {
			let myCount = 0
			// recorro cada elemento de array copiado y veo si es el mismo
			for (let w = 0; w < copy.length; w += 1) {
				if (original[i] === copy[w]) {
					// incremento el total por cada coincidencia
					myCount += 1
					// setea cada elemento como undefined
					delete copy[w]
				}
			}
			if (myCount > 0) {
				const a = {}
				a.chargedType = original[i]
				a.chargedCount = myCount
				compressed.push(a)
			}
		}
		return compressed
	}

	// handlePassengersSubmit = passengers => {
	// 	const people = passengers.occupancy.reduce((r, e) => r + e.adults.length + e.childs.length, 0)
	//
	// 	const sumChilds = this.compressArray(passengers.occupancy[0].childs)
	//
	// 	this.setState({
	// 		detailPassengersCharged: sumChilds,
	// 		passengers: people
	// 	})
	//
	// 	this.handleClose()
	// }

	// handleChange2 = name => event => {
	// 	this.setState({ [name]: event.target.checked })
	// }

	handleChange = (event, checked) => {
		this.setState({ type: checked })
	}

	onChangeDestination = value => {
		const err = {}
		const { destination } = this.state
		if (!destination) err.destination = 'debe ingresar un destino'

		this.setState({ destination: value, errors: err })
	}

	onChangeOrigin = value => {
		const err = {}
		const { origin } = this.state
		if (!origin) err.origin = 'debe ingresar un origen'

		this.setState({ origin: value, errors: err })
	}

	calendar = values => {
		const err = {}
		const { calendar, type } = this.state
		if (!calendar) err.calendar = 'debe ingresar una fecha'

		if (type === 'ida_vuelta') {
			this.setState({ calendar: values, errors: err })
		} else {
			this.setState({ calendar: { startDate: values }, errors: err })
		}
	}

	// passenger = values => {
	// 	this.setState({ passenger: values })
	// }

	submit = ({ passengers, cabin }) => {
		const { onSubmit } = this.props
		const { type, origin, destination, calendar } = this.state
		const err = {}

		if (!origin.value) err.origin = 'debe ingresar un origen'
		if (!destination.value) err.destination = 'debe ingresar un destino'

		if (type === 'ida_vuelta') {
			if (!calendar.startDate || !calendar.endDate) err.calendar = 'debe ingresar un fecha'
		} else {
			if (!calendar.startDate) err.calendar = 'debe ingresar un fecha'
		}

		if (Object.keys(err).length) {
			this.setState({ errors: err })
		} else {
			this.setState({ open: false, passengers, departuredate: calendar.startDate, returndate: calendar.endDate })
		}

		if (onSubmit && !Object.keys(err).length) {
			onSubmit({
				...this.state,
				cabin,
				passengers,
				departuredate: calendar.startDate,
				returndate: calendar.endDate
			})
		}
	}

	getSuggestions = value => {
		const inputValue = value.trim().toLowerCase()
		const inputLength = inputValue.length
		let count = 0

		const result =
			inputLength === 0
				? []
				: suggestions.filter(suggestion => {
						const keep = count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue

						if (keep) {
							count += 1
						}

						return keep
				  })

		this.setState({
			suggestions: result
		})
	}

	renderCalendar = () => {
		const { isMobile } = this.props
		const { type, departuredate, returndate } = this.state

		if (type === 'ida_vuelta') {
			if (isMobile) {
				return (
					<CalendarFullWidthVertical
						onChange={this.calendar}
						initialStartDate={departuredate}
						initialEndDate={returndate}
						minimumNights={0}
					/>
				)
			}
			return (
				<Calendar
					minimumNights={0}
					useTooltip
					onChange={this.calendar}
					initialStartDate={departuredate}
					initialEndDate={returndate}
				/>
			)
		}
		return <SimpleCalendar minimumNights={0} onChange={this.calendar} initialDate={departuredate} />
	}

	getPassengersCount = () => {
		const { adults, childs, babies } = this.state.passengers
		return adults + childs + babies
	}

	componentDidMount() {
		this.setState({ charged: true })
	}

	render() {
		const { classes, getSuggestions, suggestions: suggestionsProps, isMobile, isSummary, shoppingVuelos } = this.props
		const {
			errors,
			type,
			suggestions: suggestionsState,
			passengers,
			origin,
			destination,
			open,
			departuredate,
			returndate,
			charged,
			cabin
		} = this.state

		if (isMobile) {
			return (
				<React.Fragment>
					{isSummary && (
						<div key={1} className={classes.contentCard}>
							<div className={classes.contentinfo}>
								<div className={classNames(classes.flex, classes.headerCard)}>
									<Typography variant="subtitle1" noWrap style={{ fontSize: 13 }}>
										{(origin && origin.label) || 'Origen'}
									</Typography>
									{/* <Text content={(origin && origin.label) || 'Origen'} size={15} left color="black" /> */}
									{/* <Text content={(destination && destination.label) || 'Destino'} size={15} left color="black" /> */}
									<Typography variant="subtitle1" noWrap style={{ fontSize: 13 }}>
										{(destination && destination.label) || 'Destino'}
									</Typography>
								</div>
								<div className={classNames(classes.flex, classes.padding)}>
									<div className={classes.flex}>
										<Text
											content={departuredate && departuredate.format('DD/MM/YYYY')}
											size={13}
											right
											style={{ marginRight: 10 }}
											color="black"
										/>
										<IconsFont size={20} icon="flaticon-calendar" />
										<Text
											content={type === 'ida_vuelta' && returndate ? returndate.format('DD/MM/YYYY') : null}
											size={13}
											left
											style={{ marginLeft: 10 }}
											color="black"
										/>
									</div>
									<div className={classes.flex} style={{ maxWidth: 100 }}>
										<IconsFont size={20} icon="flaticon-user-2" />
										<Text content={this.getPassengersCount()} size={14} left style={{ marginLeft: 10 }} color="black" />
									</div>
								</div>
							</div>
							<div className={classes.edit}>
								<Button
									onClick={() => this.setState({ open: true })}
									style={{ borderRadius: '0 6px 6px 0', position: 'absolute', height: '100%' }}
									text=""
									iconLeft={<FaPencilAlt />}
								/>
							</div>
						</div>
					)}
					<GenericSearchMobile
						summary={isSummary}
						open={open}
						onClose={() => this.setState({ open: false })}
						isMobile
						text="¿A dónde querés volar?"
						iconLeft={<IconsFont iconSize={30} icon="flaticon-take-off" />}
						iconRight={<IconsFont iconSize={30} icon="flaticon-search" />}
						usePassengers
						initialPassengers={passengers}
						initialCabin={cabin}
						onSubmit={this.submit}
						error={errors}
						items={[
							{
								icon: '',
								error: false,
								component: (
									<FormControl component="fieldset">
										<RadioGroup
											value={type}
											onChange={(e, type) => this.setState({ type })}
											name="typeair"
											style={{ display: 'inline' }}
										>
											<FormControlLabel
												value="ida_vuelta"
												control={<Radio color="primary" />}
												label={<p>ida y vuelta</p>}
											/>
											<FormControlLabel value="ida" control={<Radio color="primary" />} label={<p>solo ida</p>} />
											{/* <FormControlLabel value="Mutidestino" control={<Radio color="primary" />} label={<p>Mutidestino</p>} /> */}
										</RadioGroup>
									</FormControl>
								)
							},
							{
								icon: '',
								error: errors.origin,
								component:
									charged === true ? (
										<Suspense fallback={<div />}>
											<Autocompletar
												initialValue={origin}
												placeholder="Origen:"
												name="origin"
												onChange={origin => this.setState({ origin })}
												getSuggestions={getSuggestions || this.getSuggestions}
												suggestions={suggestionsProps || suggestionsState}
											/>
										</Suspense>
									) : (
										<div />
									)
							},
							{
								icon: '',
								error: errors.destination,
								component:
									charged === true ? (
										<Suspense fallback={<div />}>
											<Autocompletar
												initialValue={destination}
												placeholder="Destino:"
												name="destination"
												onChange={destination => this.setState({ destination })}
												getSuggestions={getSuggestions || this.getSuggestions}
												suggestions={suggestionsProps || suggestionsState}
											/>
										</Suspense>
									) : (
										<div />
									)
							},
							{
								icon: '',
								error: errors.calendar,
								component: charged === true ? <Suspense fallback={<div />}>{this.renderCalendar()}</Suspense> : <div />
							}
						]}
					/>
				</React.Fragment>
			)
		}
		return shoppingVuelos ? (
			<SearchVuelosShopping
				isMobile={false}
				isHotel={false}
				usePassengers
				onSubmit={this.submit}
				initialPassengers={passengers}
				initialCabin={cabin}
				itemsSearch={[
					{
						// icon: 'flaticon-horizontal-arrows',
						icon: (
							<IconContext.Provider
								value={{ style: { color: 'rgb(113, 112, 112)', height: 35, verticalAlign: 'middle' } }}
							>
								<MdFlightLand size={22} />
							</IconContext.Provider>
						),
						error: errors.origin,
						component:
							charged === true ? (
								<Suspense fallback={<div />}>
									<Autocompletar
										name="origin"
										onChange={this.onChangeOrigin}
										placeholder="Origen:"
										getSuggestions={getSuggestions}
										suggestions={suggestionsProps || suggestionsState}
										initialValue={origin}
									/>
								</Suspense>
							) : (
								<div />
							)
					},
					{
						// icon: 'flaticon-baggage',
						icon: (
							<IconContext.Provider
								value={{ style: { color: 'rgb(113, 112, 112)', height: 35, verticalAlign: 'middle' } }}
							>
								<MdFlightTakeoff size={22} />
							</IconContext.Provider>
						),
						error: errors.destination,
						component:
							charged === true ? (
								<Suspense fallback={<div />}>
									<Autocompletar
										name="destination"
										placeholder="Destino:"
										onChange={this.onChangeDestination}
										getSuggestions={this.props.getSuggestions}
										suggestions={suggestionsProps || suggestionsState}
										// initialValues={this.state.destination.value}
										initialValue={destination}
									/>
								</Suspense>
							) : (
								<div />
							)
					}
				]}
				calendar={{
					error: errors.calendar,
					component: charged === true ? <Suspense fallback={<div />}>{this.renderCalendar()}</Suspense> : <div />
				}}
				itemBottom={{
					component: (
						<FormControl component="fieldset" required>
							<RadioGroup
								aria-label="gender"
								name="typeair"
								value={this.state.type}
								onChange={this.handleChange}
								className={classNames(classes.flexStart)}
								style={{ width: '100%', flexDirection: 'row' }}
							>
								<FormControlLabel
									value="ida_vuelta"
									style={{ margin: 0, paddingRight: 15 }}
									control={<Radio className={classNames(classes.radio)} />}
									label={<Text size={11} color="#545454" content="ida y vuelta" />}
								/>
								<FormControlLabel
									value="ida"
									control={<Radio className={classNames(classes.radio)} />}
									label={<Text size={11} color="#545454" content="solo ida" />}
								/>
							</RadioGroup>
						</FormControl>
					)
				}}
			/>
		) : (
			<SearchGeneric
				isMobile={false}
				isHotel={false}
				usePassengers
				onSubmit={this.submit}
				initialPassengers={passengers}
				initialCabin={cabin}
				itemsSearch={[
					{
						// icon: 'flaticon-horizontal-arrows',
						icon: (
							<IconContext.Provider
								value={{ style: { color: 'rgb(113, 112, 112)', height: 35, verticalAlign: 'middle' } }}
							>
								<MdFlightLand size={22} />
							</IconContext.Provider>
						),
						error: errors.origin,
						component:
							charged === true ? (
								<Suspense fallback={<div />}>
									<Autocompletar
										name="origin"
										onChange={this.onChangeOrigin}
										placeholder="Origen:"
										getSuggestions={getSuggestions}
										suggestions={suggestionsProps || suggestionsState}
										initialValue={origin}
									/>
								</Suspense>
							) : (
								<div />
							)
					},
					{
						// icon: 'flaticon-baggage',
						icon: (
							<IconContext.Provider
								value={{ style: { color: 'rgb(113, 112, 112)', height: 35, verticalAlign: 'middle' } }}
							>
								<MdFlightTakeoff size={22} />
							</IconContext.Provider>
						),
						error: errors.destination,
						component:
							charged === true ? (
								<Suspense fallback={<div />}>
									<Autocompletar
										name="destination"
										placeholder="Destino:"
										onChange={this.onChangeDestination}
										getSuggestions={this.props.getSuggestions}
										suggestions={suggestionsProps || suggestionsState}
										// initialValues={this.state.destination.value}
										initialValue={destination}
									/>
								</Suspense>
							) : (
								<div />
							)
					}
				]}
				calendar={{
					error: errors.calendar,
					component: charged === true ? <Suspense fallback={<div />}>{this.renderCalendar()}</Suspense> : <div />
				}}
				itemBottom={{
					component: (
						<FormControl component="fieldset" required>
							<RadioGroup
								aria-label="gender"
								name="typeair"
								value={this.state.type}
								onChange={this.handleChange}
								className={classNames(classes.flexStart)}
								style={{ width: '100%', flexDirection: 'row' }}
							>
								<FormControlLabel
									value="ida_vuelta"
									style={{ margin: 0, paddingRight: 15 }}
									control={<Radio className={classNames(classes.radio)} />}
									label={<Text size={11} color="#545454" content="ida y vuelta" />}
								/>
								<FormControlLabel
									value="ida"
									control={<Radio className={classNames(classes.radio)} />}
									label={<Text size={11} color="#545454" content="solo ida" />}
								/>
							</RadioGroup>
						</FormControl>
					)
				}}
			/>
		)
	}
}

SearchVuelos.defaultProps = {
	image: '',
	fixed: false,
	passangers: { adults: 1, childs: 0, babies: 0 },
	error: {
		origin: 'error on origin',
		destination: 'error on destination',
		calendar: 'error calendar',
		passengers: 'error in passengers'
	},
	isSummary: false,
	isMobile: false
}

SearchVuelos.propTypes = {
	image: PropTypes.string,
	fixed: PropTypes.bool,
	passangers: PropTypes.shape({ adults: PropTypes.number, childs: PropTypes.number, babies: PropTypes.number }),
	error: PropTypes.object,
	isSummary: PropTypes.bool,
	isMobile: PropTypes.bool
}

export default withStyles(({ mauri: { variables, flex } }) => ({
	contentGlobalSearch: {
		marginTop: 10,
		position: 'relative',
		'@media (max-width: 1024px)': {
			display: 'none'
		}
	},
	contentButtonSearch: {
		minHeight: variables.searchMinHeightAir
	},
	contentButtonSearchHotel: {
		minHeight: variables.searchMinHeight
	},
	marginRight10: {
		marginRight: 10
	},
	radioLabel: {
		color: 'silver',
		fontWeight: 'bold'
	},
	radio: {
		background: '#f2f2f2',
		width: 14,
		height: 14,
		margin: 10,
		color: 'gray'
	},
	check: {
		width: 25,
		height: 25,
		margin: '0 10px 0 10px'
	},
	flexStart: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
		/* paddingLeft: 20 */
	},
	contentDataSearch: {
		width: `calc(100% / 1 -  ${variables.searchWidthBtn})`
	},
	autocompletar: {
		minHeight: 35,
		paddingLeft: 20,
		fontSize: 12
	},
	borderTop: {
		borderTop: '0.5px solid silver'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	},
	borderLeft: {
		borderLeft: '0.5px solid silver'
	},
	borderRight: {
		borderRight: '0.5px solid silver'
	},
	calendar: {
		input: {
			textAlign: 'center'
		},
		display: 'flex',
		'@media (max-width: 690px)': {
			display: 'none'
		}
	},
	content_btn_search: {
		width: variables.searchWidthBtn,
		minHeight: variables.searchMinHeightAir,
		heigth: '100%',
		position: 'absolute',
		right: 0
	},
	content_btn_search_hotel: {
		width: variables.searchWidthBtn,
		minHeight: variables.searchMinHeight,
		heigth: '100%',
		position: 'absolute',
		right: 0
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
