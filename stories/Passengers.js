import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, object, select, array } from '@storybook/addon-knobs/react'
import { Passengers, PassengersVuelos } from '../src'

const stories = storiesOf('Passengers', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

stories.add('PassengersHoteles2', () => {
	const defaultProps = {
		isPassengerVuelos: true,
		mandatoryChildAgeErrorText: 'Campo obligatorio',
		maxAdults: 7,
		minAdults: 1,
		maxChilds: 7,
		maxTotal: 7,
		minChilds: 1,
		allowRooms: false
	}
	return (
		<Passengers
			isPassengerVuelos={boolean('set bool for fligth', defaultProps.isPassengerVuelos)}
			allowRooms={boolean('bool para el boton de aplicar', defaultProps.allowRooms)}
			mandatoryChildAgeErrorText={text('Campo obligatorio', defaultProps.mandatoryChildAgeErrorText)}
			maxAdults={number('maxAdults', defaultProps.maxAdults)}
			minAdults={number('minAdults', defaultProps.minAdults)}
			maxChilds={number('maxChilds', defaultProps.maxChilds)}
			maxTotal={number('maxTotal', defaultProps.maxTotal)}
			minChilds={number('minChilds', defaultProps.minChilds)}
		/>
	)
})

stories.add('Passengers Vuelos asdasd', () => {
	const defaultPropsFly = {
		adults: 1,
		childs: 0,
		babies: 0,
		minAdults: 1,
		maxAdults: 5,
		maxChilds: 7,
		maxTotal: 7,
		minChilds: 0
	}
	return <PassengersVuelos open  initialValues={defaultPropsFly} onSubmit={values => console.log(values)} />
})

stories.add('PassengersHoteles', () => {
	const defaultProps = {
		isPassengerVuelos: false
	}
	return <Passengers {...defaultProps} />
})
