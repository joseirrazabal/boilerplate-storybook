import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import Fade from '@material-ui/core/Fade'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { FaTimes } from 'react-icons/fa'
import Button from '../../Atoms/Button/Button'

const CloseButton = ({ onClick }) => {
	const handleClick = event => {
		event.preventDefault()
		event.stopPropagation()
		onClick(event)
	}

	return <FaTimes onClick={handleClick} />
}

CloseButton.propTypes = {
	onClick: PropTypes.func.isRequired
}

class Filter extends React.PureComponent {
	state = { anchorEl: null }

	handleOpenMenu = ({ currentTarget }) => {
		const { onClick } = this.props
		this.setState({ anchorEl: currentTarget })
		if (onClick) onClick()
	}

	handleCloseMenu = () => {
		const { onClose } = this.props
		this.setState({ anchorEl: null })
		if (onClose) onClose()
	}

	render() {
		const {
			classes: { menu, menuItem, classSelected, button },
			title,
			touched,
			children,
			onReset,
			anchorId
		} = this.props

		const { anchorEl } = this.state
		const filterClass = classNames({
			[classSelected]: touched,
			[button]: true
		})

		return (
			<div className={filterClass}>
				<Button
					radius
					aria-owns={anchorId}
					aria-haspopup="true"
					size="small"
					onClick={this.handleOpenMenu}
					iconRight={touched ? <CloseButton onClick={() => onReset()} /> : null}
					text={title instanceof Function ? title() : title}
					primary={touched}
				/>
				<Menu
					id={anchorId}
					open={Boolean(anchorEl)}
					anchorEl={anchorEl}
					className={menu}
					onClose={this.handleCloseMenu}
					TransitionComponent={Fade}
					MenuListProps={{ style: { padding: 0 } }}
				>
					<div className={menuItem}>{this.props.content(this.handleCloseMenu)}</div>
				</Menu>
			</div>
		)
	}
}

Filter.defaultProps = {
	title: 'filter',
	onReset: () => {},
	onClick: () => {},
	onClose: () => {},
	touched: false,
	anchorId: null
}

Filter.propTypes = {
	title: PropTypes.string || PropTypes.func,
	onReset: PropTypes.func,
	onClick: PropTypes.func,
	onClose: PropTypes.func,
	touched: PropTypes.bool,
	anchorId: PropTypes.string
}

export default withStyles(() => ({
	menu: {
		padding: 0,
		margin: 0
	},
	menuItem: {
		width: '100%',
		minWidth: 400
	},
	classSelected: {
		border: '1px solid #FF4D4D!important'
	},
	button: {
		border: '1px solid silver',
		width: 'auto',
		marginRight: 10,
		display: 'inline-block',
		borderRadius: 6
	}
}))(Filter)
