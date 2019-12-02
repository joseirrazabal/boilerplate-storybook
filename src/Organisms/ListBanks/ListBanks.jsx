import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Fade from '@material-ui/core/Fade'
// import capitalize from 'lodash/capitalize'

import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Bank from '../../Atoms/Bank'
import CardProduct from '../../Atoms/CardProduct'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import FareInfoCard from '../../Atoms/FareInfoCard'

const getInstallments = bankFinancing =>
	bankFinancing.cardFinancing.reduce((maxInstallments, cardFinancing) => {
		const installments = cardFinancing.installmentsFinancing.reduce((max, installmentsFinancing) => {
			if (installmentsFinancing.interest) return max
			return Math.max(installmentsFinancing.installments, max)
		}, 0)

		return Math.max(installments, maxInstallments)
	}, 0)

const getFixedInstallments = bankFinancing =>
	bankFinancing.cardFinancing.reduce((maxInstallments, cardFinancing) => {
		const installments = cardFinancing.installmentsFinancing.reduce(
			(max, installmentsFinancing) => Math.max(installmentsFinancing.installments, max),
			0
		)

		return Math.max(installments, maxInstallments)
	}, 0)

const getCardFixedInstallments = cardFinancing =>
	cardFinancing.installmentsFinancing.reduce(
		(max, installmentsFinancing) => Math.max(installmentsFinancing.installments, max),
		0
	)

const getCardInstallments = cardFinancing =>
	cardFinancing.installmentsFinancing.reduce((max, installmentsFinancing) => {
		if (installmentsFinancing.interest) return max
		return Math.max(installmentsFinancing.installments, max)
	}, 0)

const getMaxInstallmentText = (installments, fixedInstallments) => {
	if (!installments && !fixedInstallments) return ''

	if (!fixedInstallments || installments >= fixedInstallments) return `Hasta ${installments} cuotas sin interés`

	if (!installments) return `Hasta ${fixedInstallments} cuotas con interés`

	if (installments < 2) {
		return `${fixedInstallments} cuotas con interés`
	}

	return `Hasta ${installments} cuotas sin interés o ${fixedInstallments} cuotas con interés`
}

const GetInstallmentAmount = ({ amount, installmentsFinancing }) => {
	return (
		<FareInfoCard
			installments={installmentsFinancing.installments}
			financing={(parseInt((amount * (1 + installmentsFinancing.interest)) - amount))}
			amount={parseInt((amount * (1 + installmentsFinancing.interest)) / installmentsFinancing.installments, 10)}
		/>
	)
}

class ListBanks extends React.Component {
	state = { selectedBankFinancing: null, selectedCardFinancing: null }

	setBank = selectedBankFinancing => this.setState({ selectedBankFinancing })

	setCard = selectedCardFinancing => this.setState({ selectedCardFinancing })

	render() {
		const { amount, classes, banksFinancing, onChange } = this.props
		const { selectedBankFinancing, selectedCardFinancing } = this.state
		return (
			<ContainerCard radius={0}>
				<div className={classes.headerCard}>
					<div>
						<Text size={12} italic color="gray">
							{selectedBankFinancing
								? `${selectedBankFinancing.bank.name} - ${selectedCardFinancing ? selectedCardFinancing.card.name : ''} `
								: ''}
						</Text>
					</div>
				</div>
				<CardContent paddingConfig={10} flex="column" justify="flex-start">
					{!selectedBankFinancing && (
						<Fade in={!selectedBankFinancing}>
							<div style={{ width: '100%' }}>
								{banksFinancing.map(bankFinancing => {
									const installments = getInstallments(bankFinancing)
									const fixedInstallments = getFixedInstallments(bankFinancing)

									return (
										<div className={classes.itemBank} onClick={() => this.setBank(bankFinancing)}>
											<div style={{ marginRight: 10, width: '80px' }}>
												<Bank bankId={bankFinancing.bank.bankId} />
											</div>
											<div>
												<Text size={16} bold color="black">
													{bankFinancing.bank.name}
												</Text>
												<Text size={13} italic color="gray">
													{getMaxInstallmentText(installments, fixedInstallments)}
												</Text>
											</div>
										</div>
									)
								})}
							</div>
						</Fade>
					)}

					{selectedBankFinancing && !selectedCardFinancing && (
						<Fade in={selectedBankFinancing && !selectedCardFinancing}>
							<div style={{ width: '100%' }}>
								{selectedBankFinancing.cardFinancing.map(cardFinancing => {
									const installments = getCardInstallments(cardFinancing)
									const fixedInstallments = getCardFixedInstallments(cardFinancing)

									return (
										<div className={classes.itemBank} onClick={() => this.setCard(cardFinancing)}>
											<div style={{ marginRight: 10 }}>
												<CardProduct cardId={cardFinancing.card.cardId} />
											</div>
											<div>
												<Text size={16} bold color="black">
													{cardFinancing.card.name}
												</Text>
												<Text size={13} italic color="gray">
													{getMaxInstallmentText(installments, fixedInstallments)}
												</Text>
											</div>
										</div>
									)
								})}
							</div>
						</Fade>
					)}

					{selectedBankFinancing && selectedCardFinancing && (
						<Fade in={selectedBankFinancing && selectedCardFinancing}>
							<div style={{ width: '100%' }}>
								{selectedCardFinancing.installmentsFinancing.map(installmentsFinancing => (
									<div
										className={classes.itemBank}
										onClick={() =>
											onChange({
												bank: selectedBankFinancing.bank,
												card: selectedCardFinancing.card,
												installmentsFinancing
											})
										}
									>
										<div>
											<Text size={16} bold color="black">
												{installmentsFinancing.installments} {installmentsFinancing.installments === 1 ? 'pago ' : 'pagos '}
												{installmentsFinancing.interest ? (
													'con interés'
												) : (
														<strong style={{ color: 'green', marginLeft: 5 }}>sin interés</strong>
													)}
											</Text>
											<Text size={12} italic color="gray">
												<GetInstallmentAmount amount={amount} installmentsFinancing={installmentsFinancing} />
											</Text>
										</div>
									</div>
								))}
							</div>
						</Fade>
					)}
				</CardContent>
			</ContainerCard>
		)
	}
}

ListBanks.defaultProps = {
	amount: 3230,
	banksFinancing: [],
	onChange: () => { }
}

ListBanks.propTypes = {

	amount: PropTypes.number,
	banksFinancing: PropTypes.array,
	onChange: PropTypes.func
}
const styles = () => ({
	headerCard: {
		background: '#f2f2f2',
		padding: 10,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottom: '1px solid #f2f2f2'
	},
	itemBank: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		borderBottom: '1px solid #f2f2f2',
		paddingTop: 10,
		paddingBottom: 10,
		cursor: 'pointer',

		'&:last-child': {
			border: 'none'
		}
	}
})

export default withStyles(styles)(ListBanks)
