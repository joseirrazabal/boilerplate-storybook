import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconsFont from './IconsFont'

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

class ExpanderCustomizable extends React.Component {
	render() {
		return (
			<div style={{ marginTop: 3 }}>
				<ExpansionPanel style={{ background: 'transparent', boxShadow: 'none' }}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<div style={{ marginRight: 10 }}>
							<IconsFont size={20} icon={'flaticon-time'} />{' '}
						</div>
						<Typography
							style={{
								width: '100%',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							{this.props.title}
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails
						style={{
							background: this.props.background,
							padding: this.props.padding,
							borderTop: this.props.borderTop
						}}
					>
						{this.props.content}
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		)
	}
}

ExpanderCustomizable.defaultProps = {
	content: <div />
}

ExpanderCustomizable.propTypes = {
	background: PropTypes.string,
	borderTop: PropTypes.string,
	padding: PropTypes.number,
	classes: PropTypes.object,
	title: PropTypes.string,
	expansion: PropTypes.string,
	content: PropTypes.object.isRequired
}

export default withStyles(styles)(ExpanderCustomizable)
