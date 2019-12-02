import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { SimpleNews } from '../src'

const stories = storiesOf('Newsletters', module)

stories.add(
	'Simple News',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import SimpleNews from "Upt-SimpleNews"'
	})(() => {
		return <SimpleNews />
	})
)
