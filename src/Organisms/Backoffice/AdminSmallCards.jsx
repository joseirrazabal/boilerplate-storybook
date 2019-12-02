import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import { MdSave } from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import SelectNumber from '../../Atoms/SelectNumber'

import AdminSmallCard from '../../Molecules/Backoffice/AdminSmallCard'
import Button from '../../Atoms/Button/Button'

const styles = () => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	flexRow: {
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
	options: {
		position: 'absolute',
		top: 0,
		right: 0
	},
	upload: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		minWidth: 80,
		minHeight: 60,
		background: '#f9f8f7',
		border: '1px dashed silver',
		borderRadius: 10
	}
})

class AdminSmallCards extends React.Component {
	state = {
		open: false,
		checkedA: true
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	handleChange = name => event => {
		this.setState({ [name]: event.target.checked })
	}

	render() {
		const { classes, fullScreen } = this.props
		const { open, checkedA } = this.state
		return (
			<div className="paddingBox">
				<div style={{ padding: 10, width: '100%' }}>
					<TitleSecondary center size={20} content="Administrar Card Principales" />
				</div>
				<div className={classes.root}>
					<div className="containerlg paddingBox">
						<Button onClick={this.handleClickOpen} text="MODIFICAR COLUMNAS" size="medium" radius border primary />
					</div>
				</div>
				<div>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} lg={4}>
							<div style={{ position: 'relative' }}>
								<div className={classes.options}>
									<Tooltip title="Guardar Cambios">
										<IconButton aria-label="Editar">
											<MdSave style={{ color: 'gray', fontSize: 20 }} />
										</IconButton>
									</Tooltip>
								</div>
								<AdminSmallCard />
							</div>
						</Grid>
						<Grid item xs={12} sm={12} lg={4}>
							<div style={{ position: 'relative' }}>
								<div className={classes.options}>
									<Tooltip title="Guardar Cambios">
										<IconButton aria-label="Editar">
											<MdSave style={{ color: 'gray', fontSize: 20 }} />
										</IconButton>
									</Tooltip>
								</div>
								<AdminSmallCard />
							</div>
						</Grid>
						<Grid item xs={12} sm={12} lg={4}>
							<div style={{ position: 'relative' }}>
								<div className={classes.options}>
									<Tooltip title="Guardar Cambios">
										<IconButton aria-label="Editar">
											<MdSave style={{ color: 'gray', fontSize: 20 }} />
										</IconButton>
									</Tooltip>
								</div>
								<AdminSmallCard />
							</div>
						</Grid>
					</Grid>
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
							<Grid item xs={12} className={classes.flexRow}>
								<div style={{ width: '100%' }}>
									<FormControlLabel
										control={
											<Checkbox
												color="primary"
												checked={checkedA}
												onChange={this.handleChange('checkedA')}
												value="checkedA"
											/>
										}
										label="3 columnas"
									/>
								</div>
								<div style={{ width: '100%' }}>
									<SelectNumber values={[{ title: 'Solo Imagen', value: 'imagen', subtitle: 'solo imagenes' }]} />
								</div>
							</Grid>
							<Grid item xs={4}>
								<div onClick={this.handleClickOpen} className={classes.upload}>
									<Text center size={14} content="CARD" />
								</div>
							</Grid>
							<Grid item xs={4}>
								<div onClick={this.handleClickOpen} className={classes.upload}>
									<Text center size={14} content="CARD" />
								</div>
							</Grid>
							<Grid item xs={4}>
								<div onClick={this.handleClickOpen} className={classes.upload}>
									<Text center size={14} content="CARD" />
								</div>
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={12} className={classes.flexRow}>
								<div style={{ width: '100%' }}>
									<FormControlLabel
										control={
											<Checkbox
												color="primary"
												checked={checkedA}
												onChange={this.handleChange('checkedA')}
												value="checkedA"
											/>
										}
										label="2 columnas"
									/>
								</div>
								<div style={{ width: '100%' }}>
									<SelectNumber values={[{ title: 'Solo Imagen', value: 'imagen', subtitle: 'solo imagenes' }]} />
								</div>
							</Grid>
							<Grid item xs={6}>
								<div onClick={this.handleClickOpen} className={classes.upload}>
									<Text center size={14} content="CARD" />
								</div>
							</Grid>
							<Grid item xs={6}>
								<div onClick={this.handleClickOpen} className={classes.upload}>
									<Text center size={14} content="CARD" />
								</div>
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={12} className={classes.flexRow}>
								<div style={{ width: '100%' }}>
									<FormControlLabel
										control={
											<Checkbox
												color="primary"
												checked={checkedA}
												onChange={this.handleChange('checkedA')}
												value="checkedA"
											/>
										}
										label="1 columnas"
									/>
								</div>
								<div style={{ width: '100%' }}>
									<SelectNumber values={[{ title: 'Solo Imagen', value: 'imagen', subtitle: 'solo imagenes' }]} />
								</div>
							</Grid>
							<Grid item xs={12}>
								<div onClick={this.handleClickOpen} className={classes.upload}>
									<Text center size={14} content="CARD" />
								</div>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} text="CERRAR" size="small" radius secondary />
						<Button onClick={this.handleClose} text="AGREGAR" size="small" radius primary />
					</DialogActions>
				</Dialog>
			</div>
		)
	}
}

AdminSmallCards.propTypes = {
	classes: PropTypes.isRequired,
	fullScreen: PropTypes.bool.isRequired,
	theme: PropTypes.object.isRequired
}
export default withMobileDialog()(withStyles(styles, { withTheme: true })(AdminSmallCards))
