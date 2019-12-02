/* eslint react/forbid-prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Switch from '@material-ui/core/Switch'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import TiSave from '@material-ui/icons/Save'
import TiTrash from '@material-ui/icons/Delete'
import TiClear from '@material-ui/icons/Clear'
import Tooltip from '@material-ui/core/Tooltip'

// import { Mutation } from '@apollo/react-components'
import TableContext from './TableContext'

class EditRow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			touched: {},
			errors: {}
		}
	}

	onChange = (e, field, updateRow) => {
		const { row, primaryKey } = this.props
		const { touched } = this.state

		updateRow(row[primaryKey], field.name, e.target.value || e.target.checked, primaryKey)

		this.setState({
			touched: { ...touched, [field.name]: (e.target && e.target.checked) || true }
		})
	}

	onBlur = (event, field) => {
		const { touched } = this.state

		this.setState({ touched: { ...touched, [field.name]: true } })
	}

	render() {
		const { row, toggleAdd, updateRow } = this.props
		const { touched, errors } = this.state

		return (
			<TableContext.Consumer>
				{({ headers, selectRow, onAdd, onUpdate, onDelete, mutationDelete, mutationUpdate, mutationAdd, onError }) => {
					const mutationAction = toggleAdd ? mutationAdd : mutationUpdate
					const handlerAction = toggleAdd ? onAdd : onUpdate

					return headers
						.map(field => (
							<TableCell key={field.name}>
								{field.editable ? (
									<FormControl error={touched[field.name] && !!errors[field.name]} aria-describedby="name-text">
										{field.type === 'boolean' ? (
											<Switch
												value={this.state[row[field.name]]}
												checked={this.state[row[field.name]]}
												onChange={e => this.onChange(e, field, updateRow)}
											/>
										) : (
											<Input
												style={{ maxWidth: 100 }}
												type={field.type}
												id="name"
												onChange={e => this.onChange(e, field, updateRow)}
												onBlur={e => this.onBlur(e, field)}
												value={row[field.name]}
											/>
										)}
										{touched[field.name] && errors[field.name] && (
											<FormHelperText id="name-text">{errors[field.name]}</FormHelperText>
										)}
									</FormControl>
								) : (
									row[field.name]
								)}
							</TableCell>
						))
						.concat(
							<TableCell key={headers.length}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'left',
										maxWidth: 8
									}}
								>
									<div>
										{/* <Mutation mutation={mutationAction}>
											{(mutation, { loading, error }) => (
												<div>
													{loading && 'loading...'}
													{error && 'error...'} */}

										<Tooltip enterDelay={300} leaveDelay={300} placement="bottom" title="Salvar">
											<Button
												style={{ height: 20, minWidth: 20, fontSize: 18, padding: 0 }}
												onClick={() =>
													handlerAction(mutationAction, row)
														.then(() => {
															selectRow(undefined)
														})
														.catch(e => {
															selectRow(undefined, e)
														})
												}
												aria-label="add"
											>
												<TiSave color="primary" />
											</Button>
										</Tooltip>
										{/* </div>
											)}
										</Mutation> */}
									</div>
									<div>
										{/* <Mutation mutation={mutationDelete} onError={onError}>
											{(mutation, { loading, error, data }) => (
												<div>
													{loading && 'loading...'}
													{error && 'error...'}
													{data && 'data...'} */}
										<Tooltip enterDelay={300} leaveDelay={300} placement="bottom" title="Delete">
											<Button
												style={{ height: 20, minWidth: 20, fontSize: 18, padding: 0 }}
												onClick={() =>
													onDelete(mutationDelete, row)
														.then(() => {
															selectRow(undefined)
														})
														.catch(e => {
															selectRow(undefined, e)
														})
												}
												aria-label="delete"
											>
												<TiTrash color="primary" />
											</Button>
										</Tooltip>
										{/* </div>
											)}
										</Mutation> */}
									</div>

									<div>
										<Tooltip enterDelay={300} leaveDelay={300} placement="bottom" title="Done">
											<Button
												style={{ height: 20, minWidth: 20, fontSize: 18, padding: 0 }}
												onClick={() => selectRow(undefined)}
												aria-label="done"
											>
												<TiClear color="primary" />
											</Button>
										</Tooltip>
									</div>
								</div>
							</TableCell>
						)
				}}
			</TableContext.Consumer>
		)
	}
}

EditRow.defaultProps = {
	toggleAdd: false
}

EditRow.propTypes = {
	row: PropTypes.object.isRequired,
	updateRow: PropTypes.func.isRequired,
	primaryKey: PropTypes.string.isRequired,
	toggleAdd: PropTypes.bool
}

export default EditRow
