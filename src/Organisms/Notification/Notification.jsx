import React from 'react'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import ClassNames from 'classnames'

import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import resize from '../../utils/resize'

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
	},
	prueba: {
		height: '220px',
		width: '100%',
		maxWidth: '187px',
		backgroundSize: '200px',
		backgroundRepeat: 'no-repeat'
	}
})

const PaymentError = ({ classes, status, message, message2, message3, color, image, reservationCode }) => {
	let classType = `${image.toUpperCase()}_svg`

	return (
		<Grid container spacing={2} style={{ background: color }}>
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
						<div className={ClassNames(classes.prueba, `${classType}`)} />
						<div style={{ marginBottom: 10 }}>
							<TitleSecondary center color="white" size={23} content={message} />
						</div>
						{message2 && (
							<div>
								<Text center italic color="white" size={18} content={message2} />
							</div>
						)}
						{message3 && (
							<div>
								<Text center italic color="white" size={18} content={message3} />
							</div>
						)}
					</div>
				</Grid>
			</Grid>
		</Grid>
	)
}

PaymentError.defaultProps = {}
PaymentError.propTypes = {}

export default withStyles(styles)(PaymentError)
