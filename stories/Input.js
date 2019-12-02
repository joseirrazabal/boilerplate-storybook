import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { InputSimple, MultiInput, UpateInput, UpateInputPhone } from '../src'

const stories = storiesOf('Input', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

stories.add('Input Simple', () => {
	return <InputSimple inputName={text('Input name', 'Nombre')} name={text('Name', 'Luciano Recchini')} />
})

stories.add('Upate Input Phone', () => {
	return <UpateInputPhone />
})

stories.add('MultiInput', () => {
	return (
		<MultiInput
			inputName1={text('Input name', 'Numero')}
			inputName2={text('Input name', 'Piso')}
			inputName3={text('Input name', 'Depto')}
			inputName4={text('Input name', 'Codigo Postal')}
			name1={text('Name', 'DNI')}
			name2={text('Name', 'Piso')}
			name3={text('Name', 'Depto')}
			name4={text('Name', 'Codigo Postal')}
		/>
	)
})

stories.add('Input UPATE', () => {
	return (
		<UpateInput
			nameValue={text('nameValue', 'nameValue')}
			labelValue={text('labeled Valued', 'label')}
			placeholderValue={text('placeHolder', 'placeHolder')}
			error={text('error value', 'error')}
		/>
	)
})
