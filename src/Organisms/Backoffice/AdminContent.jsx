import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import SimpleCard from '../Card/SimpleCard'
import Slider from '../Slider/Slider'
/* import SmallSearch from '../Search/SmallSearch' */
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'

const styles = () => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	items: {
		padding: 5
	},
	dialog: {
		minWidth: 400
	},
	upload: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		minWidth: 300,
		minHeight: 300,
		background: '#f9f8f7',
		border: '1px dashed silver',
		borderRadius: 10
	}
})
const settings = {
	dots: true,
	arrows: true,
	draggable: true
}

class AdminContent extends React.Component {
	state = {
		open: false
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	render() {
		const { classes, fullScreen } = this.props
		const { open } = this.state
		return (
			<React.Fragment>
				<div className={classes.root}>
					<div>
						<div onClick={this.handleClickOpen} className={classes.upload}>
							<Text center size={18} content="CARGAR CARD" />
						</div>
					</div>
					<div style={{ width: '100%' }}>
						<Slider slidesToShow={3} {...settings} className="carousel">
							<div className={classes.items}>
								<SimpleCard
									image="https://images.pexels.com/photos/709860/pexels-photo-709860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
									title="Vuelos a Berlin"
									subtitle="desde $17000"
								/>
							</div>
							<div className={classes.items}>
								<SimpleCard
									image="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
									title="Hoteles en Miami"
									subtitle="por noche desde $400"
								/>
							</div>
							<div className={classes.items}>
								<SimpleCard
									image="https://images.pexels.com/photos/60204/pexels-photo-60204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
									title="Paquetes a Buzios"
									subtitle="Últimos lugares!"
								/>
							</div>
						</Slider>
					</div>
					<Dialog
						fullScreen={fullScreen}
						open={open}
						onClose={this.handleClose}
						className={classes.dialog}
						aria-labelledby="responsive-dialog-title"
					>
						<DialogTitle id="responsive-dialog-title">Seleccionar tipo de Card</DialogTitle>
						<DialogContent>
							<Grid container spacing={2}>
								<Grid item xs={12} style={{ minWidth: 400 }}>
									<SimpleCard />
								</Grid>
							</Grid>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary">
								Disagree
							</Button>
							<Button onClick={this.handleClose} color="primary" autoFocus>
								Agree
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			</React.Fragment>
		)
	}
}

AdminContent.propTypes = {
	fullScreen: PropTypes.bool.isRequired
}
export default withMobileDialog()(withStyles(styles, { withTheme: true })(AdminContent))
