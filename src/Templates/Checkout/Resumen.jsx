import React from 'react'

import { withStyles } from '@material-ui/styles'

import PaquetesCard from '../../Organisms/Card/PaquetesCard'

const Resumen = () => (
	<div style={{ width: '100%' }}>
		<PaquetesCard
			title="Búzios con Cenas de Regalo!"
			fecha={('Fecha', '11 de Marzo')}
			noches="7 noches desde Buenos Aires"
			precio={('Precio', 26850)}
			imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
		/>
	</div>
)

Resumen.defaultProps = {}

Resumen.propTypes = {

}
const styles = ({ mauri: { containerlg, paddingBox } }) => ({
	containerlg,
	paddingBox
})
export default withStyles(styles)(Resumen)
