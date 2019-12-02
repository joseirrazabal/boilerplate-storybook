import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class TabSlider extends React.PureComponent {
	render() {
		const { classes, tabValue, tabChange, options } = this.props

		return (
			<div className={classes.container} >
				<Tabs value={tabValue} onChange={tabChange} indicatorColor="primary" textColor="primary" centered>
					{options.map(option => (
						<Tab label={option} />
					))}
				</Tabs>
			</div>
		)
	}
}

TabSlider.defaultProps = {
	options: ['Descripción', 'Mapa', 'Servicios']
}

TabSlider.propTypes = {

	options: PropTypes.arrayOf(PropTypes.string)
}

export default withStyles(() => ({
	container: { width: '100%', background: 'white' }
}))(TabSlider)
