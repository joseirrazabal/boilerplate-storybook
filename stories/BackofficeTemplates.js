import React from 'react'
import { storiesOf } from '@storybook/react'
import { Dashboard, QueryDetail, Grid2, Grid3, QueryList, Financing, LoginBackoffice } from '../src'
import Layout from '../src/Templates/Backoffice/Layout'

const stories = storiesOf('Templates Backoffice', module)

const handleSubmit = values => {
	console.log('form', values)
}

function createData(
	id,
	Userid,
	fecha,
	destino,
	tarifa,
	nombre,
	telefono,
	email,
	producto,
	pasajeros,
	ejecutivo,
	tiempo
) {
	return {
		id,
		Userid,
		fecha,
		destino,
		tarifa,
		nombre,
		telefono,
		email,
		producto,
		pasajeros,
		ejecutivo,
		tiempo
	}
}
const dataHeader = [
	// {
	// 	label: 'Title',
	// 	name: 'userid',
	// 	type: 'text',
	// 	editable: true,
	// 	numeric: false
	// },
	{
		label: 'Fecha',
		name: 'fecha',
		type: 'text',
		numeric: false,
		editable: true
	},
	{
		label: 'Destino',
		name: 'destino',
		type: 'text',
		numeric: false,
		editable: true
	},
	{
		label: 'Teléfono',
		name: 'telefono',
		type: 'text',
		numeric: true,
		editable: true
	},
	{
		label: 'Email',
		name: 'email',
		type: 'text',
		numeric: false,
		editable: true
	}
]

const data = [
	createData(
		1,
		1,
		'24/08/18',
		'Buzios01',
		'Tarifa 001',
		'Lu',
		11,
		'reqini@gmail01.com',
		'Paquete',
		3,
		'NewRich',
		'2min'
	),
	createData(
		2,
		2,
		'24/08/18',
		'Buzios02',
		'Tarifa 002',
		'Luciano',
		116861,
		'reqini@gmail02.com',
		'Paquete',
		3,
		'NewRich',
		'2min'
	),
	createData(
		3,
		3,
		'24/08/18',
		'Buzios03',
		'Tarifa 003',
		'Luciano Recchini',
		1168610825,
		'reqini@gmail03.com',
		'Paquete',
		3,
		'NewRich',
		'2min'
	)
]

const menu = [
	{
		title: 'Producto',
		childs: [
			{
				icon: 'flaticon-hotel',
				title: 'Paquetes',
				childs: [
					{
						title: 'Administración',
						route: '/paquetes/administracion'
					},
					{
						title: 'Búsqueda',
						route: '/paquetes/busqueda'
					},
					{
						title: 'Test',
						route: '/paquetes/test'
					},
					{
						title: 'Otro test',
						route: '/otrotest'
					},
					{
						title: 'Logs',
						childs: [
							{
								title: 'Accesos',
								route: '/accesos'
							},
							{
								title: 'Errores',
								route: '/errores'
							}
						]
					}
				]
			},
			{
				icon: 'flaticon-hotel',
				title: 'Consultas',
				route: '/consultas'
			},
			{
				icon: 'flaticon-hotel',
				title: 'Home',
				route: '/home'
			}
		]
	}
]

const click = route => {
	console.log(route)
}

stories.add('Login Backoffice', () => <LoginBackoffice submit={handleSubmit} />)

stories.add('Layout', () => <Layout menues={menu} onClick={click} title={'Titulo'} />)

stories.add('Dashboard', () => <Dashboard />)

stories.add('QueryDetail', () => <QueryDetail />)

stories.add('Query List', () => <QueryList data={data} headers={dataHeader} />)

stories.add('Financing', () => <Financing />)

stories.add('Form Grid 2 Columnas', () => <Grid2 />)

stories.add('Form Grid 3 Columnas', () => <Grid3 />)
