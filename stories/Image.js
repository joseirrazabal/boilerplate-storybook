import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, select } from '@storybook/addon-knobs/react'
import { Image } from '../src'
import { ImageBackground } from '../src'

const stories = storiesOf('Image', module)

stories.add('Image Simple', () => {
	return (
		<Image
			elevation={number('Elevation', 0)}
			title={text('Title', 'imagen de avatar')}
			alt={text('Alt', 'Avatar Profile')}
			height={number('Height', 100)}
			radius={number('BorderRadius', 0)}
			image={text('Image', 'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg')}
		/>
	)
})

stories.add('Image Background', () => {
	return (
		<ImageBackground
			minHeight={number('MinHeight', 200)}
			elevation={number('Elevation', 0)}
			imageSize={number('Image Size', 750)}
			alt={text('Alt', 'Avatar Profile')}
			backgroundImage={text(
				'Background Image',
				'https://images.pexels.com/photos/17679/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb'
			)}
			radius={number('BorderRadius', 0)}
		/>
	)
})
