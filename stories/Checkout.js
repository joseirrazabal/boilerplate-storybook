import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkout } from '../src'

const stories = storiesOf('Checkout', module)

// Knobs for React props
stories.add('Checkout', () => <Checkout />)
