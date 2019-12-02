import React from 'react'
import PropTypes from 'prop-types'
import { MdCreate } from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SimpleCard from '../Card/SimpleCard'

const tutorialSteps = [
	{
		label: 'Hotel de jemplo 1',
		imgPath: 'http://photos.hotelbeds.com/giata/bigger/00/003486/003486a_hb_ro_015.jpg'
	},
	{
		label: 'Hotel de jemplo 2 para mostrar',
		imgPath: 'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
	},
	{
		label: 'Hotel de jemplo 3',
		imgPath: 'http://photos.hotelbeds.com/giata/bigger/00/003486/003486a_hb_ro_015.jpg'
	},
	{
		label: 'Hotel de jemplo 4 para mostrar',
		imgPath: 'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
	},
	{
		label: 'Hotel de jemplo 5',
		imgPath: 'http://photos.hotelbeds.com/giata/bigger/00/003486/003486a_hb_ro_015.jpg'
	}
]

const classes = theme => ({
	root: {
		maxWidth: 400,
		flexGrow: 1
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		height: 50,
		paddingLeft: theme.spacing.unit * 4,
		marginBottom: 10,
		backgroundColor: theme.palette.background.default
	},
	options: {
		position: 'absolute',
		top: 0,
		right: 0,
		/* width: '100%', */
		background: 'rgba(0, 0, 0, .4)'
	},
	img: {
		height: 255,
		maxWidth: 400,
		marginBottom: 10,
		overflow: 'hidden',
		width: '100%'
	}
})

class AdminCards extends React.Component {
	state = {
		activeStep: 0
	}

	handleNext = () => {
		this.setState(prevState => ({
			activeStep: prevState.activeStep + 1
		}))
	}

	handleBack = () => {
		this.setState(prevState => ({
			activeStep: prevState.activeStep - 1
		}))
	}

	render() {
		const { classes, theme } = this.props
		const { activeStep } = this.state

		const maxSteps = tutorialSteps.length

		return (
			<div className={classes.root}>
				<Paper square elevation={0} className={classes.header}>
					<Typography>{tutorialSteps[activeStep].label}</Typography>
				</Paper>
				<div style={{ marginBottom: 10, position: 'relative' }}>
					<div className={classes.options}>
						<Tooltip title="Editar">
							<IconButton aria-label="Editar">
								<MdCreate style={{ color: 'white' }} />
							</IconButton>
						</Tooltip>
						<Tooltip title="Delete">
							<IconButton aria-label="Delete">
								<DeleteIcon style={{ color: 'white' }} />
							</IconButton>
						</Tooltip>
					</div>
					<SimpleCard
						title={tutorialSteps[activeStep].label}
						subtitle="Últimos lugares"
						price={1200}
						previousPrice={1600}
						imageUrl={tutorialSteps[activeStep].imgPath}
					/>
				</div>
				{/* <img className={classes.img} src={tutorialSteps[activeStep].imgPath} alt={tutorialSteps[activeStep].label} /> */}
				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					className={classes.mobileStepper}
					nextButton={
						<Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
							Next
							{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
						</Button>
					}
					backButton={
						<Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
							{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
							Back
						</Button>
					}
				/>
			</div>
		)
	}
}

AdminCards.propTypes = {
	classes: PropTypes.isRequired,
	theme: PropTypes.object.isRequired
}

export default withStyles(classes, { withTheme: true })(AdminCards)
