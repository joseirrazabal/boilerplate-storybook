const variables = {
	searchWidthBtn: '60px',
	searchMinHeight: '60px',
	searchMinHeightAir: '85px'
}

const core = {
	white: '#fff',
	gray: '#565a5c',
	grayLight: '#82888a',
	grayLighter: '#cacccd',
	grayLightest: '#f2f2f2',

	borderMedium: '#c4c4c4',
	border: '#dbdbdb',
	borderLight: '#e4e7e7',
	borderLighter: '#eceeee',
	borderBright: '#f4f5f5',

	primary: '#ff9100',
	primaryShade_1: '#ccc',
	primaryShade_2: 'gray',
	primaryShade_3: 'silver',
	primaryShade_4: 'silver',
	primary_dark: '#008489',
	green: '#55C443',

	secondary: '#af52bf',
	link: '#4A90E2',
	yellow: '#ffe8bc',
	yellow_dark: '#ffce71'
}

export default {
	shape: {
		borderRadius: 6
	},
	palette: {
		primary: {
			light: '#FFFFFF',
			/* main: '#26A69A',
			dark: '#1a746b', */
			main: '#3483fa',
			dark: '#3B5998',
			currentColor: '#f2f2f2',
			contrastText: 'white'
		},
		secondary: {
			light: '#af52bf',
			/* main: '#4A90E2',
			dark: '#3B5998', */
			main: '#ffe600',
			dark: '#d9cd4b',
			contrastText: 'white'
		},
		optional: {
			link: '#4A90E2',
			green: '#1cb242',
			black: 'black'
		},
		typography: {
			fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,' + "'Roboto Web:100,300,400,700', 'sans-serif'"
		}
	},
	mauri: {
		button: {
			primary: {
				color: 'white',
				background: '#FF4D4D',
				border: '#F23434!important'
			},
			secondary: {
				color: 'white',
				background: '#4A90E2',
				border: '#3B5998'
			}
		},
		font: {
			fontFamily: 'Roboto, sans-serif'
		},
		color: {
			...core
		},
		bgColorGray: {
			backgroundColor: '#f9f8f7'
		},
		bgColorGray2: {
			backgroundColor: '#f2f2f2'
		},
		simpleFlex: {
			display: 'flex',
			alignItems: 'center',
			alignSelf: 'center'
		},
		flex: {
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
			alignSelf: 'center',
			width: '100%'
		},
		flexStartEnd: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			alignSelf: 'center',
			width: '100%'
		},
		marginT20: {
			marginTop: 20
		},
		marginT40: {
			marginTop: 40
		},
		borderTop: {
			borderTop: '1px solid #f2f2f2'
		},
		borderRight: {
			borderRight: '0.5px solid #f2f2f2'
		},
		flexColumn: {
			display: 'flex',
			flexDirection: 'column',
			alignSelf: 'center',
			justifyContent: 'center',
			alignItems: 'flex-start'
		},
		flexCenterColumn: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center'
		},
		container: {
			width: '100%',
			maxWidth: 900,
			margin: 'auto',
			'@media (max-width: 800px)': {
				padding: 10
			}
		},
		containerCheckout: {
			width: '100%',
			maxWidth: 1300,
			margin: 'auto',
			padding: '0 20px',
			'@media (max-width: 800px)': {
				padding: 0
			}
		},
		containerlg: {
			width: '100%',
			maxWidth: 1300,
			margin: 'auto',
			padding: '0 20px',

			'@media (max-width: 800px)': {
				padding: '0 10px'
			}
		},
		paddingObject: {
			paddingTop: 10,
			paddingBottom: 10
		},
		paddingBox: {
			paddingTop: 20,
			paddingBottom: 20
		},
		paddingBox2: {
			paddingTop: 40,
			paddingBottom: 40
		},
		paddingBox3: {
			paddingTop: 60,
			paddingBottom: 60
		},
		padding10: {
			padding: 10
		},
		padding20: {
			padding: 20
		},
		variables: {
			...variables
		}
	}
}
