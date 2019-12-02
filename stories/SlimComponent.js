import React from 'react'
import { storiesOf } from '@storybook/react'
import { SlimComponentsCrop } from '../src'

const stories = storiesOf('Slim Crop', module)

stories.add('SlimComponent', () => {
	return <SlimComponentsCrop />
})
