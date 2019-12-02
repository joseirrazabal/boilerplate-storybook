import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import Avatar from '../../Atoms/Avatar'

const ComentariosCard = ({ classes, fecha, nombre }) => (
	<div className={classNames(classes.contentCard, classes.displayFlex)}>
		<div>
			<Avatar
				image="https://lh3.googleusercontent.com/-P9AP4vdTugM/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfxUquwVBMfRqw56TqgcO0XYriu86Q/s64-c-mo/photo.jpg"
				circle={50}
				maxHeight={40}
				alt="Nombre"
			/>
		</div>
		<div>
			<Text style={{ width: '100%', lineHeight: '25px' }} size={12} italic left content={fecha} color="black" />
			<TitleSecondary content={nombre} size={16} left bold color="black" />
			<Text
				style={{ width: '100%', lineHeight: '25px', marginTop: 10 }}
				size={14}
				content="El Obelisco, el Teatro Colón y la Avenida 9 de Julio pueden apreciarse desde el mirador del Panamericano Buenos Aires, hotel situado a 200 m de la Avenida Corrientes y a 600 m de la calle peatonal Florida, ofrece piscina cubierta climatizada y gimnasio en su piso 23. El Aeropuerto Internacional de Ezeiza queda a 32 km."
				left
				color="black"
			/>
		</div>
	</div>
)

ComentariosCard.defaultProps = {
	fecha: 'ejemplo',
	nombre: 'Lucho Reqini'
}

ComentariosCard.propTypes = {
	nombre: PropTypes.string,
	fecha: PropTypes.string
}
const styles = () => ({
	contentCard: {
		backgroundColor: 'white',
		borderRadius: 6,
		border: '0.5px solid silver',
		padding: 20,
		overflow: 'hidden'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between'
	}
})
export default withStyles(styles)(ComentariosCard)
