import React, { Component } from 'react'
import Expander from '../../Atoms/Expander'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
class ExpandQuestion extends Component {
	render() {
		const { title, content, key } = this.props
		return (
			<div>
				<Expander key={key} title={title} content={<Text content={<span>{content}</span>} />} />
			</div>
		)
	}
}
export default ExpandQuestion
