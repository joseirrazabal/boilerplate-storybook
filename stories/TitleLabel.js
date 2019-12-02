import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { TitlePrimary, TitleSecondary, TitleH3, TitleH4, TitleH5, TitleH6, Text, TextLoading } from '../src'

const stories = storiesOf('Title', module)

stories.add('Title label', () => {
	return (
		<div>
			<TextLoading />
			<TitlePrimary
				name={text('Name', 'Luciano Recchini')}
				center={boolean('Center', false)}
				right={boolean('Right', false)}
				color={text('Color', 'black')}
			/>
			<TitleSecondary
				name={text('Name', 'Luciano Recchini')}
				center={boolean('Center', false)}
				right={boolean('Right', false)}
			/>
			<TitleH3
				name={text('Name', 'Luciano Recchini')}
				center={boolean('Center', false)}
				right={boolean('Right', false)}
			/>
			<TitleH4
				name={text('Name', 'Luciano Recchini')}
				center={boolean('Center', false)}
				right={boolean('Right', false)}
			/>
			<TitleH5
				name={text('Name', 'Luciano Recchini')}
				center={boolean('Center', false)}
				right={boolean('Right', false)}
			/>
			<TitleH6
				name={text('Name', 'Luciano Recchini')}
				center={boolean('Center', false)}
				right={boolean('Right', false)}
			/>
			<Text
				content={text('Name', 'Luciano Recchini')}
				center={boolean('Center', false)}
				lineThrough={boolean('Text Decoration', false)}
				right={boolean('Right', false)}
				bold={boolean('Bold', false)}
				italic={boolean('Italic', false)}
			/>
		</div>
	)
})
