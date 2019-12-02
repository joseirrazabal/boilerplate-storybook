import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { MdRemoveRedEye } from 'react-icons/md'
import Switch from '@material-ui/core/Switch'

const Row = ({ handleClick, handleClickOpen, index, headers, row }) => {
	return (
		// <TableRow>
		<TableRow
			// onClick={event => this.handleClick(event, n.id)}
			// aria-checked={isSelected}
			// className={classes.editTable}
			// key={n.id}
			// selected={isSelected}
			hover
			role="checkbox"
			tabIndex={-1}
			style={{ position: 'relative' }}
		>
			{/* <TableCell padding="checkbox"> */}
			{/* <Checkbox checked={isSelected} /> */}
			{/* <Checkbox />
			</TableCell> */}

			{Object.keys(row).map(name => {
				return headers
					.filter(h => h.name === name)
					.map(header => {
						return (
							<TableCell key={name} onClick={e => handleClick(row, name, e)}>
								{header.type === 'boolean' ? <Switch value={header.name} checked={row[header.name]} /> : row[name]}
							</TableCell>
						)
					})
			})}
			<div
				style={{
					position: 'absolute',
					right: 0,
					background: 'rgba(255, 255, 255, .8)'
				}}
			>
				<Tooltip title="Editar">
					<IconButton aria-label="verconsulta">
						<MdRemoveRedEye onClick={() => handleClickOpen(row)} />
					</IconButton>
				</Tooltip>
			</div>
		</TableRow>
	)
}

Row.propTypes = {
	row: PropTypes.object.isRequired,
	headers: PropTypes.array.isRequired,
	handleClick: PropTypes.func.isRequired
}

export default Row
