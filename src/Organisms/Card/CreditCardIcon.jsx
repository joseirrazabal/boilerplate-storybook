import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from './../../Atoms/Images/Image'

class CreditCardIcon extends Component {
	render() {
		const { path, code } = this.props
		const S3 = process.env.S3_URL
		const url = (code, path) => `${S3}/images/creditCards/${code}.jpg`
		return (
			<div>
				<Image height={20} minHeight={220} elevation={0} imageSize="cover" image={url(code)} radius={6} />
				<span />
			</div>
		)
	}
}
CreditCardIcon.defaultProps = {
	code: 'VISA'
}

CreditCardIcon.propTypes = {
	code: PropTypes.string
}
export default CreditCardIcon
