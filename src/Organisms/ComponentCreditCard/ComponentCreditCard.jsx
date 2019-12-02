import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'

import InputAdornment from '@material-ui/core/InputAdornment'
import { MdPerson } from 'react-icons/md'
import CreditCardInput from 'react-credit-card-input'
import CreditCard from '../Card/CreditCard'

const styles = {
	contentCard: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	userNameCard: {
		display: 'flex',
		alignItems: 'center',
		maxWidth: 360,
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

function ComponentCreditCard(props) {
	const { classes } = props

	return (
		<div className={classes.contentCard}>
			<Grid container spacing={1} direction="row-reverse">
				<Grid item xs={12} sm={6}>
					<CreditCard />
				</Grid>
				<Grid item xs={12} sm={6}>
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
									id="input-with-icon-adornment"
									fullWidth
									startAdornment={
										<InputAdornment position="start">
											<MdPerson style={{ fontSize: 20 }} />
										</InputAdornment>
									}
								/>
							</FormControl>
						</div>
					</div>
					<div className={`${classes.uploadCard} card`} style={{ overflow: 'hidden' }}>
						<CreditCardInput
							cardCVCInputProps={{
								onBlur: e => console.log('cvc blur', e),
								onChange: e => console.log('cvc change', e)
							}}
							cardExpiryInputProps={{
								onBlur: e => console.log('expiry blur', e),
								onChange: e => console.log('expiry change', e)
							}}
							cardNumberInputProps={{
								onBlur: e => console.log('number blur', e),
								onChange: e => console.log('number change', e)
							}}
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

ComponentCreditCard.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(ComponentCreditCard)
