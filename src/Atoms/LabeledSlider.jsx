import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import TextField from '@material-ui/core/TextField'

const ValueLabelComponent = props => {
	const { children, open, value, valueLabelFormat, ...rest } = props

	const popperRef = React.useRef(null)
	React.useEffect(() => {
		if (popperRef.current) {
			popperRef.current.update()
		}
	})

	return (
		<Tooltip
			PopperProps={{
				popperRef
			}}
			open={open}
			enterTouchDelay={0}
			placement="top"
			title={valueLabelFormat(value)}
		>
			{children}
		</Tooltip>
	)
}

ValueLabelComponent.propTypes = {
	children: PropTypes.element.isRequired,
	open: PropTypes.bool.isRequired,
	value: PropTypes.number.isRequired
}

const PrettoSlider = withStyles({
	root: {
		color: '#f23434',
		height: 8
	},
	thumb: {
		height: 24,
		width: 24,
		backgroundColor: '#fff',
		border: '2px solid currentColor',
		marginTop: -8,
		marginLeft: -12,
		'&:focus,&:hover,&$active': {
			boxShadow: 'inherit'
		}
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)'
	},
	track: {
		height: 8,
		borderRadius: 4
	},
	rail: {
		height: 8,
		borderRadius: 4
	}
})(Slider)

const useStyles = makeStyles({
	container: {
		padding: '10px',
		marginBottom: '10px',
		borderBottom: 'solid 1px black'
	},
	root: {
		width: 300
	},
	input: {
		width: 100
	}
})

export default function LabeledSlider(props) {
	const {
		encode,
		decode,
		inputType,
		title,
		formatLabel,
		extremes: { min, max },
		values,
		onChanged
	} = props

	const classes = useStyles()
	const [value, setValue] = React.useState([get(values, 'from') || min, get(values, 'to') || max])

	// traduccion a los inputs
	const [valueInput, setValueInput] = React.useState([
		encode(get(values, 'from') || min),
		encode(get(values, 'to') || max)
	])

	const marks = [{ value: min, label: formatLabel(encode(min)) }, { value: max, label: formatLabel(encode(max)) }]

	const handleChange = (event, newValue) => {
		setValue(newValue)

		setValueInput([encode(newValue[0]), encode(newValue[1])])
	}

	const handleInputChangeMin = event => {
		setValueInput([encode(event.target.value), valueInput[1]])

		if (decode(event.target.value) < value[1]) {
			setValue(event.target.value === '' ? ['', value[1]] : [decode(event.target.value), value[1]])

			onChanged({ from: decode(event.target.value) || min, to: value[1] || max })
		}
	}

	const handleInputChangeMax = event => {
		setValueInput([valueInput[0], encode(event.target.value)])

		if (decode(event.target.value) > value[0]) {
			setValue(event.target.value === '' ? [value[0], ''] : [value[0], decode(event.target.value)])

			onChanged({ from: value[0] || min, to: decode(event.target.value) || max })
		}
	}

	return (
		<Grid container spacing={2} className={classes.container}>
			<Typography id="range-slider" gutterBottom>
				{title}
			</Typography>
			<Grid container spacing={2} direction="row" justify="space-around" alignItems="flex-start">
				<Grid item xs>
					<PrettoSlider
						aria-label="pretto slider"
						value={value}
						min={min}
						max={max}
						onChange={handleChange}
						onChangeCommitted={(e, values) => {
							e.preventDefault()
							props.onChanged({ from: values[0] || min, to: values[1] || max })
						}}
						revent
						valueLabelDisplay="auto"
						ValueLabelComponent={ValueLabelComponent}
						valueLabelFormat={props.encode}
						aria-labelledby="range-slider"
						// getAriaValueText={valuetext}
						marks={marks}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2} justify="space-between">
				<Grid item>
					<TextField
						name="from"
						className={classes.input}
						type={inputType}
						value={valueInput[0]}
						margin="dense"
						variant="outlined"
						inputProps={{ 'aria-label': 'from' }}
						onChange={handleInputChangeMin}
						inputProps={{
							// 	step: 1,
							min: min,
							max: max
							// 	// type: 'time',
							// 	'aria-labelledby': 'from'
						}}
					/>
				</Grid>
				<Grid item>
					<TextField
						name="to"
						className={classes.input}
						type={inputType}
						value={valueInput[1]}
						margin="dense"
						variant="outlined"
						inputProps={{ 'aria-label': 'to' }}
						onChange={handleInputChangeMax}
						inputProps={{
							// step: 1,
							min: min,
							max: max
							// type: 'time',
							// 'aria-labelledby': 'to'
						}}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

LabeledSlider.propTypes = {
	extremes: PropTypes.shape({
		min: PropTypes.number,
		max: PropTypes.number
	}),
	encode: PropTypes.func,
	decode: PropTypes.func,
	inputType: PropTypes.string,
	formatLabel: PropTypes.func,
	onChanged: PropTypes.func,
	values: PropTypes.shape({
		from: PropTypes.number,
		to: PropTypes.number
	}).isRequired
}

LabeledSlider.defaultProps = {
	extremes: { min: 0, max: 100 },
	encode: val => {
		return Number(val)
	},
	decode: val => {
		return Number(val)
	},
	formatLabel: val => {
		return val
	},
	inputType: 'number',
	onChanged: () => {}
}
