import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '../../Atoms/Button/Button'

function getSteps() {
	return [
		'Pasajeros',
		'Medio de Pago',
		'Datos para la emisión de la factura',
		'¿En qué email querés recibir tus tickets electrónicos?',
		'¿A qué número podemos llamarte?'
	]
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`

		case 1:
			return 'An ad group contains one or more ads which target a shared set of keywords.'

		case 2:
			return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`

		case 3:
			return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`

		case 3:
			return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
		default:
			return 'Unknown step'
	}
}

class Steppers extends React.Component {
	state = {
		activeStep: 0
	}

	handleNext = () => {
		this.setState({
			activeStep: this.state.activeStep + 1
		})
	}

	handleBack = () => {
		this.setState({
			activeStep: this.state.activeStep - 1
		})
	}

	handleReset = () => {
		this.setState({
			activeStep: 0
		})
	}

	render() {
		const steps = getSteps()
		const { classes, useDefaultCursor } = this.props
		const { activeStep } = this.state

		return (
			<div className={classNames(classes.root)}>
				<Stepper className={classNames(classes.contentSolapa)} activeStep={activeStep} orientation="vertical">
					{steps.map((label, index) => (
						<Step key={label}>
							<StepLabel className={classNames(classes.solapa)}>{label}</StepLabel>

							<StepContent>
								<div className={classNames(classes.contentForm)}>
									<Typography>{getStepContent(index)}</Typography>
									<div className={classNames(classes.rooactionsContainert)}>
										<div className={classNames(classes.flexStart)}>
											<Button
												radius
												border
												secondary
												disabled={activeStep === 0}
												onClick={this.handleBack}
												text="Anterior"
												style={{ marginRight: 10 }}
											/>
											<Button
												radius
												border
												primary
												variant="raised"
												color="primary"
												onClick={this.handleNext}
												className={classNames(classes.button)}
												text={activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
											/>
										</div>
									</div>
								</div>
							</StepContent>
						</Step>
					))}
				</Stepper>
				{activeStep === steps.length && (
					<Paper square elevation={0} className={classNames(classes.resetContainer)}>
						<Typography>All steps completed - you&quot;re finished</Typography>
						<Button
							radius
							border
							primary
							text="Comprar"
							onClick={this.handleReset}
							className={classNames(classes.button)}
						/>
					</Paper>
				)}
			</div>
		)
	}
}

Steppers.propTypes = {

}

export default withStyles(({ mauri: { color, variables, flex } }) => ({
	root: {
		width: '100%',
		padding: 0
	},
	flexStart: {
		display: 'flex',
		paddingTop: 15,
		alignItems: 'flex-start'
	},
	contentSolapa: {
		background: '#f2f2f2',
		padding: '0 10px'
	},
	contentForm: {
		background: '#F9F8F7',
		padding: 10,
		boxShadow: '0 2px 2px rgba(0,0,0,0.3)'
	},
	solapa: {
		background: 'white',
		padding: 10,
		boxShadow: '0 2px 2px rgba(0,0,0,0.3)'
	},
	button: {
		marginTop: 10,
		marginRight: 10
	},
	actionsContainer: {
		marginBottom: 10 * 2
	},
	resetContainer: {
		padding: 10 * 2
	}
}))(Steppers)
