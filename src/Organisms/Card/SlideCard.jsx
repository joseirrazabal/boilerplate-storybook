import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
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
			imageSize,
			minHeight,
			rate,
			title,
			price,
			priceSubtitle,
			previousPrice,
			favIcon,
			stars,
			showStars,
			images,
			services,
			cockade,
			landingMode,
			url,
			alt
		} = this.props
		return (
			<ContainerCard shadow>
				<a href={url} aria-label={alt}>
					<CardAction>
						<div key={1}>
							{favIcon && (
								<div className={classNames(classes.favorite)}>
									<Favoritos />
								</div>
							)}
							{cockade !== undefined && cockade}
							<Slider {...settings} className={classes.carousel}>
								{images.map(i => (
									<div
										key={i.path}
										className="itemImage"
										style={{ cursor: 'pointer' }}
										onKeyPress={this.handleContentCardClick}
										onClick={this.handleContentCardClick}
										role="button"
									>
										<ImageBackground
											noRepeat={true}
											alt={i.alt}
											backgroundImage={i.path}
											width={800}
											height={500}
											widthResize={600}
											heightResize={400}
											minHeight={400}
										/>
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
									{stars !== undefined && showStars && <Stars iconSize={14} stars={stars} />}
								</div>
								<Tooltip
									disableFocusListener
									placement="top"
									disableTouchListener
									title={<Text size={13} center content={title} color="white" />}
								>
									<div>
										<TextNoWrap widthText={350} size={15} content={title} italic color="white" />
									</div>
								</Tooltip>
							</div>
						</div>
					</CardAction>
					{landingMode ? (
						<div />
					) : (
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
									{previousPrice && (
										<Typography
											style={{ width: '100%' }}
											size={12}
											lineThrough
											content={`$ ${previousPrice}`}
											italic
											right
										/>
									)}
									{price > 0 && <TitleSecondary content={`$${price}`} size={18} bold right italic />}
									{price > 0 && <Typography style={{ width: '100%' }} size={11} content={priceSubtitle} italic right />}
								</div>
							</CardContent>
						</div>
					)}
				</a>
			</ContainerCard>
		)
	}
}

SlideCard.defaultProps = {
	minHeight: 230,
	imageSize: 800,
	price: 0,
	priceSubtitle: 'por noche',
	cockade: undefined,
	previousPrice: undefined,
	services: undefined,
	title: undefined,
	favIcon: false,
	landingMode: false,
	images: [
		{
			path: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			alt: 'Imagen ejemplo'
		}
	],
	stars: 0,
	showStars: true,
	onMouseEnter: () => {},
	onMouseLeave: () => {},
	onClick: () => {},
	rate: 0
}

SlideCard.propTypes = {
	minHeight: PropTypes.number,
	imageSize: PropTypes.number,
	favIcon: PropTypes.bool,
	cockade: PropTypes.node,
	title: PropTypes.string,
	price: PropTypes.string,
	landingMode: PropTypes.bool,
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
	showStars: PropTypes.bool,
	onClick: PropTypes.func,
	rate: PropTypes.number
}

export default withStyles(() => ({
	carousel: {
		height: '350px'
	},
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
		bottom: 0,
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
