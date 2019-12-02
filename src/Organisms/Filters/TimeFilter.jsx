import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/styles'

import Button from '../../Atoms/Button/Button'
import Expander from '../../Atoms/Expander'
import Filter from './Filter'
import LabeledSlider from '../../Atoms/LabeledSlider'
import moment from 'moment'

const useStyles = makeStyles({
	title: { fontFamily: 'Roboto, sans-serif', margin: '15px 0 10px 0', fontWeight: 'bold' },
	container: { padding: 30, width: '100%' }
})

const equalValueExtreme = (value, extreme) =>
	!extreme || !value || (value.from === extreme.min && value.to === extreme.max)

const isTouched = (values, extremes) => {
	return !(
		equalValueExtreme(get(values, 'goingDeparture'), get(extremes, 'goingDeparture')) &&
		equalValueExtreme(get(values, 'returnDeparture'), get(extremes, 'returnDeparture')) &&
		equalValueExtreme(get(values, 'goingArrival'), get(extremes, 'goingArrival')) &&
		equalValueExtreme(get(values, 'returnArrival'), get(extremes, 'returnArrival'))
	)
}

const encode = value => {
	const time = moment.duration(value, 'minutes').locale('es')
	return `${time.hours() < 10 ? '0' : ''}${time.hours()}:${time.minutes() < 10 ? '0' : ''}${time.minutes()}`
}

const decode = value => {
	const [hour, min] = (value && String(value).split(':')) || [0, 0]
	return Number(hour) * 60 + Number(min)
}

const getExtremes = extremes => {
	return {
		goingDeparture: {
			min: extremes.goingDeparture.min || 0,
			max: extremes.goingDeparture.max || 0
		},
		returnDeparture: {
			min: extremes.returnDeparture.min || 0,
			max: extremes.returnDeparture.max || 0
		},
		goingArrival: {
			min: extremes.goingArrival.min || 0,
			max: extremes.goingArrival.max || 0
		},
		returnArrival: {
			min: extremes.returnArrival.min || 0,
			max: extremes.returnArrival.max || 0
		}
	}
}

const getValues = (
	{ goingDeparture, returnDeparture, goingArrival, returnArrival },
	{
		goingDeparture: eGoingDeparture,
		returnDeparture: eReturnDeparture,
		goingArrival: eGoingArrival,
		returnArrival: eReturnArrival
	}
) => {
	return {
		goingDeparture: {
			from: (goingDeparture && goingDeparture.from) || eGoingDeparture.min,
			to: (goingDeparture && goingDeparture.to) || eGoingDeparture.max
		},
		returnDeparture: {
			from: (returnDeparture && returnDeparture.from) || eReturnDeparture.min,
			to: (returnDeparture && returnDeparture.to) || eReturnDeparture.max
		},
		goingArrival: {
			from: (goingArrival && goingArrival.from) || eGoingArrival.min,
			to: (goingArrival && goingArrival.to) || eGoingArrival.max
		},
		returnArrival: {
			from: (returnArrival && returnArrival.from) || eReturnArrival.min,
			to: (returnArrival && returnArrival.to) || eReturnArrival.max
		}
	}
}

export default function LengthFilter({ values: pValues, extremes: pExtremes, ...props }) {
	const classes = useStyles()

	const { type, onChange } = props

	const [extremes, setExtremes] = React.useState(getExtremes(pExtremes))
	const [values, setValues] = React.useState(getValues(pValues, extremes))

	const onValueChange = (name, value) => {
		const { type } = props

		const newValues01 = { ...values }
		newValues01[name] = { from: value.from, to: value.to }

		if (type !== 'ROUNDTRIP') {
			delete newValues.returnDeparture
			delete newValues.returnArrival
		}

		setValues(newValues01)
	}

	const renderSliders = close => {
		return (
			<div className={classes.container}>
				<LabeledSlider
					title={'Despegue de ida'}
					onChanged={newValues => onValueChange('goingDeparture', newValues)}
					formatLabel={val => `${val} hs`}
					values={values.goingDeparture}
					extremes={extremes.goingDeparture}
					encode={encode}
					decode={decode}
					inputType={'time'}
				/>
				<LabeledSlider
					title={'Aterrizaje de ida'}
					onChanged={newValues => onValueChange('goingArrival', newValues)}
					formatLabel={val => `${val} hs`}
					values={values.goingArrival}
					extremes={extremes.goingArrival}
					encode={encode}
					decode={decode}
					inputType={'time'}
				/>
				{type === 'ROUNDTRIP' && (
					<>
						<LabeledSlider
							title={'Despegue de vuelta'}
							onChanged={newValues => onValueChange('returnDeparture', newValues)}
							formatLabel={val => `${val} hs`}
							values={values.returnDeparture}
							extremes={extremes.returnDeparture}
							encode={encode}
							decode={decode}
							inputType={'time'}
						/>
						<LabeledSlider
							title={'Aterrizaje de vuelta'}
							onChanged={newValues => onValueChange('returnArrival', newValues)}
							formatLabel={val => `${val} hs`}
							values={values.returnArrival}
							extremes={extremes.returnArrival}
							encode={encode}
							decode={decode}
							inputType={'time'}
						/>
					</>
				)}
				<div style={{ marginTop: 15 }}>
					<Button
						radius
						size={10}
						text="Aplicar"
						primary={true}
						onClick={() => {
							if (close) close()
							props.onChange(values || {})
						}}
					/>
				</div>
			</div>
		)
	}

	const onReset = () => {
		setValues({
			goingDeparture: {
				from: get(extremes, 'goingDeparture.min'),
				to: get(extremes, 'goingDeparture.max')
			},
			returnDeparture: {
				from: get(extremes, 'returnDeparture.min'),
				to: get(extremes, 'returnDeparture.max')
			},
			goingArrival: {
				from: get(extremes, 'goingArrival.min'),
				to: get(extremes, 'goingArrival.max')
			},
			returnArrival: {
				from: get(extremes, 'returnArrival.min'),
				to: get(extremes, 'returnArrival.max')
			}
		})
		onChange()
	}

	return (
		<div>
			<Hidden mdUp>
				<Expander title="Horarios" content={renderSliders()} />
			</Hidden>
			<Hidden mdDown>
				<Filter
					title="Horarios"
					onReset={() => onReset()}
					touched={isTouched(values, extremes)}
					content={close => renderSliders(close)}
				></Filter>
			</Hidden>
		</div>
	)
}

LengthFilter.defaultProps = {
	type: 'ROUNDTRIP',
	extremes: {
		goingDeparture: { min: 0, max: 1439 },
		goingArrival: { min: 0, max: 1439 },
		returnDeparture: { min: 0, max: 1439 },
		returnArrival: { min: 0, max: 1439 }
	},
	values: {
		goingDeparture: { from: 0, to: 1439 },
		goingArrival: { from: 0, to: 1439 },
		returnDeparture: { from: 0, to: 1439 },
		returnArrival: { from: 0, to: 1439 }
	},
	onChange: () => {}
}

const filterType = PropTypes.shape({
	from: PropTypes.number,
	to: PropTypes.number
})

const extremeType = PropTypes.shape({
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired
})

LengthFilter.propTypes = {
	onChange: PropTypes.func,
	type: PropTypes.string,
	extremes: PropTypes.shape({
		going: extremeType,
		return: extremeType,
		goingScales: extremeType,
		returnScales: extremeType
	}),
	values: PropTypes.shape({
		goingDeparture: filterType,
		goingArrival: filterType,
		returnDeparture: filterType,
		returnArrival: filterType
	})
}
