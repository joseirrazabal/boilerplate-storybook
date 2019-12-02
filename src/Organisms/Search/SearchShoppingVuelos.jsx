import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import { FaSearch } from 'react-icons/fa'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
// import Autocompletar from '../../Molecules/Autocompletar/Autocompletar'
// import SimpleCalendar from '../../Molecules/Calendar/SimpleCalendar'

import IconsFont from '../../Atoms/IconsFont'
import PassengersGeneric from '../Passengers/PassengersGeneric'

const SimpleCalendar = lazy(() => import('src/emmaterial/Molecules/Calendar/SimpleCalendar'))
const Autocompletar = lazy(() => import('src/emmaterial/Molecules/Autocompletar/Autocompletar'))

const suggestions = [
	{ value: 'MCZ', label: 'Maceio' },
	{ value: 'PAR', label: 'Paris' },
	{ value: 'EZE', label: 'Ministro Pisculichi' },
	{ value: 'NRN', label: 'Aeropuerto de Narnia' }
]

class SearchShoppingVuelos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			auth: true,
			anchorEl: null,
			calendar: {},
			passenger: {},
			suggestions: [],
			checkedA: false,
			checkedB: false,
			value: 'idayvuelta',
			cabin: (props.initialValues && props.initialValues.cabin) || 'Y',
			type: (props.initialValues && props.initialValues.type) || 'ida_vuelta',
			origin: {
				value: (props.initialValues && props.initialValues.origin && props.initialValues.origin.value) || '',
				label: (props.initialValues && props.initialValues.origin && props.initialValues.origin.label) || ''
			},
			destination: {
				value: (props.initialValues && props.initialValues.destination && props.initialValues.destination.value) || '',
				label: (props.initialValues && props.initialValues.destination && props.initialValues.destination.label) || ''
			},
			departuredate: (props.initialValues && props.initialValues.departuredate) || moment(),
			returndate: (props.initialValues && props.initialValues.returndate) || moment(),
			childsPassengersCharged: {},
			passengers:
				props.initialValues && props.initialValues.passengers
					? props.initialValues.passengers
					: { adults: 1, childs: 0, babies: 0 }
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

	handlePassengersSubmit = passengers => {
		const people = passengers.occupancy.reduce((r, e) => r + e.adults.length + e.childs.length, 0)
		const sumChilds = this.compressArray(passengers.occupancy[0].childs)

		this.setState({
			detailPassengersCharged: sumChilds,
			passengers: people
		})

		this.handleClose()
	}

	handleChange2 = name => event => {
		this.setState({ [name]: event.target.checked })
	}

	handleChange = (event, checked) => {
		this.setState({ auth: checked })
	}

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	onChange = (value, name = 'origin') => {
		const obj = {}
		obj[name] = value
		if (name === 'returndate') this.setState({ ...obj, type: 'ida_vuelta' })
		else this.setState(obj)
	}

	submit = () => {
		this.props.onSubmit(this.state)
	}

	getSuggestions = value => {
		const inputValue = value ? value.trim().toLowerCase() : null
		const inputLength = inputValue ? inputValue.length : null
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

	getPeopleCount = ({ adults, childs, babies }) => parseInt(adults, 10) + parseInt(childs, 10) + parseInt(babies, 10)

	componentDidMount() {
		this.setState({ charged: true })
	}

	render() {
		const { classes } = this.props

		const { anchorEl, type, charged } = this.state
		const open = Boolean(anchorEl)

		return (
			<div className={classNames(classes.contentSearch)}>
				<div className={classNames(classes.contentDestinos, classes.padding, classes.border)}>
					<div className={classNames(classes.flex, classes.borderRight)}>
						<div className={classNames(classes.marginRight10)}>
							<IconsFont size={20} icon="flaticon-horizontal-arrows" />
						</div>
						<div className={classNames(classes.autocomplete)}>
							{charged === true ? (
								<Suspense fallback={<div>Loading...</div>}>
									<Autocompletar
										name="origin"
										onChange={val => this.onChange(val, 'origin')}
										placeholder="Origen:"
										getSuggestions={this.props.getSuggestions || this.getSuggestions}
										suggestions={this.props.suggestions || this.state.suggestions}
										initialValue={this.state.origin}
									/>
								</Suspense>
							) : (
								<div>Loading...</div>
							)}
						</div>
					</div>
					<div className={classNames(classes.flex)}>
						<div className={classNames(classes.margin10)}>
							<IconsFont size={20} icon="flaticon-baggage" className={classNames(classes.marginRight10)} />
						</div>
						<div className={classNames(classes.autocomplete)}>
							{charged === true ? (
								<Suspense fallback={<div>Loading...</div>}>
									<Autocompletar
										name="destination"
										placeholder="Destino:"
										onChange={val => this.onChange(val, 'destination')}
										getSuggestions={this.props.getSuggestions || this.getSuggestions}
										suggestions={this.props.suggestions || this.state.suggestions}
										initialValue={this.state.destination}
									/>
								</Suspense>
							) : (
								<div>Loading...</div>
							)}
						</div>
					</div>
				</div>
				<div className={classNames(classes.contentCalendario, classes.border, { paddingLeft: 10 })}>
					<div className={classNames(classes.calendar)}>
						<div className={classNames(classes.flex, classes.borderRight)}>
							<div className={classNames(classes.marginRight10)}>
								<IconsFont size={20} icon="flaticon-calendar" />
							</div>
							<div style={{ width: '100%' }}>
								{charged === true ? (
									<Suspense fallback={<div>Loading...</div>}>
										<SimpleCalendar
											onChange={val => this.onChange(val, 'departuredate')}
											name="Desde"
											initialDate={this.state.departuredate}
										/>
									</Suspense>
								) : (
									<div>Loading...</div>
								)}
							</div>
						</div>

						<div className={classNames(classes.flex, classes.borderRight)}>
							<div className={classNames(classes.margin10)}>
								<IconsFont size={20} icon="flaticon-calendar" />
							</div>
							<div style={{ width: '100%' }}>
								{charged === true ? (
									<Suspense fallback={<div>Loading...</div>}>
										<SimpleCalendar
											onChange={val => this.onChange(val, 'returndate')}
											name="Ida y vuelta"
											initialDate={type === 'ida_vuelta' && this.state.returndate}
										/>
									</Suspense>
								) : (
									<div>Loading...</div>
								)}
							</div>
						</div>
					</div>
					<div className={classNames(classes.personas)}>
						<div className={classNames(classes.itemsPersonas, classes.margin10)}>
							<Grid className={classNames(classes.calendar, classes.displayFlex)} item xs={1} sm={1}>
								<Grid
									className={classNames(classes.displayFlex)}
									style={{ cursor: 'pointer' }}
									onClick={this.handleMenu}
								>
									<IconsFont icon="flaticon-user-2" />
									<Text content={this.getPeopleCount(this.state.passengers)} style={{ marginLeft: 5 }} />
								</Grid>
								<PassengersGeneric
									anchorEl={anchorEl}
									initialValues={{ passengers: this.state.passengers, cabin: this.state.cabin }}
									onSubmit={({ passengers, cabin }) => {
										this.setState({ anchorEl: false, passengers, cabin })
									}}
								/>
							</Grid>
						</div>
					</div>
					<div>
						<Button
							fullWidth
							style={{ borderRadius: '0 6px 6px 0' }}
							iconLeft={<FaSearch style={{ fontSize: 25 }} />}
							onClick={this.submit}
						/>
					</div>
				</div>
			</div>
		)
	}
}
SearchShoppingVuelos.defaultProps = {
	initialValues: {
		passengers: {},
		origen: { cod: '', val: '' },
		destino: { cod: 'PAR', val: 'Paris' },
		departuredate: null,
		returndate: null,
		type: 'ida_vuelta'
	},
	onSubmit: () => {}
}
SearchShoppingVuelos.propTypes = {

	initialValues: PropTypes.shape({
		passengers: PropTypes.shape({
			childs: PropTypes.number,
			adults: PropTypes.number,
			babies: PropTypes.number
		}),
		origen: PropTypes.shape({}),
		destino: PropTypes.shape({}),
		departuredate: PropTypes.object,
		returndate: PropTypes.object
	}),
	onSubmit: PropTypes.func
}

export default withStyles(() => ({
	contentSearch: {
		width: '100%'
	},
	displayFlex: {
		display: 'flex'
	},
	flex: {
		display: 'flex',
		alignItems: 'center',
		width: 'calc(100% / 2)'
	},
	padding: {
		padding: 10
	},
	autocomplete: {
		width: '100%'
	},
	borderRight: {
		borderRight: '1px solid silver'
	},
	margin10: {
		margin: '0 10px'
	},
	marginRight10: {
		marginRight: 10
	},
	border: {
		border: '1px solid silver',
		borderRadius: 6
	},
	calendar: {
		width: 'calc(100% - 60px)',
		display: 'flex',
		paddingLeft: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	personas: {
		/* width: 60, */
		display: 'flex',
		flexDirection: 'row',
		justyfyContent: 'center',
		alignItems: 'center'
	},
	itemsPersonas: {
		display: 'flex',
		alignItems: 'center'
	},
	contentDestinos: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		background: 'white'
	},
	contentCalendario: {
		marginTop: 10,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		background: 'white'
	}
}))(SearchShoppingVuelos)
