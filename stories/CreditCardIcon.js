import React from 'react'
import { storiesOf } from '@storybook/react'
import { CreditCardIcon } from '../src'

const stories = storiesOf('CreditCardIcon', module)

stories.add('CreditCardIcon', () => <CreditCardIcon code={'COMAFI'} />)
