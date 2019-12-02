import React from 'react'
import { storiesOf } from '@storybook/react'
import { Bank, Image } from '../src'

const stories = storiesOf('Bank', module)

stories.add('Bank', () => <Bank bankId={'GALICIA'} />)
