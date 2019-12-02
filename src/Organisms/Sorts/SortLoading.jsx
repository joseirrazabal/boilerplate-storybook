import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

const SortLoading = ({ classes }) => (
	<div className={classNames(classes.flexBox)}>
		<div className={classNames(classes.tab)}>
			<div className="linear-background" />
		</div>
		<div className={classNames(classes.tab)}>
			<div className="linear-background" />
		</div>
		<div className={classNames(classes.tab)}>
			<div className="linear-background" />
		</div>
		<div className={classNames(classes.tab)}>
			<div className="linear-background" />
		</div>
		<div className={classNames(classes.tab)}>
			<div className="linear-background" />
		</div>
	</div>
)

SortLoading.defaultProps = {}
SortLoading.propTypes = {

}

export default withStyles(() => ({
	tab: {
		cursor: 'pointer',
		background: '#f9f8f7',
		borderRadius: 6,
		padding: 10,
		minWidth: 100,
		border: '0.5px solid #f3f3f3',
		marginRight: 10
	},
	sortLoading: {
		minWidth: 100,
		minHeight: 12,
		background: '#f2f2f2'
	},
	flexBox: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	}
}))(SortLoading)
