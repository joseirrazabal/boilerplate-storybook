import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { prototype } from 'events'

const styles = {
	root: {
		/* maxWidth: 400, */
		width: '100%',
		flexGrow: 1
	}
}

class Pagination extends React.PureComponent {
	state = {
		activeStep: undefined
	}

	handleNext = () => {
		if (this.props.onNext) this.props.onNext()
	}

	handleBack = () => {
		if (this.props.onNext) this.props.onPrev()
	}

	render() {
		const { classes, theme, steps, prevLabel, nextLabel, activeStep } = this.props

		return (
			<MobileStepper
				variant="dots"
				steps={steps}
				position="static"
				activeStep={activeStep}
				className={classes.root}
				nextButton={
					<Button size="small" onClick={this.handleNext} disabled={activeStep === steps - 1}>
						{nextLabel}
						{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</Button>
				}
				backButton={
					<Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
						{prevLabel}
					</Button>
				}
			/>
		)
	}
}

Pagination.defaultProps = {
	activeStep: 0,
	onNext: () => {},
	onPrev: () => {}
}

Pagination.propTypes = {
	classes: PropTypes.isRequired,
	theme: PropTypes.object.isRequired,
	steps: PropTypes.number.isRequired,
	activeStep: PropTypes.number,
	nextLabel: PropTypes.string,
	prevLabel: PropTypes.string,
	onPrev: PropTypes.func.isRequired,
	onNext: PropTypes.func.isRequired
}

export default withStyles(styles, { withTheme: true })(Pagination)
