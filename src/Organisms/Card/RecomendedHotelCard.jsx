import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { TitleSecondary, TitleH3, Text } from '../../Atoms/TitleLabel/TitleLabel'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import Stars from '../../Atoms/Stars'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardAction from '../../Atoms/Card/CardAction'
import CardContent from '../../Atoms/Card/CardContent'

const RecomendedHotelCard = ({ classes, imageUrl, title, ciudad, precio, fecha }) => (
	<ContainerCard flex="column">
		<div className={classNames(classes.flex)}>
			<div className={classNames(classes.imageCardHotel)}>
				<CardAction>
					<ImageBackground
						minHeight={200}
						elevation={0}
						imageSize="cover"
						alt="Nombre del Hotel"
						backgroundImage={
							imageUrl ||
							'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
						}
					/>
				</CardAction>
			</div>
			<div className={classNames(classes.flexRow)}>
				<div style={{ width: '100%', padding: 10 }}>
					<Stars />
					<TitleH3 size={16} content={title} />
					<Text size={12} content={ciudad} color="black" />
					<Text size={12} content={fecha} color="gray" />
				</div>
				<div className={classNames(classes.price)}>
					<TitleSecondary content={`$${precio}`} right bold size={20} />
					<Text style={{ width: '100%' }} content="por noche" italic right color="black" />
				</div>
			</div>
		</div>
	</ContainerCard>
)
RecomendedHotelCard.defaultProps = {
	title: 'Hotel de ejemplo Buenos Aires',
	ciudad: 'Buenos Aires',
	fecha: '10 de abril',
	precio: '4000'
}

RecomendedHotelCard.propTypes = {
	title: PropTypes.string,
	ciudad: PropTypes.string,
	fecha: PropTypes.string,
	precio: PropTypes.string,
	imageUrl: PropTypes.string
}

export default withStyles(() => ({
	global: {
		backgroundColor: 'white',
		height: 'auto'
	},
	flex: {
		display: 'flex',
		flexDirection: 'row',

		'@media (max-width: 600px)': {
			flexDirection: 'column'
		}
	},
	flexRow: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',

		'@media (max-width: 600px)': {
			flexDirection: 'row'
		}
	},
	imageCardHotel: {
		width: 350,

		'@media (max-width: 600px)': {
			width: '100%',
		}
	},
	price: {
		background: '#f2f2f2',
		padding: 10,
		width: '100%',
		minWidth: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		'@media (max-width: 600px)': {
			width: 'auto',
		}
	}
}))(RecomendedHotelCard)
