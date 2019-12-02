import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import Hidden from '@material-ui/core/Hidden'

import { withStyles } from '@material-ui/styles'
import Filter from './Filter'
import Expander from '../../Atoms/Expander'
import ListFilterItem from './ListFilterItem'

class ListFilter extends React.PureComponent {
	onCheckValue(value, add) {
		const { onChange, values } = this.props

		onChange(value)
	}

	render() {
		const { title, items, values, getTitle, onChange, anchorId } = this.props

		return (
			<div>
				<Hidden lgUp>
					<Expander
						title={title}
						content={
							<List style={{ width: '100%' }}>
								{items.map(item => (
									<ListFilterItem
										checked={values == item.value}
										onChange={event => this.onCheckValue(item.value, event.target.checked)}
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
				<Hidden mdDown>
					<Filter
						anchorId={anchorId}
						title={getTitle(values) || title}
						onReset={() => onChange([])}
						touched={Boolean(values.length)}
						content={close =>
							items.map(item => (
								<ListFilterItem
									// checked={values.includes(item.value)}
									checked={values == item.value}
									onChange={event => this.onCheckValue(item.value, event.target.checked)}
									key={item.value}
									content={item.text}
									primaryValue={item.primary}
									secondaryValue={item.secondary}
								/>
							))
						}
					></Filter>
				</Hidden>
			</div>
		)
	}
}

ListFilter.defaultProps = {
	title: 'List filter',
	values: [],
	onChange: () => {},
	getTitle: values => values && values.toString(),
	anchorId: undefined
}

ListFilter.propTypes = {
	title: PropTypes.string,
	onChange: PropTypes.func,
	getTitle: PropTypes.func,
	values: PropTypes.arrayOf(PropTypes.string),
	anchorId: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			text: PropTypes.string,
			primary: PropTypes.string,
			secondary: PropTypes.string
		})
	)
}

const styles = () => ({})

export default withStyles(styles)(ListFilter)
