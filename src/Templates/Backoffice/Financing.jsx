import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import NavSearch from '../../Organisms/Backoffice/NavBar/NavSearch'
import NavGuide from '../../Organisms/Backoffice/NavBar/NavGuide'
import FinancingTable from '../../Organisms/Backoffice/FinancingTable'
import Layout from './Layout'

const styles = () => ({
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

class Financing extends React.PureComponent {
	state = {
		value: 0
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	render() {
		const { classes } = this.props
		const { value } = this.state

		return (
			<Layout>
				<NavGuide title="Financiación" />
				<div className="paddingObject">
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<NavSearch search filter seeMore />
						</Grid>
						<Grid item xs={12}>
							<div style={{ width: '100%', marginTop: 20 }}>
								<ContainerCard radius={0}>
									<Tabs
										value={value}
										onChange={this.handleChange}
										indicatorColor="primary"
										textColor="primary"
										scrollable
										scrollButtons="auto"
									>
										<Tab label="Financiaciones" />
										<Tab label="Tarjetas" />
										<Tab label="Bancos" />
									</Tabs>
								</ContainerCard>
								{value === 0 && <FinancingTable title="Recibida" />}
								{value === 1 && <FinancingTable title="Asignada" />}
								{value === 2 && <FinancingTable title="En Proceso" />}
							</div>
						</Grid>
					</Grid>
				</div>
			</Layout>
		)
	}
}
Financing.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
}

export default withStyles(styles)(Financing)
