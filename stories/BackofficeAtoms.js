import React from 'react'
import { storiesOf } from '@storybook/react'
import { SaveButton, Inputs, FormattedInputs } from '../src'

const stories = storiesOf('Backoffice Atoms', module)

stories.add('Save Button', () => {
	return (
		<SaveButton onClick={() => console.log('SaveButton')} loading={true} terms={true}>
			SaveButton
		</SaveButton>
	)
})

stories.add('Inputs', () => {
	return <Inputs />
})

stories.add('FormattedInputs', () => {
	return <FormattedInputs />
})
