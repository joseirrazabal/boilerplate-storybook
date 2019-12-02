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

const Pending = () => {
	return (
		<Grid container spacing={2} style={{ background: '#F6CC51' }}>
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
						<div className="Pending_Svg" />
						<div style={{ marginBottom: 10 }}>
							<TitleSecondary center color="white" size={23} content="¡Pago quedo pendiente de aprobación!" />
						</div>
						<div>
							<Text center italic color="white" size={18} content="Te enviaremos un correo" />
						</div>
					</div>
				</Grid>
			</Grid>
		</Grid>
	)
}

Pending.defaultProps = {}
Pending.propTypes = {}

export default withStyles(styles)(Pending)
