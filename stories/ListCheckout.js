import React from 'react'
import { storiesOf } from '@storybook/react'
import { ListBanks } from '../src'

const stories = storiesOf('ListBanks', module)

stories.add('List Banks', () => {
	const banksFinancing = [
		{
			bank: {
				name: 'BANCO SANTANDER RIO S.A.',
				code: '00072',
				bankId: 'RIO'
			},
			cardFinancing: [
				{
					card: {
						name: 'American Express',
						code: '65',
						cardId: 'AMEX'
					},
					installmentsFinancing: [
						{
							interest: 0.0981,
							installments: 2,
							cft: 0,
							tea: 0
						},
						{
							interest: 0.1338,
							installments: 3,
							cft: 0,
							tea: 0
						},
						{
							interest: 0.2451,
							installments: 6,
							cft: 0,
							tea: 0
						},
						{
							interest: 0.4139,
							installments: 9,
							cft: 0,
							tea: 0
						},
						{
							interest: 0.5574,
							installments: 12,
							cft: 0,
							tea: 0
						}
					]
				}
			]
		},
		{
			bank: {
				name: 'BBVA BANCO FRANCES S.A.',
				code: '00017',
				bankId: 'BBVA'
			},
			cardFinancing: [
				{
					card: {
						name: 'American Express',
						code: '65',
						cardId: 'AMEX'
					},
					installmentsFinancing: [
						{
							interest: 0.0981,
							installments: 2,
							cft: 0,
							tea: 0
						},
						{
							interest: 0.1338,
							installments: 3,
							cft: 0,
							tea: 0
						},
						{
							interest: 0.2451,
							installments: 6,
							cft: 0,
							tea: 0
						},
						{
							interest: 0.4139,
							installments: 9,
							cft: 0,
							tea: 0
						},
						{
							interest: 0.5574,
							installments: 12,
							cft: 0,
							tea: 0
						}
					]
				}
			]
		}
	]

	return (
		<div>
			<ListBanks banksFinancing={banksFinancing} />
		</div>
	)
})
