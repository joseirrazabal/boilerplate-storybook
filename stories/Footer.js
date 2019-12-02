import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import * as FontAwesome from 'react-icons/fa'
import { Footer } from '../src'

const stories = storiesOf('Footer', module)

stories.add('Footer', () => {
	const options = Object.keys(FontAwesome)
	options.sort()
	options.push(' Sin iconos')

	return <Footer staticPolitics="Dirección General de Defensa y Protección al Consumidor - Consultas y/o denuncias. El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326 . La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Organo de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales." />
})
