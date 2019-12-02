import React from 'react'
import { storiesOf } from '@storybook/react'
/* import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react' */
import { ListCards } from '../src'

const stories = storiesOf('ListCards', module)
const cards = [
	'visa',
	'master card',
	'cabal',
	'falopa',
	'fafafa',
	'cabal',
	'falopa',
	'fafafa',
	'cabal',
	'falopa',
	'fafafa'
]

stories.add('ListCards', () =>
	<ListCards
		banksFinancing={[
			{
				bank: { bankId: 'COMAFI', name: 'BANCO COMAFI SOCIEDAD ANONIMA', code: '00299' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			},
			{
				bank: { bankId: 'GALICIA', name: 'BANCO DE GALICIA Y BUENOS AIRES S.A.', code: '00007' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			},
			{
				bank: { bankId: 'ICBC', name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA', code: '00015' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'MASTER', name: 'MasterCard', code: '15' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			},
			{
				bank: { bankId: 'ICBC', name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA', code: '00015' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'MASTER', name: 'MasterCard', code: '15' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			},
			{
				bank: { bankId: 'ICBC', name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA', code: '00015' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'MASTER', name: 'MasterCard', code: '15' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			},
			{
				bank: { bankId: 'ICBC', name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA', code: '00015' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'MASTER', name: 'MasterCard', code: '15' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			},
			{
				bank: { bankId: 'ICBC', name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA', code: '00015' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'MASTER', name: 'MasterCard', code: '15' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			},
			{
				bank: { bankId: 'ICBC', name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA', code: '00015' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'MASTER', name: 'MasterCard', code: '15' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			}
		]}
	/>
)
