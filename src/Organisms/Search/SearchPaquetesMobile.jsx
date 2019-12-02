import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import DialogContent from '@material-ui/core/DialogContent'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import SimpleList from '../../Molecules/List/SimpleList'
import ExpanderCustomizable from '../../Atoms/ExpanderCustomizable'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import Autocompletar from '../../Molecules/Autocompletar/Autocompletar'
import CalendarFullWidthVertical from '../../Molecules/Calendar/CalendarFullWidthVertical'
import Passengers from '../Passengers/Passengers'
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
			auth: true,
			anchorEl: null,
			calendar: {},
			passenger: {},
			place: '',
			suggestions: []
		}
	}

	handleChangeCheck = name => event => {
		this.setState({ [name]: event.target.checked })
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleChangeAutocomplete = (value, name = 'place') => {
		let obj = {}
		obj[name] = value
		this.setState(obj)
	}

	handleChangeCalendar = values => {
		this.setState({ calendar: values })
	}

	handleChangePassengers = values => {
		this.setState({ passenger: values })
	}

	submit = () => {
		this.props.onSubmit && this.props.onSubmit(this.state)
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

	handleClose = () => {
		this.setState({ open: false })
	}

	handleClose2 = () => {
		this.setState({ open2: false })
	}

	render() {
		const { classes, onSubmit, getSuggestions, suggestions: suggestionsProps } = this.props
		const { open, suggestions: suggestionsState, checkedB, passengers, openPassengers, type } = this.state

		return (
			<div className={classes.containerSearch}>
				<Paper key={1} onClick={this.handleClickOpen} elevation={2} style={{ backgroundColor: 'transparent' }}>
					<Grid container spacing={0} className={classNames(classes.SearchVuelosMobile)}>
						<Grid item xs={1}>
							<IconsFont iconSize={30} icon="flaticon-briefcase" />
						</Grid>
						<Grid item xs={10}>
							<Text style={{ marginLeft: 20 }} size={16} content="¿A dónde querés viajar?" />
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
					<DialogContent className={classNames(classes.contentSearch)}>
						<div className={classNames(classes.contentcardForm)}>
							<ContainerCard overflow="visible">
								<CardContent justify="center" align="center" paddingConfig={15}>
									<Autocompletar
										name="destination"
										onChange={this.handleChangeAutocomplete}
										getSuggestions={this.props.getSuggestions || this.getSuggestions}
										suggestions={this.props.suggestions || this.state.suggestions}
									/>
								</CardContent>
							</ContainerCard>
						</div>
						<div>
							<ExpanderCustomizable
								title="Busquedas Anteriores"
								style={{ padding: 0 }}
								content={
									<div style={{ width: '100%' }}>
										<ContainerCard>
											<CardContent paddingConfig={5}>
												<SimpleList title="Rio de Janeiro" subtitle="Brasil" borderBottom />
												<SimpleList title="Rio de Janeiro" subtitle="Brasil" borderBottom />
											</CardContent>
										</ContainerCard>
									</div>
								}
							/>
						</div>
						<div>
							<ContainerCard overflow="visible">
								<CardContent justify="center" align="center" paddingConfig={10}>
									<CalendarFullWidthVertical onChange={this.handleChangeCalendar} />
								</CardContent>
							</ContainerCard>
						</div>
						<div>
							<FormControlLabel
								control={
									<Checkbox
										checked={this.state.checkedA}
										onChange={this.handleChangeCheck('checkedB')}
										value="Todavia no tengo una fecha"
										color="primary"
									/>
								}
								label="Todavia no tengo una fecha"
							/>
						</div>
						<div onClick={this.handleClickOpen2} className={classNames(classes.contentcardForm)}>
							<ContainerCard overflow="visible">
								<CardContent justify="center" align="center" paddingConfig={10}>
									<div className={classNames(classes.simpleFlex)}>
										<IconsFont size={25} icon="flaticon-user-2" />
										<Text content="Pasajeros 2" style={{ marginLeft: 5 }} />
									</div>
								</CardContent>
							</ContainerCard>
						</div>
					</DialogContent>
					<div className={classNames(classes.btnFixed)}>
						<Button text="Buscar" radius border fullWidth />
					</div>
				</Dialog>
				<Dialog key={3} fullScreen open={this.state.open2} onClose={this.handleClose2}>
					<AppBar key={1} position="static" className={classNames({ background: '#f2f2f2' })} elevation={0}>
						<Toolbar>
							<IconButton className={classNames(classes.closeIcon)} onClick={this.handleClose2} aria-label="Close">
								<CloseIcon style={{ fontSize: 40, color: 'gray' }} />
							</IconButton>
						</Toolbar>
					</AppBar>
					<DialogContent key={2} className={classNames(classes.contentSearch)}>
						<Passengers onChange={this.handleChangePassengers} />
					</DialogContent>
				</Dialog>
			</div>
		)
	}
}
SearchVuelosMobile.defaultProps = {
	// image: "",
	onSubmit: function() {}
}

SearchVuelosMobile.propTypes = {

	// image: PropTypes.string,
	onSubmit: PropTypes.func.isRequired
}

export default withStyles(({ mauri: { flex, simpleFlex } }) => ({
	containerSearch: {
		display: 'none',

		'@media (max-width: 800px)': {
			display: 'block'
		}
	},
	SearchVuelosMobile: {
		width: '100%',
		cursor: 'pointer',
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
