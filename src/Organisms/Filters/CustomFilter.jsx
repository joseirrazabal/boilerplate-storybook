import React from 'react'
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden'
import Expander from '../../Atoms/Expander'

import Filter from './Filter'

class CustomFilter extends React.PureComponent {
	render() {
		const { title, children, touched, onReset } = this.props

		return (
			<div>
				<Hidden mdUp>
					<Expander title={title} content={<div style={{ padding: 30, width: '100%' }}>{children}</div>} />
				</Hidden>
				<Hidden mdDown>
					<Filter title={title} onReset={onReset} touched={touched}>
						<div style={{ padding: 30, width: '100%' }}>{children}</div>
					</Filter>
				</Hidden>
			</div>
		)
	}
}

CustomFilter.defaultProps = {
	title: 'Filtro',
	touched: false,
	onReset: () => {}
}

CustomFilter.propTypes = {
	title: PropTypes.string,
	touched: PropTypes.bool,
	onReset: PropTypes.func,
	children: PropTypes.node.isRequired
}

export default CustomFilter
