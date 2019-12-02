import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import classNames from 'classnames'
import { MdCheck, MdClose } from 'react-icons/md'
import Button from '../../Atoms/Button/Button'
import { Text, TitlePrimary } from '../../Atoms/TitleLabel/TitleLabel'

const styles = () => ({
	flexRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10
	},
	ExpansionPanel: {
		boxShadow: 'none'
	},
	ExpansionPanelSummary: {
		paddingLeft: 10,
		paddingRight: 10,
		background: '#f2f2f2'
	},
	flexColumn: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	flexCenter: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	total: {
		width: '100%',
		background: 'white',
		boxShadow: `4px 1px 4px rgba(0,0,0,0.3)`
	}
})

const DetailRoomMobile = ({ classes, night, travelers, price, based, roomDescription, onSubmit }) => (
	<div className={classNames(classes.total)}>
		<div className={classes.flexRow}>
			{/* <div>
				<Text content={`Precio por ${night} para ${travelers} personas`} size={13} left />
			</div> */}
			<div>
				<TitlePrimary content={price} size={23} bold left />
				<Text content={`Precio por ${night} para ${travelers} personas`} size={12} left />
				<Text content={based} size={12} center />
			</div>
			<div>
				<Button text="RESERVAR AHORA" onClick={onSubmit} size="medium" radius border fullWidth primary />
			</div>
		</div>
		<ExpansionPanel className={classes.ExpansionPanel}>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.ExpansionPanelSummary}>
				<Text content="Resumen de Habitación" size={13} left />
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<ul className={classNames(classes.flexColumn, ' padding10')} style={{ width: '100%' }}>
					{roomDescription &&
						roomDescription.map((room, i) => {
							return (
								<li className={classNames(classes.flexRow)} key={i}>
									<div>
										{room.condition ? (
											<MdCheck style={{ color: '#55C443' }} />
										) : (
											<MdClose style={{ color: 'silver' }} />
										)}
									</div>
									<div>
										<Text content={room.name} color={room.condition ? '#55C443' : 'silver'} size={12} left />
									</div>
								</li>
							)
						})}
				</ul>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	</div>
)

DetailRoomMobile.defaultProps = {
	onSubmit: () => {}
}

DetailRoomMobile.propTypes = {
	onSubmit: PropTypes.func,

}

export default withStyles(styles)(DetailRoomMobile)
