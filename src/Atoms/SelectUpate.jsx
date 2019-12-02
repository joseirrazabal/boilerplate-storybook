import React, { PureComponent } from 'react'
import classNames from 'classnames'
// import Select from 'react-select'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/styles'

const SelectUpate = ({ dataCheckout, classes, error, label, values, idValue, placeHolder, id, ...props }) => (
	<div className="card-form padding10">
		<form autoComplete="off">
			<FormControl error={error} className={classes.formControl}>
				<InputLabel />
				<Select
					{...props}
					inputProps={{
						'data-checkout': dataCheckout,
						name: id,
						id
					}}
					displayEmpty={Boolean(label)}
				>
					{label && (
						<MenuItem value={null} style={{ color: 'rgba(0,0,0,0.54)' }}>
							{label}
						</MenuItem>
					)}
					{values.map(item => (
						<MenuItem value={item.value}>{item.label}</MenuItem>
					))}
				</Select>
				{error && <FormHelperText id="name-text">{error}</FormHelperText>}
			</FormControl>
		</form>
	</div>
)

SelectUpate.defaultProps = {
	label: '',
	values: [
		{
			title: 'Valor',
			value: 10
		}
	]
}
SelectUpate.propTypes = {
	label: PropTypes.string,
	values: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			value: PropTypes.any.isRequired
		})
	),
	error: PropTypes.bool.isRequired
}

export default withStyles(() => ({
	formControl: {
		width: '100%'
	}
}))(SelectUpate)
