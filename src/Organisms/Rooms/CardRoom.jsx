import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { MdWhatshot } from 'react-icons/md'
import Slider from 'react-slick'
import Button from '../../Atoms/Button/Button'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import Image from '../../Atoms/Images/Image'
import { Text, TitlePrimary } from '../../Atoms/TitleLabel/TitleLabel'

const settingsMobile = {
  centerMode: false,
  dots: false,
  infinite: true,
  draggable: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const styles = ({palette, breakpoints}) => ({
  borderRight: {
    borderRight: '1px solid #F2F2F2'
  },
  GlobalContainer: {
    padding: 15
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  RoomCardDisabled: {},
  contentRoomCard: {
    borderRadius: 6,
    '&:hover': {
      background: 'white'
    },
    '&$RoomCardDisabled': {
      background: '#f2f2f2',
      border: '0.5px dashed #ccc',
      borderRadius: 6,
      overflow: 'hidden',
      cursor: 'not-allowed'
    }
  },
  RoomCardSelected: {
    boxShadow: `0px 4px 14px rgba(0,0,0,0.3)`,
    overflow: 'hidden',
    border: '0.5px solid #4A90E2'
  },
  root: {
    color: 'gray',
    $standar: {
      color: 'gray'
    }
  },
  checked: {},
  default: {
    background: 'white',
    '&:hover': {
      background: 'white'
    }
  },
  lastPlaces: {
    width: '100%',
    height: 30,
    padding: 3,
    background: '#f9f8f7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  off: {
    background: '#4A90E2',
    width: 'auto',
    maxWidth: 60,
    border: '0.4px solid white',
    borderRadius: 3,
    /* 	padding: 3, */
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center'
  },
  active: {
    background: 'white'
  },
  desabled: {
    background: '#f2f2f2'
  },
  imageZoom: {
    position: 'absolute',
    background: 'rgba(255,255,255,0.7)',
    left: 3,
    top: 3
  },
  borderTop: {
    borderTop: '1px solid #f2f2f2'
  },
  noWrapper: {
    width: 100,
    padding: 0,
    overflowX: 'scroll',
    display: 'flex',
    whiteSpace: 'nowrap',
    position: 'relative',

    '&:after': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      width: 60,
      height: '100%',
      backgroundImage: 'linear-gradient(to right,rgba(249, 248, 247,0),rgba(249, 248, 247,1))'
    }
  },
  bloque1: {
    width: '100%',
    background: 'white',
    padding: 10,
    borderRadius: 6,
    boxShadow: `0px 1px 4px rgba(0,0,0,0.3)`
  },
  selected: {
    background: palette.secondary.main
  },
  dialog: {
    [breakpoints.only('xs')]: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0
    }
  }
})

class CardRoom extends React.PureComponent {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const {classes, lastPlaces, images, image, roomName, facilities, bedType, fullScreen, descriptionRoom, finances, change, handleClick} = this.props

    return (
      <ContainerCard shadow>
				<Grid container className={classNames(classes.contentRoomCard)}>
					<Grid container item xs={12} lg={3} className={classNames(classes.borderRight)}>
						<div className={classNames(classes.lastPlaces)}>
							<MdWhatshot color="#FF4D4D" />
							<Text
      content={lastPlaces == 1 ? '¡Último Lugar!' : `¡Últimos ${lastPlaces} lugares!`}
      style={{
        width: 'auto'
      }}
      color="#FF4D4D"
      size={11}
      left
      />
						</div>
						<Grid container item xs={12} className="padding10">
							<Grid item xs={12}>
								<div style={{
        paddingBottom: 10
      }}>
									<TitlePrimary content={roomName && roomName} left size={15} />
								</div>
								<div>
									{ /* postLanzamiento */ }
									<ul style={{
        margin: 0,
        paddingBottom: 0
      }}>
										{ /* {images &&
											images.length > 0 && (
												<div className={classNames(classes.imageZoom)}>
													<Button
														size="small"
														link
														primary={false}
														style={{ padding: 5 }}
														text="ampliar"
														onClick={this.handleClickOpen}
													/>
												</div>
											)} */ }
										{images && images[0] && (
      <li style={{
        marginRight: 2,
        cursor: 'pointer'
      }} onClick={this.handleClickOpen}>
												<Image title="imagen de avatar" alt="Avatar Profile" height={60} image={images[0]} />
											</li>
      )}
									</ul>
								</div>
							</Grid>
							{ /* <Grid item xs={12}>
								<div style={{ paddingTop: 10, paddingBottom: 10 }}>
									<Text content="Servicios" italic left size={14} />
								</div>
								<div style={{ position: 'relative' }}>
									<ul className={classNames(classes.noWrapper)} style={{ margin: 0 }}>
										{facilities &&
											facilities.map((Facility, i) => (
												<li key={i}>
													<span>{facilities.Facility}</span>
												</li>
											))}
									</ul>
								</div>
								<div style={{ paddingTop: 10 }}>
									<Text content={bedType && `Tipo de cama: ${bedType}`} left size={14} />
								</div>
							</Grid> */ }
						</Grid>
					</Grid>
					<Grid item container xs={12} lg={9} style={{
        background: '#f9f8f7'
      }}>
						{this.props.children}
					</Grid>
				</Grid>
				<Dialog
      // fullScreen={fullScreen}
      open={this.state.open}
      onClose={this.handleClose}
      aria-labelledby="responsive-dialog-title"
      classes={{
        paper: classes.dialog
      }}
      >
					<DialogTitle style={{
        padding: 10,
        fontSize: 18
      }} id="responsive-dialog-title">
						Imagenes de la Habitación
					</DialogTitle>
					<DialogContent style={{
        padding: 0
      }}>
						<DialogContentText>
							<Slider {...settingsMobile} className="carousel">
								{images &&
      images.map((image, i) => (
        <div key={i}>
											<ImageBackground minHeight={400} imageSize={600} backgroundImage={image} width={600} />
										</div>
      ))}
							</Slider>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button text="VOLVER" primary={false} link onClick={this.handleClose} />
					</DialogActions>
				</Dialog>
			</ContainerCard>
    )
  }
}

CardRoom.defaultProps = {
  image: 'http://photos.hotelbeds.com/giata/original/12/123583/123583a_hb_r_001.jpg'
}

CardRoom.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  image: PropTypes.string
}

export default withStyles(styles)(CardRoom)
