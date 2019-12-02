import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { TitleSecondary } from '../../../Atoms/TitleLabel/TitleLabel'

const styles = () => ({
	borderTop: {
		borderTop: '1px solid #f2f2f2'
	}
})
const iconType = [
	{
		icon: ' fire',
		content: '¡Ofertas que arden en Upate'
	},
	{
		icon: ' places',
		content: '¡Ultimos lugades Disponibles'
	},
	{
		icon: ' happy',
		content: '¡Felicitaciones! Estas a un solo paso'
	},
	{
		icon: ' offer',
		content: '20%'
	},
	{
		icon: ' airport',
		content: 'Cambio de Aeropuerto'
	},
	{
		icon: ' boyfriends',
		content: 'Ideal Parejas'
	}
]
/* Defino el Tag */
export const Tag = ({ size, iconSize, color, icon, content, width, height }) => (
	<div
		style={{
			display: 'flex',
			width: 'auto',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-around'
		}}
	>
		{icon ? (
			<div
				style={{
					width,
					height,
					backgroundSize: iconSize
				}}
				className={`iconTag ${icon}`}
			/>
		) : (
			<div />
		)}

		<TitleSecondary left color={color} size={size} content={content} />
	</div>
)
Tag.defaultProps = {
	iconSize: 20,
	icon: false,
	size: 14,
	width: 20,
	height: 15,
	color: 'black'
}
Tag.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
	icon: PropTypes.string,
	iconSize: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number
}

/* Defino el Contenedor */
export const TagsNotification = ({ background, children, padding }) => (
	<div
		style={{
			display: 'flex',
			width: 'auto',
			background,
			flexDirection: 'column',
			padding
		}}
	>
		{children}
	</div>
)

TagsNotification.defaultProps = {
	background: 'transparent',
	padding: 5
}
TagsNotification.propTypes = {
	background: PropTypes.string,
	padding: PropTypes.number
}

export default withStyles(styles)(TagsNotification)
