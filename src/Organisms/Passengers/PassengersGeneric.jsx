/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import times from 'lodash/times'
import Menu from '@material-ui/core/Menu'
import update from 'immutability-helper'

import SelectUpate from 'src/emmaterial/Atoms/SelectUpate'

import { TitleH5, Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'
import SelectNumber from '../../Atoms/SelectNumber'

const childAgeValues = [
	{ title: 'Menos de dos años en Brazos', value: 0, subtitle: 'Tarifa Bebe' },
	{ title: 'Entre 2 y 11 años', value: 1, subtitle: 'Tarifa niño' },
	{ title: 'Mas de 11 años', value: 2, subtitle: 'Tarifa adulto' }
]

const cabins2 = [
	// { name: 'Premium primera clase', code: 'P' }, // no trae resultados
	{ name: 'Primera clase', code: 'F' },
	// { name: 'Premium business', code: 'J' },
	{ name: 'Business', code: 'C' },
	{ name: 'Premium economy', code: 'S' },
	{ name: 'Económica', code: 'Y' }
]

const decomposition = ages =>
	ages.reduce(
		(acc, cur) => {
			switch (cur) {
				case 0:
					acc.babies++
					return acc
				case 1:
					acc.childs++
					return acc
				case 2:
					acc.adults++
					return acc
				default:
					return acc
			}
		},
		{ adults: 0, childs: 0, babies: 0 }
	)

const buildDefaultChildAgeValues = infoaOptionText => {
	const childAgesValues = [{ title: infoaOptionText, value: 0 }]
	for (let value = 1; value < 18; value += 1) childAgesValues.push({ value })
	return childAgesValues
}

const isEmpty = c => c === ' ' || c === '' || c === undefined || c === null

class PassengersVuelos extends React.Component {
	constructor(props) {
		super(props)

		const { adults, childs, babies } = props.initialValues.passengers

		const ages = []
		times(babies, () => ages.push(0))
		times(childs, () => ages.push(1))

		let cabin = props.initialValues && props.initialValues.cabin
		if (!['Y', 'S', 'C', 'J', 'F', 'P'].includes(cabin)) {
			cabin = 'Y'
		}

		this.state = {
			adults,
			childs,
			babies,
			ages,
			anchorEl: null,
			// Hotel
			childAgesValues: props.childAgesValues || buildDefaultChildAgeValues(props.infoaOptionText),
			occupancy: (props.initialValues && props.initialValues.occupancy) || props.initialOccupancy,
			cabin: cabin,
			hasError: props.initialHasError
			// ----
		}
	}

	handleOpenMenu = ({ currentTarget }) => {
		const { onClick } = this.props
		this.setState({ anchorEl: currentTarget })
		if (onClick) onClick()
	}

	selectAge(index, value, i) {
		if (i === false) {
			const newAges = [...this.state.ages]
			newAges[index] = value
			this.setState({ ages: newAges })
		} else {
			const room = this.state.occupancy[i]
			if (room && room.childs.length < this.props.maxChilds) {
				const occupancy = update(this.state.occupancy, { [i]: { childs: { $merge: { [index]: value } } } })
				const hasError = update(this.state.hasError, { [i]: { childs: { $merge: { [index]: isEmpty(value) } } } })
				this.setState({ occupancy, hasError })
			}
		}
	}

	handleCloseMenu = event => {
		const { onClose, onSubmit } = this.props

		let resultSubmit = this.submit(event)
		if (resultSubmit) {
			onSubmit(resultSubmit)
			this.setState({ anchorEl: null })
			if (onClose) onClose()
		}
	}

	submit(event) {
		const { isHotel, onSubmit } = this.props
		let passengers

		if (isHotel) {
			const { occupancy, hasError } = this.state
			const parsedError = JSON.parse(JSON.stringify(hasError)) // Naif clone
			let submit = true
			occupancy.forEach((r, i) => {
				r.childs.forEach((c, j) => {
					if (isEmpty(c)) submit = false
					parsedError[i].childs[j] = isEmpty(c)
				})
			})
			if (parsedError) event.stopPropagation()
			this.setState({ hasError: parsedError })
			const passengersResult = occupancy.reduce((r, e) => r + e.adults.length + e.childs.length, 0)
			const rooms = occupancy.length

			if (submit) {
				passengers = {
					occupancy,
					passengersResult,
					rooms
				}
				return { passengers }
				// onSubmit(passengers)
			}
		} else {
			const { ages, adults, cabin } = this.state
			let submit = true
			ages.map(item => {
				if (item === ' ') {
					submit = false
				}
			})

			if (submit) {
				passengers = decomposition(ages)
				passengers.adults += adults
				// onSubmit(passengers)
				return { passengers, cabin }
			}
		}
	}

	removeAdult = (i = false) => {
		const { minAdults } = this.props
		const { adults, occupancy } = this.state

		if (i === false) {
			if (adults > minAdults) this.setState(state => ({ adults: state.adults - 1 }))
		} else {
			// hotel (habitaciones)
			const room = occupancy[i]
			if (room && room.adults.length > minAdults) {
				const occupancyResult = update(occupancy, {
					[i]: { adults: { $set: { length: room.adults.length - 1 } } }
				})
				this.setState({ occupancy: occupancyResult })
			}
		}
	}

	addAdult = (i = false) => {
		if (i === false) {
			const { adults, childs, ages, babies } = this.state
			const { maxChilds, maxAdults } = this.props
			//validaciones para que no haya mas de 7 pasajeros//
			const passengers = decomposition(ages)
			passengers.adults += this.state.adults
			passengers.childs += this.state.childs
			passengers.babies += this.state.babies

			if (this.state.adults < this.props.maxAdults && childs + adults <= 6)
				this.setState(state => ({ adults: state.adults + 1 }))
		} else {
			// Hotel
			const room = this.state.occupancy[i]
			if (room && room.adults.length < this.props.maxAdults) {
				const occupancy = update(this.state.occupancy, {
					[i]: { adults: { $set: { length: room.adults.length + 1 } } }
				})
				this.setState({ occupancy })
			}
		}
	}

	removeChild = i => {
		if (i === false) {
			if (this.state.adults > this.props.minChilds)
				this.setState(state => ({
					ages: state.ages.splice(0, state.ages.length - 1),
					childs: state.childs - 1,
					babies: state.childs - 1
				}))
		} else {
			// hotel
			const room = this.state.occupancy[i]
			if (room && room.childs.length > this.props.minChilds) {
				const occupancy = update(this.state.occupancy, { [i]: { childs: { $splice: [[-1, 1]] } } })
				const hasError = update(this.state.hasError, { [i]: { childs: { $splice: [[-1, 1]] } } })
				this.setState({ occupancy, hasError })
			}
		}
	}

	addChild = (i = false) => {
		const { maxTotal, maxChilds, maxAdults } = this.props

		if (i === false) {
			const { adults, childs, ages, babies } = this.state

			//validaciones para que no haya mas de 7 pasajeros//
			const passengers = decomposition(ages)
			passengers.adults += this.state.adults
			passengers.childs += this.state.childs
			passengers.babies += this.state.babies

			if (this.state.adults < this.props.maxChilds && childs + adults < maxTotal) {
				/* this.setState(state => ({ ages: state.ages.splice(0, state.ages.length + 1) })) */
				this.setState(state => ({
					ages: [...state.ages, ' '],
					childs: state.childs + 1,
					babies: state.childs + 1
				}))
			}
		} else {
			// hotel
			const room = this.state.occupancy[i]

			//validaciones para que no haya mas de 7 pasajeros//
			const adults = (room && room.adults && room.adults.length) || 0
			const childs = (room && room.childs && room.childs.length) || 0
			const total = parseInt(adults) + parseInt(childs)

			if (total < maxTotal) {
				if (room && room.childs.length < this.props.maxChilds) {
					const occupancy = update(this.state.occupancy, { [i]: { childs: { $push: [' '] } } })
					const hasError = update(this.state.hasError, { [i]: { $set: { childs: [false] } } })
					this.setState({ occupancy, hasError })
				}
			}
		}
	}

	// ---------- HOTEL ------------
	handleChildAgeSelect = (r, c, value) => {}

	addRoom = () => {
		const occupancy = update(this.state.occupancy, {
			$push: [
				{
					id: Math.random()
						.toString(36)
						.substring(7),
					adults: { length: 1 },
					childs: []
				}
			]
		})
		this.setState({ occupancy })
	}

	removeRoom = i => {
		const occupancy = update(this.state.occupancy, { $splice: [[i, 1]] })
		this.setState({ occupancy })
	}
	// -----------------------------

	renderPassenger = (adults, childrens, childs, i = false) => {
		const {
			classes,
			adultTextTitle,
			childTextTitle,
			childNumberTitle,
			unselectedChildOptionText,
			mandatoryChildAgeErrorText
		} = this.props

		const { hasError, childAgesValues: childAgeValuesHotel } = this.state

		return (
			<div>
				<div className="marginB10" style={{ display: 'block' }}>
					<Text size={13} content={adultTextTitle} />
				</div>
				<div className={classNames(classes.flexCenterVertical, classes.backgroundGray, classes.people_add)}>
					<div>
						<Button
							onClick={() => {
								this.removeAdult(i)
							}}
							className={classNames(classes.first_btn, { borderRadius: '6px 0 0 6px' })}
							iconLeft={<IconsFont size={20} color="white" icon="flaticon-social-6" />}
						/>
					</div>
					<div>
						<Text size={13} content={adults} />
					</div>
					<div>
						<Button
							onClick={() => {
								this.addAdult(i)
							}}
							className={classNames(classes.last_btn, { borderRadius: '0 6px 6px 0' })}
							iconLeft={<IconsFont size={20} color="white" icon="flaticon-social-5" />}
						/>
					</div>
				</div>
				<div>
					<div className="marginT20 marginB10" style={{ display: 'block' }}>
						<Text size={13} content={childTextTitle} />
					</div>
					<div className={classNames(classes.flexCenterVertical, classes.backgroundGray, classes.people_add)}>
						<div>
							<Button
								onClick={() => {
									this.removeChild(i)
								}}
								className={classNames(classes.first_btn, { borderRadius: '6px 0 0 6px' })}
								iconLeft={<IconsFont color="white" size={20} icon="flaticon-social-6" />}
							/>
						</div>
						<div>
							<Text size={14} content={childrens} />
						</div>
						<div>
							<Button
								onClick={() => {
									this.addChild(i)
								}}
								className={classNames(classes.last_btn, { borderRadius: '0 6px 6px 0' })}
								iconLeft={<IconsFont color="white" size={20} icon="flaticon-social-5" />}
							/>
						</div>
					</div>
				</div>
				<div>
					{childs.map((child, c) => {
						let hasErrorFlight = child === ' '
						return (
							<div key={c}>
								<div className="marginT20 marginB10" style={{ display: 'block' }}>
									<Text size={13} content={`${childNumberTitle} ${c + 1}`} />
								</div>
								<SelectNumber
									inputName={`childAge${c}`}
									inputId={`childAgeID${c}`}
									value={child}
									unselectedOptionText={unselectedChildOptionText}
									errorText={mandatoryChildAgeErrorText}
									values={i === false ? childAgeValues : childAgeValuesHotel}
									error={i === false ? hasErrorFlight : hasError[i].childs[c]}
									onChange={value => this.selectAge(c, value, i)}
								/>
							</div>
						)
					})}
				</div>
			</div>
		)
	}

	renderPassengerFormHotel = () => {
		const { classes, allowRooms, addRoomText, removeChildTitle, roomTextTitle, maxRooms } = this.props
		const { occupancy } = this.state

		return (
			<div className={classNames(classes.passengers)}>
				{occupancy &&
					occupancy.map((room, i) => (
						<div key={room.id}>
							{i !== 0 && (
								<div className="padding15 background-gray-secuondary flexCenterVertical">
									<TitleH5 size={14} content={roomTextTitle} />
									<Button
										text={removeChildTitle}
										onClick={() => {
											this.removeRoom(i)
										}}
										size="small"
										primary={false}
									/>
								</div>
							)}
							<div className="padding15">
								{this.renderPassenger(room.adults.length, room.childs.length, room.childs, i)}
							</div>
						</div>
					))}
				{allowRooms && occupancy.length < maxRooms && (
					<Button visibility onClick={this.addRoom} border radius primary={false} text={addRoomText} />
				)}
			</div>
		)
	}

	render() {
		const { classes, isHotel, isMobile, anchorEl: propsAnchorEl } = this.props
		const { anchorEl, adults, ages } = this.state

		return isMobile ? (
			<div className={classNames(classes.passengers)}>
				{isHotel ? (
					this.renderPassengerFormHotel()
				) : (
					<div className="padding15">
						{this.renderPassenger(adults, ages.length, ages)}
						<div className="padding15">
							<SelectUpate
								label="Clase"
								values={cabins2.map(classFacet => ({
									value: classFacet.code,
									label: classFacet.name
								}))}
								onChange={values => {
									this.setState(state => ({ cabin: values.target.value || 'Y' }))
								}}
								value={this.state.cabin}
							/>
						</div>
					</div>
				)}
				<div className="padding15 background-gray-secuondary flexCenterVertical">
					<Button fullWidth text="Aplicar" radius onClick={e => this.handleCloseMenu(e)} />
				</div>
			</div>
		) : (
			<React.Fragment>
				<div
					style={{ width: '100%', cursor: 'pointer' }}
					className={classNames(classes.displayFlex)}
					onClick={this.handleOpenMenu}
				>
					{this.props.children}
				</div>
				<Menu
					id="menu-appbar"
					onClose={this.handleCloseMenu}
					anchorEl={propsAnchorEl || anchorEl}
					open={Boolean(propsAnchorEl || anchorEl)}
					getContentAnchorEl={null}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					MenuListProps={{ style: { padding: 0 } }}
					// transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				>
					<div className={classNames(classes.passengers)}>
						{isHotel ? (
							this.renderPassengerFormHotel()
						) : (
							<div className="padding15">
								{this.renderPassenger(adults, ages.length, ages)}
								<div className="padding15">
									<SelectUpate
										label="Clase"
										values={cabins2.map(classFacet => ({
											value: classFacet.code,
											label: classFacet.name
										}))}
										onChange={values => {
											this.setState(state => ({ cabin: values.target.value || 'Y' }))
										}}
										value={this.state.cabin}
									/>
								</div>
							</div>
						)}
						<div className="padding15 background-gray-secuondary flexCenterVertical">
							<Button text="Aplicar" radius onClick={e => this.handleCloseMenu(e)} />
						</div>
					</div>
				</Menu>
			</React.Fragment>
		)
	}
}

PassengersVuelos.defaultProps = {
	initialValues: {
		passengers: {
			childs: 0,
			adults: 1,
			babies: 0
		}
	},
	onSubmit: () => {},
	minAdults: 1,
	maxAdults: 7,
	maxChilds: 7,
	maxTotal: 7,
	minChilds: 0,
	// HOTEL ---
	roomTextTitle: 'Habitación',
	applyTextButton: 'Aplicar',
	adultTextTitle: 'Adultos',
	childTextTitle: 'Menores',
	childNumberTitle: 'Edad del menor',
	removeChildTitle: 'ELIMINAR',
	unselectedChildOptionText: 'Seleccione la edad',
	initialOccupancy: [
		{
			id: Math.random()
				.toString(36)
				.substring(7),
			adults: { length: 2 },
			childs: []
		}
	],
	initialHasError: [
		{
			childs: []
		}
	],

	addRoomText: 'Agregar habitación',
	mandatoryChildAgeErrorText: 'Campo obligatorio',
	maxRooms: 4,
	minRomms: 1,
	allowRooms: true,
	infoaOptionText: 'Entre 1 y 12 meses',
	childAgesValues: undefined
}

const occupancyPropType = PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.string,
		adults: PropTypes.shape({
			length: PropTypes.number
		}),
		childs: PropTypes.arrayOf(PropTypes.number)
	})
)

PassengersVuelos.propTypes = {
	initialValues: PropTypes.shape({
		passengers: PropTypes.shape({
			childs: PropTypes.number,
			adults: PropTypes.number,
			babies: PropTypes.number
		})
	}),
	onSubmit: PropTypes.func,
	minAdults: PropTypes.number,
	maxAdults: PropTypes.number,
	maxChilds: PropTypes.number,
	maxTotal: PropTypes.number,
	minChilds: PropTypes.number,
	// HOTEL
	maxRooms: PropTypes.number,
	minRomms: PropTypes.number,
	initialOccupancy: occupancyPropType,
	applyTextButton: PropTypes.string,
	roomTextTitle: PropTypes.string,
	adultTextTitle: PropTypes.string,
	childTextTitle: PropTypes.string,
	childNumberTitle: PropTypes.string,
	removeChildTitle: PropTypes.string,
	infoaOptionText: PropTypes.string,
	mandatoryChildAgeErrorText: PropTypes.string,
	unselectedChildOptionText: PropTypes.string,
	addRoomText: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	allowRooms: PropTypes.bool,
	childAgesValues: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number.isRequired,
			title: PropTypes.string
		})
	),
	// eslint-disable-next-line react/require-default-props
	childAir: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number.isRequired,
			title: PropTypes.string,
			subtitle: PropTypes.string
		})
	),
	// eslint-disable-next-line react/require-default-props
	isPassengerVuelos: PropTypes.bool,
	initialHasError: PropTypes.arrayOf(PropTypes.shape({}))
}

const styles = () => ({
	passengers: {
		background: 'white',
		boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
		minWidth: 300,
		maxWidth: 400
	},
	people_add: {
		boxShadow: '0 2px 2px rgba(0,0,0,0.3)',
		borderRadius: 6
	},
	first_btn: {
		borderRadius: '6px 0 0 6px'
	},
	last_btn: {
		borderRadius: '0 6px 6px 0'
	},
	backgroundGray: {
		background: '#f2f2f2'
	},
	flexCenterVertical: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	}
})

export default withStyles(styles)(PassengersVuelos)
