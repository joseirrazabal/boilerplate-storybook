import React from 'react'
import PropTypes from 'prop-types'
import Slim from '../../Slim/slim.react'

const SlimComponentsCrop = () => {
	return (
		<React.Fragment>
			<Slim ratio="1:1" label="avatar" labelLoading="..." maxFileSize="3">
				<input type="file" className="hide" />
			</Slim>
		</React.Fragment>
	)
}

SlimComponentsCrop.defaultProps = {}
SlimComponentsCrop.propTypes = {}

export default SlimComponentsCrop
