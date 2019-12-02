import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import { withStyles } from '@material-ui/styles'
import TopBar from '../../Atoms/Dialog/TopBar'
import TitledTopBar from '../../Atoms/Dialog/TitledTopBar'

class MobileDialog extends PureComponent {
	render() {
		const {
			content,
			actions,
			children,
			show,
			onCloseDialog,
			onClickCloseButton,
			title,
			classes: { dialogContent, dialogActions }
		} = this.props

		return (
			<React.Fragment>
				<Dialog
					style={{ zIndex: 9 }}
					fullScreen
					disableEnforceFocus
					open={show}
					onClose={onCloseDialog}
					aria-labelledby="responsive-dialog-title"
				>
					{!title && <TopBar onClickCloseButton={onClickCloseButton} />}
					{title && <TitledTopBar onClickCloseButton={onClickCloseButton} title={title} />}
					{content && <DialogContent className={dialogContent}>{content}</DialogContent>}

					{actions && (
						<DialogActions className={dialogActions} disableActionSpacing>
							{actions}
						</DialogActions>
					)}
					{children}
				</Dialog>
			</React.Fragment>
		)
	}
}

MobileDialog.defaultProps = {
	actions: undefined,
	title: 'Titulo por definir',
	content: undefined
}

MobileDialog.propTypes = {

	show: PropTypes.bool.isRequired,
	onClickCloseButton: PropTypes.func.isRequired,
	onCloseDialog: PropTypes.func.isRequired,
	content: PropTypes.node,
	actions: PropTypes.node,
	title: PropTypes.string
}

export default withStyles(() => ({
	dialogActions: { background: '#f2f2f2', margin: 0, padding: 10 },
	dialogContent: {
		padding: 10,
		backgroundColor: '#f2f2f2'
	},
	iconButton: {
		right: 5,
		position: 'absolute'
	},
	closeIcon: {
		fontSize: 40
	}
}))(MobileDialog)
