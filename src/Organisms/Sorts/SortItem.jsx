import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'

const SortItem = ({ classes, title, desc, icon }) => (
	<div className={classNames(classes.tab, classes.flexBox, classes.borderRight)}>
		<div>{icon}</div>
		<div style={{ marginLeft: 15 }}>
			<TitleSecondary content={title} size={14} left />
			{desc && <Text style={{ width: '100%' }} size={13} content={desc} italic />}
		</div>
	</div>
)

SortItem.defaultProps = {
	title: 'sort',
	desc: null,
	icon: null,
	value: ''
}
SortItem.propTypes = {

	value: PropTypes.string,
	title: PropTypes.string,
	desc: PropTypes.string,
	icon: PropTypes.node
}

export default withStyles(() => ({
	tab: {
		cursor: 'pointer',
		padding: 10,
		transition: '0.5s',
		'&:hover': {
			background: '#f2f2f2',
			transition: '0.5s'
		}
	},
	borderRight: {
		borderRight: '1px solid #f2f2f2'
	},
	flexBox: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}))(SortItem)
