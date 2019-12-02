import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
/* import Icon from '../Icon' */
import Button from '../Button/Button'

class MobileFilterButton extends PureComponent {
	render() {
		const {
			onClick,
			classes: { contentButtonFiter, buttonFiter }
		} = this.props
		return (
			<div className={contentButtonFiter}>
				<Button className={buttonFiter} text="FILTRAR" secondary radius onClick={onClick} />
			</div>
		)
	}
}

MobileFilterButton.propTypes = {

	onClick: PropTypes.func.isRequired
}

export default withStyles(() => ({
	contentButtonFiter: {
		display: 'none',

		'@media (max-width: 1024px)': {
			display: 'flex',
			justifyContent: 'center',
			position: 'fixed',
			width: '100%',
			bottom: 0,
			right: 0,
			left: 0,
			backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(0,0,0,.3))'
		}
	},
	buttonFiter: {
		marginBottom: 10
	}
}))(MobileFilterButton)
