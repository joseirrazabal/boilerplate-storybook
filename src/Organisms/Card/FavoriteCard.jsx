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

const FavoriteCard = ({ classes, imageUrl, title, ciudad, precio, fecha }) => (
	<ContainerCard flex="row">
		<div style={{ width: 160 }}>
			<CardAction>
				<ImageBackground
					minHeight={161}
					elevation={0}
					imageSize="cover"
					alt="Avatar Profile"
					backgroundImage={
						imageUrl ||
						'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
					}
				/>
			</CardAction>
		</div>
		<CardContent paddingConfig={15} justify="space-between">
			<div>
				<Stars />
				<TitleH3 size={16} content={title} />
				<Text size={12} content={ciudad} color="black" />
				<Text size={12} content={fecha} color="gray" />
			</div>
			<div style={{ background: '#f2f2f2' }}>
				<TitleSecondary content={`$${precio}`} right bold size={20} />
				<Text style={{ width: '100%' }} content="por noche" italic right color="black" />
			</div>
		</CardContent>
	</ContainerCard>
)
FavoriteCard.defaultProps = {
	title: 'Hotel de ejemplo Buenos Aires',
	ciudad: 'Buenos Aires',
	fecha: '10 de abril',
	precio: '4000'
}

FavoriteCard.propTypes = {
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
	imgHotel: {
		'@media (max-width: 600px)': {
			display: 'none'
		}
	},
	floatL: {
		float: 'left'
	},
	floatR: {
		float: 'right'
	},
	padding20: {
		padding: 20
	},
	radius: {
		borderRadius: 6,
		overflow: 'hidden'
	},
	elevation: {
		boxShadow: '0 4px 4px rgba(0,0,0,0.3)'
	},
	flexRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'stretch'
	}
}))(FavoriteCard)
