import React from 'react'
import { storiesOf } from '@storybook/react'
import { ListCard, ConsultCard, AdminSmallCard, Pagination } from '../src'
import { text, boolean, number, select } from '@storybook/addon-knobs/react'

const stories = storiesOf('Backoffice Molecules', module)

stories.add('List Card', () => {
	return <ListCard />
})

stories.add('Consult Card', () => {
	return <ConsultCard />
})

stories.add('Admin SmallCard', () => {
	return <AdminSmallCard />
})

stories.add('Pagination', () => {
	return <Pagination steps={number('páginas', 3)} initialActiveStep={number('activo', 1)} />
})
