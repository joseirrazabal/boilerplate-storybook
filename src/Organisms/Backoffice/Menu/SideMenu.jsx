import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import GroupMenuItem from './GroupMenuItem'
import ExpanderItem from './ExpanderItem'
import SubMenuItem, { subItemProps } from './SubMenuItem'

class SideMenu extends PureComponent {
	buildMenuItems = (siblings, depth = 0) => {
		const { onMenuItemClick } = this.props
		return siblings.map(element => {
			const { childs, ...rest } = element
			if (childs) {
				const dd = depth + 1
				const childElements = this.buildMenuItems(element.childs, dd)
				if (depth === 0) {
					return <GroupMenuItem {...rest}>{childElements}</GroupMenuItem>
				}
				return <ExpanderItem {...rest}>{childElements}</ExpanderItem>
			}
			return <SubMenuItem onItemClick={() => onMenuItemClick(rest.route, rest.title)} {...rest} />
		})
	}

	render() {
		const { open, classes, menuDefinition, onCloseMenu } = this.props
		return (
			<Drawer open={open} onClose={onCloseMenu}>
				<div style={{ width: '100%' }}>
					<IconButton className={classes.iconClose} onClick={onCloseMenu}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Grid container style={{ maxWidth: 400, minWidth: 280, width: '100%' }} spacing={0}>
					{Array.isArray(menuDefinition) && this.buildMenuItems(menuDefinition)}
				</Grid>
			</Drawer>
		)
	}
}

SideMenu.defaultProps = {
	open: false,
	onCloseMenu: () => {},
	onMenuItemClick: () => {},
	menuDefinition: []
}

const listType = PropTypes.shape({
	...subItemProps,
	childs: PropTypes.arrayOf(subItemProps)
})

const groupType = PropTypes.arrayOf(
	PropTypes.shape({
		title: PropTypes.string,
		childs: PropTypes.arrayOf(listType)
	})
)

SideMenu.propTypes = {

	open: PropTypes.bool,
	onCloseMenu: PropTypes.func,
	onMenuItemClick: PropTypes.func,
	menuDefinition: PropTypes.arrayOf(groupType)
}

export default withStyles(() => ({
	iconClose: {
		float: 'right',
		margin: 5
	}
}))(SideMenu)
