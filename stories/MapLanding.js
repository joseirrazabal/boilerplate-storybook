import React from 'react'
import { storiesOf } from '@storybook/react'
import { LandingMap } from '../src'

const stories = storiesOf('LandingMap', module)
const initialProps = { lat: -59.95, lng: 30.33 }

stories.add('LandingMap', () => (
	<LandingMap size={15} zoom={10} text="hola hoteles" center={(initialProps.lat, initialProps.lng)} />
))
