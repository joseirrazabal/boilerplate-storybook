import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import List from '@material-ui/core/List'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import SubMenuItem, { subItemProps } from './SubMenuItem'

class ExpanderItem extends PureComponent {
	state = {
		open: false
	}

	toogleItem = () => {
		this.setState(prevState => ({ open: !prevState.open }))
	}

	render() {
		const { onClick, classes, children, ...rest } = this.props
		const { open } = this.state
		return (
			<React.Fragment>
				<SubMenuItem button onItemClick={this.toogleItem} {...rest}>
					{open ? <ExpandLess /> : <ExpandMore />}
				</SubMenuItem>

				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{children}
					</List>
				</Collapse>
			</React.Fragment>
		)
	}
}

ExpanderItem.defaultProps = {
	items: undefined,
	children: undefined
}

ExpanderItem.propTypes = {

	...subItemProps,
	children: PropTypes.node
}

export default withStyles(theme => ({}))(ExpanderItem)
