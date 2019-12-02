import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import IconsFont from '../../Atoms/IconsFont'

const ListAutocomplete = ({ icon, title, color, quantity }) => {
	const listStyles = {
		global: {
			backgroundColor: '#f2f2f2',
			padding: 10,
			borderBottom: '0.5px solid #ccc'
		},
		displayFlex: {
			display: 'flex',
			flexDirection: 'row',
			alignSelf: 'center',
			justifyContent: 'space-between'
		}
	}

	return (
		<div style={{ ...listStyles.global, ...listStyles.displayFlex }}>
			<div style={{ ...listStyles.displayFlex }}>
				<IconsFont color={color} icon={icon} />
				<Text style={{ marginLeft: 15 }} content={title} size={14} italic color="black" />
			</div>
			{quantity && (
				<div>
					<Text content={quantity} italic color="black" />
				</div>
			)}
		</div>
	)
}

ListAutocomplete.defaultProps = {
	icon: 'flaticon-bell',
	quantity: null
}

ListAutocomplete.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
	quantity: PropTypes.number
}

export default ListAutocomplete
