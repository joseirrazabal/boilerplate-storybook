import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { FaFilter } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import CloseIcon from '@material-ui/icons/Close'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import Button from '../../Atoms/Button/Button'
import SimpleSearch from '../Search/SimpleSearch'
import TabsOrdenar from '../../Molecules/TabsOrdenar/TabsOrdenar'
import Tags from '../../Atoms/Tags'
import Expander from '../../Atoms/Expander'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'

class FiltersHotelsMobile extends React.Component {
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

		return (
			<div>
				<div key={1} className={classNames(classes.buttonFiter)}>
					<Button
						variant="fab"
						color="secondary"
						aria-label="edit"
						onClick={this.handleClickOpen}
						style={{
							borderRadius: 50,
							boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
						}}
						iconLeft={<FaFilter />}
					/>
				</div>

				<Dialog
					key={2}
					fullScreen={fullScreen}
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<AppBar color="white" position="relative">
						<Toolbar style={{ minHeight: 40 }}>
							<TitleSecondary content="Filtrar y Ordenar" size={14} left />
							<IconButton
								style={{ right: 0, position: 'absolute' }}
								color="inherit"
								onClick={this.handleClose}
								aria-label="Close"
							>
								<CloseIcon style={{ fontSize: 30 }} />
							</IconButton>
						</Toolbar>
					</AppBar>
					<DialogContent style={{ background: '#f2f2f2', padding: 0 }}>
						<div>
							<TabsOrdenar />
							<div className={classNames(classes.contentFiltersMobile)}>
								<div className={classNames(classes.buttonMobile)}>
									<Tags circle={30} iconRight={<MdClose />} name="All Inclusive" />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Tags circle={30} iconRight={<MdClose />} name="Resorts" />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Tags circle={30} iconRight={<MdClose />} name="Hasta $1400" />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Tags circle={30} iconRight={<MdClose />} name="Hoteles" />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Tags circle={30} iconRight={<MdClose />} name="Hoteles" />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Tags circle={30} iconRight={<MdClose />} name="Hoteles" />
								</div>
								<div className={classNames(classes.buttonMobile)}>
									<Tags circle={30} iconRight={<MdClose />} name="Hoteles" />
								</div>
							</div>
							<Expander
								title="Precio"
								padding={0}
								borderTop="1px solid silver"
								content={<div style={{ width: '100%' }} />}
							/>
							<Expander
								title="Estrellas"
								padding={0}
								borderTop="1px solid silver"
								content={<div style={{ width: '100%' }} />}
							/>
							<Expander
								title="Alternativa de Pago"
								padding={0}
								borderTop="1px solid silver"
								content={<div style={{ width: '100%' }} />}
							/>
							<Expander
								title="Tipo de Alojamiento"
								padding={0}
								borderTop="1px solid silver"
								content={<div style={{ width: '100%' }} />}
							/>
							<Expander
								title="Regimen"
								padding={0}
								borderTop="1px solid silver"
								content={<div style={{ width: '100%' }} />}
							/>
							<Expander
								title="Perfil de Viaje"
								padding={0}
								borderTop="1px solid silver"
								content={<div style={{ width: '100%' }} />}
							/>
							<Expander
								title="Nombre"
								padding={20}
								borderTop="1px solid silver"
								content={
									<div style={{ width: '100%' }}>
										<div>
											<SimpleSearch />
										</div>
										<div style={{ marginTop: 10 }}>
											<Button border radius text="buscar" />
										</div>
									</div>
								}
							/>
						</div>
					</DialogContent>
					<DialogActions style={{ background: '#f2f2f2', margin: 0, padding: 10 }}>
						<Button text="Filtrar Busqueda" fullWidth onClick={this.handleClose} />
					</DialogActions>
				</Dialog>
			</div>
		)
	}
}

FiltersHotelsMobile.defaultProps = {
	title: null
}
FiltersHotelsMobile.propTypes = {

	title: PropTypes.string
}

export default withMobileDialog()(
	withStyles(() => ({
		contentFiltersMobile: {
			overflowX: 'scroll',
			whiteSpace: 'nowrap',
			width: '100%',
			padding: 10
		},
		buttonMobile: {
			width: 'auto',
			display: 'inline-block'
		},
		buttonFiter: {
			display: 'none',

			'@media (max-width: 800px)': {
				display: 'block',
				position: 'fixed',
				bottom: 10,
				right: 10,
				zIndex: 3
			}
		}
	}))(FiltersHotelsMobile)
)
