import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

const SimpleList = ({ borderBottom, size, title, subtitle }) => {
	const listStyles = {
		global: {
			backgroundColor: 'transparent',
			width: '100%',
			padding: 10,
			borderBottom: borderBottom ? '0.5px solid #f2f2f2' : 'none'
		},
		displayFlex: {
			display: 'flex',
			flexDirection: 'row',
			alignSelf: 'center',
			justifyContent: 'start'
		}
	}

	return (
		<div style={{ ...listStyles.global, ...listStyles.displayFlex }}>
			<div style={{ width: '100%' }}>
				<Text content={title} />
				{subtitle && <Text content={subtitle} size={size} italic color="grey" />}
			</div>
		</div>
	)
}

SimpleList.defaultProps = {
	subtitle: null,
	size: 12,
	borderBottom: false
}

SimpleList.propTypes = {
	title: PropTypes.node.isRequired,
	size: PropTypes.number,
	subtitle: PropTypes.string,
	borderBottom: PropTypes.bool
}

export default SimpleList
