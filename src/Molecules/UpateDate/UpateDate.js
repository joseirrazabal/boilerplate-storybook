import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/styles'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	},
	formControl: {
		width: '100%'
	}
})

class DateUpate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			birthday: 'aaaa-mm-dd'
		}
	}

	render() {
		const {
			classes,
			error,
			idValue,
			dataDecidir,
			labelValue,
			nameValue,
			onChange,
			onBlur,
			valued,
			placeholderValue
		} = this.props
		const { birthday } = this.state
		return (
			<div className="card-form padding10" style={{ width: '100%' }}>
				<FormControl error={error} className={classNames(classes.formControl)}>
					<Text size={12} color="gray">
						{labelValue}
					</Text>
					<TextField
						id={idValue}
						className={classes.textField}
						/* label={labelValue} */
						type="date"
						autoComplete="off"
						defaultValue={birthday}
						name={nameValue}
						onChange={onChange}
						onBlur={onBlur}
						value={valued}
						placeholder={placeholderValue}
						inputProps={dataDecidir ? { 'data-decidir': dataDecidir } : {}}
					/>
					{error && <FormHelperText id="name-text">{error}</FormHelperText>}
				</FormControl>
			</div>
		)
	}
}
DateUpate.defaultProps = {
	birthday: '2017-05-24',
	nameValue: '',
	dataDecidir: null,
	onChange: () => {},
	onBlur: () => {},
	placeholderValue: 'placeHolder',
	classes: null,
	valued: null,
	idValue: 'datte'
}
DateUpate.propTypes = {
	birthday: PropTypes.string,
	error: PropTypes.bool.isRequired,
	idValue: PropTypes.string,
	dataDecidir: PropTypes.string,
	labelValue: PropTypes.string.isRequired,
	nameValue: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	valued: PropTypes.string,
	placeholderValue: PropTypes.string,
	classes: PropTypes.string
}

export default withStyles(styles)(DateUpate)
