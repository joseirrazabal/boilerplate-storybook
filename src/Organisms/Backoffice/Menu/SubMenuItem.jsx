import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconsFont from '../../../Atoms/IconsFont'

class SubMenuItem extends PureComponent {
	render() {
		const { color, icon, title, children, onItemClick } = this.props

		return (
			<ListItem button onClick={onItemClick}>
				{icon && (
					<ListItemIcon>
						<IconsFont color={color} icon={icon} />
					</ListItemIcon>
				)}

				<ListItemText inset primary={title} />
				{children}
			</ListItem>
		)
	}
}

SubMenuItem.defaultProps = {
	icon: undefined,
	color: undefined,
	children: undefined,
	route: undefined,
	onItemClick: () => {}
}

const subItemProps = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
	onClick: PropTypes.func,
	color: PropTypes.string,
	route: PropTypes.string,
	children: PropTypes.node
}

SubMenuItem.propTypes = {

	...subItemProps,
	onItemClick: PropTypes.func
}

export { subItemProps }

export default withStyles(theme => ({}))(SubMenuItem)
