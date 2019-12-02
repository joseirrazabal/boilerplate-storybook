import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import SmallCard from '../Card/SmallCard'
import RecommendedCard from '../Card/RecommendedCard'
import IdReward from '../Card/IdReward'
import Success from '../Notification/Success'
/* import { Text } from '../../Atoms/TitleLabel/TitleLabel' */

const styles = () => ({
	root: {
		width: '100%'
	},
	button: {
		marginBottom: 10,
		marginTop: 10
	},
	steppers: {
		padding: 10
	},
	instructions: {
		marginTop: 15,
		marginBottom: 15
	}
})

const RewardContent = () => (
	<Grid container spacing={2}>
		<Grid item xs={12}>
			<RecommendedCard title="Artículos Seleccionos">
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<IdReward />
					</Grid>
					<Grid item xs={12}>
						<IdReward />
					</Grid>
				</Grid>
			</RecommendedCard>
		</Grid>
		<Grid item xs={12}>
			<IdReward />
		</Grid>
		<Grid item xs={12}>
			<IdReward />
		</Grid>
	</Grid>
)

const PaymentMethods = () => (
	<Grid container justify="center" spacing={2}>
		<Grid item xs={12}>
			<SmallCard
				image="https://scontent.faep11-1.fna.fbcdn.net/v/t1.0-1/993624_584493658260530_1007168467_n.png?_nc_cat=1&_nc_ht=scontent.faep11-1.fna&oh=0b98dc029df1ff8016d449ca664a3682&oe=5C4E73C0"
				title="Mercado Pago"
				subtitle="Hasta 18 cuotas"
			/>
		</Grid>
		<Grid item xs={12}>
			<SmallCard
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FKOdMLCvh3wwk99cFekbCxULQqw8Rmg4rmeq0SrChaGweXFo4Q"
				title="Tarjeta de Credito"
				subtitle="Hasta 12 cuotas"
			/>
		</Grid>
		<Grid item xs={12}>
			<SmallCard
				image="http://devotoshopping.neexcdn.com.ar/wp-content/uploads/2017/03/Logo-Pago-Facil.png"
				title="Pago Facil"
				subtitle="Imprimis pagas y listo!"
			/>
		</Grid>
	</Grid>
)

const Confirmation = () => (
	<Grid item xs={12}>
		<ContainerCard paddingConfig={15} radius={0}>
			<Success />
		</ContainerCard>
	</Grid>
)

function getSteps() {
	return ['ELEGIR', 'PAGAR', 'CONFIRMAR']
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return <RewardContent />
		case 1:
			return <PaymentMethods />
		default:
			return 'Unknown step'
	}
}

class HorizontalLinearStepper extends React.Component {
	state = {
		activeStep: 0,
		skipped: new Set()
	}

	isStepOptional = step => {
		return step === 1
	}

	handleNext = () => {
		const { activeStep } = this.state
		let { skipped } = this.state
		if (this.isStepSkipped(activeStep)) {
			skipped = new Set(skipped.values())
			skipped.delete(activeStep)
		}
		this.setState({
			activeStep: activeStep + 1,
			skipped
		})
	}

	handleBack = () => {
		this.setState(state => ({
			activeStep: state.activeStep - 1
		}))
	}

	handleSkip = () => {
		const { activeStep } = this.state
		if (!this.isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.")
		}

		this.setState(state => {
			const skipped = new Set(state.skipped.values())
			skipped.add(activeStep)
			return {
				activeStep: state.activeStep + 1,
				skipped
			}
		})
	}

	handleReset = () => {
		this.setState({
			activeStep: 0
		})
	}

	isStepSkipped(step) {
		return this.state.skipped.has(step)
	}

	render() {
		const { classes } = this.props
		const steps = getSteps()
		const { activeStep } = this.state

		return (
			<div className={classes.root}>
				<ContainerCard radius={0}>
					<Stepper activeStep={activeStep} className={classes.steppers}>
						{steps.map((label, index) => {
							const props = {}
							const labelProps = {}
							if (this.isStepSkipped(index)) {
								props.completed = false
							}
							return (
								<Step key={label} {...props}>
									<StepLabel {...labelProps}>{label}</StepLabel>
								</Step>
							)
						})}
					</Stepper>
				</ContainerCard>
				<div>
					{activeStep === steps.length ? (
						<div>
							<Button onClick={this.handleReset} className={classes.button}>
								Reset
							</Button>
							<Confirmation />
						</div>
					) : (
						<div>
							<div className={classes.instructions}>
								<Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.button}>
									Anterior
								</Button>
								{this.isStepOptional(activeStep) && (
									<Button variant="contained" color="primary" onClick={this.handleSkip} className={classes.button}>
										Skip
									</Button>
								)}
								<Button variant="contained" color="primary" onClick={this.handleNext} className={classes.button}>
									{activeStep === steps.length - 1 ? 'Comprar' : 'Siguiente'}
								</Button>
							</div>
							<div className={classes.instructions}>{getStepContent(activeStep)}</div>
						</div>
					)}
				</div>
			</div>
		)
	}
}

HorizontalLinearStepper.propTypes = {
	classes: PropTypes.object
}

export default withStyles(styles)(HorizontalLinearStepper)
