import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { Text } from '../TitleLabel/TitleLabel'
import Avatar from '../Avatar'
import IconListComponent from '../IconsFont'

const styles = () => ({
	global: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'start'
	}
})

const ItemList = ({ subtitle, image, title, borderBottom, classes, paddingConfig, icon, color }) => (
	<li
		className={classNames(classes.global)}
		style={{ padding: paddingConfig, borderBottom: borderBottom ? '0.5px solid #f2f2f2' : 'none' }}
	>
		{image ? <Avatar image={image} circle={50} maxHeight={35} alt={title} /> : <div />}
		{icon ? <IconListComponent color={color} icon={icon} /> : <div />}
		<div>
			<Text>{title}</Text>
			{subtitle ? (
				<Text size={12} italic color="grey">
					{subtitle}
				</Text>
			) : (
				<div />
			)}
		</div>
	</li>
)
ItemList.defaultProps = {
	title: 'Hotel Panamericano de Buenos Aires',
	subtitle: false,
	icon: false,
	color: 'black',
	image: false,
	borderTop: false,
	borderBottom: false,
	paddingConfig: 10
}

ItemList.propTypes = {
	image: PropTypes.string,
	icon: PropTypes.string,
	color: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	borderTop: PropTypes.string,
	borderBottom: PropTypes.string,
	paddingConfig: PropTypes.number
}

export default withStyles(styles)(ItemList)
