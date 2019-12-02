import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import CreditCardInput from 'react-credit-card-input'

const styles = {
	contentCard: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	card: {
		maxWidth: 360,
		minHeight: 180,
		width: 'auto',
		background: '#FCD1A6',
		borderRadius: 6,
		padding: 15,
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	imgCard: {
		paddingBottom: 10,
		display: 'flex'
	},
	numberCard: {
		display: 'flex'
	},
	number: {
		color: 'white',
		textTransform: 'uppercase',
		textShadow: '1px 1px #ccc',
		paddingTop: 15
	},
	span: {
		marginRight: 15
	},
	inputName: {
		border: 'none',
		width: '100%',
		color: 'gray',
		fontStyle: 'italic'
	},
	userNameCard: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		padding: 10,
		flexDirection: 'row'
	},
	codeCard: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	nameCard: {
		display: 'flex'
	},
	uploadCard: {
		display: 'flex',
		padding: '10px 0'
	}
}

const CreditCardDataInput = ({ classes, error, valued, onChange, onBlur }) => (
	<div
		className={`${classes.uploadCard} card`}
		style={{ display: 'block', overflow: 'hidden', width: 'auto', height: 'auto' }}
	>
		<CreditCardInput
			customTextLabels={{
				invalidCardNumber: 'El número de la tarjeta es inválido',
				expiryError: {
					invalidExpiryDate: 'La fecha de expiración es inválida',
					monthOutOfRange: 'El mes de expiración debe estar entre 01 y 12',
					yearOutOfRange: 'El año de expiración no puede estar en el pasado',
					dateOutOfRange: 'La fecha de expiración no puede estar en el pasado'
				},
				invalidCvc: 'El código de seguridad es inválido',
				invalidZipCode: 'El código postal es inválido',
				cardNumberPlaceholder: 'Número de tarjeta',
				expiryPlaceholder: 'MM/AA',
				cvcPlaceholder: 'COD',
				zipPlaceholder: 'C.P.'
			}}
			inputStyle={{ width: 'auto', height: 'auto' }}
			dangerTextStyle={{
				color: '#f44336',
				visibility: 'visible',
				fontFamily: 'Roboto, sans-serif',
				padding: '0 10px 5px 10px'
			}}
			cardExpiryInputProps={{}}
			cardNumberInputRenderer={({ handleCardNumberChange, handleCardNumberBlur, props }) => (
				<Input
					{...props}
					placeholder="Número"
					id="card-number"
					value={valued['card-number'] || ''}
					onChange={handleCardNumberChange(onChange)}
					onBlur={handleCardNumberBlur(onBlur)}
					inputProps={{ 'data-decidir': 'card_number' }}
					fullWidth
					error={error['card-number']}
				/>
			)}
			cardExpiryInputRenderer={({ handleCardExpiryChange, handleCardExpiryBlur, props }) => (
				<Input
					{...props}
					placeholder="MMYY"
					id="card-expiry"
					value={valued['card-expiry'] || ''}
					fullWidth
					onChange={e => {
						const { value } = e.target
						const month = document.getElementById('card_expiration_month')
						month.value = value.slice(0, 2)
						const year = document.getElementById('card_expiration_year')
						year.value = value.slice(2, 4)

						handleCardExpiryChange(onChange)(e)
					}}
					onBlur={handleCardExpiryBlur(onBlur)}
					inputProps={{ 'data-decidir': 'card-expiry' }}
					error={error['card-expiry']}
				/>
			)}
			cardCVCInputRenderer={({ handleCardCVCChange, handleCardCVCBlur, props }) => (
				<Input
					{...props}
					id="cvc"
					placeholder="CVC"
					value={valued.cvc || ''}
					onChange={handleCardCVCChange(onChange)}
					onBlur={e => {
						handleCardCVCBlur(onBlur)(e)
					}}
					inputProps={{ 'data-decidir': 'security_code' }}
					error={error.cvc}
					fullWidth
				/>
			)}
		/>

		<input id="card_expiration_month" type="hidden" data-decidir="card_expiration_month" />
		<input id="card_expiration_year" type="hidden" data-decidir="card_expiration_year" />
	</div>
)

CreditCardDataInput.propTypes = {
	classes: PropTypes.isRequired,
	valued: PropTypes.object,
	error: PropTypes.object,
	onChange: PropTypes.func,
	onBlur: PropTypes.func
}

CreditCardDataInput.defaultProps = {
	valued: {},
	error: {},
	onChange: () => { },
	onBlur: () => { }
}

export default withStyles(styles)(CreditCardDataInput)
