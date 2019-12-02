import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { Autocompletar } from '../src'

const stories = storiesOf('Autocompletar', module)

/**
 * Mutiple section object example
 */
const multipleSuggestions = [
	{
		title: 'Hoteles',
		icon: '',
		values: [
			{ label: 'Hotel Internacional Buenos Aires 1', code: 1 },
			{ label: 'Hotel Internacional Buenos Aires 2', code: 2 },
			{ label: 'Hotel Internacional Buenos Aires 3', code: 3 },
			{ label: 'Hotel Internacional Buenos Aires 4', code: 4 },
			{ label: 'Hotel Internacional Buenos Aires 5', code: 5 },
			{ label: 'Hotel Internacional Buenos Aires 6', code: 6 },
			{ label: 'Destino Hotel 7', code: 6 }
		]
	},
	{
		title: 'Destinos',
		icon: '',
		values: [
			{ label: 'Destino 1', code: 11 },
			{ label: 'Destino 2', code: 22 },
			{ label: 'Destino 3', code: 33 },
			{ label: 'Destino 4', code: 44 },
			{ label: 'Destino 5', code: 55 },
			{ label: 'Destino 6', code: 66 },
			{ label: 'Hotel Destino 7', code: 66 }
		]
	}
]

/**
 * Single section object example
 */
const suggestions = [
	{ label: 'Afghanistan' },
	{ label: 'Aland Islands' },
	{ label: 'Albania' },
	{ label: 'Algeria' },
	{ label: 'American Samoa' },
	{ label: 'Andorra' },
	{ label: 'Angola' },
	{ label: 'Anguilla' },
	{ label: 'Antarctica' },
	{ label: 'Antigua and Barbuda' },
	{ label: 'Argentina' },
	{ label: 'Armenia' },
	{ label: 'Aruba' },
	{ label: 'Australia' },
	{ label: 'Austria' },
	{ label: 'Azerbaijan' },
	{ label: 'Bahamas' },
	{ label: 'Bahrain' },
	{ label: 'Bangladesh' },
	{ label: 'Barbados' },
	{ label: 'Belarus' },
	{ label: 'Belgium' },
	{ label: 'Belize' },
	{ label: 'Benin' },
	{ label: 'Bermuda' },
	{ label: 'Bhutan' },
	{ label: 'PlurinationalBolivia State of, Bolivia, Plurinational State of' },
	{ label: 'Bonaire, Sint Eustatius and Saba' },
	{ label: 'Bosnia and Herzegovina' },
	{ label: 'Botswana' },
	{ label: 'Bouvet Island' },
	{ label: 'Brazil' },
	{ label: 'British Indian Ocean Territory' },
	{ label: 'Brunei Darussalam' }
]

const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase()
	const inputLength = value.length

	return inputLength === 0
		? []
		: suggestions.filter(suggestion => suggestion.label.toLowerCase().slice(0, inputLength) === inputValue)
}

const getMultipleSuggestion = value => {
	const escapedValue = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	if (escapedValue === '') {
		return []
	}

	const regex = new RegExp('^' + escapedValue, 'i')

	return multipleSuggestions
		.map(section => {
			return {
				title: section.title,
				values: section.values.filter(val => regex.test(val.label))
			}
		})
		.filter(section => section.values.length > 0)
}

const onAutocompleteChange = (value, name = 'place') => {
	var obj = {}
	obj[name] = value
	// this.setState(obj)
	// this.props.onAutocompleteChange && this.props.onAutocompleteChange(value)
}

stories.add('Autocompletar', () => {
	return <Autocompletar name="destination" onChange={onAutocompleteChange} getSuggestions={getSuggestions} />
})

stories.add('Autocompletar Multiple', () => {
	return (
		<Autocompletar
			name="destination"
			onChange={onAutocompleteChange}
			getSuggestions={getMultipleSuggestion}
			multiSection
		/>
	)
})
