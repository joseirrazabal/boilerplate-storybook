import React from 'react'
import { storiesOf } from '@storybook/react'
/* import { text, boolean, number, select } from '@storybook/addon-knobs/react' */
import { Steppers, Button, InputSimple, HorizontalLinearStepper } from '../src'
/* import TextField from '@material-ui/core/TextField' */

const stories = storiesOf('Steppers', module)

stories.add('Steppers', () => <Steppers />)

stories.add('HorizontalLinearStepper', () => <HorizontalLinearStepper />)

/* class Form extends React.Component {
	state = { name: '' }
	handleChange(name) {
		const { onSubmit, onProgressChange } = this.props
		this.setState({ name })
		const progress = name.length * 10

		onProgressChange(progress)
		if (progress === 100) onSubmit(this.state)
	}

	render() {
		return (
			<div>
				<TextField
					onChange={event => this.handleChange(event.target.value)}
					value={this.state.name}
					label="Nombre"
					margin="normal"
				/>
			</div>
		)
	}
} */
