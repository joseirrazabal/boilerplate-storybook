import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'

// import { Calendar, SimpleCalendar } from '../src'
import moment from 'moment'
const stories = storiesOf('Calendar', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

stories.add('Calendar Default', () => {
  return <div>123</div>
	// return (
	// 	<Calendar
	// 		useTooltip={boolean('tooltip', false)}
	// 		tooltipSingular={text('singular', 'día')}
	// 		tooltipPlural={text('plural', 'días')}
	// 	/>
	// )
})

stories.add('Calendar Simple', () => {
  return <div>123</div>
	// return <SimpleCalendar initialDate={moment()} />
})
