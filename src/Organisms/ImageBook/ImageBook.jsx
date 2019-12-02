import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Slider from 'react-slick'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '../../Atoms/Button/Button'
import ImageBackground from '../../Atoms/Images/ImageBackground'

const settings = {
	centerMode: false,
	dots: false,
	infinite: false,
	draggable: true,
	speed: 500,
	slidesToShow: 3.1,
	swipeToSlide: true,
	lazyLoad: true,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 3,
				// slidesToScroll: 1,
				swipeToSlide: true,
				lazyLoad: true,
				draggable: true
			}
		},
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 2.2,
				// slidesToScroll: 1,
				swipeToSlide: true,
				lazyLoad: true,
				draggable: true
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				// slidesToScroll: 1,
				swipeToSlide: true,
				lazyLoad: true,
				draggable: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				autoplay: true,
				slidesToShow: 1,
				// slidesToScroll: 1,
				initialSlide: 0,
				arrows: false,
				swipeToSlide: true,
				lazyLoad: true,
				draggable: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				autoplay: true,
				slidesToShow: 1,
				// slidesToScroll: 1,
				draggable: false,
				swipeToSlide: true,
				lazyLoad: true,
				arrows: false
			}
		},
		{
			breakpoint: 360,
			settings: {
				slidesToShow: 1,
				// slidesToScroll: 1,
				draggable: false,
				swipeToSlide: true,
				lazyLoad: true,
				arrows: false
			}
		}
	]
}
const settingsMobile = {
	centerMode: false,
	dots: false,
	infinite: false,
	draggable: true,
	speed: 500,
	slidesToShow: 1

	// slidesToScroll: 1
}
class ImageBook extends React.PureComponent {
	state = {
		open: false
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	render() {
		const { classes, images, height, width, alt, max, imageSize, btnResponsive } = this.props

		return (
			<section className={classes.content}>
				<ul className={classNames(`backgroundMobile ${classes.ulBook}`)}>
					<Slider {...settings} className="carousel slide-image">
						{images &&
							images.slice(0, max).map(image => (
								<div key={image} className={classes.liItem}>
									<ImageBackground
										noRepeat={true}
										alt={alt}
										backgroundImage={image}
										minHeight={400}
										heightResize={400}
										widthResize={600}
									/>
								</div>
							))}
					</Slider>
				</ul>
				<div className={classes.view_images}>
					{btnResponsive && (
						<Button
							size="small"
							text="IMAGENES"
							primary={false}
							secondary={false}
							radius
							border
							onClick={this.handleClickOpen}
						/>
					)}
				</div>
				{btnResponsive && (
					<Dialog
						fullScreen
						open={this.state.open}
						onClose={this.handleClose}
						aria-labelledby="responsive-dialog-title"
					>
						<DialogTitle style={{ padding: 10, fontSize: 18 }} id="responsive-dialog-title">
							Listado de Imagenes
						</DialogTitle>
						<DialogContent style={{ padding: 0 }}>
							<DialogContentText>
								<Slider {...settingsMobile} className="carousel">
									{images &&
										images.slice(0, max).map(image => (
											<div key={image} className={classes.liItem}>
												<ImageBackground
													noRepeat={true}
													alt={alt}
													backgroundImage={image}
													heightResize={400}
													widthResize={600}
												/>
											</div>
										))}
								</Slider>
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button text="VOLVER" primary={false} link onClick={this.handleClose} />
						</DialogActions>
					</Dialog>
				)}
			</section>
		)
	}
}
ImageBook.defaultProps = {
	image: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg',
	fixed: false,
	height: 380,
	width: 600
}
ImageBook.propTypes = {

	fullScreen: PropTypes.bool.isRequired,
	image: PropTypes.string,
	fixed: PropTypes.bool,
	height: PropTypes.number,
	imageSize: PropTypes.number.isRequired,
	width: PropTypes.oneOf([PropTypes.number, PropTypes.string])
}
const styles = () => ({
	noWrapper: {
		whiteSpace: 'nowrap',
		position: 'relative'
	},
	contentScroll: {
		position: 'absolute',
		zIndex: 2,
		right: 0,
		height: '100%',
		boxSizing: 'content-box',
		padding: 10,
		background: 'rgba(0,0,0,.5)'
	},
	titleAbsolute: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		left: 0
	},
	content: {
		position: 'relative'
	},
	ulBook: {
		padding: 0,
		margin: 0,
		width: '100%',
		height: 400,
		minHeight: 380,
		background: 'white',
		position: 'relative',

		'@media (max-width: 600px)': {
			minHeight: 300,
			height: 300,
			overflow: 'hidden'
		}
	},
	liItem: {
		//margin: 2,
		//borderRight: '3px solid white',
		overflow: 'hidden',

		'&:last-child': {
			borderRight: 'none'
		}
	},
	btnAbsolute: {
		position: 'absolute',
		zIndex: 2
	},
	view_images: {
		right: 10,
		display: 'none',
		position: 'absolute',
		bottom: 10,
		'@media (max-width: 600px)': {
			display: 'block'
		}
	},
	imageBook_title: {
		position: 'absolute',
		zIndex: 2,
		bottom: 10,
		left: 10
	},
	mask: {
		position: 'absolute',
		width: '100%',
		height: 40,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 1,
		background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)'
	},
	mask2: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: 60,
		top: 0,
		right: 0,
		bottom: 0,
		zIndex: 1,
		background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)'
	}
})
export default withStyles(styles)(ImageBook)
