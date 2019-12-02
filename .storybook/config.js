import React from 'react'
import moment from 'moment'
import dotenv from 'dotenv'

import { configure, addDecorator, setAddon } from '@storybook/react'
import infoAddon, { setDefaults } from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { BrowserRouter } from 'react-router-dom'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

// import '@upate/react-dates/initialize'
// import '@upate/react-dates/lib/css/_datepicker.css'

import '../css/storybook.scss'
import '../src/Slim/slim.css'

import theme from '../src/theme/DefaultTheme'

dotenv.config()

const muiTheme = createMuiTheme(theme)

const fullScreen = false
if (!fullScreen) {
	addDecorator((story, context) => {
		return withInfo({
			styles: {
				source: {
					overflow: 'hidden',
					h1: {
						display: 'none'
					}
				}
			},
			text: 'Import Select from "Upt-${component}"'
		})(story)(context)
	})
}

addDecorator(withKnobs)

addDecorator(story => {
	moment.locale('es')
	return story()
})

addDecorator(story => (
	<BrowserRouter>
		<MuiThemeProvider theme={muiTheme}>{story()}</MuiThemeProvider>
	</BrowserRouter>
))

setOptions({
	name: 'emmaterial',
	url: 'https://upate.com',
	goFullScreen: false,
	showStoriesPanel: true,
	showAddonPanel: true,
	showSearchBox: false,
	addonPanelInRight: true,
	sidebarAnimations: false
})

setDefaults({
	header: false, // Toggles display of header with component name and description
	inline: true
})

const req = require.context('../stories', true, /.js$/)

function loadStories() {
	req.keys().forEach(filename => req(filename))
}

setAddon(infoAddon)

configure(loadStories, module)
