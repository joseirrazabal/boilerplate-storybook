import React from 'react'
import { withStyles } from '@material-ui/styles'
/* import classNames from 'classnames' */
import Grid from '@material-ui/core/Grid'
import { Text, TextNoWrap } from '../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import ContainerLg from '../../Atoms/Containers/ContainerLg'

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

const HeaderRooms = ({ classes }) => (
	<div style={{ width: '100%' }}>
		<ContainerCard radius={0}>
			<ContainerLg>
				<CardContent paddingConfig={10}>
					<Grid container xs={9} className={classes.flexRow}>
						<Grid item xs={3}>
							<TextNoWrap widthText={110} content="Tipo de habitación" size={13} center color="black" />
						</Grid>
						<Grid item xs={4}>
							<TextNoWrap content="Régimen" size={13} center color="black" />
						</Grid>
						<Grid item xs={3}>
							<TextNoWrap content="Precio por noche" size={13} center color="black" />
						</Grid>
						<Grid item xs={2}>
							<TextNoWrap content="Seleccionar" size={13} center color="#4A90E2" />
						</Grid>
					</Grid>
					<Grid item xs={3}>
						<div style={{ width: '100%' }}>
							<Text content="Resumen" size={13} center />
						</div>
					</Grid>
				</CardContent>
			</ContainerLg>
		</ContainerCard>
	</div>
)

HeaderRooms.defaultProps = {}

HeaderRooms.propTypes = {

}

export default withStyles(styles)(HeaderRooms)
