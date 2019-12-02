import React, { lazy, Suspense } from 'react'
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
import Tooltip from '@material-ui/core/Tooltip'

import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import IconsFont from '../../Atoms/IconsFont'

import PassengersGeneric from '../Passengers/PassengersGeneric'

class GenericSearch extends React.PureComponent {
	constructor(props) {
		super(props)

		if (props.isHotel) {
			this.state = {
				cabin: props.initialCabin || 'Y',
				passengers: {
					occupancy: props.initialOccupancy,
					passengersResult: props.initialPassengers.passengersResult || 2,
					rooms: 1
				}
			}
		} else {
			this.state = {
				cabin: props.initialCabin || 'Y',
				passengers: props.initialPassengers || { adults: 1, childs: 0, babies: 0 },
				openPassengers: false
			}
		}
	}

	renderCompositionPassengers = (isHotel = false) => {
		const { passengers, cabin } = this.state
		if (this.props.isHotel) {
			return passengers.passengersResult
		}

		const { adults, childs, babies } = passengers

		let clase = 'Económica'
		if (cabin === 'F') {
			clase = 'Primera'
		} else if (cabin === 'C') {
			clase = 'Business'
		} else if (cabin === 'S') {
			clase = 'Premium'
		}

		return `${adults + childs + babies} ${isHotel ? '' : clase}`
		// return adults + childs + babies
	}

	Transition = props => {
		return <Slide direction="up" {...props} />
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false }, this.props.onClose)
	}

	render() {
		const {
			classes,
			onSubmit,
			items,
			usePassengers,
			text,
			iconLeft,
			iconRight,
			isHotel,
			isMobile,
			summary,
			error
		} = this.props
		const { open, passengers, openPassengers, occupancy, cabin } = this.state

		return (
			<div style={{ cursor: 'pointer' }}>
				{!summary && (
					<Paper key={1} onClick={this.handleClickOpen} elevation={2} style={{ backgroundColor: 'transparent' }}>
						<Grid container spacing={0} className={classes.SearchVuelosMobile}>
							<Grid item xs={1}>
								{iconLeft}
							</Grid>
							<Grid item xs={10}>
								<Text style={{ marginLeft: 20 }} size={16} content={text} />
							</Grid>
							<Grid item xs={1}>
								{iconRight}
							</Grid>
						</Grid>
					</Paper>
				)}
				<Dialog
					key={2}
					fullScreen
					style={{ zIndex: 1 }}
					open={this.props.open || this.state.open}
					onClose={this.handleClose}
					TransitionComponent={this.Transition}
				>
					<AppBar position="static" style={{ background: '#f2f2f2' }} elevation={0}>
						<Toolbar>
							<IconButton color="inherit" className={classes.closeIcon} onClick={this.handleClose} aria-label="Close">
								<CloseIcon style={{ fontSize: 40, color: 'gray' }} />
							</IconButton>
						</Toolbar>
					</AppBar>
					<DialogContent className={classes.contentSearch}>
						{items.map((item, i) => {
							return (
								<div className={classes.contentcardForm} key={i}>
									<ContainerCard overflow="visible">
										<Tooltip title={item.error} open={Boolean(item.error)}>
											<CardContent useFlex={this.props.useFlexItem} paddingConfig={15}>
												{item.component}
											</CardContent>
										</Tooltip>
									</ContainerCard>
								</div>
							)
						})}
						{usePassengers && (
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
						)}
					</DialogContent>
					<DialogActions>
						<Button
							text="Buscar"
							radius
							border
							fullWidth
							onClick={() => {
								onSubmit({ passengers: this.state.passengers, cabin: this.state.cabin })
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
						<PassengersGeneric
							isHotel={isHotel}
							isMobile={isMobile}
							open={openPassengers}
							initialValues={{ passengers, cabin }}
							onSubmit={({ passengers, cabin }) => this.setState({ openPassengers: false, passengers, cabin })}
						/>
					</DialogContent>
				</Dialog>
			</div>
		)
	}
}

GenericSearch.defaultProps = {
	onSubmit: () => {},
	classes: {},
	error: '',
	items: [],
	usePassengers: false,
	text: 'Texto',
	iconLeft: '',
	iconRight: '',
	isHotel: false,
	open: false,
	summary: false
}

GenericSearch.propTypes = {

	onSubmit: PropTypes.func,
	classes: PropTypes.node,
	error: PropTypes.string,
	// eslint-disable-next-line react/no-typos
	items: PropTypes.Array,
	usePassengers: PropTypes.bool,
	text: PropTypes.string,
	iconLeft: PropTypes.node,
	iconRight: PropTypes.node,
	isHotel: PropTypes.bool,
	open: PropTypes.bool,
	summary: PropTypes.bool
}

export default withStyles(({ mauri: { flex, simpleFlex } }) => ({
	SearchVuelosMobile: {
		display: 'none',
		width: '100%',
		maxWidth: 700,
		borderRadius: 10,
		backgroundColor: 'white',
		padding: '20px 10px',

		'@media (max-width: 1024px)': {
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
}))(GenericSearch)
