import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Image from '../../Atoms/Images/Image'
import Button from '../../Atoms/Button/Button'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'
import Carousel from '../../Molecules/Carousel/Carousel'

class ImageBookPaquetes extends React.Component {
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
		const { classes, useDefaultCursor, fullScreen } = this.props

		return (
			<section className={classNames(classes.noWrapper)}>
				<ul className={classNames(classes.ul)}>
					<li className={classNames(classes.li)}>
						<Image
							image={
								'https://images.pexels.com/photos/975761/pexels-photo-975761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
							}
							alt="Paquete a Buzios"
							height={350}
						/>
					</li>
					<li className={classNames(classes.li)}>
						<Image
							image={
								'https://images.pexels.com/photos/1072839/pexels-photo-1072839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
							}
							alt="Paquete a Buzios"
							height={350}
						/>
					</li>
					<li className={classNames(classes.li)}>
						<Image
							image={
								'https://images.pexels.com/photos/1072838/pexels-photo-1072838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
							}
							alt="Paquete a Buzios"
							height={350}
						/>
					</li>
					<li className={classNames(classes.li)}>
						<Image
							image={
								'https://images.pexels.com/photos/60204/pexels-photo-60204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
							}
							alt="Paquete a Buzios"
							height={350}
						/>
					</li>
					<li className={classNames(classes.li)}>
						<Image
							image={
								'https://images.pexels.com/photos/1072838/pexels-photo-1072838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
							}
							alt="Paquete a Buzios"
							height={350}
						/>
					</li>
					<li className={classNames(classes.li)}>
						<Image
							image={
								'https://images.pexels.com/photos/60204/pexels-photo-60204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
							}
							alt="Paquete a Buzios"
							height={350}
						/>
					</li>
					{/* <IconList
            className={classNames(classes.imageBook_title)}
            color={'white'}
            size={16}
            title={"Hotel Internacional Buenos Aires"}
          /> */}
					<div className={classNames(classes.btnAbsolute, classes.view_images)}>
						<Button radius border primary={false} onClick={this.handleClickOpen} text={'ver fotos'} />
					</div>
					<div className={classNames(classes.mask)} />
				</ul>
				<Dialog
					fullScreen={fullScreen}
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<AppBar color="#f2f2f2" position="relative">
						<Toolbar>
							<TitleSecondary content="Fotos" left />
							<IconButton
								style={{ right: 10, position: 'absolute' }}
								color="inherit"
								onClick={this.handleClose}
								aria-label="Close"
							>
								<CloseIcon style={{ fontSize: 40 }} />
							</IconButton>
						</Toolbar>
					</AppBar>
					<div
						style={{
							maxWidth: 1024,
							width: '100%',
							margin: 'auto'
						}}
					>
						<Carousel />
					</div>
				</Dialog>
			</section>
		)
	}
}
ImageBookPaquetes.defaultProps = {
	image: '',
	fixed: false
}

ImageBookPaquetes.propTypes = {
	fullScreen: PropTypes.bool.isRequired,
	image: PropTypes.string,
	fixed: PropTypes.bool
}

export default withMobileDialog()(
	withStyles(({ mauri: { color, variables } }) => ({
		noWrapper: {
			whiteSpace: 'nowrap'
		},
		ul: {
			padding: 0,
			margin: 0,
			width: '100%',
			height: 'auto',
			maxHeight: 350,
			overflow: 'hidden',
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			background: 'white',
			position: 'relative',

			'@media (max-width: 600px)': {
				maxHeight: 250
			}
		},
		li: {
			marginRight: 2,

			img: {
				margin: 0
			}
		},
		btnAbsolute: {
			position: 'absolute',
			zIndex: 2
		},
		view_images: {
			right: 10,
			bottom: 10
		},
		mask: {
			position: 'absolute',
			width: '100%',
			height: 200,
			left: 0,
			right: 0,
			bottom: 0,
			zIndex: 1,
			background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)'
		}
	}))(ImageBookPaquetes)
)
