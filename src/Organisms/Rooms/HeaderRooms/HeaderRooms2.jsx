import React from 'react'
import { withStyles } from '@material-ui/styles'
/* import classNames from 'classnames' */
import Grid from '@material-ui/core/Grid'
import { Text, TextNoWrap } from '../../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../../Atoms/Card/ContainerCard'
import CardContent from '../../../Atoms/Card/CardContent'
import ContainerLg from '../../../Atoms/Containers/ContainerLg'

const styles = () => ({
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
	headerRooms: {
		width: '100%',
		background: 'white',
		padding: 15,
		textAlign: 'center'
	}
})

const HeaderRooms2 = ({ classes, tabs }) => (
	<div style={{ width: '100%' }}>
		<ContainerCard radius={0}>
			<ContainerLg>
				<CardContent paddingConfig={10}>
					<Grid container item xs={9} className={classes.flexRow}>
						{tabs.map((item, i) => (
							<div>
								<TextNoWrap widthText={110} content={item.content} size={13} center color="black" />
							</div>
						))}
					</Grid>
				</CardContent>
			</ContainerLg>
		</ContainerCard>
	</div>
)

HeaderRooms2.defaultProps = {}

HeaderRooms2.propTypes = {

}

export default withStyles(styles)(HeaderRooms2)
