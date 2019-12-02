import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, select } from '@storybook/addon-knobs/react'
import { Ayuda } from '../src'

const stories = storiesOf('Ayuda', module)

stories.add('Ayuda', () => {
	return <Ayuda fullScreen={false} />
})
