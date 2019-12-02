import React from 'react'
import PropType from 'prop-types'
import { MdClose } from 'react-icons/md'
import Tags from '../../Atoms/Tags'

class FilterChip extends React.PureComponent {
	handleClickRemoveButton = () => {
		const { onRemove } = this.props
		if (onRemove) onRemove(undefined)
	}

	render() {
		const { title } = this.props
		return (
			<div style={{ display: 'inline-block' }}>
				<Tags circle={30} iconRight={<MdClose onClick={this.handleClickRemoveButton} />} name={title} />
			</div>
		)
	}
}

FilterChip.propTypes = {
	onRemove: PropType.func.isRequired,
	title: PropType.string.isRequired
}

export default FilterChip
