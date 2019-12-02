import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { createMuiTheme } from '@material-ui/core'
import { withStyles, ThemeProvider } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { IconContext } from 'react-icons'

import { Text } from 'src/emmaterial/Atoms/TitleLabel/TitleLabel'
import resize from '../../utils/resize'

import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import ImageBackground from '../../Atoms/Images/ImageBackground'

class BackgroundImageHome extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = { value: props.tab || 0 }
	}

	handleChange = (event, value) => {
		const { onTabClick, tabs } = this.props
		const val = tabs[value].code
		this.setState({ value })
		if (onTabClick) onTabClick({ value: val })
	}

	handleChangeIndex = index => {
		this.setState({ value: index })
	}

	render() {
		const { classes, tabs, selected } = this.props
		const { value } = this.state
		return (
			<div className={classNames(classes.contentGallery)}>
				<div className={classNames(classes.contentCenter)} style={{ display: 'table', margin: 'auto' }}>
					<div className={classNames(classes.absoluteTabs)}>
						<div className={classNames(classes.titular)}>
							<Text size={20} content="¡Vivi tu Mejor" />
							<Text size={23} content="Experiencia!" />
						</div>
						<ThemeProvider theme={theme}>
							<AppBar className={classNames(classes.tabs)} position="static" color="">
								<Tabs
									value={value || selected}
									onChange={this.handleChange}
									indicatorColor="white"
									textColor="white"
									fullWidth
								>
									{tabs.map((tab, i) => (
										<Tab
											label={
												<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
													<IconContext.Provider
														value={{
															style: { color: value.tab === i ? '#FF4D4D' : '', fontSize: 20, verticalAlign: 'middle' }
														}}
													>
														{tab.icon}
													</IconContext.Provider>
													<div style={{ marginLeft: 10 }}>{tab.title}</div>
												</div>
											}
											className={classes.tab}
										/>
									))}
								</Tabs>
							</AppBar>
						</ThemeProvider>
						<div className={classNames(classes.containerSearch)}>
							{tabs.map(
								(tab, i) =>
									(selected || value) === i && (
										<div className={classNames(classes.contentCenter, classes.searchBar)}>{tab.content}</div>
									)
							)}
						</div>
					</div>
				</div>
				{tabs.map((tab, i) => (
					<div className="slideHome backgroundMobile">
						{(selected || value) === i && (
							<div className={classNames(classes.slideHome)}>
								<div className={classNames(classes.desktop)}>
									<ImageBackground
										style={{
											backgroundImage: `linear-gradient(
												rgba(0, 0, 0, 0.3),
												rgba(0, 0, 0, 0.3)
											)`
										}}
										noRepeat
										heightResize={850}
										backgroundImage={tab.image}
										alt={'package home'}
										minHeight="80vh"
										cover
									/>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		)
	}
}
BackgroundImageHome.defaultProps = {
	tabs: [
		{
			title: 'VUELOS',
			image:
				'https://images.pexels.com/photos/219014/pexels-photo-219014.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
		},
		{
			title: 'HOTEL',
			image:
				'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
		},
		{
			title: 'PAQUETES',
			image:
				'https://images.pexels.com/photos/235778/pexels-photo-235778.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
		}
	],
	imageCerros:
		'https://i2.wp.com/elmundodepeapa.com/wp-content/uploads/2017/07/Erlantz-05ene.2017-55.jpg?fit=1200%2C750&ssl=1'
}

BackgroundImageHome.propTypes = {
	imageHotel: PropTypes.string,
	imageVuelos: PropTypes.string,
	imagePaquetes: PropTypes.string,
	imageCerros: PropTypes.string,
	contentHotels: PropTypes.object,
	contentVuelos: PropTypes.object,
	contentPaquetes: PropTypes.object,
	contentCerros: PropTypes.object,
	onTabClick: PropTypes.func,
	tabs: PropTypes.array
}

const theme = createMuiTheme({
	overrides: {
		MuiTabs: {
			root: {
				backgroundColor: 'rgba(0,0,0,0)'
			},
			indicator: {
				'@media (min-width: 1025px)': {
					display: 'none'
				},

				backgroundColor: 'red',
				'@media (max-width: 1024px)': {
					backgroundColor: 'white'
				}
			}
		},
		MuiTab: {
			root: {
				position: 'relative',
				display: 'block',
				backgroundColor: 'white',
				color: '#FF4D4D',
				'&:button': {
					backgroundColor: 'white'
				},
				'&:hover': {
					backgroundColor: '#FF4D4D',
					color: 'white'
				},
				'@media (min-width: 1025px)': {
					marginRight: '10px'
				},
				'@media (max-width: 1024px)': {
					backgroundColor: '#FF4D4D',
					color: '#fff',
					textTransform: 'capitalize',
					'flex-grow': 1,
					'max-width': 'none',
					'flex-shrink': 1
				},
				'&$selected': {
					backgroundColor: '#FF4D4D',
					color: 'white',
					'@media (min-width: 1025px)': {
						'&:after': {
							content: "'-'",
							position: 'absolute',
							bottom: '0',
							height: '2px',
							background: 'red',
							width: '100%',
							transition: 'width .25s',
							left: 0
						}
					}
				}
			}
		}
	}
})

export default withStyles(mauri => ({
	withTheme: true,
	desktop: {
		visibility: 'visible',
		'@media (max-width: 1024px)': {
			visibility: 'hidden',
			width: '0',
			height: '0'
		}
	},
	slideHome: {
		// width: '100%',
		minHeight: '80vh',
		// display: 'flex',
		// justifyContent: 'center',
		// alignItems: 'center',
		// zIndex: 0,

		'@media (max-width: 1024px)': {
			minHeight: 350,
			// backgroundImage: 'none!important',
			height: '100vh'
		}
	},
	absoluteTabs: {
		position: 'absolute',
		// zIndex: 3,
		top: '20vh',
		'@media (max-width: 1024px)': {
			position: 'absolute',
			// zIndex: 1,
			top: 0,
			left: 0,
			width: '100%'
		}
	},

	absoluteText: {
		position: 'absolute',
		// zIndex: 1,
		top: 100,
		'@media (max-width: 1024px)': {
			top: 130
		}
	},
	titular: {
		paddingBottom: 15,
		textAlign: 'center',
		'& p': {
			color: 'white!important',
			paddingBottom: 15
		},
		'@media (max-width: 1024px)': {
			position: 'absolute',
			top: '20vh',
			width: '100%',
			'& p': {
				color: 'black!important',
				background: 'transparent',
				textAlign: 'center!important'
			}
		}
	},
	contentCenter: {
		width: '100%',
		maxWidth: 980,
		'@media (max-width: 1024px)': {
			maxWidth: 750,
			padding: 10
		}
	},
	containerSearch: {
		'@media (max-width: 1024px)': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: ' 80vh'
		}
	},

	searchBar: {
		position: 'absolute',
		// zIndex: 2,
		'@media (max-width: 1024px)': {
			// zIndex: 1
		}
	},
	noWrapper: {
		whiteSpace: 'nowrap'
	},
	contentGallery: {
		fontFamily: 'Roboto, sans-serif',
		width: '100%',
		position: 'relative',
		margin: 0,
		display: 'inline-block',
		padding: 0
	},
	'MuiTabs-indicator': {
		width: '0px!important'
	},
	tabs: {
		'@media (min-width: 1025px)': {
			'background-color': 'rgba(0,0,0,0)',
			'box-shadow': 'none'
		}
	}
}))(BackgroundImageHome)
