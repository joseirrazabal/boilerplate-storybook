import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

const styles = theme => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15)
	},
	secondaryHeading: {
		fontSize: 13,
		color: theme.palette.text.secondary
	},
	icon: {
		verticalAlign: 'bottom',
		height: 20,
		width: 20
	},
	details: {
		alignItems: 'center'
	},
	column: {
		flexBasis: '50%'
	},
	helper: {
		borderLeft: `2px solid ${theme.palette.divider}`,
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
	},
	link: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline'
		}
	}
})

function ConsultHistory(props) {
	const { classes } = props
	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<div className={classes.column}>
						<Text size={12} italic>
							11 de Abril / 11:05hs
						</Text>
					</div>
					<div className={classes.column}>
						<Text size={12} left>
							Respuesta Cliente
						</Text>
					</div>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					<Grid container spacing={1}>
						<div className={classes.text}>
							<Text
								size="12"
								color="black"
								content="Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id	dignissim quam"
							/>
						</div>
					</Grid>
				</ExpansionPanelDetails>
				<Divider />
				<ExpansionPanelActions>
					<Button size="small">Cerrar</Button>
					<Button size="small" color="primary">
						Responder Consulta
					</Button>
				</ExpansionPanelActions>
			</ExpansionPanel>
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<div className={classes.column}>
						<Text size={12} italic className={classes.heading} content="11 de Abril / 11:05hs" />
					</div>
					<div className={classes.column}>
						<Typography className={classes.secondaryHeading}>Respuesta Operador</Typography>
					</div>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					<Grid container spacing={1}>
						<div className={classes.text}>
							<Text
								size="12"
								color="black"
								content="Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id	dignissim quam"
							/>
						</div>
					</Grid>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	)
}

ConsultHistory.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(ConsultHistory)
