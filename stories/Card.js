import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'
import {
	SimpleCard,
	ContentCard,
	SmallCard,
	VerticalCard,
	RoomCard,
	ContainerCard,
	CreditCardCss,
	CheckoutCard,
	RecommendedCard,
	PaquetesCard,
	SlideCard,
	ComentariosCard,
	SimpleContentCard,
	FavoriteCard,
	NotificationCard,
	FechasCard,
	DesplegableContentCard,
	LoadingCard,
	LoadingCardPaquetes,
	LoadingRoomCard,
	ImageCard,
	CreditCard,
	CreditCardDataInput,
	CreditCardUpate,
	Cockade,
	RecomendedHotelCard,
	IdCardFullBackground,
	IdProjectCard,
	IdReward,
	TagsNotification,
	Tag
} from '../src'

const stories = storiesOf('Card', module)

stories.add('SimpleCard', () => (
	<SimpleCard
		title={text('Destino / Titulo', 'Hoteles en Miamioooooooo')}
		subtitle={text('Agregado', 'Últimos lugares')}
		price={number('Precio', 1200)}
		previousPrice={number('Precio anterior', 1600)}
		imageUrl={text('url de imagen', 'http://photos.hotelbeds.com/giata/bigger/00/003486/003486a_hb_ro_015.jpg')}
	/>
))

stories.add('SmallCard', () => (
	<SmallCard
		image={text(
			'image',
			'https://images.pexels.com/photos/709860/pexels-photo-709860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
		)}
		tag={
			<TagsNotification background="violet" height={30} padding={5}>
				<Tag iconSize={15} content="Cyber Monday" color="white" />
			</TagsNotification>
		}
		ImageFull={boolean('ImageFull', false)}
		title={text('Titulo', 'Hoteles en Miami')}
		subtitle={text('Sub titulo', 'Últimos lugares!')}
		lineThrough={boolean('Tachado', false)}
	/>
))

stories.add('VerticalCard', () => (
	<VerticalCard
		destino={text('Titulo', 'Vuelos a Londres')}
		span={text('Sub titulo', 'ida y vuelta')}
		text={text('Agregado de Texto', 'desde')}
		precio={text('Precio', '26850')}
		lineThrough={boolean('Tachado', false)}
		imageUrl={text(
			'url de imagen',
			'https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
		)}
	/>
))

stories.add('RoomCard', () => (
	<RoomCard
		title={text('Titulo', 'Habitación estandar de ejemplo para comprar.')}
		titleRight={text('desde', 'Total')}
		subtitleRight={number('Precio', 26850)}
	/>
))

stories.add('PaquetesCard', () => (
	<PaquetesCard
		title={text('Titulo', 'Búzios con Cenas de Regalo!')}
		fecha={text('Fecha', '11 de Marzo')}
		flight
		transfers
		assistance
		ticket
		hotel
		lastMinute
		noches={text('cantidad de noches', '7 noches desde Buenos Aires')}
		precio={number('Precio', 26850)}
		imageUrl={text(
			'url de imagen',
			'https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
		)}
	/>
))

stories.add('SlideCard', () => (
	<RecommendedCard>
		<SlideCard
			title={text('Titulo', 'Hotel Panamericano donde hay falopa seguro')}
			priceSubtitle={text('Subtitulo Precio', 'Precio final por persona por noche')}
			price={number('Precio', 26850)}
			landingMode
			previousPrice={text('Precio anterior', '20500')}
			favIcon={boolean('Fav', true)}
			services={array('servicios', [
				{ icon: 'Wifi', title: 'Alquiler de auto' },
				{ icon: 'flaticon-interface-1', title: 'Asistencia al viajero' },
				{ icon: 'flaticon-departure', title: 'Ticket para eventos' }
			])}
			currency={text('Moneda', '$')}
			stars={number('Estrellas', 2)}
			showStars={boolean('showStars', false)}
			cockade={<Cockade icon="flaticon-interface-1" title="!Ideal parejas! <3" />}
			onClick={code => {
				console.log('CODE', code)
			}}
			code={2}
			images={[
				{
					path: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
				},
				{
					path: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
				},
				{
					path: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
				}
			]}
		/>
	</RecommendedCard>
))

stories.add('ContentCard', () => (
	<RecommendedCard>
		<ContentCard />
	</RecommendedCard>
))
stories.add('RecomendedHotelCard', () => (
	<RecommendedCard>
		<RecomendedHotelCard />
	</RecommendedCard>
))

stories.add('ComentariosCard', () => (
	<ComentariosCard nombre={text('Nombre', 'Luciano Recchini')} fecha={text('Fecha', '11 de Abril del 2018')} />
))

stories.add('SimpleContentCard', () => (
	<SimpleContentCard title={text('Titulo', 'Mis Comentarios')}>hola</SimpleContentCard>
))

stories.add('FavoriteCard', () => <FavoriteCard />)

stories.add('CheckoutCard', () => <CheckoutCard />)

stories.add('NotificationCard', () => <NotificationCard />)

stories.add('FechasCard', () => <FechasCard />)

stories.add('Loading Card', () => <LoadingCard />)

stories.add('CreditCardCss', () => (
	<CreditCardCss
		onChange={financing => console.log({ financing })}
		banksFinancing={[
			{
				bank: { bankId: 'COMAFI', name: 'BANCO COMAFI SOCIEDAD ANONIMA', code: '00299' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'MASTER', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'CABAL', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'NATIVA', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			},
			{
				bank: { bankId: 'GALICIA', name: 'BANCO DE GALICIA Y BUENOS AIRES S.A.', code: '00007' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			},
			{
				bank: { bankId: 'ICBC', name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA', code: '00015' },
				cardFinancing: [
					{
						card: { cardId: 'VISA', name: 'Visa', code: '1' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},
					{
						card: { cardId: 'AMEX', name: 'American Express', code: '65' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					},

					{
						card: { cardId: 'MASTER', name: 'MasterCard', code: '15' },
						installmentsFinancing: [
							{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
							{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
							{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
						]
					}
				]
			}
		]}
	/>
))

stories.add('Loading Card Paquetes', () => <LoadingCardPaquetes />)

stories.add('Image Card', () => <ImageCard />)

stories.add('Loading Card Habitación', () => <LoadingRoomCard />)

stories.add('Ideame Reward', () => <IdReward />)

stories.add('Credit Card', () => (
	< CreditCard
		banksFinancing={
			[
				{
					bank: { bankId: 'COMAFI', name: 'BANCO COMAFI SOCIEDAD ANONIMA', code: '00299' },
					cardFinancing: [
						{
							card: { cardId: 'VISA', name: 'Visa', code: '1' },
							installmentsFinancing: [
								{ installments: 1, interest: 0.0, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						},
						{
							card: { cardId: 'MASTER', name: 'Visa', code: '1' },
							installmentsFinancing: [
								{ installments: 1, interest: 0.0, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						},
						{
							card: { cardId: 'AMEX', name: 'American Express', code: '65' },
							installmentsFinancing: [
								{ installments: 1, interest: 0, cft: 0.7, tea: 0.2 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						},
						{
							card: { cardId: 'CABAL', name: 'Visa', code: '1' },
							installmentsFinancing: [
								{ installments: 1, interest: 0.0, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						},
						{
							card: { cardId: 'NATIVA', name: 'Visa', code: '1' },
							installmentsFinancing: [
								{ installments: 1, interest: 0.0, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						}
					]
				},
				{
					bank: { bankId: 'GALICIA', name: 'BANCO DE GALICIA Y BUENOS AIRES S.A.', code: '00007' },
					cardFinancing: [
						{
							card: { cardId: 'VISA', name: 'Visa', code: '1' },
							installmentsFinancing: [
								{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						},
						{
							card: { cardId: 'AMEX', name: 'American Express', code: '65' },
							installmentsFinancing: [
								{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
								{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						}
					]
				},
				{
					bank: { bankId: 'ICBC', name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA', code: '00015' },
					cardFinancing: [
						{
							card: { cardId: 'VISA', name: 'Visa', code: '1' },
							installmentsFinancing: [
								{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						},
						{
							card: { cardId: 'AMEX', name: 'American Express', code: '65' },
							installmentsFinancing: [
								{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
								{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						},
						{
							card: { cardId: 'MASTER', name: 'MasterCard', code: '15' },
							installmentsFinancing: [
								{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
								{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						}
					]
				},
				{
					bank: { bankId: 'OTROS', name: 'OTROS', code: '99999' },
					cardFinancing: [
						{
							card: { cardId: 'VISA', name: 'Visa', code: '1' },
							installmentsFinancing: [
								{ installments: 3, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						},
						{
							card: { cardId: 'AMEX', name: 'American Express', code: '65' },
							installmentsFinancing: [
								{ installments: 3, interest: 0.1, cft: 0.7, tea: 0.2 },
								{ installments: 6, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 9, interest: 0.3, cft: 0.1, tea: 0.7 },
								{ installments: 12, interest: 0.3, cft: 0.1, tea: 0.7 }
							]
						}
					]
				},
			]}
		onChange={financing => console.log({ financing })}
		number="4546456768790909"
		expiry="12/20"
		cvc="123"
		name="Rosa Meltroso"
		amount={2500}
	/>
))

class CreditCardContainer extends React.Component {
	state = {}

	render() {
		return (
			<div>
				<CreditCard number="4546456768790909" expiry="12/20" cvc="123" name="Rosa Meltroso" />
				<CreditCardDataInput
					error={{ 'card-expiry': 'sarasa', cvc: 'CACAA', 'card-number': '12312312' }}
					valued={this.state}
					onChange={({ target }) => {
						this.setState({ [target.id]: target.value })
					}}
				/>
			</div>
		)
	}
}

stories.add('Credit Card Data Input', () => <CreditCardContainer />)

stories.add('Ideame Card Full Background', () => <IdCardFullBackground />)

stories.add('Ideame Card Project', () => <IdProjectCard />)

stories.add('DesplegableContentCard', () => (
	<DesplegableContentCard
		title={text('Titulo', 'Descripción del Hotel')}
		collapsedHeight={number('Alto', 100)}
		content={text(
			'Contenido',
			`
					El Obelisco, el Teatro Colón y la Avenida 9 de Julio pueden apreciarse desde el mirador del Panamericano
					Buenos Aires, hotel situado a 200 m de la Avenida Corrientes y a 600 m de la calle peatonal Florida, ofrece
					piscina cubierta climatizada y gimnasio en su piso 23. El Aeropuerto Internacional de Ezeiza queda a 32 km.
					El Obelisco, el Teatro Colón y la Avenida 9 de Julio pueden apreciarse desde el mirador del Panamericano
					Buenos Aires, hotel situado a 200 m de la Avenida Corrientes y a 600 m de la calle peatonal Florida, ofrece
					piscina cubierta climatizada y gimnasio en su piso 23. El Aeropuerto Internacional de Ezeiza queda a 32 km.
					El Obelisco, el Teatro Colón y la Avenida 9 de Julio pueden apreciarse desde el mirador del Panamericano
					Buenos Aires, hotel situado a 200 m de la Avenida Corrientes y a 600 m de la calle peatonal Florida, ofrece
					piscina cubierta climatizada y gimnasio en su piso 23. El Aeropuerto Internacional de Ezeiza queda a 32 km. El
					Obelisco, el Teatro Colón y la Avenida 9 de Julio pueden apreciarse desde el mirador del Panamericano Buenos
					Aires, hotel situado a 200 m de la Avenida Corrientes y a 600 m de la calle peatonal Florida, ofrece piscina
					cubierta climatizada y gimnasio en su piso 23. El Aeropuerto Internacional de Ezeiza queda a 32 km.
        `
		)}
	/>
))

const values = {
	titularCard: 'Perter Parker',
	'card-number': '4585 9666 3333 2122',
	'card-expiry': '02 / 20',
	cvc: '666'
}
const error = {
	titularCard: 'ingrese el titular de la tarjeta',
	'card-number': 'numero invalido',
	'card-expiry': 'fecha invalida',
	cvc: 'codigo invalido'
}
stories.add('Credit Card Upate', () => (
	<CreditCardUpate
		valued={values}
		dataDecidir="JUAN"
		error={error}
		onChange={e => console.log('object')}
		onBlur={e => console.log('object')}
	/>
))

stories.add('SlideCard for packages', () => (
	<SlideCard
		title={text('Titulo', 'Hotel Panamericano donde hay falopa seguro')}
		stars={number('Estrellas', 2)}
		showStars={true}
		images={[]}
	/>
))
