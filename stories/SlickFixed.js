import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { SlickFixed } from '../src'

const stories = storiesOf('SlickFixed', module)

// Knobs for React props
stories.add(
	'Slick',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import SlickFixed from "Upt-SlickFixed"'
	})(() => {
		return <SlickFixed />
	})
)
