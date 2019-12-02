import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import Hidden from '@material-ui/core/Hidden';

import { withStyles } from '@material-ui/styles'
import Filter from './Filter'
import Expander from '../../Atoms/Expander'

import ListFilterItem from './ListFilterItem'

class ListFilter extends React.PureComponent {
	state = { values: undefined }

	constructor(props) {
		super(props)
		this.state.title = props.getTitle ? props.getTitle(this.getValues()) : this.getDefaultTitle(props.initialValues)
	}

	addRemoveItem(value, add) {
		const { onChange } = this.props
		const newValues = [...this.getValues()]
		const index = newValues.findIndex(i => i === value)

		if (index > -1 && !add) newValues.splice(index, 1)

		if (index === -1 && add) newValues.push(value)

		onChange(newValues)
		const title = this.updateTitle(newValues)
		this.setState({
			values: newValues,
			title
		})
	}

	getDefaultTitle(values) {
		const { initialTitle } = this.props
		if (!values) return initialTitle

		return values.length ? values.toString() : initialTitle
	}

	updateTitle = values => {
		const { getTitle } = this.props
		const title = getTitle ? getTitle(values) : this.getDefaultTitle(values)

		return title
	}

	onChange = () => {
		const { onChange } = this.props
		this.updateTitle()
		this.setState({
			originalValues: this.getValues()
		})
		if (onChange) onChange(this.getValues())
	}

	onReset = () => {
		this.setState(
			{
				values: [],
				title: this.props.initialTitle
			},
			this.onChange
		)
	}

	onCancel = () => {
		this.setState(prevState => ({
			values: prevState.originalValues
		}))
	}

	getValues = () => {
		const { values } = this.state
		const { initialValues } = this.props

		return values || initialValues
	}

	onMobileChange(value, add) {
		const newValues = [...this.getValues()]
		const { onChange } = this.props
		const index = newValues.findIndex(i => i === value)

		if (index > -1 && !add) newValues.splice(index, 1)

		if (index === -1 && add) newValues.push(value)
		if (onChange) onChange(newValues)
		this.setState({
			values: newValues
		})
	}

	getTitle() {
		const { getTitle } = this.props

	}

	render() {
		const { title, items, initialTitle } = this.props
		return (
			<div>
				<Hidden smUp>
					<Expander
						title={title}
						content={
							<List style={{ width: '100%' }}>
								{items.map(item => (
									<ListFilterItem
										checked={this.getValues().includes(item.value)}
										onChange={event => this.onMobileChange(item.value, event.target.checked)}
										key={item.value}
										content={item.text}
										primaryValue={item.primary}
										secondaryValue={item.secondary}
									/>
								))}
							</List>
						}
					/>
				</Hidden>
				<Hidden xsDown>
					<Filter
						title={title}
						onReset={this.onReset}
						touched={Boolean(this.getValues().length)}
					>
						{items.map(item => (
							<ListFilterItem
								checked={this.getValues().includes(item.value)}
								onChange={event => this.addRemoveItem(item.value, event.target.checked)}
								key={item.value}
								content={item.text}
								primaryValue={item.primary}
								secondaryValue={item.secondary}
							/>
						))}
					</Filter>
				</Hidden>
			</div>
		)
	}
}

ListFilter.defaultProps = {
	title: 'List filter',
	items: [],
	values: [],
	onChange: () => { },
	getTitle: values => values && values.toString()
}

ListFilter.propTypes = {

	initialTitle: PropTypes.string,
	initialValues: PropTypes.arrayOf(PropTypes.string),
	onChange: PropTypes.func,
	getTitle: PropTypes.func,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			text: PropTypes.string,
			primary: PropTypes.bool,
			secondary: PropTypes.bool
		})
	)
}

const styles = () => ({

})

export default withStyles(styles)(ListFilter)
