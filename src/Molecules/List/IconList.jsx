import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import IconsFont from '../../Atoms/IconsFont'

export const IconList = {
	href: PropTypes.string,
	title: PropTypes.string,
	color: PropTypes.string,
	borderTop: PropTypes.bool,
	borderBottom: PropTypes.bool,
	size: PropTypes.number,
	className: PropTypes.string,
	route: PropTypes.func.isRequired,
	isSelected: PropTypes.func.isRequired
}

const styles = () => ({
	global: {
		padding: 10,
		borderBottom: 'none'
	},

	globalBorderBotom: {
		padding: 10,
		borderBottom: '0.5px solid #f2f2f2'
	},

	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	},

	selected: {
		color: 'red'
	}
})

const IconListComponent = ({ isSelected, className, href, classes, color, icon, title, size, borderBottom, route }) => (
	<div
		role="button"
		tabIndex="0"
		onKeyPress={() => {
			if (route) route(href)
		}}
		className={classNames(className, classes.displayFlex, {
			[classes.global]: !borderBottom,
			[classes.globalBorderBotom]: borderBottom,
			[classes.selected]: () => {
				if (isSelected) {
					return isSelected(href)
				}
				return false
			}
		})}
		onClick={() => {
			if (route) route(href)
		}}
	>
		<IconsFont color={color} icon={icon} />
		<Text color={color} content={title} size={size} style={{ marginLeft: 10 }} />
	</div>
)

IconListComponent.defaultProps = {}

IconListComponent.propTypes = {
}

export default withStyles(styles)(IconListComponent)
