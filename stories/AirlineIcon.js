import React from 'react'
import { storiesOf } from '@storybook/react'
import { AirlineIcon } from '../src'

const stories = storiesOf('AirlineIcon', module)

stories.add('AirlineIcon', () => <AirlineIcon code={'UX'} />)
