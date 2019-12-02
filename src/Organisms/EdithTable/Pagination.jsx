import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'

class Pagination extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = { page: props.page || 0 }
	}

	changePage = (e, page) => {
		this.setState({
			page
		})
		this.props.onChangePage(e, page)
	}

	render() {
		const { total, rowsPerPage } = this.props
		const { page } = this.state

		return (
			<TablePagination
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
				onChangePage={this.changePage}
				onChangeRowsPerPage={this.handleChangeRowsPerPage}
				// rowsPerPageOptions={rowsPerPage}
			/>
		)
	}
}

export default Pagination
