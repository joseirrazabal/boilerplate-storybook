import React from 'react'
import PropTypes from 'prop-types'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardAction from '../../Atoms/Card/CardAction'
import CardContent from '../../Atoms/Card/CardContent'

const IdCardFullBackground = ({ imageUrl, price, title }) => (
	<ContainerCard>
		<div style={{ position: 'relative' }}>
			<CardAction>
				<ImageBackground
					minHeight={320}
					elevation={0}
					imageSize="cover"
					alt="Avatar Profile"
					backgroundImage={imageUrl}
					radius={6}
				/>
			</CardAction>
			<div style={{ position: 'absolute', bottom: 0, width: '100%', padding: 10 }}>
				<CardContent background="transparent" paddingConfig={0} flex="column" justify="flex-start">
					<div style={{ width: '100%', marginBottom: 10, textTransform: 'uppercase', background: 'white', padding: 5 }}>
						<TitleSecondary size={18} left color="black">
							{title}
						</TitleSecondary>
					</div>
					<div style={{ width: '100%', background: 'white', padding: 5 }}>
						<Text size={14} left italic color="black">
							{price}
						</Text>
					</div>
				</CardContent>
			</div>
		</div>
	</ContainerCard>
)

IdCardFullBackground.defaultProps = {
	title: 'titulo del proyecto',
	price:
		'Bola es más que una Pelota. Por cada Bola que vendamos donamos otra a un chico en una comunidad desfavorecida.',
	imageUrl:
		'https://s3.amazonaws.com/ideame-images/resizers/143945_336_189_undefined_undefined_projectImageOriginalUrl.jpeg?rnd904'
}

IdCardFullBackground.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	imageUrl: PropTypes.string
}

export default IdCardFullBackground
