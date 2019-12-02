import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import LinearProgress from '@material-ui/core/LinearProgress'
import moment from 'moment'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

const styles = theme => ({})

const EstimatedTime = ({ classes, remainingTime, total }) => (
	<ContainerCard radius={0}>
		<CardContent flex="row" justify="flex-start" align="center" paddingConfig={5}>
			<div className="EstimatedTime_Svg" />
			{remainingTime > 0 ? (
				<TitleSecondary left color="gray" size={14}>
					Contás con {moment(remainingTime).minutes()} minutos para completar tu compra
				</TitleSecondary>
			) : (
				<TitleSecondary left color="gray" size={14}>
					El tiempo se ha agotado
				</TitleSecondary>
			)}
		</CardContent>
		<LinearProgress
			variant="determinate"
			value={(moment(remainingTime).minutes() * 100) / total}
			style={{
				height: 2
			}}
		/>
	</ContainerCard>
)

EstimatedTime.defaultProps = {
	time: 30
}
EstimatedTime.propTypes = {
	time: PropTypes.number
}

export default withStyles(styles)(EstimatedTime)
