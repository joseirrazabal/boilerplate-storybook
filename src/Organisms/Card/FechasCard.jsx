import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import moment from 'moment'
import { IoIosMan } from 'react-icons/io'

import { TitleSecondary, Text, TextChildFirst } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import Fare from '../../Atoms/Fare'

class FechasCard extends React.PureComponent {
	render() {
		const {
			date,
			price,
			nights,
			product,
			hotels,
			adults,
			childs,
			onSelect,
			onSubmit,
			classes,
			selected,
			startDate,
			endDate,
			installments,
			installments_fare
		} = this.props

		let arrChilds = []
		for (let item = 1; item <= childs; item++) {
			arrChilds.push(12)
		}

		return (
			<div id={`card_${product.code}`} className={classes.contentDateCard}>
				<ContainerCard shadow>
					<CardContent paddingConfig={10} flex="row">
						<div className={classes.fullWidth}>
							<Text size={14} bold left content="Fecha" color="black" />
							<Text content={moment(date).format('DD/MM/YYYY')} italic color="black" />
						</div>
						<div className={classes.fullWidth}>
							<TitleSecondary size={16} content={<Fare amount={price} />} right bold italic color="black" />
							<Text size={11} italic right content="precio por persona" color="black" />
						</div>
						<div className={classes.mobile}>
							{installments > 1 && installments_fare > 0 && (
								<div style={{ marginLeft: '20px' }}>
									<TitleSecondary
										size={16}
										content={<Fare amount={installments_fare} />}
										right
										bold
										italic
										color="black"
									/>
									<Text size={11} italic right content={`${installments} cuotas fijas`} color="black" />
								</div>
							)}
						</div>
					</CardContent>
					<div
						className={classes.desktop}
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'space-between',
							borderTop: '1px solid #f2f2f2'
						}}
					>
						<div style={{ padding: '5px 10px' }}>
							<div>
								<TextChildFirst size={11} italic left content={` ${adults} adultos - ${childs} menores`} color="black">
									<IoIosMan size={15} />
								</TextChildFirst>
							</div>
							<div style={{ padding: '5px 10px' }}>
								<Text size={11} italic left content={`${nights} noches`} color="black" />
							</div>
							<div style={{ padding: '5px 10px' }}>
								{hotels.map(hotel => {
									return <Text size={12} content={hotel} color="black" />
								})}
							</div>
						</div>
						<div style={{ padding: '5px 10px' }}>
							{installments > 1 && installments_fare > 0 && (
								<div style={{ padding: '5px 10px' }}>
									<TitleSecondary
										size={16}
										content={<Fare amount={installments_fare} />}
										right
										bold
										italic
										color="black"
									/>
									<Text size={11} italic right content={`${installments} cuotas fijas`} color="black" />
								</div>
							)}
						</div>
					</div>
					{true && (
						<div className={classes.actionDate}>
							{true && (
								<div className={classes.mobile}>
									<div
										className={classes.fullWidth}
										style={{
											marginTop: '10px'
										}}
									>
										<TextChildFirst
											size={11}
											italic
											left
											content={` ${adults} adultos - ${childs} menores`}
											color="black"
										>
											<IoIosMan size={15} />
										</TextChildFirst>
										<Text size={11} italic left content={`${nights} noches`} color="black" />
										{hotels.map(hotel => {
											return <Text size={12} content={hotel} color="black" />
										})}
									</div>
								</div>
							)}
							<div>
								{selected ? (
									<Button text="Consultar" border radius fullWidth size="medium" primary onClick={onSubmit} />
								) : (
									<Button
										text="Seleccionar"
										border
										radius
										fullWidth
										size="medium"
										primary={false}
										onClick={e => {
											onSelect({
												code: product.code,
												startDate: startDate,
												endDate: endDate,
												passengers: `${adults}${arrChilds.length > 0 ? '-' + arrChilds.join('-') : ''}`
											})
										}}
									/>
								)}
							</div>
						</div>
					)}
				</ContainerCard>
			</div>
		)
	}
}

FechasCard.defaultProps = {
	date: '15 de Julio',
	nights: '7',
	price: '20000',
	hotel: 'Posada Arambare Buzios'
}

FechasCard.propTypes = {
	nights: PropTypes.number,
	hotel: PropTypes.string,
	date: PropTypes.string,
	price: PropTypes.number
}

export default withStyles(() => ({
	fullWidth: {
		width: '100%'
	},
	contentDateCard: {
		minWidth: 300
	},
	section: {
		background: 'white',
		padding: '5px 10px',
		borderTop: '1px solid #f2f2f2'
	},
	actionDate: {
		padding: '5px 10px',
		background: '#f9f8f7',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	desktop: {
		visibility: 'visible',
		'@media (max-width: 800px)': {
			visibility: 'hidden',
			width: '0',
			height: '0'
		}
	},
	mobile: {
		visibility: 'visible',
		'@media (min-width: 800px)': {
			visibility: 'hidden',
			width: '0',
			height: '0'
		}
	}
}))(FechasCard)
