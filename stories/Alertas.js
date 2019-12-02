import React from 'react'
import { storiesOf } from '@storybook/react'
import { Alertas, Messages, Success, EstimatedTime, PaymentError, TimeOutMessage, ChangeOfAirport, Pending, NotResultHotels, TagsNotification, Tag } from '../src'

const stories = storiesOf('Alertas, Mensajes y Tags', module)

stories.add('Alertas', () => <Alertas />)
stories.add('Messages', () => <Messages />)
stories.add('Success', () => <Success />)
stories.add('ChangeOfAirport', () => <ChangeOfAirport />)
stories.add('EstimatedTime', () => <EstimatedTime remainingTime={23 * 60 * 1000} total={30 * 60 * 1000} />)
stories.add('PaymentError', () => <PaymentError />)
stories.add('Pending', () => <Pending />)
stories.add('TimeOutMessage', () => <TimeOutMessage />)
stories.add('NotResultHotels', () => <NotResultHotels />)
stories.add('TagsNotification', () => (
	<React.Fragment>
		<TagsNotification background="#FF4D4D">
			<Tag icon="happy" iconSize={15} content="¡Felicitaciones! Estas a un solo paso!" color="white" />
		</TagsNotification>
		<TagsNotification background="#FFFFFF">
			<Tag icon="fire" iconSize={15} size={12} content="¡Ofertas implerdibles" />
		</TagsNotification>
		<TagsNotification background="#000000">
			<Tag icon="places" iconSize={15} size={12} content="¡Ultimos Lugares disponibles!" color="white" />
		</TagsNotification>
		<TagsNotification background="#55C443">
			<Tag icon="offer" iconSize={15} content="20% off" color="white" />
		</TagsNotification>
		<TagsNotification background="#000000">
			<Tag icon="airport" iconSize={15} content="Cambio de Aeropuerto" color="white" />
		</TagsNotification>
	</React.Fragment>
))
