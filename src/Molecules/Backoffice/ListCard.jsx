import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { TitleSecondary, TitleH3, Text } from '../../Atoms/TitleLabel/TitleLabel'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import Stars from '../../Atoms/Stars'
import ContainerCard from '../../Atoms/Card/ContainerCard'

const options = ['Editar', 'Ver', 'Eliminar']

class ListCard extends React.PureComponent {
	state = {
		anchorEl: null
	}

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	render() {
		const { anchorEl } = this.state
		const open = Boolean(anchorEl)
		const { classes, imageUrl, title, ciudad, fecha, precio } = this.props
		return (
			<ContainerCard flex="row">
				<div className={classNames(classes.imgHotel)} style={{ width: '100%', maxWidth: 100, overflow: 'hidden' }}>
					<ImageBackground
						minHeight={120}
						elevation={0}
						imageSize="cover"
						alt="Nombre del hotel"
						backgroundImage={imageUrl}
						radius={6}
					/>
				</div>
				<div className={classNames(classes.displayFlex, { width: '100%' })}>
					<div style={{ padding: 10 }}>
						<Stars />
						<TitleH3 size={14} content={title} />
						<Text size={11} content={ciudad} color="black" />
						<Text size={11} content={fecha} color="gray" />
						<TitleSecondary content={`$${precio}`} left />
					</div>
					<div className={classNames(classes.options)}>
						<Tooltip title="Editar">
							<IconButton aria-owns={open ? 'long-menu' : null} aria-haspopup="true" onClick={this.handleClick}>
								<MoreVertIcon className={classNames(classes.icon)} />
							</IconButton>
						</Tooltip>
						<Menu
							id="long-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={this.handleClose}
							PaperProps={{
								style: {
									maxHeight: 200,
									width: 200
								}
							}}
						>
							{options.map(option => (
								<MenuItem key={option} selected={option === 'Editar'} onClick={this.handleClose}>
									{option}
								</MenuItem>
							))}
						</Menu>
					</div>
				</div>
			</ContainerCard>
		)
	}
}
ListCard.defaultProps = {
	title: 'Hotel de ejemplo Buenos Aires',
	ciudad: 'Buenos Aires',
	fecha: 'del: 7/8 al 15/8',
	precio: '1410',
	imageUrl: 'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
}

ListCard.propTypes = {

	title: PropTypes.string,
	ciudad: PropTypes.string,
	fecha: PropTypes.string,
	precio: PropTypes.string,
	imageUrl: PropTypes.string
}
const styles = () => ({
	imgHotel: {
		'@media (max-width: 600px)': {
			display: 'none'
		}
	},
	icon: {
		fontSize: 25
	},
	options: {
		position: 'absolute',
		top: 0,
		right: 0
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'flex-end',
		justifyContent: 'space-between'
	}
})
export default withStyles(styles)(ListCard)
