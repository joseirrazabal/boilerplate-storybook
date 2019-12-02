import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import * as FontAwesome from 'react-icons/fa'
import { Header, HeaderNav, HeaderPerfil, HeaderNavSimple, IdeameHeader } from '../src'

const stories = storiesOf('Header', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

stories.add('Header', () => {
	const options = Object.keys(FontAwesome)
	options.sort()
	options.push(' Sin iconos')

	return <Header fixed={boolean('Fixed', false)} />
})

stories.add('IdeameHeader', () => <IdeameHeader />)

stories.add('Header Perfil', () => {
	const options = Object.keys(FontAwesome)
	options.sort()
	options.push(' Sin iconos')

	return <HeaderPerfil />
})

stories.add('HeaderNav', () => {
	const options = Object.keys(FontAwesome)
	options.sort()
	options.push(' Sin iconos')

	return (
		<HeaderNav
			fixed={boolean('Fixed', true)}
			title={text('Agregar Titulo', 'Registro')}
			icon={text('Agregar Icono', 'flaticon-close')}
		/>
	)
})

stories.add('HeaderNavSimple', () => {
	const options = Object.keys(FontAwesome)
	options.sort()
	options.push(' Sin iconos')

	return (
		<HeaderNavSimple
			fixed={boolean('Fixed', false)}
			title={text('Agregar Titulo', 'Registro')}
			icon={text('Agregar Icono', 'flaticon-close')}
		/>
	)
})
