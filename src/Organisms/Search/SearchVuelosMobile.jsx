import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import FormControlLabel from '@material-ui/core/FormControlLabel'
/* import Checkbox from '@material-ui/core/Checkbox' */
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import Autocompletar from '../../Molecules/Autocompletar/Autocompletar'
import CalendarFullWidthVertical from '../../Molecules/Calendar/CalendarFullWidthVertical'
import PassengersVuelos from '../Passengers/PassengersVuelos'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import IconsFont from '../../Atoms/IconsFont'

function Transition(props) {
	return <Slide direction="up" {...props} />
}

const suggestions = [
	{ label: 'Afghanistan' },
	{ label: 'Aland Islands' },
	{ label: 'Albania' },
	{ label: 'Algeria' },
	{ label: 'American Samoa' },
	{ label: 'Andorra' },
	{ label: 'Angola' },
	{ label: 'Anguilla' },
	{ label: 'Antarctica' },
	{ label: 'Antigua and Barbuda' },
	{ label: 'Argentina', type: 'city', value: 'ARG' },
	{ label: 'Armenia' },
	{ label: 'Aruba' },
	{ label: 'Australia' },
	{ label: 'Austria' },
	{ label: 'Azerbaijan' },
	{ label: 'Bahamas' },
	{ label: 'Bahrain' },
	{ label: 'Bangladesh' },
	{ label: 'Barbados' },
	{ label: 'Belarus' },
	{ label: 'Belgium' },
	{ label: 'Belize' },
	{ label: 'Benin' },
	{ label: 'Bermuda' },
	{ label: 'Bhutan' },
	{ label: 'PlurinationalBolivia State of, Bolivia, Plurinational State of' },
	{ label: 'Bonaire, Sint Eustatius and Saba' },
	{ label: 'Bosnia and Herzegovina' },
	{ label: 'Botswana' },
	{ label: 'Bouvet Island' },
	{ label: 'Brazil' },
	{ label: 'British Indian Ocean Territory' },
	{ label: 'Brunei Darussalam' }
]

class SearchVuelosMobile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			checkedA: true,
			open: false,
			open2: false,
			type: 'ida_vuelta',
			auth: true,
			anchorEl: null,
			calendar: {},
			passengers: { adults: 1, childs: 0, babies: 0 },
			openPassengers: false,
			place: '',
			suggestions: []
		}
	}

	handleChange = (event, checked) => {
		this.setState({ auth: checked })
	}

	handleChangeCheck = name => event => {
		this.setState({ [name]: event.target.checked })
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleClickOpen2 = () => {
		this.setState({ open2: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	handleClose2 = () => {
		this.setState({ open2: false })
	}

	onChange = (value, name = 'place') => {
		this.setState({ [name]: value })
	}

	calendar = values => {
		this.setState({ calendar: values })
	}

	passenger = values => {
		this.setState({ passenger: values })
	}

	submit = () => {
		const { onSubmit } = this.props
		if (onSubmit) {
			onSubmit(this.state)
		}
	}

	getSuggestions = value => {
		const inputValue = value.trim().toLowerCase()
		const inputLength = inputValue.length
		let count = 0

		const result =
			inputLength === 0
				? []
				: suggestions.filter(suggestion => {
					const keep = count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue

					if (keep) {
						count += 1
					}

					return keep
				})

		this.setState({
			suggestions: result
		})
	}

	renderCompositionPassengers = () => {
		const { adults, childs, babies } = this.state.passengers

		return adults + childs + babies
	}

	render() {
		const { classes, onSubmit, getSuggestions, suggestions: suggestionsProps } = this.props

		const { open, suggestions: suggestionsState, checkedB, passengers, openPassengers, type } = this.state

		return (
			<div style={{ cursor: 'pointer' }}>
				<Paper key={1} onClick={this.handleClickOpen} elevation={2} style={{ backgroundColor: 'transparent' }}>
					<Grid container spacing={0} className={classes.SearchVuelosMobile}>
						<Grid item xs={1}>
							<IconsFont iconSize={30} icon="flaticon-take-off" />
						</Grid>
						<Grid item xs={10}>
							<Text style={{ marginLeft: 20 }} size={16} content="¿A dónde querés volar?" />
						</Grid>
						<Grid item xs={1}>
							<IconsFont iconSize={30} icon="flaticon-search" />
						</Grid>
					</Grid>
				</Paper>
				<Dialog
					key={2}
					fullScreen
					style={{ zIndex: 1 }}
					open={open}
					onClose={this.handleClose}
					TransitionComponent={Transition}
				>
					<AppBar position="static" style={{ background: '#f2f2f2' }} elevation={0}>
						<Toolbar>
							<IconButton color="inherit" className={classes.closeIcon} onClick={this.handleClose} aria-label="Close">
								<CloseIcon style={{ fontSize: 40, color: 'gray' }} />
							</IconButton>
						</Toolbar>
					</AppBar>
					<DialogContent className={classes.contentSearch}>
						<div style={{ width: '100%', background: '#f9f8f7' }}>
							<div className={classes.flex}>
								<FormControl component="fieldset">
									<RadioGroup
										value={type}
										onChange={(e, type) => this.setState({ type })}
										name="typeair"
										style={{ display: 'inline' }}
									>
										<FormControlLabel
											value="ida_vuelta"
											control={<Radio color="primary" />}
											label={<p className={classes.radioLabel}>ida y vuelta</p>}
										/>

										<FormControlLabel
											value="ida"
											control={<Radio color="primary" />}
											label={<p className={classes.radioLabel}>solo ida</p>}
										/>
										{/* <FormControlLabel
											value="Mutidestino"
											control={<Radio color="primary" />}
											label={<p className={classes.radioLabel}>Mutidestino</p>}
										/> */}
									</RadioGroup>
								</FormControl>
							</div>
						</div>
						<div className={classes.contentcardForm}>
							<ContainerCard overflow="visible" shadow>
								<CardContent paddingConfig={15}>
									<Autocompletar
										placeholder="Origen:"
										name="origin"
										onChange={origin => this.setState({ origin })}
										getSuggestions={getSuggestions || this.getSuggestions}
										suggestions={suggestionsProps || suggestionsState}
									/>
								</CardContent>
							</ContainerCard>
						</div>
						<div className={classes.contentcardForm}>
							<ContainerCard overflow="visible" shadow>
								<CardContent paddingConfig={15}>
									<Autocompletar
										placeholder="Destino:"
										name="destination"
										onChange={destination => this.setState({ destination })}
										getSuggestions={getSuggestions || this.getSuggestions}
										suggestions={suggestionsProps || suggestionsState}
									/>
								</CardContent>
							</ContainerCard>
						</div>
						<div className={classes.contentcardForm}>
							<ContainerCard overflow="visible" shadow>
								<CardContent paddingConfig={10}>
									<CalendarFullWidthVertical onChange={this.calendar} />
								</CardContent>
							</ContainerCard>
						</div>
						{/* <div>
							<FormControlLabel
								control={
									<Checkbox
										checked={checkedB}
										onChange={this.handleChangeCheck('checkedB')}
										value="Todavía no tengo una fecha"
										color="primary"
									/>
								}
								label="Todavía no tengo una fecha"
							/>
						</div> */}
						<div onClick={() => this.setState({ openPassengers: true })} className={classes.contentcardForm}>
							<ContainerCard>
								<CardContent paddingConfig={15}>
									<div className={classes.simpleFlex}>
										<IconsFont size={25} icon="flaticon-user-2" />
										<Text content={`Pasajeros ${this.renderCompositionPassengers()}`} style={{ marginLeft: 5 }} />
									</div>
								</CardContent>
							</ContainerCard>
						</div>
					</DialogContent>
					<DialogActions>
						<Button
							text="Buscar"
							radius
							border
							fullWidth
							onClick={() => {
								onSubmit(this.state)
							}}
						/>
					</DialogActions>
				</Dialog>
				<Dialog key={3} fullScreen open={openPassengers} onClose={() => this.setState({ openPassengers: false })}>
					<AppBar key={1} position="static" style={{ background: '#f2f2f2' }} elevation={0}>
						<Toolbar>
							<IconButton
								className={classes.closeIcon}
								onClick={() => this.setState({ openPassengers: false })}
								aria-label="Close"
							>
								<CloseIcon style={{ fontSize: 40, color: 'gray' }} />
							</IconButton>
						</Toolbar>
					</AppBar>
					<DialogContent key={2} className={classes.contentSearch}>
						<PassengersVuelos
							open={openPassengers}
							initialValues={passengers}
							onSubmit={passengers => this.setState({ anchorEl: null, openPassengers: false, passengers })}
						/>
					</DialogContent>
				</Dialog>
			</div>
		)
	}
}
SearchVuelosMobile.defaultProps = {
	onSubmit: () => { }
}

SearchVuelosMobile.propTypes = {

	onSubmit: PropTypes.func
}

export default withStyles(({ mauri: { flex, simpleFlex } }) => ({
	SearchVuelosMobile: {
		display: 'none',
		width: '100%',
		maxWidth: 700,
		borderRadius: 10,
		backgroundColor: 'white',
		padding: '20px 10px',

		'@media (max-width: 800px)': {
			display: 'flex',
			alignItems: 'center'
		}
	},
	contentcardForm: {
		marginTop: 20,
		width: '100%'
	},
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
	flex,
	simpleFlex,
	closeIcon: {
		right: 5,
		position: 'absolute'
	}
}))(SearchVuelosMobile)
