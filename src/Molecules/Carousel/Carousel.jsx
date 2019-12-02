import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import Image from '../../Atoms/Images/Image'

class Carousel extends React.PureComponent {
	render() {
		const { images } = this.props
		const settings = {
			className: 'center',
			centerMode: true,
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		}

		return (
			<Slider {...settings} className="carousel">
				{images.map(image => (
					<div key={image} className="itemImage">
						<Image image={image} alt="Hotel Ejemplo" />
					</div>
				))}
			</Slider>
		)
	}
}
Carousel.defaultProps = {}

Carousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Carousel
