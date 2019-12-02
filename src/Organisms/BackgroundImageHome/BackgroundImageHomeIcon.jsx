import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import PhoneIcon from '@material-ui/icons/Phone'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import HelpIcon from '@material-ui/icons/Help'

class BackgroundImageHomeIcon extends React.PureComponent {
	state = {
		value: 0
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	handleChangeIndex = index => {
		this.setState({ value: index })
	}

	render() {
		const {
			classes,
			imageHotel,
			contentHotels,
			imageVuelos,
			contentVuelos,
			imagePaquetes,
			imageCerros,
			contentPaquetes,
			contentCerros
		} = this.props
		const { value } = this.state

		return (
			<div className={classNames(classes.contentGallery)}>
				<div className={classNames(classes.contentCenter)} style={{ display: 'table', margin: 'auto' }}>
					<div className={classNames(classes.absoluteTabs)}>
						<div style={{ margin: 'auto', maxWidth: 1250, width: '100%' }}>
							<AppBar className="tabs" position="static" color="white">
								<Tabs
									value={value}
									className={classes.tabs}
									onChange={this.handleChange}
									scrollable
									scrollButtons="on"
									indicatorColor="primary"
									textColor="primary"
								>
									<Tab label="Hoteles" icon={<PhoneIcon />} className={classes.tab} />
									<Tab label="Vuelos" icon={<FavoriteIcon />} className={classes.tab} />
									<Tab label="Paquetes" icon={<PersonPinIcon />} className={classes.tab} />
									<Tab label="Cerro Martial" icon={<HelpIcon />} className={classes.tab} />
								</Tabs>
							</AppBar>
						</div>
					</div>
				</div>
				{value === 0 && (
					<div className="slideHome backgroundMobile">
						<section
							className={classNames(classes.slideHome)}
							style={{
								backgroundImage: `url(${imageHotel})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center'
							}}
						>
							<div className={classNames(classes.contentCenter)}>{contentHotels}</div>
						</section>
					</div>
				)}
				{value === 1 && (
					<div className="slideHome backgroundMobile">
						<section
							className={classNames(classes.slideHome)}
							style={{
								backgroundImage: `url(${imageVuelos})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center'
							}}
						>
							<div className={classNames(classes.contentCenter)}>{contentVuelos}</div>
						</section>
					</div>
				)}
				{value === 2 && (
					<div className="slideHome backgroundMobile">
						<section
							className={classNames(classes.slideHome)}
							style={{
								backgroundImage: `url(${imagePaquetes})`,
								backgroundSize: 'cover'
							}}
						>
							<div className={classNames(classes.contentCenter)}>{contentPaquetes}</div>
						</section>
					</div>
				)}
				{value === 3 && (
					<div className="slideHome backgroundMobile">
						<section
							className={classNames(classes.slideHome)}
							style={{
								backgroundImage: `url(${imageCerros})`,
								backgroundSize: 'cover'
							}}
						>
							<div className={classNames(classes.contentCenter)}>{contentCerros}</div>
						</section>
					</div>
				)}
			</div>
		)
	}
}
BackgroundImageHomeIcon.defaultProps = {
	imageHotel:
		'https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
	imageVuelos:
		'https://images.pexels.com/photos/286758/pexels-photo-286758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	imagePaquetes:
		'https://images.pexels.com/photos/235778/pexels-photo-235778.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
	imageCerros:
		'https://i2.wp.com/elmundodepeapa.com/wp-content/uploads/2017/07/Erlantz-05ene.2017-55.jpg?fit=1200%2C750&ssl=1'
}

BackgroundImageHomeIcon.propTypes = {
	imageHotel: PropTypes.string,
	imageVuelos: PropTypes.string,
	imagePaquetes: PropTypes.string,
	imageCerros: PropTypes.string,
	contentHotels: PropTypes.object,
	contentVuelos: PropTypes.object,
	contentPaquetes: PropTypes.object,
	contentCerros: PropTypes.object
}

export default withStyles(mauri => ({
	withTheme: true,
	slideHome: {
		width: '100%',
		minHeight: 450,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 0,

		'@media (max-width: 800px)': {
			minHeight: 500,
			backgroundImage: 'none!important'
		}
	},
	absoluteTabs: {
		position: 'absolute',
		background: 'white',
		zIndex: 1,
		top: 0,
		width: '100%',
		left: 0,

		'@media (max-width: 800px)': {
			position: 'absolute',
			zIndex: 1,
			top: 0,
			left: 0,
			width: '100%'
		}
	},
	tabs: {
		height: 65
	},
	tab: {
		color: 'gray',
		padding: 0,
		height: 65,
		fontSize: 13
	},
	absoluteText: {
		position: 'absolute',
		zIndex: 1,
		top: 100,
		'@media (max-width: 800px)': {
			top: 130
		}
	},
	titular: {
		color: 'white',
		marginBottom: 30,
		background: 'rgba(255,255,255,.3)',

		'@media (max-width: 800px)': {
			background: 'transparent',
			textAlign: 'center',
			color: 'gray',
			width: 'calc(100% - 20px)'
		}
	},
	contentCenter: {
		width: '100%',
		maxWidth: 800,
		'@media (max-width: 800px)': {
			maxWidth: 700,
			padding: 10
		}
	},
	noWrapper: {
		whiteSpace: 'nowrap'
	},
	contentGallery: {
		fontFamily: 'Roboto, sans-serif',
		width: '100%',
		position: 'relative',
		margin: 0,
		display: 'inline-block',
		padding: 0
	}
}))(BackgroundImageHomeIcon)
