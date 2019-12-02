import React from 'react'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'

const styles = theme => ({
	flex: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	heading: {
		fontWeight: theme.typography.fontWeightRegular
	},
	borderTop: {
		borderTop: '1px solid #f2f2f2'
	}
})

const PaymentError = () => {
	return (
		<Grid container spacing={2} style={{ background: '#E24C4B' }}>
			<Grid item xs={12}>
				<Grid container justify="center">
					<div
						style={{
							display: 'flex',
							minWidth: 400,
							minHeight: 400,
							paddingTop: 30,
							paddingBottom: 30,
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<div className="PaymentError_Svg" />
						<div style={{ marginBottom: 10 }}>
							<TitleSecondary center color="white" size={23} content="¡No se realizo la compra!" />
						</div>
						<div>
							<Text center italic color="white" size={18} content="El pago salio rechazado" />
						</div>
					</div>
				</Grid>
			</Grid>
		</Grid>
	)
}

PaymentError.defaultProps = {}
PaymentError.propTypes = {}

export default withStyles(styles)(PaymentError)
