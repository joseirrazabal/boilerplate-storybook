import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'; import classNames from 'classnames'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

class ConsultCard extends React.PureComponent {
	render() {

		const { classes, nombre, phone, fecha } = this.props

		return (
			<ContainerCard>
				<CardContent paddingConfig={15} flex="column">
					<Text tyle={{ width: '100%', lineHeight: '25px' }} size={12} italic left content={fecha} color="black" />
					<Text tyle={{ width: '100%', lineHeight: '25px' }} size={13} left content={'Teléfono: ' + phone} color="black" />
					<TitleSecondary content={`Nombre: ${  nombre}`} size={14} left bold color="black" />
					<Text style={{ width: '100%', lineHeight: '25px', marginTop: 10 }} size={14} content="El Obelisco, el Teatro Colón y la Avenida 9 de Julio pueden apreciarse desde el mirador del Panamericano Buenos Aires, hotel situado a 200 m de la Avenida Corrientes y a 600 m de la calle peatonal Florida, ofrece piscina cubierta climatizada y gimnasio en su piso 23. El Aeropuerto Internacional de Ezeiza queda a 32 km" left color="black" />
				</CardContent>
			</ContainerCard>
		)
	}
}
ConsultCard.defaultProps = {
	fecha: '23 de Julio 2018',
	nombre: 'Luciano Recchini',
	phone: 1168610825
}

ConsultCard.propTypes = {

	nombre: PropTypes.string,
	phone: PropTypes.number,
	fecha: PropTypes.string
}

export default withStyles(({ mauri: { color, variables } }) => ({
	displayFlex: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between'
	}
}))(ConsultCard)
