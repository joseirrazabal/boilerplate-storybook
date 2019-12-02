import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, select } from '@storybook/addon-knobs/react'

import * as FontAwesome from 'react-icons/fa'
import { Button } from '../src'

const stories = storiesOf('Button', module)

stories.add('Button', () => {
	const options = Object.keys(FontAwesome)
	options.sort()
	options.push('Sin iconos')

	const selectIconLeft = select('Icon-Left', options, ' Sin icono')
	const selectIconRight = select('Icon-Right', options, ' Sin icono')

	var IconLeft = FontAwesome[selectIconLeft]
	var IconRight = FontAwesome[selectIconRight]

	const optionsSize = ['small', 'medium', 'big']

	return (
		<Button
			text={text('Text', 'Buscar')}
			size={select('size', optionsSize, 'medium')}
			radius={boolean('Radius', false)}
			border={boolean('Border', true)}
			fullWidth={boolean('Width', true)}
			link={boolean('Link', true)}
			primary={boolean('Primary', true)}
			secondary={boolean('Secondary', false)}
			disable={boolean('Disable', false)}
			iconLeft={IconLeft ? <IconLeft /> : null}
			iconRight={IconRight ? <IconRight /> : null}
		/>
	)
})
