import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

const ListFilterItem = ({ classes, content, checked, onChange, color, primaryValue, secondaryValue }) => (
	<div className={classNames(classes.flexStartEnd, classes.global)}>
		<div className={classNames(classes.simpleFlex)}>
			<FormControlLabel
				style={{ width: '100%' }}
				control={<Checkbox checked={checked} onChange={onChange} color="primary" />}
				label={<Text left color={color} content={content} size={13} style={{ marginLeft: 10 }} />}
			/>
		</div>

		{primaryValue && (
			<div>
				<div className={classNames(classes.input)}>
					<Text center content={primaryValue} color="gray" size={11} />
				</div>
			</div>
		)}
		{secondaryValue && (
			<div>
				<div className={classNames(classes.input)}>
					<Text center content={secondaryValue} color="gray" size={11} />
				</div>
			</div>
		)}
	</div>
)

ListFilterItem.defaultProps = {
	content: '',
	checked: false,
	onChange: () => {},
	color: 'primary',
	primaryValue: undefined,
	secondaryValue: undefined
}

ListFilterItem.propTypes = {

	content: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	color: PropTypes.string,
	primaryValue: PropTypes.string,
	secondaryValue: PropTypes.string
}

export default withStyles(({ mauri: { flexStartEnd } }) => ({
	flexStartEnd,
	simpleFlex: {
		width: '80%'
	},
	global: {
		padding: '0 20px',
		borderBottom: '0.5px solid #ccc'
	},

	input: {
		padding: '0 5px',
		float: 'right',
		width: 'auto',
		height: 30,
		background: 'white',
		border: '1px solid #f2f2f2',
		display: 'flex',
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		marginRight: 15
	}
}))(ListFilterItem)
