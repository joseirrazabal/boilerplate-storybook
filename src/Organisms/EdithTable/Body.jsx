import React from 'react'
import TableBody from '@material-ui/core/TableBody'

import TableContext from './TableContext'
import EditRow from './EditRow'
import Row from './Row'

class Body extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			selected: []
		}
	}

	isSelected = id => this.state.selected.indexOf(id) !== -1

	updateRow = (ignore, key, value) => {
		this.setState({ [key]: value })
	}

	render() {
		// const { classes } = this.props

		return (
			<TableContext.Consumer>
				{({ primaryKey, data, headers, activeRow, toggleAdd, handleClick, updateRow, handleClickOpen }) => (
					<TableBody>
						{toggleAdd && (
							<EditRow
								primaryKey={primaryKey}
								row={this.state}
								headers={headers}
								toggleAdd
								updateRow={this.updateRow}
							/>
						)}
						{data &&
							data.map((row, i) => {
								return activeRow === row[primaryKey] ? (
									<EditRow key={row[primaryKey]} primaryKey={primaryKey} row={row} updateRow={updateRow} />
								) : (
									<Row
										key={row[primaryKey]}
										row={row}
										headers={headers}
										handleClick={handleClick}
										handleClickOpen={handleClickOpen}
										index={i}
									/>
								)
							})}
					</TableBody>
				)}
			</TableContext.Consumer>
		)
	}
}

export default Body
