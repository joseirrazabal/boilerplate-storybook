import React from 'react'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'

import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'

import CardContent from '../../Atoms/Card/CardContent'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

import ContainerCard from '../../Atoms/Card/ContainerCard'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'
import { FiUser } from 'react-icons/fi'
import { IconContext } from 'react-icons'

import PassengersGeneric from '../Passengers/PassengersGeneric'

import OccupancySummary from '../Passengers/OccupancySummary'

const searchStyles = {
	absolute: {
		position: 'absolute',
		right: 0,
		top: 0
	},
	DateRangePicker: {
		width: '100%',
		cursor: 'pointer'
	},
	listMenuBorderLine: {
		borderRight: '0.5px solid #ccc',
		paddingRight: 20
	}
}

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
			usePassengers,
			useBeds
		} = this.props
		const { passengers, openPassengers, occupancy, cabin } = this.state

		return (
			<div className={classNames(classes.contentGlobalSearch)}>
				<ContainerCard radius={10} shadow overflow="visible">
					<Grid
						container
						spacing={0}
						className={classNames(
							classes.contentDataSearch,
							isHotel ? classes.contentButtonSearchHotel : classes.contentButtonSearch
						)}
					>
						{itemsSearch.map(item => {
							return (
								<Tooltip title={item.error} open={Boolean(item.error)}>
									<Grid
										item
										xs={12}
										sm={isHotel && oneSearch ? 6 : 4}
										className={classNames(classes.autocompletar, classes.flexStart)}
									>
										<div className={classNames(classes.marginRight10)}>
											{item.icon}
											{/* <IconsFont size={20} icon={item.icon} className={classNames(classes.marginRight10)} /> */}
										</div>
										{item.component}
									</Grid>
								</Tooltip>
							)
						})}
						{calendar && (
							<Tooltip title={calendar.error} open={Boolean(calendar.error)}>
								<Grid
									className={classNames(classes.calendar, classes.borderLeft, classes.borderRight, classes.displayFlex)}
									item
									xs={2}
									sm={this.props.extendCalendar ? 3 : 2}
								>
									{calendar.component}
								</Grid>
							</Tooltip>
						)}
						{!isMobile && usePassengers && (
							<Tooltip title={passengers.error} open={Boolean(passengers.error)}>
								<Grid
									className={classNames(classes.displayFlex)}
									item
									xs={2}
									sm={isHotel && oneSearch ? 3 : this.props.extendCalendar ? 1 : 2}
								>
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
											<OccupancySummary
												passengers={this.renderCompositionPassengers(isHotel)}
												rooms={1}
												useBeds={useBeds}
											/>
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
								</Grid>
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
						{itemBottom && (
							<Grid container className={classNames(classes.borderTop)}>
								<Grid item xs={4} className={classNames(classes.flexStart)}>
									{itemBottom.component}
								</Grid>
							</Grid>
						)}
						<Grid
							container
							spacing={0}
							className={classNames(isHotel ? classes.content_btn_search_hotel : classes.content_btn_search)}
						>
							<Button
								name="submitSearch"
								fullWidth
								style={{ borderRadius: '0 6px 6px 0' }}
								iconLeft={<FaSearch size={25} />}
								onClick={() => {
									onSubmit({ passengers: this.state.passengers, cabin: this.state.cabin })
								}}
							/>
						</Grid>
					</Grid>
				</ContainerCard>
			</div>
		)
	}
}

SearchVuelos.defaultProps = {
	oneSearch: false,
	useBeds: true,
	isHotel: false,
	isMobile: false
}

SearchVuelos.propTypes = {
	isHotel: PropTypes.bool,
	useBeds: PropTypes.bool,
	oneSearch: PropTypes.bool,
	isMobile: PropTypes.bool
}

export default withStyles(({ mauri: { variables } }) => ({
	contentGlobalSearch: {
		margin: '10px 0',
		// marginTop: 10,
		position: 'relative',
		minWidth: '950px',
		'@media (max-width: 1024px)': {
			display: 'none'
		}
	},
	contentButtonSearch: {
		minHeight: variables.searchMinHeightAir
	},
	contentButtonSearchHotel: {
		minHeight: variables.searchMinHeight
	},
	marginRight10: {
		marginRight: 10
	},
	radioLabel: {
		color: 'silver',
		fontWeight: 'bold'
	},
	radio: {
		background: '#f2f2f2',
		width: 14,
		height: 14,
		margin: 10,
		color: 'gray'
	},
	check: {
		width: 25,
		height: 25,
		margin: '0 10px 0 10px'
	},
	flexStart: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
		/* paddingLeft: 20 */
	},
	contentDataSearch: {
		width: `calc(100% / 1 -  ${variables.searchWidthBtn})`
	},
	autocompletar: {
		minHeight: 35,
		paddingLeft: 20
	},
	borderTop: {
		borderTop: '0.5px solid silver'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	},
	borderLeft: {
		borderLeft: '0.5px solid silver'
	},
	borderRight: {
		borderRight: '0.5px solid silver'
	},
	calendar: {
		input: {
			textAlign: 'center'
		},
		display: 'flex',
		'@media (max-width: 690px)': {
			display: 'none'
		}
	},
	content_btn_search: {
		width: variables.searchWidthBtn,
		minHeight: variables.searchMinHeightAir,
		heigth: '100%',
		position: 'absolute',
		right: 0
	},
	content_btn_search_hotel: {
		width: variables.searchWidthBtn,
		minHeight: variables.searchMinHeight,
		heigth: '100%',
		position: 'absolute',
		right: 0
	}
}))(SearchVuelos)
