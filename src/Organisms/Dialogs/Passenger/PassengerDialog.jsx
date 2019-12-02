import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Passengers from '../../Passengers/Passengers'
import PassengersVuelos from '../../Passengers/PassengersVuelos'

class PassengerDialog extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = { open: props.open }
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			open: nextProps.open
		})
	}

	handleSubmit = () => {
		this.handleClose()
	}

	render() {
		const { open } = this.state
		const { classes, vuelos, passengers, occupancy, onPassengerSubmit, onCloseDialog } = this.props
		return (
			<Dialog fullScreen open={open} onClose={onCloseDialog}>
				<AppBar position="static" className={classes.bar} elevation={0}>
					<Toolbar>
						<IconButton className={classes.closeIcon} onClick={onCloseDialog} aria-label="Close">
							<CloseIcon style={{ fontSize: 40, color: 'gray' }} />
						</IconButton>
					</Toolbar>
				</AppBar>
				<DialogContent className={classes.contentSearch}>
					{vuelos ? (
						<PassengersVuelos mobile initialValues={passengers} onSubmit={onPassengerSubmit} />
					) : (
						<Passengers allowRooms occupancy={occupancy} onSubmit={onPassengerSubmit} />
					)}
				</DialogContent>
			</Dialog>
		)
	}
}

PassengerDialog.defaultProps = {
	open: false
}

PassengerDialog.propTypes = {

	onCloseDialog: PropTypes.func.isRequired,
	open: PropTypes.bool,
	occupancy: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			adults: PropTypes.shape({
				length: PropTypes.number
			}),
			childs: PropTypes.arrayOf(PropTypes.number)
		})
	).isRequired
}

const styles = () => ({
	bar: { background: '#f2f2f2' },
	contentSearch: {
		padding: 10,
		backgroundColor: '#f2f2f2'
	},
	closeIcon: {
		right: 5,
		position: 'absolute'
	}
})

export default withStyles(styles)(PassengerDialog)
