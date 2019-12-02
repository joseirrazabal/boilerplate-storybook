import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const styles = {
	root: {
		flexGrow: 1
	},
	contentProgress: {
		background: '#f2f2f2',
		borderRadius: 10,
		overflow: 'hidden'
	}
}

class IdeameProgress extends React.Component {
	state = {
		completed: 0
	}

	componentDidMount() {
		this.timer = setInterval(this.progress, 500)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	progress = () => {
		const { completed } = this.state
		if (completed === 100) {
			this.setState({ completed: 0 })
		} else {
			const diff = Math.random() * 10
			this.setState({ completed: Math.min(completed + diff, 100) })
		}
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.contentProgress}>
				<LinearProgress variant="determinate" style={{ background: 'transparent' }} value={this.state.completed} />
			</div>
		)
	}
}

IdeameProgress.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(IdeameProgress)
