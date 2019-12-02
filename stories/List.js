import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import * as FontAwesome from 'react-icons/fa'
import { SimpleList, AvatarList, IconList, ListAutocomplete } from '../src'

const stories = storiesOf('List', module)

stories.add('SimpleList', () => {
	const options = Object.keys(FontAwesome)
	options.sort()
	options.push(' Sin iconos')

	return (
		<div>
			<SimpleList
				title={text('Title', 'Hotel Panamericano de Buenos Aires')}
				subtitle={text('Sub Title', '12 abril 2018')}
				borderBottom={boolean('Border Top', true)}
			/>
			<SimpleList
				title={text('Title', 'Hotel Panamericano de Buenos Aires')}
				subtitle={text('Sub Title', '12 abril 2018')}
				borderBottom={boolean('Border Top', true)}
			/>
			<SimpleList
				title={text('Title', 'Hotel Panamericano de Buenos Aires')}
				subtitle={text('Sub Title', '12 abril 2018')}
				borderBottom={boolean('Border Top', true)}
			/>
			<SimpleList
				title={text('Title', 'Hotel Panamericano de Buenos Aires')}
				subtitle={text('Sub Title', '12 abril 2018')}
				borderBottom={boolean('Border Top', false)}
			/>
		</div>
	)
})

stories.add('AvatarList', () => {
	return (
		<div>
			<AvatarList
				image={text(
					'Imagen',
					'https://camo.githubusercontent.com/8faf3e1c49c90e664252cfeed6226988cf7a11d7/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f73746f7279626f6f6b2f6261636b65722f31362f6176617461722e737667'
				)}
				title={text('Title', 'Hotel Panamericano de Buenos Aires')}
				subtitle={text('Sub Title', '12 abril 2018')}
				borderBottom={boolean('Border Top', true)}
			/>
		</div>
	)
})

stories.add('IconList', () => {
	return (
		<div>
			<IconList
				title={text('Title', 'Hotel Panamericano de Buenos Aires')}
				icon={text('icono', 'flaticon-bed')}
				borderBottom={boolean('Border Top', true)}
			/>
			<IconList
				title={text('Title', 'Hotel Panamericano de Buenos Aires')}
				borderBottom={boolean('Border Top', true)}
			/>
			<IconList
				title={text('Title', 'Hotel Panamericano de Buenos Aires')}
				borderBottom={boolean('Border Top', true)}
			/>
			<IconList
				title={text('Title', 'Hotel Panamericano de Buenos Aires')}
				borderBottom={boolean('Border Top', true)}
			/>
		</div>
	)
})

stories.add('ListAutocomplete', () => {
	return (
		<div>
			<ListAutocomplete
				title={text('Title', 'Hotel Panamericano de Buenos Aires')}
				icon={text('icono', 'flaticon-bell')}
				borderBottom={boolean('Border Top', true)}
			/>
		</div>
	)
})
