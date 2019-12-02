import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

class LoadingShopping extends React.Component {
	state = {
		completed: 0,
		buffer: 10
	}

	componentDidMount() {
		this.timer = setInterval(this.progress, 500)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	timer = null

	progress = () => {
		const { completed } = this.state

		if (completed > 100) {
			this.setState({ completed: 0, buffer: 10 })
		} else {
			const diff = Math.random() * 10
			const diff2 = Math.random() * 10
			this.setState({ completed: completed + diff, buffer: completed + diff + diff2 })
		}
	}

	render() {
		const { classes } = this.props
		const { completed, buffer } = this.state

		return (
			<div className={classNames(classes.background)}>
				<div>
					<div>
						<Text italic center size={18} color="white">
							PREPARANDO COMPRA
						</Text>
					</div>
					<div className={classNames(classes.progressBackground)}>
						<LinearProgress
							variant="buffer"
							className={classNames(classes.loading)}
							value={completed}
							valueBuffer={buffer}
						/>
					</div>
				</div>
			</div>
		)
	}
}
LoadingShopping.defaultProps = {}
LoadingShopping.propTypes = {

}

export default withStyles(({ mauri }) => ({
	background: {
		zIndex: 5,
		position: 'fixed',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		left: 0,
		top: 0,
		background: 'rgba(0, 0, 0, 0.6)'
	},
	progressBackground: {
		background: 'white',
		borderRadius: 10,
		marginTop: 15,
		display: 'flex',
		boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
		justifyContent: 'center'
	},
	loadingImg: {
		backgroundImage: 'url(./loading.png)',
		minWidth: 140,
		minHeight: 150,
		margin: 20
	},
	loading: {
		display: 'table',
		margin: 'auto',
		width: '100%',
		height: 10,
		borderRadius: 10,
		overflow: 'hidden'
	}
}))(LoadingShopping)
