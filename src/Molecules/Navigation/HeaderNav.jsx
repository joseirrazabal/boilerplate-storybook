import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'
import IconsFont from '../../Atoms/IconsFont'

const HeaderNav = ({ title, icon, classes, fixed }) => (
	<div className={classNames(classes.global, classes.displayFlex)} style={{ position: fixed ? 'fixed' : 'relative' }}>
		<div>
			<TitleSecondary content={title} />
		</div>
		<div>
			<IconsFont icon={icon} />
		</div>
	</div>
)
HeaderNav.defaultProps = {
	title: '',
	icon: '',
	fixed: true
}

HeaderNav.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.string,
	fixed: PropTypes.string
}

const styles = () => ({
	global: {
		fontFamily: 'Roboto, sans-serif',
		backgroundColor: 'white',
		padding: 15,
		width: '100%',
		minHeight: 50,
		boxShadow: '0 2px 2px rgba(0,0,0,0.3)'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'center',
		alignItem: 'center'
	},
	listMenu: {
		float: 'left',
		fontSize: 13,
		listStyle: 'none',
		margin: '0 10px'
	},
	listMenuBorderLine: {
		borderRight: '0.5px solid #ccc',
		paddingRight: 20
	}
})
export default withStyles(styles)(HeaderNav)
