import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
import { withStyles } from '@material-ui/styles'

const styles = () => ({
	textField: {
		margin: 0,
		width: '100%',
		fontSize: 12,
		color: 'gray'
	}
})

const UpateInput = ({
	classes,
	dataDecidir,
	error,
	idValue,
	labelValue,
	nameValue,
	onChange,
	onBlur,
	valued,
	placeholderValue,
	noCard,
	multiline,
	inputProps
}) => (
	<div className={classNames('padding10', 'mTopMobile', { card: !noCard })} style={{ width: '100%' }}>
		<FormControl error={error} aria-describedby="name-text" style={{ width: '100%' }}>
			<TextField
				id={idValue}
				autoComplete="off"
				className={classes.textField}
				label={labelValue}
				multiline={multiline ? true : false}
				rowsMax={multiline ? '4' : 1}
				rows={multiline ? '2' : 1}
				fullWidth
				name={nameValue}
				onChange={onChange}
				onBlur={onBlur}
				value={valued}
				placeholder={placeholderValue ? placeholderValue : null}
				inputProps={dataDecidir ? { 'data-decidir': dataDecidir, ...inputProps } : inputProps}
			/>
			{error && <FormHelperText id="name-text">{error}</FormHelperText>}
		</FormControl>
	</div>
)

UpateInput.defaultProps = {
	idValue: '1',
	nameValue: '',
	multiline: false,
	dataDecidir: null,
	onChange: () => {},
	onBlur: () => {},
	placeholderValue: 'placeHolder',
	classes: null,
	valued: null,
	noCard: false,
	inputProps: {}
}

UpateInput.propTypes = {
	error: PropTypes.bool.isRequired,
	noCard: PropTypes.bool,
	multiline: PropTypes.bool,
	idValue: PropTypes.string,
	labelValue: PropTypes.string.isRequired,
	dataDecidir: PropTypes.string,
	nameValue: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	valued: PropTypes.string,
	placeholderValue: PropTypes.string,
	classes: PropTypes.string,
	inputProps: PropTypes.object
}

export default withStyles(styles)(UpateInput)
