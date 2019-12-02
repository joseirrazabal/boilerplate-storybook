import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import InputSimple from '../../../Atoms/Input'

class Checkout extends React.Component {
	render() {
		const { classes, useDefaultCursor } = this.props
		return (
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6}>
					<InputSimple name={'Nombre'} defaultName={'Luciano'} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputSimple name={'Apellido'} defaultName={'Recchini'} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputSimple name={'Residencia'} defaultName={'Argentina'} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputSimple name={'Tipo y número de documento'} defaultName={'33180784'} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputSimple name={'Fecha de nacimiento'} defaultName={'28/04/1987'} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputSimple name={'Sexo'} defaultName="Masculino" />
				</Grid>
			</Grid>
		)
	}
}
Checkout.defaultProps = {}

Checkout.propTypes = {

}

export default withStyles(({ mauri: { color, variables, containerlg, paddingBox } }) => ({
	containerlg,
	paddingBox
}))(Checkout)
