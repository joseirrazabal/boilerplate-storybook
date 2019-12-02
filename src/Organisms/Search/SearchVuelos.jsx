import React from 'react'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
/* import Checkbox from '@material-ui/core/Checkbox' */
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
/* import Menu from '@material-ui/core/Menu' */
import Tooltip from '@material-ui/core/Tooltip'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import PassengersVuelos from '../Passengers/PassengersVuelos'
import Button from '../../Atoms/Button/Button'
import Autocompletar from '../../Molecules/Autocompletar/Autocompletar'
import Calendar from '../../Molecules/Calendar/Calendar'
import IconsFont from '../../Atoms/IconsFont'

const suggestions = [
	{ label: 'Afghanistan' },
	{ label: 'Aland Islands' },
	{ label: 'Albania' },
	{ label: 'Algeria' },
	{ label: 'American Samoa' },
	{ label: 'Andorra' },
	{ label: 'Angola' },
	{ label: 'Anguilla' },
	{ label: 'Antarctica' },
	{ label: 'Antigua and Barbuda' },
	{ label: 'Argentina', type: 'city', value: 'ARG' },
	{ label: 'Ezeiza', type: 'airport', value: 'ARG' },
	{ label: 'Armenia' },
	{ label: 'Aruba' },
	{ label: 'Australia' },
	{ label: 'Austria' },
	{ label: 'Azerbaijan' },
	{ label: 'Bahamas' },
	{ label: 'Bahrain' },
	{ label: 'Bangladesh' },
	{ label: 'Barbados' },
	{ label: 'Belarus' },
	{ label: 'Belgium' },
	{ label: 'Belize' },
	{ label: 'Benin' },
	{ label: 'Bermuda' },
	{ label: 'Bhutan' },
	{ label: 'Posada Arambare', type: 'hotel' },
	{ label: 'Bonaire, Sint Eustatius and Saba' },
	{ label: 'Bosnia and Herzegovina' },
	{ label: 'Botswana' },
	{ label: 'Bouvet Island' },
	{ label: 'Brazil' },
	{ label: 'British Indian Ocean Territory' },
	{ label: 'Hotel Internaciona de Rio de Janeiro', type: 'hotel' },
	{ label: 'Brunei Darussalam' }
]

class SearchVuelos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			auth: true,
			anchorEl: null,
			calendar: {},
			passenger: {},
			place: '',
			passangers: 0,
			suggestions,
			checkedA: false,
			checkedB: false,
			value: 'idayvuelta',
			type: 'ida_vuelta',
			origin: {
				label: (props.initialValues && props.initialValues.origin && props.initialValues.origin.value) || '',
				value: (props.initialValues && props.initialValues.origin && props.initialValues.origin.value) || ''
			},
			destination: {
				label: (props.initialValues && props.initialValues.destination && props.initialValues.destination.value) || '',
				value: (props.initialValues && props.initialValues.destination && props.initialValues.destination.value) || ''
			},
			departuredate: (props.initialValues && props.initialValues.departuredate) || '',
			returndate: (props.initialValues && props.initialValues.returndate) || '',
			detailPassengersCharged: {},
			passengers:
				props.initialValues && props.initialValues.passengers
					? props.initialValues.passengers
					: { adults: 1, childs: 0, babies: 0 },
			errors: {}
		}
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
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
		this.setState({ type: checked })
	}

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget })
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
		const { calendar } = this.state
		if (!calendar) err.calendar = 'debe ingresar un origen'

		this.setState({ calendar: values, errors: err })
	}

	passenger = values => {
		this.setState({ passenger: values })
	}

	submit = () => {
		const err = {}
		const { origin, destination, calendar } = this.state
		if (!origin.value) err.origin = 'debe ingresar un origen'
		if (!destination.value) err.destination = 'debe ingresar un destino'
		if (!Object.keys(calendar).length) err.calendar = 'debe ingresar un fecha'
		this.setState({ errors: err })

		if (this.props.onSubmit) {
			this.props.onSubmit(this.state)
		}
	}

	renderCompositionPassengers = () => {
		const { adults, childs, babies } = this.state.passengers

		return adults + childs + babies
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

	render() {
		const { classes } = this.props
		const { anchorEl, errors } = this.state
		const open = Boolean(anchorEl)

		return (
			<div className={classNames(classes.contentGlobalSearch)}>
				<ContainerCard radius={10} shadow overflow="visible">
					<Grid container spacing={0} className={classNames(classes.contentDataSearch, classes.contentButtonSearch)}>
						<Grid
							item
							xs={12}
							sm={4}
							className={classNames(classes.autocompletar, classes.flexStart, classes.borderRight)}
						>
							<div className={classNames(classes.marginRight10)}>
								<IconsFont size={20} icon="flaticon-horizontal-arrows" className={classNames(classes.marginRight10)} />
							</div>
							<div>
								<Tooltip title={errors.origin} open={Boolean(errors.origin)}>
									<div>
										<Autocompletar
											name="origin"
											onChange={this.onChangeOrigin}
											placeholder="Origen:"
											getSuggestions={this.props.getSuggestions || this.getSuggestions}
											suggestions={this.props.suggestions || this.state.suggestions}
											initialValues={this.state.origin.value}
										/>
									</div>
								</Tooltip>
							</div>
						</Grid>
						<Grid item xs={12} sm={4} className={classNames(classes.autocompletar, classes.flexStart)}>
							<div className={classNames(classes.marginRight10)}>
								<IconsFont size={20} icon="flaticon-baggage" className={classNames(classes.marginRight10)} />
							</div>
							<div>
								<Tooltip title={errors.destination} open={Boolean(errors.destination)}>
									<div>
										<Autocompletar
											name="destination"
											placeholder="Destino:"
											onChange={this.onChangeDestination}
											getSuggestions={this.props.getSuggestions || this.getSuggestions}
											suggestions={this.props.suggestions || this.state.suggestions}
											initialValues={this.state.destination.value}
										/>
									</div>
								</Tooltip>
							</div>
						</Grid>
						<Grid
							className={classNames(classes.calendar, classes.borderLeft, classes.borderRight, classes.displayFlex)}
							item
							xs={3}
							sm={3}
						>
							<Tooltip title={errors.calendar} open={Boolean(errors.calendar)}>
								<div>
									<Calendar
										onChange={this.calendar}
										initialStartDate={this.state.departuredate}
										initialEndDate={this.state.returndate}
									/>
								</div>
							</Tooltip>
						</Grid>
						<Grid className={classNames(classes.calendar, classes.displayFlex)} item xs={1} sm={1}>
							<Grid style={{ cursor: 'pointer' }} onClick={this.handleMenu}>
								<Tooltip title={errors.passengers} open={Boolean(errors.passengers)}>
									<div>
										<PassengersVuelos
											initialValues={this.state.passengers}
											onSubmit={passengers => this.setState({ anchorEl: null, passengers, errors: errors })}
										>
											<div className={classNames(classes.displayFlex)}>
												<IconsFont icon="flaticon-user-2" />
												<Text content={this.renderCompositionPassengers()} style={{ marginLeft: 5 }} />
											</div>
										</PassengersVuelos>
									</div>
								</Tooltip>
							</Grid>
							{/*
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								className={classes.menu}
								anchorOrigin={{
									// vertical: 'button',
									horizontal: 'right'
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={open}
								onClose={this.handlePassengersClose}
							>
								<PassengersVuelos
									anchorEl={anchorEl}
									open={open}
									initialValues={this.state.passengers}
									onSubmit={passengers => this.setState({ anchorEl: null, passengers })}
								/>
							</Menu>
							*/}
						</Grid>
						<Grid container className={classNames(classes.borderTop)}>
							<Grid item xs={4} className={classNames(classes.flexStart)}>
								{/* <div>
									<Checkbox
										className={classNames(classes.check)}
										checked={this.state.checkedB}
										onChange={this.handleChange2('checkedB')}
										value="checkedA"
										color="primary"
									/>
								</div>
								<div>
									<Text size={11} color="gray" content="Todavia no tengo una fecha" />
								</div> */}
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
											label={<Text size={11} color="gray" content="ida y vuelta" />}
										/>
										<FormControlLabel
											value="ida"
											control={<Radio className={classNames(classes.radio)} />}
											label={<Text size={11} color="gray" content="solo ida" />}
										/>
										{/* <FormControlLabel
											value="Mutidestino"
											control={<Radio className={classNames(classes.radio)} />}
											label={<p className={classNames(classes.radioLabel)}>Mutidestino</p>}
										/> */}
									</RadioGroup>
								</FormControl>
							</Grid>
							<Grid item xs={8} className={classNames(classes.flexStart)}>
								{/* <div>
									<Checkbox
										className={classNames(classes.check)}
										checked={this.state.checkedA}
										onChange={this.handleChange2('checkedA')}
										value="checkedA"
										color="primary"
									/>
								</div>
								<div>
									<Text size={11} color="gray" content="Solo vuelos directos" />
								</div> */}
							</Grid>
						</Grid>
						<Grid container spacing={0} className={classNames(classes.content_btn_search)}>
							<Button
								fullWidth
								style={{ borderRadius: '0 6px 6px 0' }}
								iconLeft={<FaSearch size={25} />}
								onClick={this.submit}
							/>
						</Grid>
					</Grid>
				</ContainerCard>
			</div>
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
	open: true
}

SearchVuelos.propTypes = {

	image: PropTypes.string,
	fixed: PropTypes.bool,
	passangers: PropTypes.shape({ adults: PropTypes.number, childs: PropTypes.number, babies: PropTypes.number }),
	error: PropTypes.object,
	open: PropTypes.bool
}

export default withStyles(({ mauri: { variables } }) => ({
	contentGlobalSearch: {
		marginTop: 10,
		position: 'relative',
		'@media (max-width: 800px)': {
			display: 'none'
		}
	},
	contentButtonSearch: {
		minHeight: variables.searchMinHeightAir
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
		position: 'absolute',
		right: 0
	}
}))(SearchVuelos)
