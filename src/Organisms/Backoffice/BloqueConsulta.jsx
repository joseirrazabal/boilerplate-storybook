import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Button from '../../Atoms/Button/Button'
import ListCard from '../../Molecules/Backoffice/ListCard'
import ConsultCard from '../../Molecules/Backoffice/ConsultCard'

class BloqueConsulta extends React.Component {
	render() {
		const { classes, useDefaultCursor } = this.props
		return (
			<Grid container spacing={1} className={classNames(classes.global, classes.displayFlex)}>
				<Grid item xs={12}>
					<ListCard />
				</Grid>
				<Grid item xs={12}>
					<ConsultCard />
				</Grid>
			</Grid>
		)
	}
}
BloqueConsulta.defaultProps = {
	title: 'hola'
}

BloqueConsulta.propTypes = {

	title: PropTypes.string
}

export default withStyles(({ mauri: { color, variables } }) => ({
	global: {
		/* backgroundColor: 'white', */
		height: 'auto'
	},
	flexRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'flex-end',
		justifyContent: 'space-between'
	}
}))(BloqueConsulta)
