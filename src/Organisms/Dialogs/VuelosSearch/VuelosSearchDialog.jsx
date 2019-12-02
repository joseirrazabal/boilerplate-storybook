import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '../../../Atoms/Button/Button'
import { Text } from '../../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../../Atoms/Card/ContainerCard'
import Autocompletar from '../../../Molecules/Autocompletar/Autocompletar'
import CalendarFullWidthVertical from '../../../Molecules/Calendar/CalendarFullWidthVertical'
import IconsFont from '../../../Atoms/IconsFont'
import PassengerDialog from '../Passenger/PassengerDialog'

function Transition(props) {
	return <Slide direction="up" {...props} />
}

class HotelsSearchDialog extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = { ...props.initialValues, suggestions: [] }
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			open: nextProps.open
		})
	}

	handleCalendarChange = values => {
		this.setState({ calendar: values })
	}

	handlePassengerSubmit = values => {
		this.handleClosePassengerDialog()
		this.setState({ ...values })
	}

	handleOpenPassengers = () => {
		this.setState({ openPassengers: true })
	}

	handleChangeAutocomplete = value => {
		const obj = {}
		obj.place = value
		this.setState(obj)
	}

	handleClosePassengerDialog = () => {
		this.setState({
			openPassengers: false
		})
	}

	handleChangeCheck = name => event => {
		this.setState({ [name]: event.target.checked })
	}

	render() {
		const { classes, onCloseDialog, onSubmit, suggestions, getSuggestions } = this.props
		const { open, openPassengers, origin, destination, departuredate, returndate, passengers } = this.state
		return (
			<div>
				<Dialog fullScreen style={{ zIndex: 1 }} open={open} onClose={onCloseDialog} TransitionComponent={Transition}>
					<AppBar position="static" className={classes.bar} elevation={0}>
						<Toolbar>
							<IconButton className={classes.closeIcon} onClick={onCloseDialog} aria-label="Close">
								<CloseIcon style={{ fontSize: 40 }} />
							</IconButton>
						</Toolbar>
					</AppBar>
					<DialogContent className={classes.contentSearch}>
						<div className={classes.contentcardForm}>
							<ContainerCard>
								<div className={classes.flex}>
									<Autocompletar
										placeholder="Origen"
										name="origin"
										onChange={origin => this.setState({ origin })}
										getSuggestions={getSuggestions}
										suggestions={suggestions}
										initialValue={origin}
									/>
								</div>
							</ContainerCard>
						</div>
						<div className={classes.contentcardForm}>
							<ContainerCard>
								<div className={classes.flex}>
									<Autocompletar
										name="destination"
										placeholder="Destino"
										onChange={destination => this.setState({ destination })}
										getSuggestions={getSuggestions}
										suggestions={suggestions}
										initialValue={destination}
									/>
								</div>
							</ContainerCard>
						</div>
						<div className={classes.contentcardForm}>
							<ContainerCard>
								<div className={classes.flex}>
									<CalendarFullWidthVertical
										initialStartDate={departuredate}
										initialEndDate={returndate}
										onChange={({ startDate, endDate }) =>
											this.setState({ departuredate: startDate, returndate: endDate })
										}
									/>
								</div>
							</ContainerCard>
						</div>
						<div>
							<FormControlLabel
								label="Todavía no tengo una fecha"
								control={
									<Checkbox
										checked={this.state.checkedNoDate}
										onChange={event => this.setState({ checkedNoDate: event.target.checked })}
										color="primary"
									/>
								}
							/>
						</div>
						<div
							onClick={this.handleOpenPassengers}
							role="button"
							tabIndex={0}
							onKeyPress={this.handleOpenPassengers}
							className={classes.contentcardForm}
						>
							<ContainerCard>
								<div className={classes.flex}>
									<div className={classes.simpleFlex}>
										<IconsFont size={25} icon="flaticon-user-2" />
										<Text
											content={`${this.props.passengersText} ${parseInt(passengers.adults) +
												parseInt(passengers.childs) +
												parseInt(passengers.babies)}`}
											style={{ marginLeft: 5 }}
										/>
									</div>
								</div>
							</ContainerCard>
						</div>
					</DialogContent>
					<DialogActions style={{ background: '#f2f2f2', margin: 0, padding: 10 }}>
						<Button radius size="big" text="Buscar" fullWidth onClick={() => onSubmit(this.state)} />
					</DialogActions>
				</Dialog>
				<PassengerDialog
					vuelos
					open={openPassengers}
					passengers={passengers}
					onCloseDialog={this.handleClosePassengerDialog}
					onPassengerSubmit={passengers => {
						this.setState({ passengers, openPassengers: false })
					}}
				/>
			</div>
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
	noDateText: 'Todavía no tengo una fecha'
}

HotelsSearchDialog.propTypes = {

	open: PropTypes.bool.isRequired,
	onCloseDialog: PropTypes.func.isRequired,
	passengersText: PropTypes.string.isRequired,
	roomsText: PropTypes.string.isRequired,
	noDateText: PropTypes.string.isRequired,
	destination: PropTypes.string.isRequired,
	passengers: PropTypes.number.isRequired,
	rooms: PropTypes.number.isRequired,
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

const styles = ({ mauri: { simpleFlex, flex } }) => ({
	simpleFlex,
	flex,
	bar: { background: '#f2f2f2' },
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
})
export default withStyles(styles)(HotelsSearchDialog)
