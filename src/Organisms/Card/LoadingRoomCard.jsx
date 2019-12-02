import React from 'react'
import { withStyles } from '@material-ui/styles'
/* import classNames from 'classnames' */
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

const LoadingRoomCard = ({ classes }) => (
	<ContainerCard>
		<CardContent flex="column" paddingConfig={20}>
			<div style={{ width: '100%' }}>
				<div>
					<div style={{ marginBottom: 10 }} className="linear-background" />
					<div style={{ marginBottom: 10 }} className="linear-background" />
				</div>
				<div>
					<div className="linear-background" />
					<div className="linear-background" />
					<div className="linear-background" />
				</div>
			</div>
		</CardContent>
	</ContainerCard>
)

LoadingRoomCard.defaultProps = {}

LoadingRoomCard.propTypes = {

}
const styles = () => ({
	bloque: {
		width: '100%',
		minHeight: 20,
		marginTop: 10,
		background: '#f9f8f7'
	},
	textLoading: {
		width: '100%',
		minHeight: 50,
		marginBottom: 10,
		background: '#f9f8f7'
	}
})
export default withStyles(styles)(LoadingRoomCard)
