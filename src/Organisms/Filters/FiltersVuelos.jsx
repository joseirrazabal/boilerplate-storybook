import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

import Button from '../../Atoms/Button/Button'

import RangeFilter from './RangeFilter'
import ListFilter from './ListFilter'
import LengthFilter from './LengthFilter'
import TimeFilter from './TimeFilter'

class FiltersVuelos extends React.Component {

	state = {
		length: {
			going: { from: 0, to: 100 },
			return: { from: 0, to: 100 },
			goingScales: { from: 0, to: 100 },
			returnScales: { from: 0, to: 100 }
		},
		time: {
			goingDeparture: { from: 0, to: 1439 },
			returnDeparture: { from: 0, to: 1439 },
			goingArrival: { from: 0, to: 1439 },
			returnArrival: { from: 0, to: 1439 }
		},
		values: { from: 350, to: 4300 },
		extremes: { min: 230, max: 4800 },
		airports: []
	}

	render() {
		const { classes } = this.props
		const { length, values, time, extremes, airports } = this.state
		return (
			<div className={classNames(classes.contentFilters)}>
				<Button onClick={() => this.setState({ values: { from: 500, to: 3400 } })}>Cambiar estado vieja</Button>
				<RangeFilter
					title="Precio"
					onChange={values => this.setState({ values })}
					onReset={() => this.setState({ values: null })}
					formatValue={val => `$ ${val}`}
					values={values}
					extremes={extremes}
				/>
				<LengthFilter
					onChange={newLength => this.setState({ length: newLength })}
					values={length}
					extremes={{
						going: { min: 0, max: 24 * 60 },
						return: { min: 0, max: 24 * 60 },
						goingScales: { min: 0, max: 24 * 60 },
						returnScales: { min: 0, max: 24 * 60 }
					}}
				/>
				<TimeFilter onChange={newTime => this.setState({ time: newTime })} values={time} />
				<ListFilter
					onChange={airports => this.setState({ airports })}
					title="Aeropuertos"
					items={[
						{ value: 'PAR', text: 'Paris', primary: '100', secondary: '$ 100013' },
						{ value: 'MAD', text: 'Madrid', primary: '130', secondary: '$ 3013' }
					]}
					values={airports}
				/>

			</div>
		)
	}
}

FiltersVuelos.defaultProps = {
	title: null
}
FiltersVuelos.propTypes = {

	title: PropTypes.string
}

export default withStyles(({ mauri: { color } }) => ({
	contentFilters: {
		overflowX: 'scroll',
		whiteSpace: 'nowrap',
		width: '100%',
		':after': {
			content: "''",
			position: 'absolute',
			top: 0,
			right: 0,
			width: 60,
			height: '100%',
			backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,1))'
		}
	},
	color,
	menu: {
		padding: 0,
		margin: 0
	},
	menuItem: {
		width: '100%',
		minWidth: 400
	},
	button: {
		border: '1px solid silver',
		width: 'auto',
		marginRight: 10,
		display: 'inline-block',
		borderRadius: 6
	}
}))(FiltersVuelos)
