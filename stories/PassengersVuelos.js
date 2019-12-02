/*
import React from 'react'
import { withStyles } from 'react-with-styles'
import { Passengers } from '../src'

class PassengersVuelos extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<Passengers {...PassengersVuelos.defaultProps} />
			</div>
		)
	}
}
PassengersVuelos.propTypes = Passengers.propTypes

PassengersVuelos.defaultProps = {
	roomTextTitle: 'Habitación',
	applyTextButton: 'Aplicar',
	adultTextTitle: 'Adultos',
	childTextTitle: 'Menores',
	childNumberTitle: 'Edad del menor',
	removeChildTitle: 'ELIMINAR',
	unselectedChildOptionText: 'Seleccione la edad',
	rooms: [
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
	infoaOptionText: 'Entre 0 y 12 meses',
	addRoomText: 'agregar habitación',
	mandatoryChildAgeErrorText: 'Campo obligatorio',
	maxRooms: 4,
	minRomms: 1,
	maxAdults: 666,
	minAdults: 1,
	maxChilds: 8888,
	maxTotal: 8,
	minChilds: 0,
	minRooms: 1,
	allowRooms: false
}

export default withStyles(() => ({}))(PassengersVuelos)
*/
