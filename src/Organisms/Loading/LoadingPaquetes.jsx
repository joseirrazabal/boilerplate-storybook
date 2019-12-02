import React from 'react'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import LoadingCardPaquetes from '../Card/LoadingCardPaquetes'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'

class LoadingPaquetes extends React.PureComponent {
	render() {
		const { classes } = this.props

		return (
			<React.Fragment>
				<Grid container spacing={1}>
					<Grid container spacing={0} className={classNames(classes.containerlg)}>
						<Grid container spacing={2} className={classNames(classes.contentHotels)}>
							<Grid xs={12} className={classNames(classes.flexCenter)}>
								<div className="notResultPaquetes" />
							</Grid>
							<Grid xs={12} className={classNames(classes.padding20)}>
								<TitleSecondary center size={22} content="No se Encontraron resultados" />
							</Grid>
							<Grid item xs={12} md={6} lg={4} xl={3}>
								<LoadingCardPaquetes />
							</Grid>
							<Grid item xs={12} md={6} lg={4} xl={3}>
								<LoadingCardPaquetes />
							</Grid>
							<Grid item xs={12} md={6} lg={4} xl={3}>
								<LoadingCardPaquetes />
							</Grid>
							<Grid item xs={12} md={6} lg={4} xl={3}>
								<LoadingCardPaquetes />
							</Grid>
							<Grid item xs={12} md={6} lg={4} xl={3}>
								<LoadingCardPaquetes />
							</Grid>
							<Grid item xs={12} md={6} lg={4} xl={3}>
								<LoadingCardPaquetes />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</React.Fragment>
		)
	}
}

LoadingPaquetes.defaultProps = {}

LoadingPaquetes.propTypes = {

}

const styles = () => ({
	flexCenter: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 45
	},
	padding20: {
		paddingTop: 20,
		paddingBottom: 20
	}
})

export default withStyles(styles)(LoadingPaquetes)
