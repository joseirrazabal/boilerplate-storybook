import React from 'react'
import PropTypes from 'prop-types'
/* import resize from '../../utils/resize' */
import ImageBackground from './ImageBackground'

const Image = ({ height, width, minHeight, radius, image, title, alt }) => {
	const imageStyles = {
		global: {
			height
		},
		circle: {
			borderRadius: radius,
			overFlow: 'hidden'
		},
		displayFlex: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		name: {
			marginLeft: 10,
			fontSize: 16,
			color: '#606060',
			fontFamily: 'Roboto, sans-serif'
		},
		badge: {
			background: '#FF4D4D',
			height: 25,
			width: 25,
			borderRadius: 50,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			fontSize: 11,
			color: 'white',
			position: 'absolute'
		}
	}

	return (
		<img
			src={image}
			style={{
				...imageStyles.global,
				...imageStyles.circle,
				...imageStyles.elevation
			}}
			alt={alt}
			title={title}
		/>
	)
}

Image.defaultProps = {
	radius: 0,
	image: 'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg',
	height: false,
	width: false,
	alt: null,
	title: null
}

Image.propTypes = {
	radius: PropTypes.number,
	image: PropTypes.string,
	alt: PropTypes.string,
	height: PropTypes.number,
	width: PropTypes.number,
	title: PropTypes.string
}
export default Image
