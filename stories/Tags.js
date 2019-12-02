import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import * as FontAwesome from 'react-icons/fa'
import { Tags } from '../src'

const stories = storiesOf('Tags', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

stories.add('Tag', () => {
	const options = Object.keys(FontAwesome)
	options.sort()
	options.push(' Sin iconos')

	const selectIconLeft = select('Icon-Left', options, ' Sin icono')
	const selectIconRight = select('Icon-Right', options, ' Sin icono')

	var IconLeft = FontAwesome[selectIconLeft]
	var IconRight = FontAwesome[selectIconRight]

	return (
		<Tags
			circle={number('Radius', 30)}
			image={text(
				'Imagen',
				'https://lh3.googleusercontent.com/-P9AP4vdTugM/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfxUquwVBMfRqw56TqgcO0XYriu86Q/s64-c-mo/photo.jpg'
			)}
			elevation={number('Elevation', 0)}
			iconLeft={IconLeft ? <IconLeft /> : null}
			iconRight={IconRight ? <IconRight /> : null}
			name={text('Name', 'Hoteles')}
		/>
	)
})
