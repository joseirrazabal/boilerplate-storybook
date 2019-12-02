import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import TitledTopBar from '../../Atoms/Dialog/TitledTopBar'

class ResDialog extends React.PureComponent {
	render() {
		const { fullScreen, open, onClose, title, children } = this.props
		return (
			<Dialog fullScreen={fullScreen} open={open} onClose={onClose} aria-labelledby="responsive-dialog-title">
				<TitledTopBar onClickCloseButton={onClose} title={title} />
				{children && children}
			</Dialog>
		)
	}
}

ResDialog.propTypes = {
	fullScreen: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired
}

export default withMobileDialog({ breakpoint: 'md' })(ResDialog)
