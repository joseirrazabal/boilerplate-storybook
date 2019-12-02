import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, array, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { Carousel } from '../src'

const stories = storiesOf('Carousel', module)
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
//stories.addDecorator(withKnobs);

stories.add('Carousel', () => {
	return <Carousel images={array('Url Imágenes', [])} />
})
