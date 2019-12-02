import React from 'react'
import PropTypes from 'prop-types'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import ImageBackground from '../../Atoms/Images/ImageBackground'

const cardStyles = {
	floatL: {
		float: 'left'
	},
	floatR: {
		float: 'right'
	},
	padding: {
		padding: '40px 10px 10px 10px'
	},
	absolute: {
		position: 'absolute',
		width: '100%',
		bottom: 0
	},
	shadow: {
		backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(0,0,0,.7))'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'flex-end',
		justifyContent: 'space-between'
	}
}

const VerticalCard = ({ url, imageUrl, alt, imageSize, destino, span, text, precio, minHeight }) => (
	<ContainerCard shadow>
		<a href={url} aria-label={alt}>
			<div
				style={{
					// 	backgroundImage: `url(${imageUrl})`,
					// 	backgroundSize: imageSize,
					// 	backgroundPosition: 'center',
					// 	minHeight,
					position: 'relative'
				}}
			>
				<ImageBackground
					fixed
					heightResize={minHeight}
					widthResize={470}
					backgroundImage={imageUrl}
					alt={alt}
					// minHeight={380}
					minHeight={imageSize}
				/>

				<CardContent>
					<div
						style={{ ...cardStyles.shadow, ...cardStyles.padding, ...cardStyles.absolute, ...cardStyles.displayFlex }}
					>
						<div>
							<Text size={16} content={destino} color="white" />
							<Text content={span} italic color="white" />
						</div>
						<div>
							<Text style={{ width: '100%' }} content={text} italic right color="white" />
							<TitleSecondary content={`$ ${precio}`} size={20} right bold italic color="white" />
						</div>
					</div>
				</CardContent>
			</div>
		</a>
	</ContainerCard>
)

VerticalCard.defaultProps = {
	imageUrl: 'https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
	imageSize: 400,
	minHeight: 390,
	destino: 'Vuelos a Londres',
	span: 'ida y vuelta',
	precio: '20000',
	text: 'hola'
}

VerticalCard.propTypes = {
	imageUrl: PropTypes.string,
	imageSize: PropTypes.number,
	minHeight: PropTypes.number,
	destino: PropTypes.string,
	span: PropTypes.string,
	precio: PropTypes.string,
	text: PropTypes.string
}

export default VerticalCard
