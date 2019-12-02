import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import ContainerLg from '../../Atoms/Containers/ContainerLg'
import NavGuide from '../../Organisms/Backoffice/NavBar/NavGuide'
import NavSearch from '../../Organisms/Backoffice/NavBar/NavSearch'
import NavBottom from '../../Organisms/Backoffice/NavBar/NavBottom'
import ConsultHistory from '../../Organisms/Backoffice/ConsultHistory'
import BloqueConsulta from '../../Organisms/Backoffice/BloqueConsulta'
import Layout from './Layout'

const styles = () => ({
	root: {
		paddingBottom: 20
	},
	iconClose: {
		float: 'right',
		margin: 5
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
	},
	hide: {
		display: 'none'
	},
	paddingText: {
		paddingTop: 15,
		paddingBottom: 15
	}
})

class QueryDetail extends React.PureComponent {
	render() {
		const { classes } = this.props

		return (
			<Layout>
				<div className={classes.root}>
					<ContainerLg>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<NavGuide title="Detalle de consulta" />
							</Grid>
							<Grid item xs={12}>
								<NavSearch phone />
							</Grid>

							<Grid item lg={8}>
								<div>
									<BloqueConsulta />
								</div>
								<div>
									<NavBottom />
								</div>
							</Grid>
							<Grid item lg={4}>
								<div>
									<ConsultHistory />
								</div>
								<div>
									<ConsultHistory />
								</div>
							</Grid>
						</Grid>
					</ContainerLg>
				</div>
			</Layout>
		)
	}
}
QueryDetail.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles, { withTheme: true })(QueryDetail)
