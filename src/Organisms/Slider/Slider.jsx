import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

const settings_default = {
	className: 'slide-card',
	centerMode: false,
	dots: false,
	arrows: false,
	infinite: false,
	draggable: false,
	speed: 500,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				draggable: true
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2.1,
				slidesToScroll: 1,
				draggable: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1.1,
				slidesToScroll: 1,
				initialSlide: 0,
				draggable: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1.2,
				slidesToScroll: 1,
				draggable: true
			}
		},
		{
			breakpoint: 360,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				draggable: true
			}
		}
	]
}

const SliderUpt = ({ settings, slidesToShow, lassName, children }) => {
	return (
		<Slider {...settings} slidesToShow={slidesToShow} lassName={lassName}>
			{children}
		</Slider>
	)
}

SliderUpt.defaultProps = {
	settings: settings_default,
	slidesToShow: 1,
	lassName: 'name'
}

SliderUpt.propTypes = {
	settings: PropTypes.object,
	slidesToShow: PropTypes.number,
	lassName: PropTypes.string,
	children: PropTypes.node
}

export default SliderUpt
