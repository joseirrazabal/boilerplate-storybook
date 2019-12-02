import React from 'react'
import update from 'immutability-helper'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { TitleH5, Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'
import SelectNumber from '../../Atoms/SelectNumber'

const buildDefaultChildAgeValues = infoaOptionText => {
	const childAgesValues = [{ title: infoaOptionText, value: 0 }]
	for (let value = 1; value < 18; value += 1) childAgesValues.push({ value })
	return childAgesValues
}

const isEmpty = c => c === ' ' || c === '' || c === undefined || c === null

class Passengers extends React.PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			childAgesValues: props.childAgesValues || buildDefaultChildAgeValues(props.infoaOptionText),
			occupancy: props.initialOccupancy,
			hasError: props.initialHasError
		}
	}

	handleApply = event => {
		const { occupancy, hasError } = this.state
		const { onSubmit } = this.props
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
		const passengers = occupancy.reduce((r, e) => r + e.adults.length + e.childs.length, 0)
		const rooms = occupancy.length

		if (submit && onSubmit)
			onSubmit({
				occupancy,
				passengers,
				rooms,
				event
			})
	}

	removeAdult = i => {
		const room = this.state.occupancy[i]
		if (room && room.adults.length > this.props.minAdults) {
			const occupancy = update(this.state.occupancy, { [i]: { adults: { $set: { length: room.adults.length - 1 } } } })
			this.setState({ occupancy })
		}
	}

	removeChild = i => {
		const room = this.state.occupancy[i]
		if (room && room.childs.length > this.props.minChilds) {
			const occupancy = update(this.state.occupancy, { [i]: { childs: { $splice: [[-1, 1]] } } })
			const hasError = update(this.state.hasError, { [i]: { childs: { $splice: [[-1, 1]] } } })
			this.setState({ occupancy, hasError })
		}
	}

	addAdult = i => {
		const room = this.state.occupancy[i]
		if (room && room.adults.length < this.props.maxAdults) {
			const occupancy = update(this.state.occupancy, { [i]: { adults: { $set: { length: room.adults.length + 1 } } } })
			this.setState({ occupancy })
		}
	}

	addChild = i => {
		const room = this.state.occupancy[i]
		if (room && room.childs.length < this.props.maxChilds) {
			const occupancy = update(this.state.occupancy, { [i]: { childs: { $push: [' '] } } })
			const hasError = update(this.state.hasError, { [i]: { $set: { childs: [false] } } })
			this.setState({ occupancy, hasError })
		}
	}

	handleChildAgeSelect = (r, c, value) => {
		const room = this.state.occupancy[r]
		if (room && room.childs.length < this.props.maxChilds) {
			const occupancy = update(this.state.occupancy, { [r]: { childs: { $merge: { [c]: value } } } })
			const hasError = update(this.state.hasError, { [r]: { childs: { $merge: { [c]: isEmpty(value) } } } })
			this.setState({ occupancy, hasError })
		}
	}

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

	render() {
		const {
			classes,
			allowRooms,
			applyTextButton,
			addRoomText,
			unselectedChildOptionText,
			mandatoryChildAgeErrorText,
			childNumberTitle,
			adultTextTitle,
			removeChildTitle,
			roomTextTitle,
			childTextTitle,
			maxRooms
		} = this.props
		const { occupancy, hasError, childAgesValues } = this.state

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
												style={{ borderRadius: '6px 0 0 6px' }}
												iconLeft={<IconsFont size={20} color="white" icon="flaticon-social-6" />}
											/>
										</div>
										<div>
											<Text size={13} content={room.adults.length} />
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
											<Text size={14} content={room.childs.length} />
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
									{room.childs.map((child, c) => (
										<div key={c}>
											<div className="marginT20 marginB10" style={{ display: 'block' }}>
												<Text size={13} content={`${childNumberTitle} ${c + 1}`} />
											</div>
											<SelectNumber
												error={hasError[i].childs[c]}
												onChange={value => {
													this.handleChildAgeSelect(i, c, value)
												}}
												inputName={`childAge ${c}`}
												inputId={`childAgeID ${c}`}
												value={child}
												unselectedOptionText={unselectedChildOptionText}
												errorText={mandatoryChildAgeErrorText}
												values={childAgesValues}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				<div className="padding15 flexCenterVertical" style={{ borderTop: '0.5px solid #f2f2f2' }}>
					{allowRooms &&
						occupancy.length < maxRooms && (
							<Button visibility onClick={this.addRoom} border radius primary={false} text={addRoomText} />
						)}
					<Button id="btnApllyPsgr" text={applyTextButton} border radius onClick={this.handleApply} />
				</div>
			</div>
		)
	}
}

Passengers.defaultProps = {
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
	maxAdults: 10,
	minAdults: 1,
	maxChilds: 8,
	maxTotal: 8,
	minChilds: 0,
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

Passengers.propTypes = {

	/** Max room allowed */
	maxRooms: PropTypes.number,
	/** Max room allowed */
	minRomms: PropTypes.number,
	maxAdults: PropTypes.number,
	minAdults: PropTypes.number,
	maxChilds: PropTypes.number,
	minChilds: PropTypes.number,
	maxTotal: PropTypes.number,
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
	onSubmit: PropTypes.func.isRequired,
	allowRooms: PropTypes.bool,
	childAgesValues: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number.isRequired,
			title: PropTypes.string
		})
	),
	childAir: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number.isRequired,
			title: PropTypes.string,
			subtitle: PropTypes.string
		})
	),
	isPassengerVuelos: PropTypes.bool,
	initialHasError: PropTypes.arrayOf(PropTypes.shape({}))
}

export { occupancyPropType }

export default withStyles(() => ({
	passengers: {
		background: 'white',
		minWidth: 300,
		maxWidth: 600
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
	}
}))(Passengers)
