import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import moment from 'moment'
import Tooltip from '@material-ui/core/Tooltip'
import classNames from 'classnames'
import Slider from 'react-slick'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardAction from '../../Atoms/Card/CardAction'
import CardContent from '../../Atoms/Card/CardContent'
import { TitleSecondary, Text, TextNoWrap } from '../../Atoms/TitleLabel/TitleLabel'
import Typography from '../../Atoms/TitleLabel/Typography'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import Favoritos from '../../Atoms/Favoritos'
import Stars from '../../Atoms/Stars'
import Icon from '../../Atoms/Icon'
import HotelPoint from '../../Atoms/HotelPoint'

class SlideCard extends React.PureComponent {
	settings = {
		className: 'center',
		centerMode: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'ondemand'
	}

	handleContentCardClick = () => {
		const { code, onClick } = this.props
		if (onClick) onClick(code)
	}

	render() {
		const { settings } = this
		const {
			classes,
			rate,
			title,
			subTitle,
			price,
			priceSubtitle,
			previousPrice,
			favIcon,
			stars,
			images,
			services,
			cockade,
			checkIn,
			checkOut,
			days,
			roomName,
			occupancy
		} = this.props

		return (
			<ContainerCard shadow>
				<CardAction>
					<div key={1}>
						{favIcon && (
							<div className={classNames(classes.favorite)}>
								<Favoritos />
							</div>
						)}
						{cockade !== undefined && cockade}
						<Slider {...settings} className="carousel">
							{images !== undefined &&
								images.length &&
								images.map(i => (
									<div
										key={i.path}
										className="itemImage"
										style={{ cursor: 'pointer' }}
										onKeyPress={this.handleContentCardClick}
										onClick={this.handleContentCardClick}
										role="button"
									>
										<ImageBackground backgroundImage={i.path} imageSize={600} alt={i.alt} minHeight={230} />
									</div>
								))}
						</Slider>
						<div className={classNames(classes.contentIcons)}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								{rate > 0 && (
									<div style={{ marginRight: 5 }}>
										<HotelPoint point={rate} background="green" />
									</div>
								)}
								{stars !== undefined && <Stars iconSize={14} stars={stars} />}
							</div>
							<Tooltip
								disableFocusListener
								placement="top"
								disableTouchListener
								title={<Text size={13} center content={title} color="white" />}
							>
								<div>
									<TextNoWrap widthText={350} size={15} content={title} italic color="white" />
									<TextNoWrap widthText={350} size={15} content={subTitle} italic color="white" />
								</div>
							</Tooltip>
						</div>
					</div>
				</CardAction>
				<div
					style={{ width: '100%' }}
					tabIndex={0}
					onKeyPress={this.handleContentCardClick}
					onClick={this.handleContentCardClick}
					role="button"
				>
					<CardContent paddingConfig={10} flex="row" justify="space-between" align="center" key={2}>
						<div style={{ cursor: 'pointer' }}>
							{services && services.length && (
								<div style={{ display: 'flex' }}>
									{services.map(service => (
										<Tooltip id="tooltip-top" title={service.title} placement="top">
											<div className={classNames(classes.icon)}>
												<Icon name={service.icons} />
											</div>
										</Tooltip>
									))}
								</div>
							)}
						</div>
						<div style={{ cursor: 'pointer', width: '100%' }}>
							<TitleSecondary
								content={`Check in: ${moment(checkIn).format('DD/MM/YYYY')}`}
								size={15}
								bold
								right
								italic
							/>
							<TitleSecondary
								content={`Check out: ${moment(checkOut).format('DD/MM/YYYY')}`}
								size={15}
								bold
								right
								italic
							/>
							<TextNoWrap
								widthText={350}
								size={15}
								content={`${days} ${days === 1 ? 'noche' : 'noches'} ${occupancy}`}
								italic
							/>
							<TextNoWrap widthText={350} size={15} content={`Habitacion: ${roomName}`} italic />
						</div>
					</CardContent>
				</div>
			</ContainerCard>
		)
	}
}

SlideCard.defaultProps = {
	price: 0,
	priceSubtitle: 'por noche',
	cockade: undefined,
	previousPrice: undefined,
	services: undefined,
	title: undefined,
	favIcon: false,
	images: [
		{
			path: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			alt: 'Imagen ejemplo'
		}
	],
	stars: 0,
	onMouseEnter: () => {},
	onMouseLeave: () => {},
	onClick: () => {},
	rate: 0
}

SlideCard.propTypes = {

	favIcon: PropTypes.bool,
	cockade: PropTypes.node,
	title: PropTypes.string,
	price: PropTypes.string,
	previousPrice: PropTypes.string,
	priceSubtitle: PropTypes.string,
	services: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			icon: PropTypes.string
		})
	),
	images: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string,
			alt: PropTypes.string
		})
	),
	stars: PropTypes.number,
	onClick: PropTypes.func,
	rate: PropTypes.number
}

export default withStyles(() => ({
	favorite: {
		position: 'absolute',
		right: 10,
		top: 10,
		backgroundColor: 'rgba(0, 0, 0, .4)',
		borderRadius: 50,
		zIndex: 1,
		display: 'flex',
		alignItems: 'center'
	},
	pointHotels: {
		padding: 5
	},
	contentIcons: {
		display: 'flex',
		flexDirection: 'column',
		backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(0,0,0,.7))',
		position: 'absolute',
		bottom: 5,
		padding: 5,
		width: '100%'
	},
	icon: {
		background: '#f2f2f2',
		borderRadius: 50,
		padding: 5,
		marginRight: 10,
		'&:last-child': {
			marginRight: 0
		}
	}
}))(SlideCard)
