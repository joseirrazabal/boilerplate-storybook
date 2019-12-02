import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Shopping, ShoppingVuelos, ShoppingPaquetes } from '../src'

const stories = storiesOf('Shopping', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

// Knobs for React props
stories.add(
	'Shopping',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import Profile from "Upt-Profile"'
	})(() => {
		return (
			<BrowserRouter>
				<Shopping />
			</BrowserRouter>
		)
	})
)

stories.add(
	'ShoppingVuelos',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import Profile from "Upt-ShoppingVuelos"'
	})(() => {
		return <ShoppingVuelos />
	})
)

stories.add(
	'ShoppingPaquetes',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import Profile from "Upt-ShoppingPaquetes"'
	})(() => {
		return <ShoppingPaquetes />
	})
)
