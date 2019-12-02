import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../Atoms/Images/Image'

const url = (code, path) => `${process.env.S3_URL}/images/airlines/${path}/${code}.png`

const AirlineIcon = ({ code, iso }) => (
	<div style={{ width: 40 }}>
		<Image
			height={20}
			minHeight={220}
			elevation={0}
			imageSize="cover"
			image={url(code, iso ? 'iso' : 'logo')}
			radius={6}
		/>
	</div>
)

AirlineIcon.defaultProps = {
	code: 'AR',
	iso: false
}

AirlineIcon.propTypes = {
	code: PropTypes.string,
	iso: PropTypes.bool
}

export default AirlineIcon
