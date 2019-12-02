import React from 'react'
import { storiesOf } from '@storybook/react'
import { LandingTitle } from '../src'

const stories = storiesOf('LandingTitle', module)

stories.add('LandingTitle', () => <LandingTitle name="murisio macri" nameButton="checkear habitacion" />)
