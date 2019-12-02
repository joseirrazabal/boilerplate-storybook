import React from 'react'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

const LoadingCard = ({ classes }) => (
	<ContainerCard>
		<div style={{ width: '100%' }}>
			<div className={classNames(classes.bloque)} />
			<CardContent paddingConfig={20}>
				<div style={{ width: '100%' }}>
					<div className="linear-background" style={{ marginBottom: 18 }} />
					<div className="linear-background" />
				</div>
			</CardContent>
		</div>
	</ContainerCard>
)

LoadingCard.defaultProps = {}

LoadingCard.propTypes = {

}

const styles = () => ({
	bloque: {
		width: '100%',
		minHeight: 260,
		background: '#f9f8f7'
	},
	textLoading: {
		width: '100%',
		minHeight: 20,
		marginBottom: 10,
		background: '#f9f8f7'
	}
})
export default withStyles(styles)(LoadingCard)
