import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import NavSearch from '../../Organisms/Backoffice/NavBar/NavSearch'
import NavGuide from '../../Organisms/Backoffice/NavBar/NavGuide'
import EnhancedTableToolbar from '../../Organisms/EdithTable'
import Layout from './Layout'

const QUERY = ''
const ADD_AIRLINE = ''
const UPDATE_AIRLINE = ''
const DELETE_AIRLINE = ''

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

class QueryList extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			data: [this.props.data[0], this.props.data[1]] || []
		}
	}

	state = {
		value: 0
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	handleAdd = (mutation, { code, name }) => {}
	handleUpdate = (mutation, { code, name }) => {}
	handleDelete = (mutation, { code, name }) => {}

	refecth = (page = 1) => {
		console.log('refetch')
		if (page === 0) {
			this.setState({ data: [this.props.data[0], this.props.data[1]] })
		} else if (page === 1) {
			this.setState({ data: [this.props.data[2]] })
		}
	}

	render() {
		const { classes, headers } = this.props
		const { value, data } = this.state

		console.log(data)
		return (
			<Layout>
				<NavGuide title="Consultas" />
				<div className="paddingObject">
					<Grid container spacing={0}>
						<Grid item xs={12}>
							<NavSearch
								search
								add
								searchPlaceholder="bien"
								filter={[{ value: '01', label: 'filtro01' }, { value: '02', label: 'filtro02' }]}
							/>
						</Grid>
						<Grid item xs={12}>
							<div style={{ width: '100%', marginTop: 20, position: 'relative' }}>
								<ContainerCard radius={0}>
									<Tabs
										value={value}
										onChange={this.handleChange}
										indicatorColor="primary"
										textColor="primary"
										scrollable
										scrollButtons="auto"
									>
										<Tab label="Recibida" />
										<Tab label="Asignada" />
										<Tab label="En Proceso" />
										<Tab label="Vendida" />
										<Tab label="Anulada" />
									</Tabs>
								</ContainerCard>
								{value === 0 && (
									<EnhancedTableToolbar
										primaryKey="id"
										headers={headers}
										initialData={data}
										title="Recibida"
										initialRowsPerPage={2}
										page={1}
										mutationAdd={ADD_AIRLINE}
										mutationUpdate={UPDATE_AIRLINE}
										mutationDelete={DELETE_AIRLINE}
										query={QUERY}
										refetch={this.refecth}
										fetchMore={() => {}}
										total={3}
										activeRow={this.activeRow}
										onAdd={this.handleAdd}
										onUpdate={this.handleUpdate}
										onDelete={this.handleDelete}
									/>
								)}
								{/* {value === 1 && <EnhancedTableToolbar title="Asignada" />} */}
								{/* {value === 2 && <EnhancedTableToolbar title="En Proceso" />} */}
								{/* {value === 3 && <EnhancedTableToolbar title="Vendida" />} */}
								{/* {value === 4 && <EnhancedTableToolbar title="Anulada" />} */}
							</div>
						</Grid>
					</Grid>
				</div>
			</Layout>
		)
	}
}
QueryList.propTypes = {
	classes: PropTypes.isRequired,
	theme: PropTypes.object.isRequired
}

export default withStyles(styles)(QueryList)
