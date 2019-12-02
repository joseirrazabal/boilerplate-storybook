import React from 'react'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

class CardRoomPrice extends React.PureComponent {
	render() {
		const { code, selectedValue, change, classes, amount, description, cancellationPolicy } = this.props

		return (
			<Grid item container xs={12} className={classNames(classes.default)}>
				<Grid item xs={6} className={classNames(classes.flexCenter, classes.borderRight)}>
					<div className="padding10">
						<div>
							<Text content={description} color="#55C443" size={13} center />
						</div>
						<div>
							<Text content={cancellationPolicy} color="silver" italic size={13} center />
						</div>
					</div>
				</Grid>
				<Grid item xs={5} style={{ position: 'relative' }} className={classNames(classes.flexCenter)}>
					<div className="padding10">
						<Text
							content={`$ ${parseFloat((22 / 100) * parseFloat(amount) + parseFloat(amount)).toFixed(2)}`}
							color="red"
							size={12}
							italic
							lineThrough
							center
						/>
						<Text content={`$ ${amount}`} size={18} center />
					</div>
				</Grid>
				<Grid item xs={1} style={{ position: 'relative' }} className={classNames(classes.flexCenter)}>
					<div className={classNames(classes.flexCenter, ' padding10')}>
						<Radio
							checked={selectedValue === String(code)}
							onChange={change}
							value={String(code)}
							name="room"
							classes={{
								root: classes.root,
								checked: classes.checked
							}}
						/>
					</div>
				</Grid>
			</Grid>
		)
	}
}

CardRoomPrice.defaultProps = {}

CardRoomPrice.propTypes = {

}

const styles = ({ palette }) => ({
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
		background: '#f9f8f7',
		border: '0.5px dashed #ccc',
		marginBottom: 10,
		borderRadius: 6,
		overflow: 'hidden',
		'&:hover': {
			background: 'white'
		},
		'&$RoomCardDisabled': {
			background: '#f2f2f2',
			border: '0.5px dashed #ccc',
			marginBottom: 10,
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
		background: '#ffffff',
		'&:hover': {
			background: 'white'
		}
	},
	lastPlaces: {
		width: '100%',
		padding: 3,
		background: '#f9f8f7',
		display: 'flex',
		justifyContent: 'center'
	},
	off: {
		background: '#4A90E2',
		width: 'auto',
		maxWidth: 60,
		border: '0.4px solid white',
		borderRadius: 3,
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
		left: 3,
		top: 3,
		padding: 3,
		background: 'rgba(0,0,0,0.7)'
	},
	borderTop: {
		borderTop: '1px solid #f2f2f2'
	},
	noWrapper: {
		width: '100%',
		padding: 0,
		overflowX: 'scroll',
		display: 'flex',
		whiteSpace: 'nowrap',
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
	}
})

export default withStyles(styles)(CardRoomPrice)
