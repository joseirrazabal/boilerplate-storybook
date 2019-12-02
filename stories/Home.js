import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { Home } from '../src'

const stories = storiesOf('Home', module)

// Knobs for React props
stories.add(
	'Home',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import Home from "Upt-Home"'
	})(() => {
		return (
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		)
	})
)
