/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
// import { lighten } from '@material-ui/core/styles/colorManipulator'
import ResponsiveDialog from '../Dialogs/Backoffice/ResponsiveDialog'
import SimpleList from '../../Molecules/List/SimpleList'
import ContainerCard from '../../Atoms/Card/ContainerCard'

import Header from './Header'
import Body from './Body'
import Pagination from './Pagination'
import TableContext from './TableContext'

const toolbarStyles = theme => ({
	root: {
		paddingRight: theme.spacing.unit
	},
	Cell: {
		textAlign: 'center'
	},
	options: {
		position: 'absolute',
		right: 0
	},
	editHover: {},
	highlight:
		theme.palette.type === 'light'
			? {
					color: theme.palette.secondary.main
					// backgroundColor: lighten(theme.palette.secondary.light, 0.85)
			  }
			: {
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.secondary.dark
			  },
	spacer: {
		flex: '1 1 100%'
	},
	actions: {
		color: theme.palette.text.secondary
	},
	title: {
		flex: '0 0 auto'
	}
})

let EnhancedTableToolbar = props => {
	const { numSelected, classes, title } = props

	return (
		<Toolbar
			className={classNames(classes.root, {
				[classes.highlight]: numSelected > 0
			})}
		>
			<div className={classes.title}>
				{numSelected > 0 ? (
					<Typography color="inherit" variant="subheading">
						{numSelected} Seleccionados:
					</Typography>
				) : (
					<Typography variant="title" id="tableTitle">
						{title}
					</Typography>
				)}
			</div>
			<div className={classes.spacer} />
			<div className={classes.actions}>
				{numSelected > 0 ? (
					<div style={{ display: 'flex' }}>
						<Tooltip title="Delete">
							<IconButton aria-label="Delete">
								<DeleteIcon />
							</IconButton>
						</Tooltip>
					</div>
				) : (
					<Tooltip title="Filter list">
						<IconButton aria-label="Filter list">
							<FilterListIcon />
						</IconButton>
					</Tooltip>
				)}
			</div>
		</Toolbar>
	)
}

EnhancedTableToolbar.defaultProps = {
	title: ''
}

EnhancedTableToolbar.propTypes = {
	classes: PropTypes.isRequired,
	numSelected: PropTypes.number.isRequired,
	title: PropTypes.string
}

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar)

class QuerysTable extends Component {
	constructor(props) {
		super(props)

		this.state = {
			order: 'asc',
			orderBy: 'consultas',
			selected: [],
			page: Number(this.props.page - 1) || 0,
			rowsPerPage: props.initialRowsPerPage || 10
		}
	}

	getData = () => {
		const { initialData } = this.props
		const { data } = this.state
		return data || initialData
	}

	handleRequestSort = (event, property) => {
		const orderBy = property
		let order = 'desc'

		if (this.state.orderBy === property && this.state.order === 'desc') {
			order = 'asc'
		}

		this.setState({ order, orderBy })
	}

	handleSelectAllClick = (event, checked) => {
		if (checked) {
			this.setState(state => ({ selected: state.data.map(n => n.id) }))
			return
		}
		this.setState({ selected: [] })
	}

	handleClick = (event, id) => {
		const { selected } = this.state
		const selectedIndex = selected.indexOf(id)
		let newSelected = []

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id)
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1))
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1))
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
		}

		this.setState({ selected: newSelected })
	}

	handleChangePage = (e, page) => {
		const { fetchMore } = this.props
		const { rowsPerPage } = this.state
		const codePage = page * rowsPerPage

		fetchMore({ limit: rowsPerPage, skip: codePage }, page)
	}

	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value, page: 0 })
		const { fetchMore } = this.props

		fetchMore({ first: event.target.value })
	}

	isSelected = id => this.state.selected.indexOf(id) !== -1

	handleClickOpen = i => {
		const data = this.getData()

		this.setState({ openDialog: true, dataDialog: data[i] })
	}

	handleCloseDialog = () => {
		this.setState({ openDialog: false })
	}

	handleClick = row => {
		const { primaryKey } = this.props
		const activeRow = row[primaryKey]

		this.setState({ activeRow, toggleAdd: false })
	}

	addRow = () => {
		this.setState({ toggleAdd: true, activeRow: undefined })
	}

	selectRow = (activeRow, error) => {
		if (error) {
			this.setState({ error })
		}

		const { refetch } = this.props
		this.setState({ toggleAdd: false, data: undefined, activeRow: undefined }, () => {
			refetch()
		})
	}

	updateObjectInArray = (array, { index: i, ...props }) =>
		array.map((item, index) => {
			if (index !== i) {
				return item
			}
			return {
				...item,
				...props
			}
		})

	updateRow = (rowId, field, value, primaryKey) => {
		const data = this.getData()
		const index = data.findIndex(r => r[primaryKey] === rowId)
		const payload = { data: this.updateObjectInArray(data, { index, [field]: value }) }
		if (field === primaryKey) {
			payload.activeRow = value
		}
		this.setState(payload)
	}

	render() {
		const { classes, handleClickEdit, total, ...rest } = this.props
		const { openDialog, activeRow, toggleAdd, dataDialog, order, orderBy, selected, rowsPerPage, page } = this.state

		const data = this.getData()
		const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)
		const values = {
			...rest,
			classes,
			activeRow,
			toggleAdd,
			dataDialog,
			order,
			orderBy,
			selected,
			rowsPerPage,
			page,
			data,
			updateRow: this.updateRow,
			selectRow: this.selectRow,
			handleClick: this.handleClick,
			handleClickOpen: handleClickEdit
			// handleClickOpen: this.handleClickOpen,
		}

		return (
			<ContainerCard radius={0}>
				<EnhancedTableToolbar numSelected={selected.length} />
				<div className={classes.tableWrapper}>
					<Table className={classes.table} aria-labelledby="tableTitle">
						<TableContext.Provider value={values}>
							<Header />

							{!data.length && (
								<TableRow style={{ height: 49 * emptyRows }}>
									<TableCell colSpan={0}>
										<Typography variant="title" id="tableTitle">
											No hay resultados
										</Typography>
									</TableCell>
								</TableRow>
							)}

							<Body />

							<Pagination page={page} total={total} onChangePage={this.handleChangePage} rowsPerPage={rowsPerPage} />

							{/* <TablePagination
								component="div"
								count={total}
								rowsPerPage={rowsPerPage}
								page={page}
								backIconButtonProps={{
									'aria-label': 'Previous Page'
								}}
								nextIconButtonProps={{
									'aria-label': 'Next Page'
								}}
								onChangePage={this.handleChangePage}
								onChangeRowsPerPage={this.handleChangeRowsPerPage}
								// rowsPerPageOptions={rowsPerPage}
							/> */}
						</TableContext.Provider>
					</Table>
				</div>
				<ResponsiveDialog handleClose={this.handleCloseDialog} open={openDialog}>
					<Grid container spacing={1}>
						{dataDialog &&
							Object.keys(dataDialog).map(name => <SimpleList title={name} subtitle={dataDialog[name]} borderBottom />)}
					</Grid>
				</ResponsiveDialog>
			</ContainerCard>
		)
	}
}

QuerysTable.defaultProps = {
	total: 0
}

QuerysTable.propTypes = {
	total: PropTypes.number,
	initialRowsPerPage: PropTypes.number,
	initialData: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
	classes: PropTypes.isRequired,
	refetch: PropTypes.func.isRequired,
	fetchMore: PropTypes.func.isRequired,
	primaryKey: PropTypes.string.isRequired,
	rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number)
}

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3
	},
	table: {
		minWidth: 1020
	},
	tableWrapper: {
		overflowX: 'auto'
	}
})

export default withStyles(styles)(QuerysTable)
