import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Image from '../../Atoms/Images/Image'

const ItemsMenu = ['VUELOS', 'HOTELES', 'PAQUETES', 'LOGIN']

const HeaderNavSimple = ({ classes, image, fixed, item }) => (
	<header className={classNames(classes.global)} style={{ position: fixed ? 'fixed' : 'relative' }}>
		<div className={classNames(classes.container, classes.displayFlex)}>
			<div>
				<Image image={image} height={35} />
			</div>
			<div className={classNames(classes.ul)}>
				<ul className={classNames(classes.ul)}>
					{ItemsMenu.map(item => (
						<li className={classNames(classes.listMenu)}>
							<Text>{item}</Text>
						</li>
					))}
				</ul>
			</div>
		</div>
	</header>
)
HeaderNavSimple.defaultProps = {
	image: 'https://www.google.com/a/upate.com/images/logo.gif?alpha=1&amp;service=google_default',
	link: '/#',
	fixed: false
}

HeaderNavSimple.propTypes = {
	image: PropTypes.string,
	link: PropTypes.string,
	fixed: PropTypes.bool
}
const styles = () => ({
	global: {
		fontFamily: 'Roboto, sans-serif',
		backgroundColor: 'white',
		padding: 10,
		width: '100%',
		zIndex: 2,
		boxSizing: 'border-box',
		boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
	},
	paddingResponsive: {
		'@media (max-width: 360px)': {
			padding: 10
		}
	},
	container: {
		maxWidth: 1300,
		width: '100%',
		margin: 'auto'
	},
	headerStyles: {
		padding: 0,
		margin: 0
	},
	ul: {
		padding: 0,
		margin: 0,
		display: 'flex',
		alignItems: 'center'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'center',
		alignItem: 'center'
	},
	listMenu: {
		fontSize: 13,
		listStyle: 'none',
		margin: '0 10px'
	},
	listMenuBorderLine: {
		borderRight: '0.5px solid #ccc',
		paddingRight: 20
	}
})
export default withStyles(styles)(HeaderNavSimple)
