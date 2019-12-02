import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ContainerCard from '../../Atoms/Card/ContainerCard'

class SortList extends React.Component {
	constructor(props) {
		super(props)
		let sorts = props.children || []
		sorts = sorts.map ? sorts : [sorts]
		this.state = { sorts }
	}

	handleSortClick = selected => {
		const { onChange, active } = this.props
		const { sorts } = this.state
		const change = selected !== active
		if (onChange && change) onChange(selected, sorts[selected].props.value || sorts[selected].props.title)
	}

	render() {
		const { active } = this.props
		const { sorts } = this.state

		return (
			<ContainerCard flex="row">
				<Grid container spacing={0}>
					{sorts.map((sort, i) => (
						<Grid
							item
							key={sort.props.value}
							onClick={() => {
								this.handleSortClick(i)
							}}
							xs={4}
							sm={4}
							lg={4}
							style={active === i ? { background: '#f2f2f2', color: '#ccc' } : null}
						>
							{sort}
						</Grid>
					))}
				</Grid>
			</ContainerCard>
		)
	}
}

SortList.defaultProps = {
	title: '',
	children: [],
	active: undefined,
	onChange: () => { }
}
SortList.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	onChange: PropTypes.func,
	active: PropTypes.number
}

export default SortList
