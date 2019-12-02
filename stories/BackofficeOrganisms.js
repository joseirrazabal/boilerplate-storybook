import React from 'react'
import { storiesOf } from '@storybook/react'
import {
	NavSearch,
	EnhancedTable,
	EditBackgroundHome,
	AdminCards,
	QuerysTable,
	BloqueConsulta,
	NavBottom,
	NavGuide,
	AdminContent,
	AdminSmallCards
} from '../src'

const stories = storiesOf('BackofficeOrganisms', module)

stories.add('EnhancedTable', () => {
	return <EnhancedTable />
})

stories.add('EditBackgroundHome', () => {
	return <EditBackgroundHome />
})

stories.add('QuerysTable', () => {
	return <QuerysTable />
})

stories.add('Bloque Consulta', () => {
	return <BloqueConsulta />
})

stories.add('NavSearch', () => {
	return <NavSearch />
})

stories.add('NavBottom', () => {
	return <NavBottom />
})

stories.add('NavGuide', () => {
	return <NavGuide />
})

stories.add('AdminCards', () => {
	return <AdminCards />
})

stories.add('AdminContent', () => {
	return <AdminContent />
})

stories.add('AdminSmallCards', () => {
	return <AdminSmallCards />
})
