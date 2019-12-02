import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'
// import CloseIcon from '@material-ui/icons/Close'

import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'

const TimeOutMessage = ({ classes }) => {
	return (
		<Dialog fullScreen={false} open={true} aria-labelledby="responsive-dialog-title">
			<DialogContent style={{ padding: 10, background: '#f2f2f2' }}>
				<div
					style={{
						maxWidth: 400,
						width: '100%',
						background: 'white',
						maxHeight: 400,
						padding: 20,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						borderRadius: 6,
						justifyContent: 'center'
					}}
				>
					<div className="TimeOut_Svg" />
					<div style={{ marginBottom: 10 }}>
						<TitleSecondary center color="gray" size={23} content="¡Termino el tiempo!" />
					</div>
					<div>
						<Text
							center
							italic
							color="gray"
							size={17}
							content="Ya paso el timpo estipulado para la carga del formulario"
						/>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)

	/*
	return (
		<div className={classNames(classes.contentAlert)}>
			<div className={classNames(classes.close)}>
				<CloseIcon style={{ color: 'white', fontSize: 30 }} />
			</div>
			<div
				style={{
					maxWidth: 400,
					width: '100%',
					background: 'white',
					maxHeight: 400,
					padding: 20,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					borderRadius: 6,
					justifyContent: 'center'
				}}
			>
				<div className="TimeOut_Svg" />
				<div style={{ marginBottom: 10 }}>
					<TitleSecondary center color="gray" size={23} content="¡Termino el tiempo!" />
				</div>
				<div>
					<Text
						center
						italic
						color="gray"
						size={17}
						content="Ya paso el timpo estipulado para la carga del formulario"
					/>
				</div>
			</div>
		</div>
	)
  */
}

TimeOutMessage.defaultProps = {}
TimeOutMessage.propTypes = {

}
const styles = () => ({
	contentAlert: {
		position: 'fixed',
		zIndex: 5,
		width: '100%',
		height: '100%',
		background: 'rgba(0,0,0,.6)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	close: {
		position: 'absolute',
		cursor: 'pointer',
		top: 10,
		right: 10
	}
})
export default withStyles(styles)(TimeOutMessage)
