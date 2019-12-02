import React from 'react'
import { storiesOf } from '@storybook/react'
import { TabsOrdenar } from '../src'

const stories = storiesOf('TabsOrdenar', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

stories.add('TabsOrdenar', () => {
	return <TabsOrdenar />
})
