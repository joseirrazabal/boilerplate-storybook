import React from 'react'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Button from '../../Atoms/Button/Button'
import { StickyContainer, Sticky } from 'react-sticky'
import { Text, TitlePrimary } from '../../Atoms/TitleLabel/TitleLabel'
import IconList from '../../Molecules/List/IconList'
import CardRoom from './CardRoom'
import HeaderRooms from './HeaderRooms'
import DetailRoom from './DetailRoom'

const styles = () => ({
	global: {
		background: '#f2f2f2',
		position: 'relative',
		boxSizing: 'border-box'
	},
	borderRight: {
		borderRight: '1px solid #F2F2F2'
	},
	GlobalContainer: {
		padding: 15
	},
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
	noWrapper: {
		width: '100%',
		padding: 0,
		overflowX: 'scroll',
		display: 'flex',
		whiteSpace: 'nowrap',
		'&:after': {
			content: "''",
			position: 'absolute',
			top: 0,
			right: 0,
			width: 60,
			height: '100%',
			backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,1))'
		}
	},
	desktop: {
		display: 'flex',
		'@media (max-width: 960px)': {
			display: 'none!important'
		}
	},
	responsive: {
		display: 'none',

		'@media (max-width: 960px)': {
			display: 'block',
			position: 'fixed',
			bottom: 0,
			left: 0,
			width: '100%'
		}
	},
	bloqueGrande: {
		width: '100%',
		height: 600,
		background: 'gray'
	},
	total: {
		width: '100%',
		background: 'white',
		padding: 10,
		borderRadius: 6,
		boxShadow: `0px 1px 4px rgba(0,0,0,0.3)`
	}
})

const TableRooms = ({ classes }) => (
	<div className={classNames(classes.global)}>
		<div className={classNames(classes.bloqueGrande)}>hola</div>
		<StickyContainer>
			<Sticky>
				{({ style }) => (
					<div
						style={{
							...style,
							zIndex: 10,
							padding: 0,
							display: 'flex',
							boxShadow: `10px 1px 4px rgba(0,0,0,0.3)`,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<HeaderRooms />
					</div>
				)}
			</Sticky>
			<Grid container spacing={0} className={classNames(classes.GlobalContainer)}>
				<Grid item xs={12} md={9} className={classNames(classes.contentRooms)}>
					<CardRoom />
					<CardRoom />
					<CardRoom />
				</Grid>
				<Grid item xs={12} md={3} className={classNames(classes.sidebarRooms)}>
					<Sticky>
						{({ style }) => (
							<div
								style={{
									...style,
									zIndex: 5,
									height: '100%',
									padding: '0px 0px 5px 15px',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
								className={classes.desktop}
							>
								<DetailRoom />
							</div>
						)}
					</Sticky>
					<div className={classes.responsive}>
						<DetailRoom />
					</div>
				</Grid>
			</Grid>
		</StickyContainer>
		<div className={classNames(classes.bloqueGrande)}>hola</div>
	</div>
)

TableRooms.defaultProps = {}

TableRooms.propTypes = {

}

export default withStyles(styles)(TableRooms)
