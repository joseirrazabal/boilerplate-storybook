import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/styles'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'

class TitledTopBar extends PureComponent {
	render() {
		const {
			onClickCloseButton,
			title,
			classes: { closeIcon, iconButton }
		} = this.props
		return (
			<AppBar color="white" position="relative">
				<Toolbar style={{ minHeight: 50 }}>
					<TitleSecondary content={title} size={14} left />
					<IconButton className={iconButton} color="inherit" onClick={onClickCloseButton} aria-label="Close">
						<CloseIcon className={closeIcon} />
					</IconButton>
				</Toolbar>
			</AppBar>
		)
	}
}

TitledTopBar.defaultProps = {
	onClickCloseButton: () => {}
}
TitledTopBar.propTypes = {

	onClickCloseButton: PropTypes.func,
	title: PropTypes.string.isRequired
}

export default withStyles(() => ({
	closeIcon: {
		fontSize: 30
	},
	iconButton: { right: 0, position: 'absolute' }
}))(TitledTopBar)
