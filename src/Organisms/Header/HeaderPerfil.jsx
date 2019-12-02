import React from 'react'
import PropTypes from 'prop-types'
import Text from '../../Atoms/TitleLabel/TitleLabel'
import SimpleList from '../../Molecules/List/SimpleList'
import Avatar from '../../Atoms/Avatar'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

class HeaderPerfil extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			right: false
		}
	}
	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		})
	}

	render() {
		const { classes, useDefaultCursor } = this.props
		const sideList = (
			<div>
				<div className={'background-gray padding20'}>
					<div style={{ position: 'relative', marginBottom: 10 }}>
						<Avatar circle={50} maxHeight={200} alt="Avatar Profile" notifications={4} />
					</div>
					<p
						style={{
							fontSize: 18,
							width: '100%',
							display: 'block',
							textAlign: 'center'
						}}
					>
						<strong>¡Hola</strong> Luciano!
					</p>
				</div>

				<Divider />
				<List component="nav">
					<ListItem button>
						<ListItemText primary="Favoritos" />
					</ListItem>
					<Divider />
					<ListItem button component="a" href="#simple-list">
						<ListItemText primary="Mi Perfil" />
					</ListItem>
					<Divider />
					<ListItem button component="a" href="#simple-list">
						<ListItemText primary="Notificaciones" />
					</ListItem>
					<Divider />
					<ListItem button component="a" href="#simple-list">
						<ListItemText primary="Personalizar" />
					</ListItem>
				</List>
			</div>
		)

		const headerStyles = {
			global: {
				fontFamily: 'Roboto, sans-serif',
				backgroundColor: 'white',
				padding: 10,
				width: '100%',
				boxSizing: 'border-box',
				boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
				//minHeight: 60,
			},
			container: {
				maxWidth: 1300,
				width: '100%',
				margin: 'auto'
			},
			displayFlex: {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignSelf: 'center',
				alignItem: 'center'
			},
			flexCenter: {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignSelf: 'center',
				alignItem: 'center'
			},
			listMenu: {
				//float: 'left',
				display: 'flex',
				alignSelf: 'center',
				fontSize: 13,
				listStyle: 'none',
				margin: '0 10px'
			},
			listMenuBorderLine: {
				borderRight: '0.5px solid #ccc',
				paddingRight: 20
			}
		}

		return (
			<div>
				<header style={{ ...headerStyles.global }}>
					<div style={{ ...headerStyles.container, ...headerStyles.displayFlex }}>
						<div>
							<img
								src="https://www.google.com/a/upate.com/images/logo.gif?alpha=1&amp;service=google_default"
								alt=""
								style={{ height: 35 }}
							/>
						</div>
						<div>
							<ul style={{ ...headerStyles.flexCenter, padding: 0, margin: 0 }}>
								<li style={{ ...headerStyles.listMenu, ...headerStyles.listMenuBorderLine }}>Ayuda</li>
								<li style={headerStyles.listMenu}>
									<div onClick={this.toggleDrawer('right', true)}>
										<Avatar
											circle={50}
											alt="Avatar Profile"
											name={<p className={classNames(classes.avatarName)}>Luciano Recchini</p>}
											notifications={null}
										/>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</header>
				<Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
					<div
						className={classNames(classes.navDrawer)}
						style={{ width: '100%' }}
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer('right', false)}
						onKeyDown={this.toggleDrawer('right', false)}
					>
						{sideList}
					</div>
				</Drawer>
			</div>
		)
	}
}
HeaderPerfil.defaultProps = {
	image: ''
}

HeaderPerfil.propTypes = {

	image: PropTypes.string
}

export default withStyles(({ mauri: { color } }) => ({
	navDrawer: {
		width: 300,
		'@media (max-width: 600px)': {
			width: 320,
			padding: 0,
			margin: 0
		}
	},
	avatarName: {
		'@media (max-width: 600px)': {
			display: 'none'
		}
	}
}))(HeaderPerfil)
