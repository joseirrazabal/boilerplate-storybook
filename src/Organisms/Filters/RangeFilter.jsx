import React from 'react'
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden'
import get from 'lodash/get'
import LabeledSlider from '../../Atoms/LabeledSlider'
import Expander from '../../Atoms/Expander'
import Button from '../../Atoms/Button/Button'
import { makeStyles } from '@material-ui/styles'

import Filter from './Filter'

const useStyles = makeStyles({
	title: { fontFamily: 'Roboto, sans-serif', margin: '15px 0 10px 0', fontWeight: 'bold' },
	container: { padding: 30, width: '100%' }
})

const equalValueExtreme = (value, extreme) =>
	!extreme || !value || (value.from === extreme.min && (value.to === undefined || value.to === extreme.max))

const isTouched = (values, extremes) => {
	return !equalValueExtreme(values, extremes)
}

const getExtremes = extremes => {
	return {
		min: extremes.min || 0,
		max: extremes.max || 0
	}
}

const getValues = (values, extremes) => {
	return {
		from: (values && values.from) || extremes.min,
		to: (values && values.to) || extremes.to
	}
}

export default function RangeFilter({ values: pValues, extremes: pExtremes, type, onChange, title }) {
	const classes = useStyles()

	const [extremes, setExtremes] = React.useState(getExtremes(pExtremes))
	const [values, setValues] = React.useState(getValues(pValues, extremes))

	const onReset = () => {
		setValues({
			from: get(extremes, 'min'),
			to: get(extremes, 'max')
		})
		onChange()
	}

	const renderSliders = close => {
		return (
			<div className={classes.container}>
				<LabeledSlider
					formatLabel={val => `${val} $`}
					onChanged={newValues => {
						setValues(newValues)
					}}
					values={values}
					extremes={extremes}
				/>
				<div style={{ marginTop: 15 }}>
					<Button
						radius
						size={10}
						text="Aplicar"
						primary={true}
						onClick={() => {
							if (close) close()
							onChange(values || {})
						}}
					/>
				</div>
			</div>
		)
	}

	return (
		<div>
			<Hidden lgUp>
				<Expander title={title} content={renderSliders()} />
			</Hidden>
			<Hidden mdDown>
				<Filter
					title={title}
					onReset={() => onReset()}
					touched={isTouched(values, extremes)}
					content={close => renderSliders(close)}
				></Filter>
			</Hidden>
		</div>
	)
}

RangeFilter.defaultProps = {
	title: 'Filtro',
	extremes: { min: 0, max: 100 },
	values: null,
	onChange: () => {},
	formatValue: value => value,
	anchorId: undefined
}

RangeFilter.propTypes = {
	title: PropTypes.string,
	onChange: PropTypes.func,
	formatValue: PropTypes.func,
	extremes: PropTypes.shape({
		min: PropTypes.number,
		max: PropTypes.number
	}),
	anchorId: PropTypes.string,
	values: PropTypes.shape({
		from: PropTypes.number,
		to: PropTypes.number
	})
}
