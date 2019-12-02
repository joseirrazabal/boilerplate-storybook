import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import classNames from 'classnames'
import { Motion, spring } from 'react-motion'
import Paper from '@material-ui/core/Paper'
import Button from './Button'

class SeeMoreButton extends React.PureComponent {
	render() {
		const { classes, borderRadius, expanded, onExpandLess, onExpandMore } = this.props
		const degrees = expanded ? 180 : 0
		const clickHandler = expanded ? onExpandLess : onExpandMore
		const styleRotate = { rotate: spring(degrees, { precision: 0.2 }) }
		return (
			<div className={classNames(classes.footerDesplegable, classes.borderTop)}>
				<div className={classes.desplegar}>
					<Paper style={{ borderRadius }}>
						<Motion style={{ ...styleRotate }}>
							{({ rotate }) => (
								<Button
									size="medium"
									primary={false}
									onClick={clickHandler}
									style={{
										borderRadius: 50,
										background: '#f2f2f2',
										height: 50,
										width: 50
									}}
									iconLeft={<ExpandMoreIcon style={{ transform: `rotate(${rotate}deg)` }} />}
									color="gray"
								/>
							)}
						</Motion>
					</Paper>
				</div>
			</div>
		)
	}
}

SeeMoreButton.defaultProps = {
	borderRadius: 50,
	onExpandLess: () => {},
	onExpandMore: () => {}
}

SeeMoreButton.propTypes = {

	borderRadius: PropTypes.number,
	onExpandMore: PropTypes.func,
	onExpandLess: PropTypes.func
}

export default withStyles(() => ({
	desplegar: {
		display: 'table',
		margin: 'auto',
		marginTop: -30,
		position: 'relative'
	},
	footerDesplegable: {
		backgroundColor: 'white',
		height: 50,
		width: '100%',
		paddingTop: 10
	}
}))(SeeMoreButton)
