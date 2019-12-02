import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Landing, LandingPaquetes, HeaderLanding } from '../src'

const stories = storiesOf('Landing', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

// Knobs for React props
stories.add(
	'Landing',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import Landing from "Upt-Profile"'
	})(() => {
		return <Landing />
	})
)

stories.add(
	'Header Landing',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import Landing from "Upt-Profile"'
	})(() => {
		return <HeaderLanding />
	})
)

stories.add(
	'Landing Paquetes',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import Landing Paquetes from "Upt-Profile"'
	})(() => {
		return <LandingPaquetes />
	})
)
