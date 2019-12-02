import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import SubMenuItem from './SubMenuItem'

class MenuItem extends PureComponent {
	render() {
		const { open, onClick, ...rest } = this.props
		return (
			<SubMenuItem {...rest} button onClick={onClick}>
				{open ? <ExpandLess /> : <ExpandMore />}
			</SubMenuItem>
		)
	}
}

MenuItem.defaultProps = {
	open: false,
	icon: undefined
}

MenuItem.propTypes = {

	icon: PropTypes.string,
	open: PropTypes.bool,
	title: PropTypes.string.isRequired
}

export default withStyles(theme => ({
	nested: {
		paddingLeft: theme.spacing.unit * 4
	}
}))(MenuItem)
