import React from 'react'
import PropTypes from 'prop-types'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import CardAction from '../../Atoms/Card/CardAction'

const RoomCard = ({ titleRight, titleLeft, subtitleRight, buttonText, onClick }) => {
	const cardStyles = {
		global: {
			position: 'relative'
		},
		floatL: {
			float: 'left'
		},
		floatR: {
			float: 'right'
		},
		padding: {
			padding: 20
		},
		radius: {
			borderRadius: 6,
			overFlow: 'hidden'
		},
		elevation: {
			boxShadow: `0 1px 4px rgba(0,0,0,0.3)`,
			'@media (maxWidth: 800px)': {
				boxShadow: '0 8px 14px rgba(0,0,0,0.3)'
			}
		},
		shadow: {
			backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(0,0,0,.7))'
		},
		displayFlex: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			alignSelf: 'center',
			justifyContent: 'space-between'
		}
	}

	return (
		<ContainerCard style={{ ...cardStyles.global }}>
			<CardContent flex="row" justify="space-between" paddingConfig={15}>
				<div>
					<Text size={14} left content={titleLeft} color="black" />
				</div>
				<div>
					<TitleSecondary content={subtitleRight} size={16} right bold italic color="black" />
					<Text style={{ width: '100%' }} size={12} content={titleRight} italic right color="black" />
				</div>
			</CardContent>
			<CardAction paddingConfig={15}>
				<Button text={buttonText} radius primary fullWidth onClick={onClick} />
			</CardAction>
		</ContainerCard>
	)
}

RoomCard.defaultProps = {
	titleLeft: 'Habitación estandar de ejemplo para comprar.',
	titleRight: '20000',
	subtitleRight: 'Total',
	buttonText: 'Seleccionar'
}

RoomCard.propTypes = {
	titleLeft: PropTypes.string,
	titleRight: PropTypes.string,
	subtitleRight: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	buttonText: PropTypes.string
}

export default RoomCard
