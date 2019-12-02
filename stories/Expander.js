import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { Expander } from '../src'

const stories = storiesOf('Expander', module)

stories.add('Expander', () => {
  return <Expander title={text('Title', 'Titulo de Ejemplo')} content={<div>soy un desplegable</div>} />
})
