import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { TabSlider, TabsProfile } from '../src'

const stories = storiesOf('Tabs', module)

// Knobs for React props
stories.add(
	'Tabs Slider',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import TabSlider from "Upt-TabSlider"'
	})(() => {
		return <TabSlider />
	})
)

stories.add(
	'Tabs Profile',
	withInfo({
		styles: {
			source: {
				overflow: 'hidden',
				h1: {
					display: 'none'
				}
			}
		},
		text: 'Import TabsProfile from "Upt-TabsProfile"'
	})(() => {
		return <TabsProfile />
	})
)
