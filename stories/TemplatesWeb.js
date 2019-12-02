import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import {
	Home,
	Landing,
	LandingPaquetes,
	Ayuda,
	Profile,
	Shopping,
	ShoppingVuelos,
	ShoppingPaquetes,
	ShoppingCerroMartial,
	Checkout,
	IdCheckout,
	IdeameHome
} from '../src'

const stories = storiesOf('Templates Web', module)

stories.add('Home', () => {
	return (
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	)
})

stories.add('Shopping Hoteles', () => {
	return <Shopping />
})

stories.add('Shopping Vuelos', () => {
	return <ShoppingVuelos />
})

stories.add('Shopping Paquetes', () => {
	return <ShoppingPaquetes />
})

stories.add('Shopping Cerro Martial', () => {
	return <ShoppingCerroMartial />
})

stories.add('Checkout', () => {
	return <Checkout />
})

stories.add('Ideame Checkout', () => {
	return <IdCheckout />
})

stories.add('Landing', () => {
	return <Landing />
})

stories.add('Landing Paquetes', () => {
	return <LandingPaquetes />
})

stories.add('Ayuda', () => {
	return <Ayuda />
})

stories.add('Perfil', () => {
	return <Profile />
})

stories.add('Ideame Home', () => {
	return <IdeameHome />
})
