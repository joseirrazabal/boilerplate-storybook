import React from 'react'
import PropTypes from 'prop-types'
import Image from './Images/Image'

const Bank = ({ bankId }) => (
	<div>
		<Image
			height={20}
			elevation={0}
			imageSize="cover"
			image={`${process.env.S3_URL}/images/banks/${bankId}.jpg`}
			radius={6}
		/>
	</div>
)

Bank.defaultProps = {
	bankId: 'RIO'
}

Bank.propTypes = {
	bankId: PropTypes.string
}

export default Bank
