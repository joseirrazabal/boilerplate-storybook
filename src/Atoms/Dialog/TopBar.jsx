import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/styles'

class TopBar extends PureComponent {
	render() {
		const {
			onClickCloseButton,
			classes: { closeIcon, iconButton, transparent }
		} = this.props
		return (
			<AppBar position="static" className={transparent} elevation={0}>
				<Toolbar>
					<IconButton color="inherit" className={iconButton} onClick={onClickCloseButton} aria-label="Close">
						<CloseIcon className={closeIcon} />
					</IconButton>
				</Toolbar>
			</AppBar>
		)
	}
}

TopBar.defaultProps = {
	onClickCloseButton: () => {}
}
TopBar.propTypes = {

	onClickCloseButton: PropTypes.func
}

export default withStyles(() => ({
	iconButton: { right: 5, position: 'absolute' },
	closeIcon: { fontSize: 30, color: 'gray' },
	transparent: { background: '#f2f2f2' }
}))(TopBar)
