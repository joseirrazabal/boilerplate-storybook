import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs/react'

import { FilterChip, TopBar, TitledTopBar, MobileDialog, MobileFilter, MobileFilterButton } from '../src'

const stories = storiesOf('Dialog', module)

stories.add('FilterChip', () => {
	return <FilterChip title={text('Nombre', 'Filter Chip Close')} />
})

stories.add('TitledTopBar', () => {
	return <TitledTopBar title={text('Nombre', 'Titled Top Bar close')} />
})

stories.add('TopBar', () => {
	return <TopBar />
})

stories.add('MobileFilterButton', () => {
	return <MobileFilterButton />
})

stories.add('MobileFilter', () => {
	return <MobileFilter title={text('Total ', 1500)} />
})

stories.add('MobileDialog', () => {
	return <MobileDialog title={text('Total ', 'Titulo mobile dialog')} />
})
