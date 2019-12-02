import React from 'react'
import { storiesOf } from '@storybook/react'
import { NavFixed } from '../src'
import { text, number } from '@storybook/addon-knobs/react'

const stories = storiesOf('Navegation', module)

stories.add('NavFixed', () => (
	<NavFixed price={number('set default price', 1220)} nameHotel={text('nombre de Hotel', 'hotel ... tres vagos')} stars={number('settings stars to 1 at 5', 2)}/>
))