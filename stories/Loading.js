import React from 'react'
import { storiesOf } from '@storybook/react'
import { LoadingSearch, LoadingShopping, LoadingSteppers, LoadingPaquetes } from '../src'

const stories = storiesOf('Loading', module)

stories.add('Loading Search', () => {
	return (
		<div>
			<LoadingSearch />
		</div>
	)
})

stories.add('Loading Shopping', () => {
	return (
		<div>
			<LoadingShopping />
		</div>
	)
})

stories.add('Loading Steppers', () => {
	return (
		<div>
			<LoadingSteppers />
		</div>
	)
})

stories.add('LoadingPaquetes', () => {
	return (
		<div>
			<LoadingPaquetes />
		</div>
	)
})
