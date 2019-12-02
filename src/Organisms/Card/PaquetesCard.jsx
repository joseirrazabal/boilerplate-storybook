import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Tooltip from '@material-ui/core/Tooltip'

import {
	MdFlight, // Aéreo
	MdDirectionsBus, // Bus
	MdDirectionsBoat, // Barco
	MdLocalTaxi, // Traslados
	MdHotel, // Alojamiento
	MdEnhancedEncryption, // Asistencia al viajero
	MdConfirmationNumber, // Tickets
	MdRowing, // Excursiones
	MdTimeToLeave, // Alquiler auto
	MdDirectionsWalk, // Guía turístico
	MdFingerprint, // Magic Bands
	MdAddAlarm // Horas extendidas
} from 'react-icons/md'

import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import { TagsNotification, Tag } from '../Notification/Tags/TagsNotification'
import CardAction from '../../Atoms/Card/CardAction'
import CardContent from '../../Atoms/Card/CardContent'
import Button from '../../Atoms/Button/Button'
import ImageBackground from '../../Atoms/Images/ImageBackground'
/* import IconsFontComponent from '../../Atoms/IconsFont' */

const serviceName = type => {
	switch (type) {
		case 'flight':
			return 'Aéreo'
		case 'bus':
			return 'Bus'
		case 'ship':
			return 'Barco'
		case 'transport':
			return 'Traslados'
		case 'hotel':
			return 'Alojamiento'
		case 'assist_card':
			return 'Asistencia al viajero'
		case 'tickets':
			return 'Tickets'
		case 'magic_bands':
			return 'Magic Bands'
		case 'extended_hours':
			return 'Horas extendidas'
		case 'tourist_guide':
			return 'Guía turístico'
		case 'tours':
			return 'Excursiones'
		default:
			return false
	}
}

const serviceIcon = type => {
	switch (type) {
		case 'flight':
			return <MdFlight />
		case 'bus':
			return <MdDirectionsBus />
		case 'ship':
			return <MdDirectionsBoat />
		case 'transport':
			return <MdLocalTaxi />
		case 'hotel':
			return <MdHotel />
		case 'assist_card':
			return <MdEnhancedEncryption />
		case 'tours':
			return <MdRowing />
		case 'tickets':
			return <MdConfirmationNumber />
		case 'magic_bands':
			return <MdFingerprint />
		case 'extended_hours':
			return <MdAddAlarm />
		case 'tourist_guide':
			return <MdDirectionsWalk />
		default:
			return false
	}
}

const PaquetesCard = ({
	classes,
	imageUrl,
	title,
	noches,
	fecha,
	precio,
	text,
	minHeight,
	tagDay,
	tags,
	onSelect,
	alt,
	url,
	services,
	installments,
	installments_fare
}) => {
	let lastMinute = false
	let cyberMonday = false

	tags &&
		tags.map(item => {
			if (item.value === 'LAST_MINUTE') {
				lastMinute = true
			}
			if (item.value === 'CYBER' || item.value === 'CYBER_SALE') {
				cyberMonday = true
			}
		})

	let orderServices = [
		'flight',
		'bus',
		'ship',
		'hotel',
		'transport',
		'assist_card',
		'tours',
		'tickets',
		'magic_bands',
		'extended_hours',
		'tourist_guide'
	]

	let finalServices = []
	let contService = 0
	orderServices.map(item => {
		if (contService < 4 && services[item] === true) {
			contService++
			finalServices.push(item)
		}
	})

	return (
		<ContainerCard shadow>
			<a href={url} aria-label={alt}>
				<CardAction>
					<div
						key={1}
						// style={{
						// 	backgroundImage: `url(${imageUrl})`,
						// 	backgroundSize: 500,
						// 	borderRadius: 6,
						// 	backgroundPosition: 'center',
						// 	minHeight
						// }}
					>
						<ImageBackground
							backgroundImage={imageUrl}
							alt={alt}
							minHeight={minHeight}
							widthResize={470}
							heightResize={minHeight}
						/>

						<div className={classNames(classes.shadow, classes.padding, classes.absolute, classes.displayFlex)}>
							<div>
								<Text size={16} content={title} color="white" />
							</div>
						</div>
						<div className={classes.tag}>
							{lastMinute ? (
								<TagsNotification background="white" height={30} padding={5}>
									<Tag icon="fire" iconSize={12} content="Last Minute" color="FF4D4D" />
								</TagsNotification>
							) : (
								<React.Fragment />
							)}
							{cyberMonday ? (
								<TagsNotification background="#3926BE" height={30} padding={5}>
									<Tag
										iconSize={12}
										color="#FFFFFF"
										content={
											<span>
												CYBER{' '}
												<span
													style={{
														fontWeight: '900'
													}}
												>
													SALE
												</span>
											</span>
										}
									/>
								</TagsNotification>
							) : (
								<React.Fragment />
							)}
							{tagDay ? (
								<TagsNotification background="violet" height={30} padding={5}>
									<Tag iconSize={15} content="Cyber Monday" color="white" />
								</TagsNotification>
							) : (
								<React.Fragment />
							)}
						</div>
					</div>
				</CardAction>
				<CardContent flex="column" justify="space-between">
					{noches && (
						<div key={2} className={classNames(classes.noches)}>
							<Text size={12} content={noches} color="white" />
						</div>
					)}
					<div key={3} className={classNames(classes.displayFlex, classes.padding, classes.fechaIcons)}>
						<div>
							<TitleSecondary content="Fecha" size={14} left bold color="black" />
							<Text
								style={{
									width: '100%'
								}}
								size={13}
								content={fecha}
								italic
								color="black"
							/>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center'
							}}
						>
							{finalServices.map(item => {
								return (
									<Tooltip title={serviceName(item)} placement="top">
										<div className={classNames(classes.icon)}>{serviceIcon(item)}</div>
									</Tooltip>
								)
							})}
						</div>
					</div>
					<div
						key={4}
						style={{
							background: '#f9f8f7'
						}}
						className={classNames(classes.displayFlex, classes.padding)}
					>
						<div>
							<TitleSecondary content={`$${precio}`} size={16} left bold color="black" />
							<Text
								style={{
									width: '100%'
								}}
								size={13}
								content={text}
								italic
								color="black"
							/>
						</div>
						{installments > 1 && installments_fare > 0 && (
							<div>
								<TitleSecondary content={`$${installments_fare}`} size={16} left bold color="black" />
								<Text
									style={{
										width: '100%'
									}}
									size={13}
									content={`${installments} cuotas fijas`}
									italic
									color="black"
								/>
							</div>
						)}
						{false && (
							<div>
								<a href={onSelect}>
									<Button
										radius
										text="Ver detalle"
										//onClick={onSelect}
										border
									/>
								</a>
							</div>
						)}
					</div>
				</CardContent>
			</a>
		</ContainerCard>
	)
}

PaquetesCard.defaultProps = {
	noches: false,
	fecha: null,
	minHeight: 160,
	title: 'Vuelos a Londres',
	precio: 28000,
	text: 'por noche',
	imageUrl: '',
	tagDay: false,
	lastMinute: false,
	hotel: true,
	ticket: false,
	assistance: true,
	transfers: false,
	flight: true,
	onSelect: () => {}
}

PaquetesCard.propTypes = {
	title: PropTypes.string,
	noches: PropTypes.string,
	fecha: PropTypes.string,
	tagDay: PropTypes.string,
	lastMinute: PropTypes.string,
	hotel: PropTypes.string,
	ticket: PropTypes.string,
	assistance: PropTypes.string,
	transfers: PropTypes.string,
	flight: PropTypes.string,
	minHeight: PropTypes.number,
	precio: PropTypes.number,
	imageUrl: PropTypes.string,
	text: PropTypes.string,
	onSelect: PropTypes.func
}
const styles = ({ palette }) => ({
	floatL: {
		float: 'left'
	},
	floatR: {
		float: 'right'
	},
	padding: {
		padding: 10
	},
	tag: {
		position: 'absolute',
		top: 10,
		left: 0
	},
	fechaIcons: {
		backgroundColor: 'white'
	},
	icon: {
		background: '#f2f2f2',
		borderRadius: 50,
		padding: 5,
		marginLeft: 10
	},
	noches: {
		backgroundColor: palette.optional.black,
		width: '100%',
		padding: '5px 10px',
		position: 'relative'
	},
	radius: {
		overFlow: 'hidden'
	},
	absolute: {
		position: 'absolute',
		width: '100%',
		bottom: 0
	},
	shadow: {
		backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(0,0,0,.7))'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})
export default withStyles(styles)(PaquetesCard)
