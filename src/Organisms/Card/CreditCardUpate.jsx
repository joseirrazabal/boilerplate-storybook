import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import { MdPerson } from 'react-icons/md'
import CreditCardInput from 'react-credit-card-input'
import Image from '../../Atoms/Images/Image'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import UpateInput from '../../Atoms/UpateInput/upateInput'

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
		width: '100%',
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
		marginTop: 10
	}
}

class CreditCardUpate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: null,
			pan: null,
			expiriedDate: null,
			cvc: null
		}
	}

	handleChange = event => {
		this.setState({ name: event.target.value })
		if (this.props.onChange) this.props.onChange(event)
	}

	handleBlur = event => {
		const { onBlur } = this.props
		this.setState({ name: event.target.value })
		if (onBlur) onBlur(event)
	}

	render() {
		const { classes, error, valued, idValue, onChange, onBlur, dataDecidir } = this.props
		const { name, pan, expiriedDate, cvc } = this.state

		const month = expiriedDate && expiriedDate.split('/')[0]
		const year = expiriedDate && expiriedDate.split('/')[1]

		return (
			<div className={classes.contentCard}>
				<div className={classes.card}>
					<div className={classes.imgCard}>
						<Image
							title="Credit Card"
							image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1NzZweCIgaGVpZ2h0PSIzNzlweCIgdmlld0JveD0iMCAwIDU3NiAzNzkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+dmlzYTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9InZpc2EiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzI2MzM3QSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU3NiIgaGVpZ2h0PSIzNzkiIHJ4PSI1MiI+PC9yZWN0PiAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iRmlsbC0zIiBmaWxsPSIjRkZGRkZFIiBwb2ludHM9IjIyMSAyNjggMjQyLjU1MTE5MyAxMTEgMjc3IDExMSAyNTUuNDUwNzc5IDI2OCAyMjEgMjY4Ij48L3BvbHlsaW5lPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOTQuNTIxOTgxLDExNy4zNzIyMjkgQzM4Ny4wNDE1NTcsMTE0LjMyNDA1NiAzNzUuMjc2NzEzLDExMSAzNjAuNjIwOTY4LDExMSBDMzIzLjIxNjY4MywxMTEgMjk2Ljg4Njk3NSwxMzEuNjEwNDk0IDI5Ni42Njg0MjcsMTYxLjEyMzI2OSBDMjk2LjQzMDQwMywxODIuOTUzOTI5IDMxNS40NTcxMjMsMTk1LjEyODY3OCAzMjkuODAxMjc0LDIwMi4zODQ2MzEgQzM0NC41NDM1NzQsMjA5LjgyMjI2MyAzNDkuNDk2NjIzLDIxNC41ODE4MDggMzQ5LjQzODE5OSwyMjEuMjMyMTY0IEMzNDkuMzM2NDk5LDIzMS40MDM5NTUgMzM3LjY3MTE5MSwyMzYuMDY0ODEyIDMyNi43OTM1MjUsMjM2LjA2NDgxMiBDMzExLjY0NjU4NywyMzYuMDY0ODEyIDMwMy41OTkyMzQsMjMzLjc3MDI3MiAyOTEuMTU3MTA1LDIyOC4xMDAwODcgTDI4Ni4yOTA2MTEsMjI1LjY4MjE4MyBMMjgxLDI1OS42Nzg2MiBDMjg5LjgyMjAxLDI2My45MDg4MjkgMzA2LjE3NjM3NywyNjcuNTgwNTQ0IDMyMy4xNDk2MDQsMjY3Ljc3MzQzOCBDMzYyLjkwMTY2NCwyNjcuNzczNDM4IDM4OC43MzE1MjIsMjQ3LjQxMTkxIDM4OS4wMzQ0NjIsMjE1Ljg5NjE4IEMzODkuMTcwNzg1LDE5OC41ODUwNjggMzc5LjA4OTQxNCwxODUuNDYzNzkzIDM1Ny4yNTYxODMsMTc0LjYzMDMzMiBDMzQ0LjAzNTA3LDE2Ny41ODc0NTkgMzM1LjkyMDYzOCwxNjIuOTIyMTE3IDMzNi4wMTM2ODMsMTU1Ljc5NDAxMiBDMzM2LjAyMjMzOSwxNDkuNDgyMzQzIDM0Mi44Njg3NTUsMTQyLjcyNDMyNiAzNTcuNjg2NzksMTQyLjcyNDMyNiBDMzcwLjA2MTgzOSwxNDIuNTE3OTc0IDM3OS4wMjAxNzEsMTQ1LjQ3NDE4NyAzODYuMDAwNzQ2LDE0OC41NjA0ODkgTDM4OS4zOTc5ODgsMTUwLjI5NjUzNSBMMzk0LjUyMTk4MSwxMTcuMzcyMjI5IiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZFIj48L3BhdGg+ICAgICAgICAgICAgPHBhdGggZD0iTTQ0OC4zNTgwMTIsMjEyLjI0NDQ0NCBDNDUxLjU4ODczMSwyMDMuMjE0NDE1IDQ2My44ODczMDgsMTY4LjMzMDk0IDQ2My44ODczMDgsMTY4LjMzMDk0IEM0NjMuNjU5ODg4LDE2OC43NDYyNDYgNDY3LjEwMDE4OSwxNTkuMjMxMzA2IDQ2OS4wNjg5NDIsMTUzLjM0Mjc2MSBMNDcxLjY5OTg5NCwxNjYuODkyNDQ2IEM0NzEuNjk5ODk0LDE2Ni44OTI0NDYgNDc5LjE4MDI2NSwyMDQuMzkwNzMyIDQ4MC43MjA5MzIsMjEyLjI0NDQ0NCBMNDQ4LjM1ODAxMiwyMTIuMjQ0NDQ0IFogTTQ5Ni40NTA4OTIsMTExIEw0NjYuMzI0MjgyLDExMSBDNDU2Ljk3OTk0OSwxMTEgNDQ5Ljk4NTYzNSwxMTMuNzc5NTQyIDQ0NS44OTIwNTQsMTI0LjAyMzAxIEwzODgsMjY4IEw0MjguOTQ0NzIxLDI2OCBDNDI4Ljk0NDcyMSwyNjggNDM1LjYyNDY1OSwyNDguNjMxMzc3IDQzNy4xNDA4MDEsMjQ0LjM4MDg2IEM0NDEuNjA2NzI2LDI0NC4zODA4NiA0ODEuMzkyMDQ2LDI0NC40NjIwNjUgNDg3LjA3MDg4NiwyNDQuNDYyMDY1IEM0ODguMjM5MjA2LDI0OS45NDQ1ODIgNDkxLjgxNzc0NCwyNjggNDkxLjgxNzc0NCwyNjggTDUyOCwyNjggTDQ5Ni40NTA4OTIsMTExIFoiIGlkPSJGaWxsLTUiIGZpbGw9IiNGRkZGRkUiPjwvcGF0aD4gICAgICAgICAgICA8cGF0aCBkPSJNMTg5Ljk1NTA2OCwxMTEgTDE1MS4xMjExNDYsMjE4LjIxOTk2NSBMMTQ2Ljk2MTU4NCwxOTYuNDI0Nzk3IEMxMzkuNzI0OSwxNzEuMzEyOTczIDExNy4xOTc5MTIsMTQ0LjA5NDU2MSA5MiwxMzAuNDU2MzIzIEwxMjcuNTI3NjA0LDI2OCBMMTY5LjUxODA3MywyNjcuOTc0NDUyIEwyMzIsMTExIEwxODkuOTU1MDY4LDExMSIgaWQ9IkZpbGwtNiIgZmlsbD0iI0ZGRkZGRSI+PC9wYXRoPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTMuOTE4NTUxLDExMSBMNDcuNTQ2MTM4LDExMSBMNDcsMTE0LjMxNDUzMyBDOTguNjQ1NDgwNiwxMjcuNTY1NTc5IDEzMi44MTY4NTUsMTU5LjU1MDk0MyAxNDcsMTk4IEwxMzIuNTc2NzQzLDEyNC40OTY3NDEgQzEzMC4wODg1MTMsMTE0LjM1OTQyIDEyMi44NTY4NzQsMTExLjM1NDM3IDExMy45MTg1NTEsMTExIiBpZD0iRmlsbC03IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4="
							alt="visa"
							height={40}
						/>
					</div>
					<div className={(classes.numberCard, classes.number)}>
						<Text
							size={23}
							left
							bold
							italic
							color="white"
							content={
								<React.Fragment>
									<span className={classes.span}>4546</span>
									<span className={classes.span}>4567</span>
									<span className={classes.span}>6879</span>
									<span className={classes.span}>0909</span>
								</React.Fragment>
							}
						/>
					</div>
					<div className={(classes.nameCard, classes.number)}>
						<Text left size={18} color="white" content={name} />
					</div>
					<div className={classes.codeCard}>
						<Text left size={13} italic color="white" content="Fecha Vencimiento: 10/20" />
						<Text left size={13} italic color="white" content="Codigo Seguridad: 900" />
					</div>
				</div>
				<div className={`${classes.userNameCard} card`} style={{ marginTop: 10 }}>
					<div style={{ width: '100%' }}>
						<FormControl style={{ width: '100%' }}>
							<InputLabel
								FormLabelClasses={{
									root: classes.cssLabel,
									focused: classes.cssFocused
								}}
								htmlFor="custom-css-input"
							>
								Nombre del Titular
							</InputLabel>
							<Input
								id={idValue}
								value={name === undefined ? valued.titularCard : name}
								onChange={this.handleChange}
								onBlur={this.handleBlur}
								inputProps={{ 'data-decidir': 'card_holder_name' }}
								fullWidth
								startAdornment={
									<InputAdornment position="start">
										<MdPerson style={{ fontSize: 20 }} />
									</InputAdornment>
								}
							/>
							{this.props.error && (
								<FormHelperText error id="name-text">
									{error.titularCard}
								</FormHelperText>
							)}
						</FormControl>
					</div>
				</div>
				<div className={`${classes.uploadCard} card`} style={{ overflow: 'hidden', width: '100%' }}>
					<CreditCardInput
						cardNumberInputRenderer={({ handleCardNumberChange, handleCardNumberBlur, props }) => (
							<UpateInput
								{...props}
								idValue="card-number"
								dataDecidir="card_number"
								placeholderValue="card number"
								valued={pan !== undefined ? pan : valued['card-number']}
								onBlur={e => handleCardNumberBlur(onBlur)(e)}
								onChange={e => {
									handleCardNumberChange(onChange)(e)
								}}
								error={error['card-number']}
							/>
						)}
						cardCVCInputRenderer={({ handleCardCVCChange, handleCardCVCBlur, props }) => (
							<UpateInput
								{...props}
								idValue="cvc"
								dataDecidir="security_code"
								placeholderValue="CVC"
								valued={cvc !== undefined ? cvc : valued.cvc}
								error={error.cvc}
								onChange={e => {
									handleCardCVCChange(onChange)(e)
								}}
								onBlur={e => {
									handleCardCVCBlur(onBlur)(e)
								}}
							/>
						)}
						cardExpiryInputRenderer={({ handleCardExpiryChange, handleCardExpiryBlur, props }) => (
							<UpateInput
								{...props}
								idValue="card-expiry"
								placeholderValue="MM/YY"
								valued={expiriedDate !== undefined ? expiriedDate : valued['card-expiry']}
								error={error['card-expiry']}
								onChange={e => {
									const date = document.getElementById('card-expiry')
									const month = document.getElementById('card_expiration_month')
									month.value = date.value.split('/')[0]
									const year = document.getElementById('card_expiration_year')
									year.value = date.value.split('/')[1]
									handleCardExpiryChange(onChange)(e)
								}}
								onBlur={e => {
									handleCardExpiryBlur(onBlur)(e)
								}}
							/>
						)}
					/>
					<input id="card_expiration_month" type="hidden" data-decidir="card_expiration_month" />
					<input id="card_expiration_year" type="hidden" data-decidir="card_expiration_year" />
				</div>
			</div>
		)
	}
}

CreditCardUpate.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(CreditCardUpate)
