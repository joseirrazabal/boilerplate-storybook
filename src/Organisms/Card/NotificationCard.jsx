import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import CloseIcon from '@material-ui/icons/Close'
import { TitleH3, Text } from '../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

const NotificationCard = ({ classes, title, content }) => (
	<ContainerCard>
		<CardContent paddingConfig={0}>
			<div style={{ width: '100%' }}>
				<div style={{ padding: 15 }}>
					<TitleH3 size={18} content={title} />
					<Text size={12} content={content} color="black" />
					<CloseIcon className={classNames(classes.close)} style={{ fontSize: 30 }} />
				</div>
				<div style={{ background: '#f2f2f2', padding: 15 }}>
					<Text style={{ width: '100%' }} content="ver oferta" italic left color="blue" />
				</div>
			</div>
		</CardContent>
	</ContainerCard>
)

NotificationCard.defaultProps = {
	title: 'Hotel de ejemplo Buenos Aires',
	content: '¡Viajá a Buzios por $15.000 en 18 coutas sin interés con Visa!'
}

NotificationCard.propTypes = {

	title: PropTypes.string,
	content: PropTypes.string
}
const styles = () => ({
	global: {
		backgroundColor: 'white',
		height: 'auto'
	},
	new: {
		border: '2px solid #FF4D4D'
	},
	imgHotel: {
		'@media (max-width: 600px)': {
			display: 'none'
		}
	},
	floatL: {
		float: 'left'
	},
	floatR: {
		float: 'right'
	},
	padding20: {
		padding: 20
	},
	radius: {
		borderRadius: 6,
		overflow: 'hidden'
	},
	elevation: {
		boxShadow: '0 4px 4px rgba(0,0,0,0.3)'
	},
	flexRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'flex-end',
		justifyContent: 'space-between'
	},
	close: {
		position: 'absolute',
		right: 5,
		top: 10
	}
})
export default withStyles(styles)(NotificationCard)
