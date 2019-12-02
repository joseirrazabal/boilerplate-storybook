import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

class GroupMenuItem extends PureComponent {
	render() {
		const { title, children } = this.props
		return (
			<List
				component="nav"
				style={{ width: '100%' }}
				subheader={<ListSubheader component="div">{title}</ListSubheader>}
			>
				{children}
			</List>
		)
	}
}

GroupMenuItem.defaultProps = {
	children: PropTypes.node
}

GroupMenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node
}

export default withStyles(theme => ({}))(GroupMenuItem)
