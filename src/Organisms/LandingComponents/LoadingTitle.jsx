import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import TextLoading from '../../Atoms/TitleLabel/TextLoading'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

const LoadingTitle = ({ classes }) => (
	<ContainerCard radius={0}>
		<CardContent background="#f9f8f7" paddingConfig={15}>
			<div className={classes.container}>
				<div className={classes.displayFlex}>
					<div style={{ width: '100%', maxWidth: 200, paddingRight: 15 }}>
						<div style={{ paddingBottom: 5 }}>
							<TextLoading />
						</div>
						<TextLoading />
					</div>
					<div style={{ width: '100%', maxWidth: 200 }}>
						<div>
							<TextLoading />
							<TextLoading />
							<TextLoading />
						</div>
					</div>
				</div>
			</div>
		</CardContent>
	</ContainerCard>
)
LoadingTitle.defaultProps = {}

LoadingTitle.propTypes = {

}

const styles = () => ({
	container: {
		width: '100%',
		maxWidth: 800,
		margin: 'auto'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'space-between'
	}
})
export default withStyles(styles)(LoadingTitle)
