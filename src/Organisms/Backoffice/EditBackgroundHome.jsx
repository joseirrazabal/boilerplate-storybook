import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import SwipeableViews from 'react-swipeable-views'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '../../Atoms/Button/Button'

class EditBackgroundHome extends React.Component {
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
		const { theme, classes, useDefaultCursor } = this.props
		return (
			<div className={classNames(classes.contentGallery)}>
				<div className={classNames(classes.contentCenter)} style={{ display: 'table', margin: 'auto' }}>
					{/* <h1 className={classNames(classes.titular, classes.absoluteText)}>
						¡Vivi tu Mejor <strong>Experiencia!</strong>
					</h1> */}
					<div className={classNames(classes.absoluteTabs)}>
						<AppBar className="tabs" position="static" color="inherit">
							<Tabs
								value={this.state.value}
								onChange={this.handleChange}
								indicatorColor="primary"
								textColor="primary"
								fullWidth
							>
								<Tab className="tab" label="Hoteles" />
								<Tab className="tab" label="Vuelos" />
								<Tab className="tab" label="Paquetes" />
							</Tabs>
						</AppBar>
					</div>
				</div>
				<SwipeableViews
					axis={theme && theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={this.state.value}
					onChangeIndex={this.handleChangeIndex}
				>
					<div className="slideHome backgroundMobile">
						<section
							className={classNames(classes.slideHome, {
								backgroundImage: 'url(' + this.props.imageHotel + ')',
								backgroundSize: 'cover'
							})}
						>
							<div className={classNames(classes.contentCenter)}>
								<Button text="Cambiar" radius border />
							</div>
						</section>
					</div>
					<div className="slideHome backgroundMobile">
						<section
							className={classNames(classes.slideHome, {
								backgroundImage: 'url(' + this.props.imageVuelos + ')',
								backgroundSize: 'cover'
							})}
						>
							<div className={classNames(classes.contentCenter)}>
								<Button text="Cambiar" radius border />
							</div>
						</section>
					</div>
					<div className="slideHome backgroundMobile">
						<section
							className={classNames(classes.slideHome, {
								backgroundImage: 'url(' + this.props.imagePaquetes + ')',
								backgroundSize: 'cover'
							})}
						>
							<div className={classNames(classes.contentCenter)}>
								<Button text="Cambiar" radius border />
							</div>
						</section>
					</div>
				</SwipeableViews>
			</div>
		)
	}
}
EditBackgroundHome.defaultProps = {
	imageHotel: 'https://images.pexels.com/photos/286758/pexels-photo-286758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
	imageVuelos: 'https://images.pexels.com/photos/372738/pexels-photo-372738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
	imagePaquetes:
		'https://images.pexels.com/photos/221433/pexels-photo-221433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
}

EditBackgroundHome.propTypes = {
	imageHotel: PropTypes.string,
	imageVuelos: PropTypes.string,
	imagePaquetes: PropTypes.string,
	contentHotels: PropTypes.object,
	contentVuelos: PropTypes.object,
	contentPaquetes: PropTypes.object
}

export default withStyles(mauri => ({
	slideHome: {
		width: '100%',
		minHeight: 500,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 0,

		'@media (max-width: 800px)': {
			minHeight: 500,
			backgroundImage: 'none'
		}
	},
	absoluteTabs: {
		position: 'absolute',
		zIndex: 1,
		top: 177,
		'@media (max-width: 800px)': {
			position: 'absolute',
			zIndex: 1,
			top: 0,
			left: 0,
			width: '100%'
		}
	},
	edit: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		bottom: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background: 'rgba(0, 0, 0, .5)',
		right: 0,
		zIndex: 3
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
		'@media (max-width: 800px)': {
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
	contentGallery: {
		fontFamily: 'Roboto, sans-serif',
		width: '100%',
		position: 'relative',
		margin: 0,
		display: 'inline-block',
		padding: 0
	}
}))(EditBackgroundHome)
