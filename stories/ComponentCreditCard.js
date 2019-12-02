import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'
import { ComponentCreditCard } from '../src'

const stories = storiesOf('ComponentCreditCard', module)

stories.add('Component Credit Card', () => {
	return <ComponentCreditCard />
})
