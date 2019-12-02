import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import { MdRemoveRedEye, MdCreate } from 'react-icons/md'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
// import { lighten } from '@material-ui/core/styles/colorManipulator'
import ResponsiveDialog from '../Dialogs/Backoffice/ResponsiveDialog'
import SimpleList from '../../Molecules/List/SimpleList'
import ContainerCard from '../../Atoms/Card/ContainerCard'

const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell)

let counter = 0
function createData(Userid, cuotas, config, visible) {
	counter += 1
	return {
		id: counter,
		cuotas,
		config,
		visible
	}
}

function getSorting(order, orderBy) {
	return order === 'desc' ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1) : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)
}

const columnData = [
	{ id: 'visible', numeric: false, disablePadding: false, label: 'visible' },
	{ id: 'config', numeric: false, disablePadding: false, label: 'config' }
]

class EnhancedTableHead extends React.Component {
	createSortHandler = property => event => {
		this.props.onRequestSort(event, property)
	}

	render() {
		const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props

		return (
			<TableHead>
				<TableRow>
					<CustomTableCell padding="checkbox">
						<Checkbox
							color="primary"
							indeterminate={numSelected > 0 && numSelected < rowCount}
							checked={numSelected === rowCount}
							onChange={onSelectAllClick}
						/>
					</CustomTableCell>
					<CustomTableCell colSpan={6}>cuotas</CustomTableCell>
					{columnData.map(column => {
						return (
							<CustomTableCell
								key={column.id}
								numeric={column.numeric}
								padding={column.disablePadding ? 'none' : 'default'}
								sortDirection={orderBy === column.id ? order : false}
							>
								<Tooltip title="Sort" placement={column.numeric ? 'bottom-end' : 'bottom-start'} enterDelay={300}>
									<TableSortLabel
										active={orderBy === column.id}
										direction={order}
										onClick={this.createSortHandler(column.id)}
									>
										{column.label}
									</TableSortLabel>
								</Tooltip>
							</CustomTableCell>
						)
					}, this)}
				</TableRow>
			</TableHead>
		)
	}
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired
}

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
	tableWrapper: {
		position: 'relative'
	},
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
		flex: '0 0 auto',
		position: 'relative'
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
						<Tooltip title="Editar">
							<IconButton aria-label="Editar">
								<MdCreate />
							</IconButton>
						</Tooltip>
					</div>
				) : (
					<div />
				)}
			</div>
		</Toolbar>
	)
}

EnhancedTableToolbar.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number.isRequired,
	title: PropTypes.string
}

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar)

const classes = theme => ({
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

class FinancingTable extends Component {
	constructor(props) {
		super(props)

		this.state = {
			order: 'asc',
			orderBy: 'financiacion',
			selected: [],
			data: [
				createData(1, '12 cuotas fijas', 'activo', 'editar'),
				createData(1, '12 cuotas fijas', 'activo', 'editar'),
				createData(1, '12 cuotas fijas', 'activo', 'editar'),
				createData(1, '12 cuotas fijas', 'activo', 'editar'),
				createData(1, '12 cuotas fijas', 'activo', 'editar'),
				createData(1, '12 cuotas fijas', 'activo', 'editar'),
				createData(1, '12 cuotas fijas', 'activo', 'editar'),
				createData(1, '12 cuotas fijas', 'activo', 'editar')
			],
			page: 0,
			rowsPerPage: 10
		}
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

	handleChangePage = (event, page) => {
		this.setState({ page })
	}

	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value })
	}

	isSelected = id => this.state.selected.indexOf(id) !== -1

	handleClickOpen = () => {
		this.setState({ openDialog: true })
	}

	handleCloseDialog = () => {
		this.setState({ openDialog: false })
	}

	render() {
		const { classes } = this.props
		const { data, order, orderBy, selected, rowsPerPage, page } = this.state
		const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

		return (
			<ContainerCard radius={0}>
				<EnhancedTableToolbar numSelected={selected.length} />
				<div className={classes.tableWrapper}>
					<Table className={classes.table} aria-labelledby="tableTitle">
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={this.handleSelectAllClick}
							onRequestSort={this.handleRequestSort}
							rowCount={data.length}
						/>
						<TableBody>
							{data
								.sort(getSorting(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map(n => {
									const isSelected = this.isSelected(n.id)
									return (
										<TableRow
											hover
											onClick={event => this.handleClick(event, n.id)}
											role="checkbox"
											aria-checked={isSelected}
											tabIndex={-1}
											className={classes.editTable}
											style={{ position: 'relative' }}
											key={n.id}
											selected={isSelected}
										>
											<TableCell padding="checkbox">
												<Checkbox checked={isSelected} />
											</TableCell>

											<TableCell colSpan={6}>{n.cuotas}</TableCell>
											<TableCell>{n.visible}</TableCell>
											<TableCell>
												<Tooltip title="Delete">
													<IconButton aria-label="Delete">
														<DeleteIcon />
													</IconButton>
												</Tooltip>
												<Tooltip title="Editar">
													<IconButton aria-label="Editar">
														<MdCreate />
													</IconButton>
												</Tooltip>
												<Tooltip title="ver consulta">
													<IconButton aria-label="verconsulta">
														<MdRemoveRedEye onClick={this.handleClickOpen} />
													</IconButton>
												</Tooltip>
											</TableCell>
										</TableRow>
									)
								})}
							{emptyRows > 0 && (
								<TableRow style={{ height: 49 * emptyRows }}>
									<TableCell colSpan={0} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<ResponsiveDialog handleClose={this.handleCloseDialog} open={this.state.openDialog}>
					<Grid container spacing={1}>
						<SimpleList title="Fecha" subtitle="12 abril 2018" borderBottom />
						<SimpleList title="Destino" subtitle="Buzios" borderBottom />
						<SimpleList title="Tarifa" subtitle="Tarifa 0001" borderBottom />
						<SimpleList title="Nombre Completo" subtitle="Luciano Recchini" borderBottom />
						<SimpleList title="Teléfono" subtitle="1168610825" borderBottom />
						<SimpleList title="Email" subtitle="reqini@gmail.com" borderBottom />
						<SimpleList title="Producto" subtitle="Paquete a buzios" borderBottom />
						<SimpleList title="Pasajeros" subtitle="4" borderBottom />
						<SimpleList title="Ejecutivo" subtitle="Luciano" borderBottom />
					</Grid>
				</ResponsiveDialog>
				<TablePagination
					component="div"
					count={data.length}
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
				/>
			</ContainerCard>
		)
	}
}

FinancingTable.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string
}

export default withStyles(classes)(FinancingTable)
