import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
/* import IoIosMoon from 'react-icons/io/ios-moon' */
import { MdCheck, MdClose } from 'react-icons/md'
import Button from '../../Atoms/Button/Button'
import { Text, TitlePrimary } from '../../Atoms/TitleLabel/TitleLabel'

const styles = () => ({
	flexRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
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
		padding: 10,
		borderRadius: 6,
		boxShadow: `0px 1px 4px rgba(0,0,0,0.3)`
	}
})

const DetailRoom = ({ classes, night, travelers, price, based, roomDescription, onSubmit }) => (
	<div className={classNames(classes.total)}>
		<div className={classNames(classes.flexRow, ' padding10')}>
			<div>
				<Text content={`Precio por ${night} para ${travelers} personas`} size={13} left />
			</div>
		</div>
		<div>
			<TitlePrimary content={price} size={23} bold center />
		</div>
		<div style={{ marginBottom: 10 }}>
			<Text content={based} size={12} center />
		</div>
		<Button text="RESERVAR AHORA" onClick={onSubmit} size="medium" radius border fullWidth primary />
		<div className="padding10">
			<Text content="Resumen de Habitación" size={12} center />
		</div>
		<ul className={classNames(classes.flexColumn, ' padding10')} style={{ borderTop: '1px solid #f9f8f7' }}>
			{roomDescription &&
				roomDescription.map((room, i) => {
					return (
						<li className={classNames(classes.flexRow)} key={i}>
							<div>
								{room.condition ? <MdCheck style={{ color: '#55C443' }} /> : <MdClose style={{ color: 'silver' }} />}
							</div>
							<div>
								<Text content={room.name} color={room.condition ? '#55C443' : 'silver'} size={12} left />
							</div>
						</li>
					)
				})}
		</ul>
	</div>
)

DetailRoom.defaultProps = {
	onSubmit: () => {}
}

DetailRoom.propTypes = {
	onSubmit: PropTypes.func,

}

export default withStyles(styles)(DetailRoom)
