import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CardContent from './Card/CardContent'

const styles = theme => ({
	root: {
		width: '100%'
	},
	heading: {
		fontWeight: theme.typography.fontWeightRegular
	},
	borderTop: {
		borderTop: '1px solid #f2f2f2'
	}
})

const SimpleExpansionPanel = ({ expansion, title, content, background, padding, borderTop }) => {
	return (
		<React.Fragment>
			<ExpansionPanel defaultExpanded={expansion}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography style={{ width: '100%' }}>{title}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails
					style={{
						background,
						padding,
						borderTop
					}}
				>
					<CardContent justify="flex-start" paddingConfig={15} background="#f9f8f7">
						{content}
					</CardContent>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</React.Fragment>
	)
}

SimpleExpansionPanel.defaultProps = {
	background: '',
	borderTop: '',
	padding: 0,
	expansion: false,
	title: '',
	content: <div />
}
SimpleExpansionPanel.propTypes = {
	background: PropTypes.string,
	borderTop: PropTypes.string,
	padding: PropTypes.number,
	title: PropTypes.string,
	content: PropTypes.object,
	expansion: PropTypes.bool
}

export default withStyles(styles)(SimpleExpansionPanel)
