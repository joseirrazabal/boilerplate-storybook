import React from 'react'
import PropTypes from 'prop-types'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import Tooltip from '@material-ui/core/Tooltip'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import Table from './TableContext'

class EnhancedTableHead extends React.Component {
	createSortHandler = property => event => {
		this.props.onRequestSort(event, property)
	}

	render() {
		const { headers, onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props

		return (
			<TableHead>
				<TableRow>
					{/* <TableCell padding="checkbox">
						<Checkbox
							color="default"
							indeterminate={numSelected > 0 && numSelected < rowCount}
							checked={numSelected === rowCount}
							onChange={onSelectAllClick}
						/>
					</TableCell> */}
					{headers.map(
						column => (
							<TableCell
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
							</TableCell>
						),
						this
					)}
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

const Header = () => (
	<Table.Consumer>
		{({ data, headers, selected, order, orderBy }) => (
			<EnhancedTableHead
				numSelected={selected.length}
				order={order}
				orderBy={orderBy}
				// onSelectAllClick={this.handleSelectAllClick}
				// onRequestSort={this.handleRequestSort}
				rowCount={data.length}
				headers={headers}
			/>
		)}
	</Table.Consumer>
)

export default Header
