import React from 'react'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'

import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'

import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'
import DialogContent from '@material-ui/core/DialogContent'

import CardContent from '../../Atoms/Card/CardContent'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

import ContainerCard from '../../Atoms/Card/ContainerCard'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'
import { FiUser } from 'react-icons/fi'
import { IconContext } from 'react-icons'

import PassengersGeneric from '../Passengers/PassengersGeneric'
import OccupancySummary from '../Passengers/OccupancySummary'

class SearchVuelos extends React.Component {
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
		if (passengers && passengers.passengersResult) {
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
	}

	render() {
		const {
			classes,
			isMobile,
			isHotel,
			oneSearch,
			itemsSearch,
			calendar,
			passenger,
			itemBottom,
			onSubmit,
			usePassengers
		} = this.props
		const { passengers, openPassengers, occupancy, cabin } = this.state

		return (
			<div className={classNames(classes.contAll)}>
				<div className={classNames(classes.contGroup01)}>
					<div className={classNames(classes.cont01)}>
						{itemsSearch.map(item => {
							return (
								<React.Fragment>
									<div className={classNames(classes.marginRight10, classes.autocompletar)}>{item.icon}</div>
									<Tooltip title={item.error} open={Boolean(item.error)}>
										{item.component}
									</Tooltip>
								</React.Fragment>
							)
						})}
					</div>
					<div className={classNames(classes.cont02)}>
						<div className={classNames(classes.calendar1)}>
							{calendar && (
								<Tooltip title={calendar.error} open={Boolean(calendar.error)}>
									{calendar.component}
								</Tooltip>
							)}
						</div>
						<div className={classNames(classes.passenger1)}>
							{!isMobile && usePassengers && (
								<Tooltip title={passengers.error} open={Boolean(passengers.error)}>
									<PassengersGeneric
										isHotel={isHotel}
										isMobile={isMobile}
										open={openPassengers}
										initialValues={{ passengers, cabin }}
										// initialValues={{ passengers, occupancy }}
										onSubmit={({ passengers, cabin }) => {
											this.setState({ openPassengers: false, passengers, cabin })
										}}
									>
										{isHotel ? (
											<OccupancySummary passengers={this.renderCompositionPassengers(isHotel)} rooms={1} />
										) : (
											<div className={classNames(classes.displayFlex)}>
												<IconContext.Provider
													value={{ style: { color: 'rgb(113, 112, 112)', height: 35, verticalAlign: 'middle' } }}
												>
													<FiUser size={45} icon="flaticon-user-2" />
												</IconContext.Provider>
												<Text content={this.renderCompositionPassengers()} style={{ marginLeft: 5 }} />
											</div>
										)}
									</PassengersGeneric>
								</Tooltip>
							)}
							{isMobile && usePassengers && (
								<div onClick={() => this.setState({ openPassengers: true })} className={classes.contentcardForm}>
									<ContainerCard>
										<CardContent paddingConfig={15}>
											<div className={classes.simpleFlex}>
												<IconContext.Provider
													value={{ style: { color: 'rgb(113, 112, 112)', height: 35, verticalAlign: 'middle' } }}
												>
													<FiUser size={45} icon="flaticon-user-2" />
												</IconContext.Provider>
												<Text
													content={`Pasajeros ${this.renderCompositionPassengers(isHotel)}`}
													style={{ marginLeft: 5 }}
												/>
											</div>
										</CardContent>
									</ContainerCard>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className={classNames(classes.contGroup02)}>
					<div className={classNames(classes.type1)}>{itemBottom && itemBottom.component}</div>
					<div className={classNames(classes.button1)}>
						<Button
							name="submitSearch"
							fullWidth
							style={{ borderRadius: '0 0 6px 0', height: '100%', width: '100%' }}
							iconLeft={<FaSearch size={25} />}
							onClick={() => onSubmit({ passengers: this.state.passengers, cabin: this.state.cabin })}
						/>
					</div>
				</div>
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
							initialValues={passengers}
							onSubmit={({ passengers, cabin }) => {
								this.setState({ openPassengers: false, passengers, cabin })
							}}
						/>
					</DialogContent>
				</Dialog>
			</div>
		)
	}
}

SearchVuelos.defaultProps = {
	oneSearch: false,
	isHotel: false,
	isMobile: false
}

SearchVuelos.propTypes = {

	isHotel: PropTypes.bool,
	oneSearch: PropTypes.bool,
	isMobile: PropTypes.bool
}

export default withStyles(() => ({
	contAll: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'stretch',
		backgroundColor: 'white',
		borderRadius: '10px',
		paddingTop: '5px'
	},
	contGroup01: {
		display: 'flex',
		flexFlow: 'row wrap',
		flexGrow: 1
	},
	contGroup02: {
		display: 'flex',
		flexFlow: 'row wrap',
		flexGrow: 1,
		justifyContent: 'space-between'
	},
	cont01: {
		display: 'flex',
		flexFlow: 'row nowrap',
		flexGrow: 1,
		justifyContent: 'space-between',
		minHeight: '30px',
		borderBottom: '0.5px solid silver'
	},
	cont02: {
		display: 'flex',
		flexFlow: 'row nowrap',
		flexGrow: 1,
		justifyContent: 'space-between',
		minHeight: '30px',
		borderBottom: '0.5px solid silver',
		borderLeft: 0,
		'@media (min-width: 1920px)': {
			borderLeft: '2.0px solid silver'
		}
	},
	calendar1: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '160px',
		width: '50%'
	},
	passenger1: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
		borderLeft: '2.0px solid silver'
	},
	type1: {
		display: 'flex',
		alignItems: 'center',
		width: '50%'
	},
	autocompletar: {
		paddingLeft: 20
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	},
	marginRight10: {
		marginRight: 10
	}
}))(SearchVuelos)
