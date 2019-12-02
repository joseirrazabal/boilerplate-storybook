import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

const styles = theme => ({
	textLoading: {
		minWidth: 60,
		maxWidth: 1024,
		width: '100%',
		minHeight: 12,
		background: '#f2f2f2'
	}
})
const TextLoading = ({ classes }) => <div className={classNames(classes.textLoading)} />

TextLoading.defaultProps = {}
TextLoading.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(TextLoading)
