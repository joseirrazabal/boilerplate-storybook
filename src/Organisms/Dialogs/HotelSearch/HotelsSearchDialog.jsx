import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '../../../Atoms/Button/Button'
import { Text } from '../../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../../Atoms/Card/ContainerCard'
import Autocompletar from '../../../Molecules/Autocompletar/Autocompletar'
import OccupancySummary from '../../Passengers/OccupancySummary'
import CalendarFullWidthVertical from '../../../Molecules/Calendar/CalendarFullWidthVertical'
import IconsFont from '../../../Atoms/IconsFont'

function Transition(props) {
	return <Slide direction="up" {...props} />
}

class HotelsSearchDialog extends React.PureComponent {
	static disaplyName = 'HotelsSearchDialog'

	constructor(props) {
		super(props)
		this.state = { ...props, suggestions: [] }
	}

	handlePassengerSubmit = values => {
		this.handleClosePassengerDialog()
		this.setState({ ...values })
	}

	handleChangeCheck = name => event => {
		this.setState({ [name]: event.target.checked })
	}

	render() {
		const { classes, onCloseDialog, passengersText, roomsText, suggestions, open } = this.props
		const { passengers, rooms } = this.state

		return (
			<Dialog
				key={1}
				fullScreen
				style={{ zIndex: 1 }}
				open={open}
				onClose={onCloseDialog}
				TransitionComponent={Transition}
				zº
			>
				<AppBar position="static" style={{ background: '#f2f2f2' }} elevation={0}>
					<Toolbar>
						<IconButton
							color="inherit"
							className={classNames(classes.closeIcon)}
							onClick={onCloseDialog}
							aria-label="Close"
						>
							<CloseIcon style={{ fontSize: 30, color: 'gray' }} />
						</IconButton>
					</Toolbar>
				</AppBar>
				<DialogContent className={classNames(classes.contentSearch)}>
					<div className={classNames(classes.contentcardForm)}>
						<ContainerCard overflow="visible">
							<div className={classNames(classes.flex)}>
								<Autocompletar
									name="destination"
									onChange={this.handleChangeAutocomplete}
									getSuggestions={this.props.getSuggestions || this.getSuggestions}
									suggestions={suggestions || this.state.suggestions}
								/>
							</div>
						</ContainerCard>
					</div>
					<div className={classNames(classes.contentcardForm)}>
						<ContainerCard>
							<div className={classNames(classes.flex)} style={{ zIndex: 5 }}>
								<CalendarFullWidthVertical onChange={this.handleCalendarChange} />
							</div>
						</ContainerCard>
					</div>
					<div
						onClick={this.handleOpenPassengers}
						role="button"
						tabIndex={0}
						onKeyPress={this.handleOpenPassengers}
						className={classNames(classes.contentcardForm)}
					>
						<ContainerCard>
							<div className={classNames(classes.flex)}>
								<OccupancySummary
									rooms={`${roomsText} ${rooms}`}
									passengers={`${passengersText} ${passengers}`}
									marginLeft={5}
								/>
							</div>
						</ContainerCard>
					</div>
				</DialogContent>
				<DialogActions>
					<div className={classNames(classes.btnFixed)}>
						<Button text="Buscar" onClick={this.handleSubmi} radius border fullWidth />
					</div>
				</DialogActions>
			</Dialog>
		)
	}
}

HotelsSearchDialog.defaultProps = {
	destination: '',
	passengers: 2,
	rooms: 1,
	occupancy: [{ id: '', adults: { length: 2 } }],
	passengersText: 'Pasajeros',
	roomsText: 'Habitaciones',
	open: false
}
HotelsSearchDialog.propTypes = {

	open: PropTypes.bool,
	onCloseDialog: PropTypes.func.isRequired,
	passengersText: PropTypes.string,
	roomsText: PropTypes.string,
	destination: PropTypes.string,
	passengers: PropTypes.number,
	rooms: PropTypes.number,
	occupancy: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			adults: PropTypes.shape({
				length: PropTypes.number
			}),
			childs: PropTypes.arrayOf(PropTypes.number)
		})
	)
}

export default withStyles(({ mauri: { simpleFlex, flex } }) => ({
	simpleFlex,
	flex,
	contentSearch: {
		padding: 10,
		backgroundColor: '#f2f2f2'
	},
	btnFixed: {
		position: 'fixed',
		bottom: 10,
		width: '100%',
		padding: 10
	},
	contentcardForm: {
		marginTop: 30,
		width: '100%'
	},
	closeIcon: {
		right: 5,
		position: 'absolute'
	}
}))(HotelsSearchDialog)
