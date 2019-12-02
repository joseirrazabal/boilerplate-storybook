import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import Avatar from '../../Atoms/Avatar'
import InputSimple from '../../Atoms/Input'
import InputPassword from '../../Atoms/InputPassword'
import SelectNumber from '../../Atoms/SelectNumber'
import FavoriteCard from '../../Organisms/Card/FavoriteCard'
import NotificationCard from '../../Organisms/Card/NotificationCard'
import Header from '../../Organisms/Header/Header'

class Profile extends React.Component {
	state = {
		value: 0
	}

	handleChange = (event, value) => {
		let conejo = 'test'
		this.setState({ value })
	}

	handleChangeIndex = index => {
		this.setState({ value: index })
	}

	render() {
		const { classes, fullScreen, useDefaultCursor, theme } = this.props
		return (
			<div>
				<Header fixed={false} />
				<section
					className="paddingBox background-gray-secuondary"
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
				>
					<div>
						<div style={{ position: 'relative', marginBottom: 10 }}>
							<Avatar circle={50} maxHeight={200} alt="Nombre del  Usuario" notifications={0} />
						</div>
						<div>
							<Text
								content={
									<span style={{ fontSize: 18 }}>
										<strong>¡Hola</strong> Luciano!
									</span>
								}
							/>
						</div>
					</div>
				</section>
				<section style={{ backgroundColor: 'white' }}>
					<Paper elevation={2}>
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary"
							centered
							fullWidth
						>
							<Tab label="Mi Perfil" />
							<Tab label="Favoritos" />
							<Tab label="Notificaciones" />
							<Tab label="Personalizar" />
						</Tabs>
					</Paper>
				</section>
				<SwipeableViews
					axis={theme && theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={this.state.value}
					onChangeIndex={this.handleChangeIndex}
				>
					<Grid container spacing={2} className={classNames(classes.container, classes.paddingBox2)}>
						<Grid item xs={12} sm={6}>
							<div className={classNames(classes.paddingObject)}>
								<TitleSecondary left content="Datos personales" />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<InputSimple name="Luciano" defaultName="Nombre" />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<InputSimple name="Apellido" defaultName="Recchini" />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<InputSimple name="Email" defaultName="reqini@gmail.com" />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<InputSimple name="DNI" defaultName="33180784" />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<SelectNumber />
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div className={classNames(classes.paddingObject)}>
								<TitleSecondary left content="Mi contraseña" />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<InputPassword name="Contraseña" inputName="Luciano001" />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<Text left content="¿De donde sos?" />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<SelectNumber />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<SelectNumber />
							</div>
						</Grid>
					</Grid>
					<Grid container spacing={2} className={classNames(classes.container, classes.paddingBox2)}>
						<div style={{ width: '100%' }}>
							<div className={classNames(classes.paddingObject)}>
								<TitleSecondary left content="Este es tu Listado de Hoteles Favoritos" />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<FavoriteCard />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<FavoriteCard />
							</div>
							<div className={classNames(classes.paddingObject)}>
								<FavoriteCard />
							</div>
						</div>
					</Grid>
					<Grid container spacing={2} className={classNames(classes.container, classes.paddingBox2)}>
						<div style={{ width: '100%' }}>
							<div className={classNames(classes.paddingObject)}>
								<TitleSecondary left content="Este es tu Listado de Hoteles Favoritos" />
							</div>
							<div className={classNames(classes.paddingObject, { position: 'relative' })}>
								<NotificationCard />
							</div>
							<div className={classNames(classes.paddingObject, { position: 'relative' })}>
								<NotificationCard />
							</div>
							<div className={classNames(classes.paddingObject, { position: 'relative' })}>
								<NotificationCard />
							</div>
							<div className={classNames(classes.paddingObject, { position: 'relative' })}>
								<NotificationCard />
							</div>
							<div className={classNames(classes.paddingObject, { position: 'relative' })}>
								<NotificationCard />
							</div>
						</div>
					</Grid>
					<Grid container spacing={2} className={classNames(classes.container, classes.paddingBox2)}>
						<Grid item xs={12}>
							<div>
								<TitleSecondary left content="Idioma/Moneda" />
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div>
								<SelectNumber />
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div>
								<SelectNumber />
							</div>
						</Grid>
						<Grid item xs={12}>
							<div>
								<TitleSecondary left content="Preferencias de Búsqueda" />
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div>
								<InputSimple
									defaultName="Aeropuerto Internacional Ministro Pistarini (EZE)"
									name="Aeropuerto de Origen preferido"
								/>
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div>
								<InputSimple defaultName="Miami Beach, Florida, Estados Unidos" name="Ciudad Preferida" />
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div>
								<SelectNumber />
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div>
								<SelectNumber />
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div>
								<SelectNumber />
							</div>
						</Grid>
					</Grid>
				</SwipeableViews>
			</div>
		)
	}
}
Profile.defaultProps = {
	fixed: false
}

Profile.propTypes = {

	fixed: PropTypes.bool
}

export default withStyles(
	({ mauri: { color, variables, container, paddingBox, paddingBox2, paddingBox3, padding10, paddingObject } }) => ({
		container,
		paddingObject,
		padding10,
		paddingBox,
		paddingBox2,
		paddingBox3,
		root: {
			flexGrow: 1
		}
	})
)(Profile)
