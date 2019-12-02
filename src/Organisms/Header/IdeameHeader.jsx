import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
// import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import Image from '../../Atoms/Images/Image'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

/* import ContainerCard from '../../Atoms/Card/ContainerCard' */

const styles = theme => ({
	root: {
		width: '100%'
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
			width: 'auto'
		}
	},
	contentSearch: {
		background: 'transparent',
		maxWidth: 400,
		width: '100%'
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		// backgroundColor: fade(theme.palette.common.white, 0.15),
		// '&:hover': {
		// backgroundColor: fade(theme.palette.common.white, 0.25)
		// },
		/* marginRight: theme.spacing.unit * 2, */
		marginLeft: theme.spacing.unit * 4,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit * 4,
			width: 'auto'
		}
	},
	searchIcon: {
		width: theme.spacing.unit * 4,
		height: 35,
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit',
		width: '100%'
	},
	contentFull: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	contentFullBetween: {
		width: '100%',
		display: 'flex',
		paddingTop: 5,
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center'
	},
	inputInput: {
		color: 'gray',
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		/* paddingLeft: theme.spacing.unit * 5, */
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 600
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	toobar: {
		/* background: '#f9f8f7', */
		background: 'white',
		borderTop: '0.5px solid #f2f2f2',
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'block'
		}
	},
	sectionMobile: {
		display: 'flex',
		justifyContent: 'flex-end',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	btnIcon: {
		padding: 5
	},
	icon: {
		fontSize: 25,
		color: 'gray'
	}
})

class IdeameHeader extends React.Component {
	state = {
		anchorEl: null,
		mobileMoreAnchorEl: null
	}

	handleProfileMenuOpen = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleMenuClose = () => {
		this.setState({ anchorEl: null })
		this.handleMobileMenuClose()
	}

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget })
	}

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null })
	}

	render() {
		const { anchorEl, mobileMoreAnchorEl } = this.state
		const { classes } = this.props
		const isMenuOpen = Boolean(anchorEl)
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

		const renderMenu = (
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMenuOpen}
				onClose={this.handleMenuClose}
			>
				<MenuItem onClick={this.handleMenuClose}>Mis Aportes</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>Mis Proyectos</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>Mensajes</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>Mi Perfil</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>Salir</MenuItem>
			</Menu>
		)

		const renderMobileMenu = () => (
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMobileMenuOpen}
				onClose={this.handleMobileMenuClose}
			>
				<MenuItem>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<MailIcon className={classes.icon} />
						</Badge>
					</IconButton>
					<p>Messages</p>
				</MenuItem>
				<MenuItem>
					<IconButton color="inherit">
						<Badge badgeContent={11} color="secondary">
							<NotificationsIcon className={classes.icon} />
						</Badge>
					</IconButton>
					<p>Notifications</p>
				</MenuItem>
				<MenuItem onClick={this.handleProfileMenuOpen}>
					<IconButton color="inherit">
						<AccountCircle className={classes.icon} />
					</IconButton>
					<p>Profile</p>
				</MenuItem>
			</Menu>
		)

		return (
			<div className={classes.root}>
				<AppBar position="static" style={{ padding: 0, background: 'white' }}>
					<Toolbar style={{ minHeight: 50 }}>
						<Grid className={classes.contentFull}>
							<div style={{ maxWidth: 150, marginRight: 20 }}>
								<Image height={30} image="https://ideame-assets.s3.amazonaws.com/web/v2/images/ideame.logo.svg" />
								{/* <Text className={classes.title} left color="gray">
									ideame
								</Text> */}
							</div>
							<Paper elevation={1} className={classes.contentSearch}>
								<div className={classes.searchIcon}>
									<SearchIcon className={classes.icon} />
								</div>
								<div className={classes.search}>
									<InputBase
										placeholder="Buscar Proyecto"
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput
										}}
									/>
								</div>
							</Paper>
						</Grid>
						<div className={classes.sectionMobile}>
							<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
								<MoreIcon className={classes.icon} />
							</IconButton>
						</div>
					</Toolbar>
					<Toolbar style={{ minHeight: 45 }} className={classes.toobar}>
						<Grid className={classes.contentFullBetween}>
							<div style={{ display: 'flex', width: '100%', maxWidth: 260 }}>
								<Button href="#text-buttons" className={classes.button}>
									<Text left color="gray">
										VER IDEAS
									</Text>
								</Button>
								<Button href="#text-buttons" className={classes.button}>
									<Text left color="gray">
										TENGO UN IDEA
									</Text>
								</Button>
							</div>
							<div className={classes.sectionDesktop}>
								<Button href="#text-buttons" onClick={this.handleProfileMenuOpen} className={classes.button}>
									<Text left color="gray">
										MONEDA
									</Text>
								</Button>
								<Button href="#text-buttons" onClick={this.handleProfileMenuOpen} className={classes.button}>
									<Text left color="gray">
										IDIOMA
									</Text>
								</Button>
								<IconButton
									aria-owns={isMenuOpen ? 'material-appbar' : null}
									aria-haspopup="true"
									onClick={this.handleProfileMenuOpen}
									className={classes.btnIcon}
								>
									<Badge badgeContent={2} color="secondary">
										<AccountCircle className={classes.icon} />
									</Badge>
								</IconButton>
							</div>
						</Grid>
					</Toolbar>
				</AppBar>
				{renderMenu}
				{renderMobileMenu}
			</div>
		)
	}
}

IdeameHeader.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(IdeameHeader)
