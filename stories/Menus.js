import React from 'react'
import { storiesOf } from '@storybook/react'

import { Consultar } from '../src'

const stories = storiesOf('Menus', module)

stories.add('Consultar', () => {
	return <Consultar />
})
