import React from 'react'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'

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

const Messages = () => {
	return (
		<Grid container spacing={2}>
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
						<div className="notResult" />
						<TitleSecondary center color="gray" size={18} content="¡Ouch! No se encontraron resultados" />
					</div>
				</Grid>
			</Grid>
		</Grid>
	)
}

Messages.defaultProps = {}
Messages.propTypes = {}

export default withStyles(styles)(Messages)
