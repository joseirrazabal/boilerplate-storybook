import React from 'react'
import PropTypes from 'prop-types'
import { FaPencilAlt } from 'react-icons/fa'
import get from 'lodash/get'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import moment from 'moment'

import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'
import VuelosSearchDialog from '../Dialogs/VuelosSearch/VuelosSearchDialog'

const placeShape = PropTypes.shape({
	label: PropTypes.string,
	value: PropTypes.string
})

class ResumenBusquedaVuelos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			...props.initialValues,
			open: false
		}
	}

	handleEditButtonClick = () => {
		this.setState({
			open: true
		})
	}

	handleCloseDialog = () => {
		this.setState({
			open: false
		})
	}

	getPassengersCount = () => {
		const { adults, childs, babies } = this.state.passengers
		return adults + childs + babies
	}

	render() {
		const { classes, onSubmit, getSuggestions, suggestions } = this.props
		const { open, origin, destination, departuredate, returndate, passengers } = this.state
		return (
			<div className={classes.contentCard}>
				<div className={classes.contentinfo}>
					<div className={classes.headerCard}>
						<div className={classes.destino}>
							<Text
								content={get(origin, 'label')}
								size={13}
								left
								color="black"
								style={{
									textOverflow: 'ellipsis',
									overflow: 'hidden',
									whiteSpace: 'nowrap'
								}}
							/>
						</div>
						<div className={classNames(classes.destino, classes.itemRight)}>
							<Text
								content={get(destination, 'label')}
								size={13}
								left
								color="black"
								style={{
									textOverflow: 'ellipsis',
									overflow: 'hidden',
									whiteSpace: 'nowrap'
								}}
							/>
						</div>
					</div>
					<div className={classNames(classes.flex, classes.padding)}>
						<div className={classes.flex}>
							<div className={classes.flex}>
								<Text content={departuredate} size={11} left style={{ marginLeft: 10 }} color="black" />
							</div>
							<IconsFont size={20} icon="flaticon-calendar" />
							<div className={classes.flex}>
								<Text content={returndate} size={11} left style={{ marginLeft: 10 }} color="black" />
							</div>
						</div>
						<div className={classNames(classes.flex, classes.passengers)}>
							<div className={classes.flex}>
								<IconsFont size={20} icon="flaticon-user-2" />
								<Text content={this.getPassengersCount()} size={14} left style={{ marginLeft: 10 }} color="black" />
							</div>
						</div>
					</div>
				</div>
				<div className={classes.edit}>
					<Button
						onClick={this.handleEditButtonClick}
						style={{ borderRadius: '0 6px 6px 0', right: 0, position: 'absolute', height: '100%' }}
						iconLeft={<FaPencilAlt />}
					/>
				</div>
				<VuelosSearchDialog
					open={open}
					initialValues={{
						passengers,
						origin,
						destination,
						departuredate: moment(departuredate),
						returndate: moment(returndate)
					}}
					getSuggestions={getSuggestions}
					suggestions={suggestions}
					onSubmit={({ origin, destination, passengers, departuredate, returndate }) => {
						onSubmit({ origin, destination, passengers, departuredate, returndate })
						this.setState({
							passengers,
							origin,
							destination,
							departuredate: departuredate.format('YYYY-MM-DD'),
							returndate: returndate.format('YYYY-MM-DD'),
							open: false
						})
					}}
					onCloseDialog={() => this.setState({ open: false })}
				/>
			</div>
		)
	}
}

ResumenBusquedaVuelos.defaultProps = {
	onSubmit: () => {},
	getSuggestions: () => {},
	initialValues: {
		origin: null,
		destination: null,
		departuredate: null,
		returndate: null,
		passengers: {
			adults: 1,
			childs: 0,
			babies: 0
		}
	}
}

ResumenBusquedaVuelos.propTypes = {

	onSubmit: PropTypes.func,
	getSuggestions: PropTypes.func,
	initialValues: PropTypes.shape({
		origin: placeShape,
		destination: placeShape,
		departuredate: PropTypes.string,
		returndate: PropTypes.string,
		passengers: PropTypes.shape({
			adults: PropTypes.number,
			childs: PropTypes.number,
			babies: PropTypes.number
		})
	})
}
const styles = ({ mauri: { flex } }) => ({
	contentCard: {
		background: 'white',
		position: 'relative',
		boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
		borderRadius: 6,
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'stretch',
		margin: 10
	},
	passengers: {
		maxWidth: 60,
		width: 'auto'
	},
	headerCard: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		borderBottom: '0.5px solid #f2f2f2'
	},
	destino: {
		width: 'calc(100% / 2)'
	},
	itemRight: {
		paddingLeft: 10,
		borderLeft: '0.5px solid #f2f2f2'
	},
	padding: {
		padding: 10
	},
	flex,
	contentinfo: {
		width: 'calc(100% - 50px)'
	}
})
export default withStyles(styles)(ResumenBusquedaVuelos)
