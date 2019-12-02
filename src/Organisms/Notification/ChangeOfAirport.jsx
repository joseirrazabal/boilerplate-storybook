import React from 'react'
import { withStyles } from '@material-ui/styles'
/* import classNames from 'classnames' */
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

const styles = theme => ({})

const ChangeOfAirport = ({ classes }) => (
	<ContainerCard radius={0}>
		<CardContent flex="row" justify="flex-start" align="center" paddingConfig={5}>
			<div className="ChangeOfAirport_Svg" />
			<TitleSecondary left color="gray" size={14}>
				¡Atención! Buzios no cuenta con Aeropuerto propio
			</TitleSecondary>
		</CardContent>
	</ContainerCard>
)

ChangeOfAirport.defaultProps = {}
ChangeOfAirport.propTypes = {

}

export default withStyles(styles)(ChangeOfAirport)
