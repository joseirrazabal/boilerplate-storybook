import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

function TabContainer(props) {
	return (
		<Typography
			component="div"
			style={{
				padding: 8 * 3
			}}
		>
			{props.children}
		</Typography>
	)
}

TabContainer.defaultProps = {
	children: <div />
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
}

class TabsProfile extends React.Component {
	state = {
		value: 0
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	render() {
		const { classes, useDefaultCursor } = this.props
		const { value } = this.state

		return (
			<div style={{ width: '100%', background: 'white' }}>
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					<Tab label="Mi Perfil" />
					<Tab label="Favoritos" />
					<Tab label="Notificaciones" />
					<Tab label="Personalizar" />
				</Tabs>
			</div>
		)
	}
}

TabsProfile.propTypes = {

	classes: PropTypes.object
}

export default withStyles(({ mauri: { color, variables, container, marginT40 } }) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		color: '#9B9B9B',
		backgroundColor: 'white'
	},
	info: {
		float: 'left',
		width: '100%',
		padding: '40px 0'
	},
	infoHotels: {
		width: '100%',
		display: 'inline-block',
		background: '#f2f2f2'
	},
	container,
	marginT40
}))(TabsProfile)
