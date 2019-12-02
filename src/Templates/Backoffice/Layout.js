import React from 'react'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import SideMenu from '../../Organisms/Backoffice/Menu/SideMenu'
import ContainerLg from '../../Atoms/Containers/ContainerLg'

const styles = () => ({
	root: {
		flexGrow: 1
	},
	iconClose: {
		float: 'right',
		margin: 5
	},
	appFrame: {
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%'
	},
	menu: {
		width: '100%'
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
	},
	hide: {
		display: 'none'
	},
	drawerPaper: {
		position: 'relative',
		width: 240
	},
	paddingText: {
		paddingTop: 15,
		paddingBottom: 15
	}
})

class Layout extends React.PureComponent {
	state = {
		open: false
	}

	handleCloseMenu = () => {
		this.setState({
			open: false
		})
	}

	handleMenuItemClick = (route, title) => {
		const { onClick } = this.props

		this.setState({ open: false })
		if (onClick) {
			onClick(route, title)
		}
		// console.log({ route, title })
		// this.setState({ title, open: false })
	}

	handleOpenMenu = () => {
		this.setState({
			open: true
		})
	}

	render() {
		const { menues, classes, children, initialTitle, title } = this.props
		// const { open, title } = this.state
		const { open } = this.state

		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar>
						<Toolbar style={{ minHeight: 50 }} disableGutters={!open}>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={this.handleOpenMenu}
								className={classNames(classes.menuButton, open && classes.hide)}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="title" color="inherit" noWrap>
								{title || initialTitle}
							</Typography>
						</Toolbar>
					</AppBar>

					<Grid container spacing={1} style={{ marginTop: 50 }}>
						<ContainerLg>{children}</ContainerLg>
					</Grid>

					<SideMenu
						className={classes.menu}
						onMenuItemClick={this.handleMenuItemClick}
						menuDefinition={menues}
						open={open}
						onCloseMenu={this.handleCloseMenu}
					/>
				</div>
			</div>
		)
	}
}
Layout.defaultProps = {
	title: 'Upate',
	initialTitle: 'Upate Backoffice',
	menuDefinition: undefined
}
Layout.propTypes = {
	initialTitle: PropTypes.string,
	menuDefinition: PropTypes.object
}

export default withStyles(styles, { withTheme: true })(Layout)
