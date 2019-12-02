import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import * as FontAwesome from 'react-icons/fa'
import { CustomizedSnackbars } from '../src'

const stories = storiesOf('Favoritos', module)

stories.add('Favoritos', () => {
	const options = Object.keys(FontAwesome)
	options.sort()
	options.push(' Sin iconos')
	const optionsSize = ['small', 'medium', 'big']

	return <CustomizedSnackbars />
})
