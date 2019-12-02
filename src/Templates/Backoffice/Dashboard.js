import React from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'
import EditBackgroundHome from '../../Organisms/Backoffice/EditBackgroundHome'
import AdminContent from '../../Organisms/Backoffice/AdminContent'
/* import SmallCard from '../../Organisms/Card/SmallCard' */
import AdminSmallCards from '../../Organisms/Backoffice/AdminSmallCards'
import Layout from './Layout'

const styles = () => ({
	root: {
		flexGrow: 1
	},
	iconClose: {
		float: 'right',
		margin: 5
	},
	appFrame: {
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%'
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
	},
	hide: {
		display: 'none'
	},
	drawerPaper: {
		position: 'relative',
		width: 240
	},
	paddingText: {
		paddingTop: 20,
		paddingBottom: 20
	}
})

const x = () => false
const y = () => true

const menues = [
	{ title: 'xxx1', href: '/', icon: 'flaticon-question-1', route: x, isSelected: x },
	{ title: 'xxx2', href: '/1', icon: 'flaticon-reception-bell', route: x, isSelected: y },
	{ title: 'xxx3', href: '/2', icon: 'flaticon-rest', route: x, isSelected: x },
	{ title: 'xxx4', href: '/3', icon: 'flaticon-sale', route: x, isSelected: x }
]

const DashboardTemplate = ({ classes }) => (
	<Layout menues={menues}>
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<EditBackgroundHome />
			</Grid>
		</Grid>
		{/* <Grid container spacing={2}>
			<Grid item xs={12} className={classes.paddingText}>
				<TitleSecondary bold size="23" left content="Cards principales" />
			</Grid>
			<Grid item xs={12} lg={4}>
				<SmallCard />
			</Grid>
			<Grid item xs={12} lg={4}>
				<SmallCard />
			</Grid>
			<Grid item xs={12} lg={4}>
				<SmallCard />
			</Grid>
		</Grid> */}
		<AdminSmallCards />
		<Grid container spacing={2}>
			<Grid item xs={12} className={classes.paddingText}>
				<TitleSecondary bold size="23" left content="Cards" />
			</Grid>
			<Grid item xs={12}>
				<AdminContent />
			</Grid>
		</Grid>
		<Grid container spacing={2}>
			<Grid item xs={12} className={classes.paddingText}>
				<TitleSecondary bold size="23" left content="Cards" />
			</Grid>
			<Grid item xs={12}>
				<AdminContent />
			</Grid>
		</Grid>
		<Grid container spacing={2}>
			<Grid item xs={12} className={classes.paddingText}>
				<TitleSecondary bold size="23" left content="Cards" />
			</Grid>
			<Grid item xs={12}>
				<AdminContent />
			</Grid>
		</Grid>
	</Layout>
)

DashboardTemplate.propTypes = {}

export default withStyles(styles, { withTheme: true })(DashboardTemplate)
