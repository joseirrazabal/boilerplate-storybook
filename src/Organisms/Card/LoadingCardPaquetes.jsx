import React from 'react'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

const LoadingCardPaquetes = ({ classes, loading = true }) => (
	<ContainerCard>
		<div className={classNames(classes.bloque)} />
		<div className={classNames(classes.bloqueDark)} />
		<CardContent paddingConfig={15} flex="column">
			<div style={{ width: '100%' }}>
				<div className={classNames(classes.padding20)}>
					{loading ? (
						<div className="linear-background" />
					) : (
						<div className={classNames(classes.linearBackgroundFixed)} />
					)}
				</div>
				<div className={classNames(classes.padding20)}>
					{loading ? (
						<div className="linear-background" />
					) : (
						<div className={classNames(classes.linearBackgroundFixed)} />
					)}
				</div>
			</div>
		</CardContent>
		<CardContent paddingConfig={15} flex="column">
			<div style={{ width: '100%' }}>
				<div className={classNames(classes.padding20)}>
					{loading ? (
						<div className="linear-background" />
					) : (
						<div className={classNames(classes.linearBackgroundFixed)} />
					)}
				</div>
				<div className={classNames(classes.padding20)}>
					{loading ? (
						<div className="linear-background" />
					) : (
						<div className={classNames(classes.linearBackgroundFixed)} />
					)}
				</div>
			</div>
		</CardContent>
	</ContainerCard>
)

LoadingCardPaquetes.defaultProps = {}

LoadingCardPaquetes.propTypes = {

}

const styles = () => ({
	contentCard: {
		background: 'white',
		boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
		borderRadius: 6,
		overflow: 'hidden',
		minHeight: 60
	},
	bloqueDark: {
		width: '100%',
		minHeight: 30,
		background: '#f1f1f1'
	},
	bloque: {
		width: '100%',
		minHeight: 160,
		background: '#f9f8f7'
	},
	textLoading: {
		width: '100%',
		minHeight: 16,
		marginBottom: 5,
		background: '#f9f8f7'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	linearBackgroundFixed: {
		background: 'silver',
		background: '#f2f2f2',
		backgroundSize: '1000px 104px',
		height: '15px',
		position: 'relative',
		overflow: 'hidden'
	}
})
export default withStyles(styles)(LoadingCardPaquetes)
