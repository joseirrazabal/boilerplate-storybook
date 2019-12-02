import React from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { FaAngleDown } from 'react-icons/fa'

import Header from '../../Organisms/Header/Header'
import MapComponent from '../../Atoms/MapComponent'
import FiltersHotels from '../../Organisms/Filters/FiltersHotels'
import FiltersHotelsMobile from '../../Organisms/Filters/FiltersHotelsMobile'
import SlideCard from '../../Organisms/Card/SlideCard'
import RecommendedCard from '../../Organisms/Card/RecommendedCard'
import RecomendedHotelCard from '../../Organisms/Card/RecomendedHotelCard'
import LoadingCard from '../../Organisms/Card/LoadingCard'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

import TabsOrdenar from '../../Molecules/TabsOrdenar/TabsOrdenar'
import SearchHotels from '../../Organisms/Search/SearchHotels'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'
import HotelSearchSummary from '../../Organisms/ResumenBusqueda/HotelSearchSummary'

class Shopping extends React.PureComponent {
	render() {
		const { classes } = this.props

		return (
			<Grid>
				<Header fixed={true} />
				<div className={classNames(classes.resumenBusqueda)}>
					<HotelSearchSummary passengers="2" rooms="1" />
				</div>

				<section className={classNames(classes.marginTop)}>
					<Grid container spacing={0}>
						<Grid item xs={12} md={4} lg={4} xl={5} className={classNames(classes.map)}>
							<MapComponent />
						</Grid>
						<Grid item xs={12} md={8} lg={8} xl={7} className={classNames(classes.contentResult)}>
							<div className={classNames(classes.searchFilter)}>
								<Grid container spacing={1}>
									<Grid item xs={12}>
										<SearchHotels />
									</Grid>
									<Grid item xs={12} className={classNames(classes.flexBox, classes.filterPc)}>
										<div className={classNames(classes.iconFilter, classes.flexBox)}>
											<div>
												<IconsFont size={20} icon={'flaticon-levels'} />
											</div>
											<div>
												<Text style={{ width: '100%', marginLeft: 10 }} size={13} content={'Filtros'} color={'black'} />
											</div>
										</div>
										<FiltersHotels />
									</Grid>
								</Grid>
							</div>
							<div className={classNames(classes.tabsordenar)}>
								<TabsOrdenar />
							</div>
							<Grid>
								<LinearProgress style={{ height: 3 }} />
							</Grid>
							<Grid container spacing={2} className={classNames(classes.contentHotels)}>
								<Grid item xs={12}>
									<RecommendedCard>
										<RecomendedHotelCard />
									</RecommendedCard>
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<LoadingCard />
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<LoadingCard />
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<LoadingCard />
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<SlideCard title={'Hotel Buenos Aires Ejemplo dos titulo largo…'} price={26850} />
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<SlideCard title={'Hotel Buenos Aires Ejemplo dos titulo largo…'} price={26850} />
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<SlideCard title={'Hotel Buenos Aires Ejemplo dos titulo largo…'} price={26850} />
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<SlideCard title={'Hotel Buenos Aires Ejemplo dos titulo largo…'} price={26850} />
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<SlideCard title={'Hotel Buenos Aires Ejemplo dos titulo largo…'} price={26850} />
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<SlideCard title={'Hotel Buenos Aires Ejemplo dos titulo largo…'} price={26850} />
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<SlideCard title={'Hotel Buenos Aires Ejemplo dos titulo largo…'} price={26850} />
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
									<SlideCard title={'Hotel Buenos Aires Ejemplo dos titulo largo…'} price={26850} />
								</Grid>
								<Grid item xs={12} className={classNames(classes.paddingBox)}>
									<Button text="MOSTRAR MAS RESULTADOS" fullWidth primary={false} iconRight={<FaAngleDown />} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</section>
				<FiltersHotelsMobile />
			</Grid>
		)
	}
}
Shopping.defaultProps = {
	fixed: false
}

Shopping.propTypes = {

	fixed: PropTypes.bool
}

export default withStyles(({ mauri: { color } }) => ({
	map: {
		position: 'fixed',
		top: 60,
		right: 0,
		zIndex: 1,
		width: '100%',
		maxHeight: 'calc(100% - 40px)',

		'@media (max-width: 1024px)': {
			display: 'none'
		},
		'@media (max-width: 800px)': {
			display: 'block',
			top: 0,
			width: '100%',
			position: 'relative',
			height: 300,
			overFlow: 'hidden',
			paddingLeft: 0
		}
	},
	resumenBusqueda: {
		display: 'none',
		width: '100%',

		'@media (max-width: 800px)': {
			position: 'absolute',
			zIndex: 2,
			top: 60,
			display: 'block'
		}
	},
	marginTop: {
		marginTop: 60,
		'@media (max-width: 800px)': {
			marginTop: 60
		}
	},
	filterPc: {
		marginTop: 10,
		position: 'relative'
	},
	iconFilter: {
		minWidth: 100
	},
	flexBox: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentFilters: {
		overflowX: 'scroll',
		whiteSpace: 'nowrap',
		width: '100%'
	},
	contentHotels: {
		padding: 15,
		zIndex: 0,
		'@media (max-width: 800px)': {
			marginTop: 15
		}
	},
	button: {
		border: '1px solid silver',
		width: 'auto',
		marginRight: 10,
		display: 'inline-block',
		borderRadius: 6
	},
	contentResult: {
		boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
		background: '#f2f2f2',
		zIndex: 1,
		position: 'fixed',
		height: '100vh',
		paddingBottom: 80,
		overflowX: 'scroll',

		'@media (max-width: 800px)': {
			position: 'relative',
			overflowX: 'auto',
			height: 'auto'
		}
	},
	searchFilter: {
		padding: 10,
		borderBottom: '1px solid silver',
		width: '100%',
		zIndex: 11,
		background: '#FFFFFF',
		'@media (max-width: 800px)': {
			display: 'none'
		}
	},
	tabsordenar: {
		width: '100%',
		'@media (max-width: 800px)': {
			display: 'none'
		}
	}
}))(Shopping)
