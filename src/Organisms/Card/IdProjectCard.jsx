import React from 'react'
import PropTypes from 'prop-types'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import IdeameProgress from '../../Atoms/IdeameProgress'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardAction from '../../Atoms/Card/CardAction'
import CardContent from '../../Atoms/Card/CardContent'
/* import ContentList from '../../Atoms/List/ContentList' */
import ItemList from '../../Atoms/List/ItemList'

const IdProjectCard = ({ imageUrl, price, title, previousPrice }) => {
	return (
		<ContainerCard>
			<CardAction>
				<ImageBackground
					minHeight={220}
					elevation={0}
					imageSize="cover"
					alt="Avatar Profile"
					backgroundImage={imageUrl}
					radius={6}
				/>
			</CardAction>
			<CardContent paddingConfig={15} flex="column" justify="flex-start">
				<div style={{ width: '100%' }}>
					<Text size={12} italic left color="black">
						Argentina
					</Text>
					<TitleSecondary size={14}>{title}</TitleSecondary>
				</div>
				<div>
					<Text size={13} left>
						Muchas familias del departamento de San Blas, provincia de La Rioja, no tienen calzado. ¡Ayudanos a
						conseguir las zapatillas que necesitan!
					</Text>
				</div>
				<div style={{ width: '100%', marginTop: 10 }}>
					<ItemList paddingConfig={0} icon="flaticon-ticket" title="ARS 103,810" />
				</div>
				<div style={{ width: '100%', padding: '10px 0' }}>
					<IdeameProgress />
				</div>
				<div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<div>
						<ItemList paddingConfig={0} icon="flaticon-ticket" title="colaboradores" />
					</div>
					<div>
						<ItemList paddingConfig={0} icon="flaticon-ticket" title="5 meses" />
					</div>
				</div>
			</CardContent>
		</ContainerCard>
	)
}

IdProjectCard.defaultProps = {
	title: 'Titulo del proyecto de ejemplo',
	imageUrl:
		'https://s3.amazonaws.com/ideame-images/resizers/143945_336_189_undefined_undefined_projectImageOriginalUrl.jpeg?rnd904'
}

IdProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	imageUrl: PropTypes.string
}

export default IdProjectCard
