import React from 'react'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { MdPermPhoneMsg, MdForum, MdLiveHelp } from 'react-icons/md'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import LoginDialog from '../Dialogs/Login/Login'

class Header extends React.PureComponent {
	handleClickOpen = () => {
		this.setState({
			open: true
		})
	}

	render() {
		const { fullScreen, classes, image, allowLogin } = this.props

		return (
			<header className={classes.global}>
				<div className={classes.displayFlex}>
					{image && <div>{image}</div>}
					<div className={classes.ul}>
						<ul className={classes.ul}>
							<li className={classNames(classes.listMenu, classes.flex)}>
								<div className={classes.mobile}>
									<Text size={12} color="gray">
										0800 345 5100
									</Text>
								</div>
								<div className={classes.desktop}>
									<Text size={18} color="black">
										<MdPermPhoneMsg className={classes.icon} />
										0800 345 5100
									</Text>
								</div>
							</li>
							<li className={classes.listMenu}>
								<div className={classes.mobile}>
									<a href="/consulta" aria-label="consulta">
										<MdForum color={'gray'} className={classes.icon} />
									</a>
								</div>
								<div className={classes.desktop}>
									<a href="/consulta" aria-label="consulta">
										Contáctenos
									</a>
								</div>
							</li>
							<li className={classes.listMenu}>
								<div className={classes.mobile}>
									<a href="/ayuda" aria-label="ayuda">
										<MdLiveHelp color={'gray'} className={classes.icon} />
									</a>
								</div>
								<div className={classes.desktop}>
									<a href="/ayuda" aria-label="ayuda">
										Ayuda
									</a>
								</div>
							</li>
							{allowLogin && (
								<li className={(classes.listMenu, classes.listMenuBorderLine)} onClick={this.handleClickOpen}>
									Iniciar Sesión
								</li>
							)}
						</ul>
					</div>

					{allowLogin && <LoginDialog fullScreen={fullScreen} />}
				</div>
			</header>
		)
	}
}
Header.defaultProps = {
	image: undefined,
	fixed: false,
	allowLogin: false
}

Header.propTypes = {
	image: PropTypes.node,
	fixed: PropTypes.bool,
	allowLogin: PropTypes.bool
}
const styles = () => ({
	global: {
		fontFamily: 'Roboto, sans-serif',
		backgroundColor: 'white',
		padding: 10,
		width: '100%',
		zIndex: 0,
		boxSizing: 'border-box',
		borderBottom: '0.5px solid #f2f2f2'
		/* boxShadow: '0 1px 1px rgba(0,0,0,0.3)' */
	},
	flex: {
		display: 'flex'
	},
	icon: {
		fontSize: 18,
		marginRight: 10
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
		borderLeft: '0.5px solid #ccc',
		paddingLeft: 20
	},
	desktop: {
		visibility: 'visible',
		'@media (max-width: 800px)': {
			visibility: 'hidden',
			width: '0',
			height: '0'
		}
	},
	mobile: {
		visibility: 'visible',
		'@media (min-width: 800px)': {
			visibility: 'hidden',
			width: '0',
			height: '0'
		}
	}
})
export default withStyles(styles)(Header)
