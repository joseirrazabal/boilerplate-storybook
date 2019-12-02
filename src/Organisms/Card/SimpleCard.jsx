import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '../../Atoms/TitleLabel/Typography'
import { TitleSecondary, TextNoWrap, Text } from '../../Atoms/TitleLabel/TitleLabel'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardAction from '../../Atoms/Card/CardAction'
import CardContent from '../../Atoms/Card/CardContent'

const SimpleCard = ({ url, alt, imageUrl, price, title, subtitle, previousPrice }) => (
	<ContainerCard shadow>
		<a href={url} aria-label={alt}>
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
			<CardContent paddingConfig={15} flex="row" justify="space-between">
				<div style={{ width: '100%' }}>
					<Tooltip
						disableFocusListener
						placement="top"
						disableTouchListener
						title={<Text size={13} center content={title} color="white" />}
					>
						<div style={{ width: '100%' }}>
							<TextNoWrap widthText={250} size={16} content={title} />
						</div>
					</Tooltip>
					{subtitle && <Typography size={13} content={subtitle} />}
				</div>
				<div>
					{previousPrice && <Typography lineThrough italic size={13} content={previousPrice} right />}
					<TitleSecondary content={price} right />
				</div>
			</CardContent>
		</a>
	</ContainerCard>
)

SimpleCard.defaultProps = {
	subtitle: false,
	previousPrice: false,
	price: false,
	imageUrl: 'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
}

SimpleCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	previousPrice: PropTypes.string,
	price: PropTypes.string,
	imageUrl: PropTypes.string
}

export default SimpleCard
