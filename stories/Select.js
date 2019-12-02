import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs/react'
import { SelectNumber, SelectUpate, OpenSelect } from '../src'

const stories = storiesOf('Select', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

const cc = [
	{ title: 'uno', value: 'one', subtitle: '' },
	{ title: 'dos', value: 'two', subtitle: 'el do' },
	{ title: 'tres', value: 'three', subtitle: 'el tre' },
	{ title: 'cuatro', value: 'four', subtitle: 'el cuatro' },
	{ title: 'cinco', value: 'five', subtitle: 'el cinco' }
]
const label = 'Colors'
const options = {
	Red: 'red',
	Blue: 'blue',
	Yellow: 'yellow',
	Rainbow: ['red', 'orange', 'etc'],
	None: null
}
const defaultValue = 'red'
const groupId = 'GROUP-ID1'

stories.add('Select', () => (
	<SelectNumber
		error={text('mensaje de ERROR', 'asdasd')}
		values={[
			{ title: 'uno', value: 'one', subtitle: 'asd' },
			{ title: 'dos', value: 'two', subtitle: 'el do' },
			{ title: 'tres', value: 'three', subtitle: 'el tre' },
			{ title: 'cuatro', value: 'four', subtitle: 'el cuatro' },
			{ title: 'cinco', value: 'five', subtitle: 'el cinco' }
		]}
		onChange={target => console.log('clg del onChange select', target)}
		onBlur={target => console.log('clg del onBlur select', target)}
	/>
))

class SelectMock extends React.Component {
	state = { value: null }

	render() {
		const options = [
			{ value: 'chocolate', label: 'Chocolate' },
			{ value: 'strawberry', label: 'Strawberry' },
			{ value: 'vanilla', label: 'Vanilla' }
		]
		const { value } = this.state
		return (
			<SelectUpate
				id="flavors"
				label="Tipo"
				error={text('mensaje de ERROR', 'asdasd')}
				values={options}
				onChange={e => this.setState({ value: e.target.value })}
				onBlur={e => this.setState({ value: e.target.value })}
				value={value}
			/>
		)
	}
}

stories.add('SelectUpate', () => <SelectMock />)

stories.add('Open Select', () => <OpenSelect />)
