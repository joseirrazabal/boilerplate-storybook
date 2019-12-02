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
		equalValueExtreme(get(values, 'going'), get(extremes, 'going')) &&
		equalValueExtreme(get(values, 'return'), get(extremes, 'return')) &&
		equalValueExtreme(get(values, 'goingScales'), get(extremes, 'goingScales')) &&
		equalValueExtreme(get(values, 'returnScales'), get(extremes, 'returnScales'))
	)
}

const encode = value => {
	const time = moment.duration(value, 'minutes').locale('es')
	return `${time.hours() < 10 ? '0' : ''}${time.hours()}:${time.minutes() < 10 ? '0' : ''}${time.minutes()}`
	// 	return Math.round(val / 60)
}

const decode = value => {
	const [hour, min] = (value && String(value).split(':')) || [0, 0]
	return Number(hour) * 60 + Number(min)
	// 	return Math.round(val * 60)
}

const getExtremes = extremes => {
	return {
		going: {
			min: extremes.going.min || 0,
			max: extremes.going.max || 0
		},
		return: {
			min: extremes.return.min || 0,
			max: extremes.return.max || 0
		},
		goingScales: {
			min: extremes.goingScales.min || 0,
			max: extremes.goingScales.max || 0
		},
		returnScales: {
			min: extremes.returnScales.min || 0,
			max: extremes.returnScales.max || 0
		}
	}
}

const getValues = (
	{ going, return: retur, goingScales, returnScales },
	{ going: eGoing, return: eReturn, goingScales: eGoingScales, returnScales: eReturnScales }
) => {
	return {
		going: {
			from: (going && going.from) || eGoing.min,
			to: (going && going.to) || eGoing.max
		},
		return: {
			from: (retur && retur.from) || eReturn.min,
			to: (retur && retur.to) || eReturn.max
		},
		goingScales: {
			from: (goingScales && goingScales.from) || eGoingScales.min,
			to: (goingScales && goingScales.to) || eGoingScales.max
		},
		returnScales: {
			from: (returnScales && returnScales.from) || eReturnScales.min,
			to: (returnScales && returnScales.to) || eReturnScales.max
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
			delete newValues01.return
			delete newValues01.returnScales
		}

		setValues(newValues01)
	}

	const renderSliders = close => {
		return (
			<div className={classes.container}>
				{extremes.going && (
					<LabeledSlider
						title={'Ida'}
						onChanged={newValues => onValueChange('going', newValues)}
						formatLabel={val => `${val} hs`}
						values={values.going}
						extremes={extremes.going}
						encode={encode}
						decode={decode}
						inputType={'time'}
					/>
				)}
				{type === 'ROUNDTRIP' && extremes.return && (
					<LabeledSlider
						title={'Vuelta'}
						onChanged={newValues => onValueChange('return', newValues)}
						formatLabel={val => `${val} hs`}
						values={values.return}
						extremes={extremes.return}
						encode={encode}
						decode={decode}
						inputType={'time'}
					/>
				)}
				{extremes.goingScales && (
					<LabeledSlider
						title={'Escalas de ida'}
						onChanged={newValues => onValueChange('goingScales', newValues)}
						formatLabel={val => `${val} hs`}
						values={values.goingScales}
						extremes={extremes.goingScales}
						encode={encode}
						decode={decode}
						inputType={'time'}
					/>
				)}
				{type === 'ROUNDTRIP' && extremes.returnScales && (
					<LabeledSlider
						title={'Escalas de vuelta'}
						onChanged={newValues => onValueChange('returnScales', newValues)}
						formatLabel={val => `${val} hs`}
						values={values.returnScales}
						extremes={extremes.returnScales}
						encode={encode}
						decode={decode}
						inputType={'time'}
					/>
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
			going: {
				from: get(extremes, 'going.min'),
				to: get(extremes, 'going.max')
			},
			return: {
				from: get(extremes, 'return.min'),
				to: get(extremes, 'return.max')
			},
			goingScales: {
				from: get(extremes, 'goingScales.min'),
				to: get(extremes, 'goingScales.max')
			},
			returnScales: {
				from: get(extremes, 'returnScales.min'),
				to: get(extremes, 'returnScales.max')
			}
		})
		onChange()
	}

	return (
		<div>
			<Hidden mdUp>
				<Expander title="Duración" content={renderSliders()} />
			</Hidden>
			<Hidden mdDown>
				<Filter
					title="Duración"
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
		going: { min: 0, max: 100 },
		return: { min: 0, max: 100 },
		goingScales: { min: 0, max: 100 },
		returnScales: { min: 0, max: 100 }
	},
	values: {
		going: { from: 0, to: 0 },
		return: { from: 0, to: 0 },
		goingScales: { from: 0, to: 0 },
		returnScales: { from: 0, to: 0 }
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
		going: filterType,
		return: filterType,
		goingScales: filterType,
		returnScales: filterType
	})
}
