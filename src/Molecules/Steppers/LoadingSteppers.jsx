import React from 'react'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

const styles = () => ({
	containerStyle: {
		minheight: 400
	}
})
const LoadingSteppers = ({ styles }) => (
	<div style={{ width: '100%' }}>
		<ContainerCard>
			<CardContent flex="column" paddingConfig={15}>
				<div className="linear-background" style={{ width: '100%' }} />
			</CardContent>
		</ContainerCard>
		<div style={{ marginTop: 15 }}>
			<ContainerCard>
				<CardContent flex="column" paddingConfig={15}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<div className="linear-backgroundBig" style={{ width: '100%' }} />
						</Grid>
						<Grid item xs={12} sm={6}>
							<div className="linear-backgroundBig" style={{ width: '100%' }} />
						</Grid>
						<Grid item xs={12} sm={6}>
							<div className="linear-backgroundBig" style={{ width: '100%' }} />
						</Grid>
						<Grid item xs={12} sm={6}>
							<div className="linear-backgroundBig" style={{ width: '100%' }} />
						</Grid>
						<Grid item xs={12} sm={6}>
							<div className="linear-backgroundBig" style={{ width: '100%' }} />
						</Grid>
						<Grid item xs={12} sm={6}>
							<div className="linear-backgroundBig" style={{ width: '100%' }} />
						</Grid>
					</Grid>
				</CardContent>
			</ContainerCard>
		</div>
	</div>
)
LoadingSteppers.propTypes = {}

export default withStyles(styles)(LoadingSteppers)
