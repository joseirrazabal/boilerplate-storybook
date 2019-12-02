import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import times from 'lodash/times'
import Menu from '@material-ui/core/Menu'

import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'
import SelectNumber from '../../Atoms/SelectNumber'

const childAgeValues = [
	{ title: 'Menos de dos años en Brazos', value: 0, subtitle: 'Tarifa Bebe' },
	{ title: 'Entre 2 y 11 años', value: 1, subtitle: 'Tarifa niño' },
	{ title: 'Mas de 11 años', value: 2, subtitle: 'Tarifa adulto' }
]

const decomposition = ages =>
	ages.reduce(
		(acc, cur) => {
			switch (cur) {
				case 0:
					acc.babies++
					return acc
				case 1:
					acc.childs++
					return acc
				case 2:
					acc.adults++
					return acc
				default:
					return acc
			}
		},
		{ adults: 0, childs: 0, babies: 0 }
	)

class PassengersVuelos extends React.Component {
	constructor(props) {
		super(props)
		const { adults, childs, babies } = props.initialValues
		const ages = []
		times(babies, () => ages.push(0))
		times(childs, () => ages.push(1))

		this.state = { adults, childs, babies, ages, anchorEl: null }
	}

	handleOpenMenu = ({ currentTarget }) => {
		const { onClick } = this.props
		this.setState({ anchorEl: currentTarget })
		if (onClick) onClick()
	}

	selectAge(index, value) {
		const newAges = [...this.state.ages]
		newAges[index] = value
		this.setState({ ages: newAges })
	}
	handleCloseMenu = () => {
		const { onClose } = this.props
		this.setState({ anchorEl: null })
		this.submit()
		if (onClose) onClose()
	}
	submit() {
		const { onSubmit } = this.props
		const { ages } = this.state
		const passengers = decomposition(ages)
		passengers.adults += this.state.adults
		onSubmit(passengers)
	}
	removeAdult = () => {
		if (this.state.adults > this.props.minAdults) this.setState(state => ({ adults: state.adults - 1 }))
	}
	addAdults = () => {
		const { adults, childs, ages, babies } = this.state
		const { maxChilds, maxAdults } = this.props
		//validaciones para que no haya mas de 7 pasajeros//
		const passengers = decomposition(ages)
		passengers.adults += this.state.adults
		passengers.childs += this.state.childs
		passengers.babies += this.state.babies

		if (this.state.adults < this.props.maxAdults && childs + adults <= 6)
			this.setState(state => ({ adults: state.adults + 1 }))
	}
	removeChild = () => {
		if (this.state.adults > this.props.minChilds)
			this.setState(state => ({
				ages: state.ages.splice(0, state.ages.length - 1),
				childs: state.childs - 1,
				babies: state.childs - 1
			}))
	}
	addChild = () => {
		const { adults, childs, ages, babies } = this.state
		const { maxChilds, maxAdults } = this.props
		//validaciones para que no haya mas de 7 pasajeros//
		const passengers = decomposition(ages)
		passengers.adults += this.state.adults
		passengers.childs += this.state.childs
		passengers.babies += this.state.babies

		if (this.state.adults < this.props.maxChilds && childs + adults < 7)
			/* this.setState(state => ({ ages: state.ages.splice(0, state.ages.length + 1) })) */
			this.setState(state => ({ ages: [...state.ages, ' '], childs: state.childs + 1, babies: state.childs + 1 }))
	}

	renderPassengerForm = () => {
		const { classes } = this.props
		const { adults, ages } = this.state

		return (
			<div className="padding15">
				<div>
					<div className="marginB10" style={{ display: 'block' }}>
						<Text size={13} content="adultos" />
					</div>
					<div className={classNames(classes.flexCenterVertical, classes.backgroundGray, classes.people_add)}>
						<div>
							<Button
								onClick={() => {
									this.removeAdult()
								}}
								className={classNames(classes.first_btn, { borderRadius: '6px 0 0 6px' })}
								iconLeft={<IconsFont size={20} color="white" icon="flaticon-social-6" />}
							/>
						</div>
						<div>
							<Text size={13} content={adults} />
						</div>
						<div>
							<Button
								onClick={() => {
									this.addAdults()
								}}
								className={classNames(classes.last_btn, { borderRadius: '0 6px 6px 0' })}
								iconLeft={<IconsFont size={20} color="white" icon="flaticon-social-5" />}
							/>
						</div>
					</div>
				</div>
				<div>
					<div className="marginT20 marginB10" style={{ display: 'block' }}>
						<Text size={13} content="Niños" />
					</div>
					<div className={classNames(classes.flexCenterVertical, classes.backgroundGray, classes.people_add)}>
						<div>
							<Button
								onClick={() => this.removeChild()}
								className={classNames(classes.first_btn, { borderRadius: '6px 0 0 6px' })}
								iconLeft={<IconsFont color="white" size={20} icon="flaticon-social-6" />}
							/>
						</div>
						<div>
							<Text size={14} content={ages.length} />
						</div>
						<div>
							<Button
								onClick={() => this.addChild()}
								className={classNames(classes.last_btn, { borderRadius: '0 6px 6px 0' })}
								iconLeft={<IconsFont color="white" size={20} icon="flaticon-social-5" />}
							/>
						</div>
					</div>
				</div>
				<div>
					{ages &&
						ages.map((age, c) => (
							<div key={c}>
								<div className="marginT20 marginB10" style={{ display: 'block' }}>
									<Text size={13} content={`Edad del menor ${c + 1}`} />
								</div>
								<SelectNumber
									error={false}
									onChange={value => this.selectAge(c, value)}
									inputName={`childAge${c}`}
									inputId={`childAgeID${c}`}
									value={age}
									unselectedOptionText="Seleccione la edad"
									errorText="Campo obligatorio"
									values={childAgeValues}
								/>
							</div>
						))}
				</div>
			</div>
		)
	}

	render() {
		const { classes, mobile, anchorEl: propsAnchorEl } = this.props
		const { anchorEl } = this.state

		return mobile ? (
			<div className={classNames(classes.passengers)}>
				{this.renderPassengerForm()}
				<div className="padding15 background-gray-secuondary flexCenterVertical">
					<Button fullWidth text="Aplicar" radius onClick={() => this.handleCloseMenu()} />
				</div>
			</div>
		) : (
			<React.Fragment>
				<div onClick={this.handleOpenMenu}>{this.props.children}</div>
				<Menu
					id="menu-appbar"
					onClose={this.handleCloseMenu}
					anchorEl={propsAnchorEl || anchorEl}
					open={Boolean(propsAnchorEl || anchorEl)}
					transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				>
					<div className={classNames(classes.passengers)}>
						{this.renderPassengerForm()}
						<div className="padding15 background-gray-secuondary flexCenterVertical">
							<Button text="Aplicar" radius onClick={() => this.handleCloseMenu()} />
						</div>
					</div>
				</Menu>
			</React.Fragment>
		)
	}
}

PassengersVuelos.defaultProps = {
	initialValues: {
		childs: 0,
		adults: 1,
		babies: 0
	},
	onSubmit: () => {},
	open: false,
	minAdults: 1,
	maxAdults: 7,
	maxChilds: 7,
	maxTotal: 7,
	minChilds: 0
}

PassengersVuelos.propTypes = {

	initialValues: PropTypes.shape({
		childs: PropTypes.number,
		adults: PropTypes.number,
		babies: PropTypes.number
	}),
	onSubmit: PropTypes.func,
	open: PropTypes.bool,
	minAdults: PropTypes.number,
	maxAdults: PropTypes.number,
	maxChilds: PropTypes.number,
	maxTotal: PropTypes.number,
	minChilds: PropTypes.number
}

const styles = () => ({
	passengers: {
		background: 'white',
		boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
		minWidth: 300,
		maxWidth: 400
	},
	people_add: {
		boxShadow: '0 2px 2px rgba(0,0,0,0.3)',
		borderRadius: 6
	},
	first_btn: {
		borderRadius: '6px 0 0 6px'
	},
	last_btn: {
		borderRadius: '0 6px 6px 0'
	},
	backgroundGray: {
		background: '#f2f2f2'
	},
	flexCenterVertical: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center'
	}
})

export default withStyles(styles)(PassengersVuelos)
