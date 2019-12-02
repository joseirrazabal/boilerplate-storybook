import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import ListBanks from '../ListBanks/ListBanks'

import ResDialog from '../Dialogs/ResDialog'

import Image from '../../Atoms/Images/Image'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'


class CreditCardCss extends React.Component {
	state = {}
	render() {
		const { classes, fullScreen, banksFinancing } = this.props

		return (
			<React.Fragment>
				<div className="creditcard">
					<div className="flip">
						<div className="front">
							<div className="strip-bottom" />
							<div className="strip-top" />
							{/* <svg className="logo" width="40" height="40" viewbox="0 0 17.5 16.2">
								<path d="M3.2 0l5.4 5.6L14.3 0l3.2 3v9L13 16.2V7.8l-4.4 4.1L4.5 8v8.2L0 12V3l3.2-3z" fill="white" />
							</svg> */}
							<div style={{ padding: 15 }}>
								<Image
									title="Credit Card"
									image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1NzZweCIgaGVpZ2h0PSIzNzlweCIgdmlld0JveD0iMCAwIDU3NiAzNzkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+dmlzYTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9InZpc2EiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzI2MzM3QSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU3NiIgaGVpZ2h0PSIzNzkiIHJ4PSI1MiI+PC9yZWN0PiAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iRmlsbC0zIiBmaWxsPSIjRkZGRkZFIiBwb2ludHM9IjIyMSAyNjggMjQyLjU1MTE5MyAxMTEgMjc3IDExMSAyNTUuNDUwNzc5IDI2OCAyMjEgMjY4Ij48L3BvbHlsaW5lPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOTQuNTIxOTgxLDExNy4zNzIyMjkgQzM4Ny4wNDE1NTcsMTE0LjMyNDA1NiAzNzUuMjc2NzEzLDExMSAzNjAuNjIwOTY4LDExMSBDMzIzLjIxNjY4MywxMTEgMjk2Ljg4Njk3NSwxMzEuNjEwNDk0IDI5Ni42Njg0MjcsMTYxLjEyMzI2OSBDMjk2LjQzMDQwMywxODIuOTUzOTI5IDMxNS40NTcxMjMsMTk1LjEyODY3OCAzMjkuODAxMjc0LDIwMi4zODQ2MzEgQzM0NC41NDM1NzQsMjA5LjgyMjI2MyAzNDkuNDk2NjIzLDIxNC41ODE4MDggMzQ5LjQzODE5OSwyMjEuMjMyMTY0IEMzNDkuMzM2NDk5LDIzMS40MDM5NTUgMzM3LjY3MTE5MSwyMzYuMDY0ODEyIDMyNi43OTM1MjUsMjM2LjA2NDgxMiBDMzExLjY0NjU4NywyMzYuMDY0ODEyIDMwMy41OTkyMzQsMjMzLjc3MDI3MiAyOTEuMTU3MTA1LDIyOC4xMDAwODcgTDI4Ni4yOTA2MTEsMjI1LjY4MjE4MyBMMjgxLDI1OS42Nzg2MiBDMjg5LjgyMjAxLDI2My45MDg4MjkgMzA2LjE3NjM3NywyNjcuNTgwNTQ0IDMyMy4xNDk2MDQsMjY3Ljc3MzQzOCBDMzYyLjkwMTY2NCwyNjcuNzczNDM4IDM4OC43MzE1MjIsMjQ3LjQxMTkxIDM4OS4wMzQ0NjIsMjE1Ljg5NjE4IEMzODkuMTcwNzg1LDE5OC41ODUwNjggMzc5LjA4OTQxNCwxODUuNDYzNzkzIDM1Ny4yNTYxODMsMTc0LjYzMDMzMiBDMzQ0LjAzNTA3LDE2Ny41ODc0NTkgMzM1LjkyMDYzOCwxNjIuOTIyMTE3IDMzNi4wMTM2ODMsMTU1Ljc5NDAxMiBDMzM2LjAyMjMzOSwxNDkuNDgyMzQzIDM0Mi44Njg3NTUsMTQyLjcyNDMyNiAzNTcuNjg2NzksMTQyLjcyNDMyNiBDMzcwLjA2MTgzOSwxNDIuNTE3OTc0IDM3OS4wMjAxNzEsMTQ1LjQ3NDE4NyAzODYuMDAwNzQ2LDE0OC41NjA0ODkgTDM4OS4zOTc5ODgsMTUwLjI5NjUzNSBMMzk0LjUyMTk4MSwxMTcuMzcyMjI5IiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZFIj48L3BhdGg+ICAgICAgICAgICAgPHBhdGggZD0iTTQ0OC4zNTgwMTIsMjEyLjI0NDQ0NCBDNDUxLjU4ODczMSwyMDMuMjE0NDE1IDQ2My44ODczMDgsMTY4LjMzMDk0IDQ2My44ODczMDgsMTY4LjMzMDk0IEM0NjMuNjU5ODg4LDE2OC43NDYyNDYgNDY3LjEwMDE4OSwxNTkuMjMxMzA2IDQ2OS4wNjg5NDIsMTUzLjM0Mjc2MSBMNDcxLjY5OTg5NCwxNjYuODkyNDQ2IEM0NzEuNjk5ODk0LDE2Ni44OTI0NDYgNDc5LjE4MDI2NSwyMDQuMzkwNzMyIDQ4MC43MjA5MzIsMjEyLjI0NDQ0NCBMNDQ4LjM1ODAxMiwyMTIuMjQ0NDQ0IFogTTQ5Ni40NTA4OTIsMTExIEw0NjYuMzI0MjgyLDExMSBDNDU2Ljk3OTk0OSwxMTEgNDQ5Ljk4NTYzNSwxMTMuNzc5NTQyIDQ0NS44OTIwNTQsMTI0LjAyMzAxIEwzODgsMjY4IEw0MjguOTQ0NzIxLDI2OCBDNDI4Ljk0NDcyMSwyNjggNDM1LjYyNDY1OSwyNDguNjMxMzc3IDQzNy4xNDA4MDEsMjQ0LjM4MDg2IEM0NDEuNjA2NzI2LDI0NC4zODA4NiA0ODEuMzkyMDQ2LDI0NC40NjIwNjUgNDg3LjA3MDg4NiwyNDQuNDYyMDY1IEM0ODguMjM5MjA2LDI0OS45NDQ1ODIgNDkxLjgxNzc0NCwyNjggNDkxLjgxNzc0NCwyNjggTDUyOCwyNjggTDQ5Ni40NTA4OTIsMTExIFoiIGlkPSJGaWxsLTUiIGZpbGw9IiNGRkZGRkUiPjwvcGF0aD4gICAgICAgICAgICA8cGF0aCBkPSJNMTg5Ljk1NTA2OCwxMTEgTDE1MS4xMjExNDYsMjE4LjIxOTk2NSBMMTQ2Ljk2MTU4NCwxOTYuNDI0Nzk3IEMxMzkuNzI0OSwxNzEuMzEyOTczIDExNy4xOTc5MTIsMTQ0LjA5NDU2MSA5MiwxMzAuNDU2MzIzIEwxMjcuNTI3NjA0LDI2OCBMMTY5LjUxODA3MywyNjcuOTc0NDUyIEwyMzIsMTExIEwxODkuOTU1MDY4LDExMSIgaWQ9IkZpbGwtNiIgZmlsbD0iI0ZGRkZGRSI+PC9wYXRoPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTMuOTE4NTUxLDExMSBMNDcuNTQ2MTM4LDExMSBMNDcsMTE0LjMxNDUzMyBDOTguNjQ1NDgwNiwxMjcuNTY1NTc5IDEzMi44MTY4NTUsMTU5LjU1MDk0MyAxNDcsMTk4IEwxMzIuNTc2NzQzLDEyNC40OTY3NDEgQzEzMC4wODg1MTMsMTE0LjM1OTQyIDEyMi44NTY4NzQsMTExLjM1NDM3IDExMy45MTg1NTEsMTExIiBpZD0iRmlsbC03IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4="
									alt="visa"
									height={30}
								/>
							</div>
							<div className="investor" onClick={() => this.setState({ open: true })}>
								<Text left color="white">
									Upate
								</Text>
							</div>
							{/* <div className="chip">
								<div className="chip-line" />
								<div className="chip-line" />
								<div className="chip-line" />
								<div className="chip-line" />
								<div className="chip-main" />
							</div>
							<svg className="wave" viewBox="0 3.71 26.959 38.787" width="26.959" height="38.787" fill="white">
								<path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z" />
								<path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z" />
								<path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z" />
							</svg> */}
							<div className="card-number">
								<div className="section">5453</div>
								<div className="section">2000</div>
								<div className="section">0000</div>
								<div className="section">0000</div>
							</div>
							<div className="end">
								<span className="end-text">exp. end:</span>
								<span className="end-date"> 11/22</span>
							</div>
							<div className="card-holder">Lazo Rita</div>
							{/* <div className="master">
								<div className="circle master-red" />
								<div className="circle master-yellow" />
							</div> */}
						</div>
						<div className="back">
							<div className="strip-black" />
							<div className="ccv">
								<label>ccv</label>
								<div>123</div>
							</div>
							<div className="terms">
								<p>
									This card is property of Monzo Bank, Wonderland. Misuse is criminal offence. If found, please return to
									Monzo Bank or to the nearest bank with MasterCard logo.
								</p>
								<p>Use of this card is subject to the credit card agreement.</p>
							</div>
						</div>
					</div>
				</div>
				<ResDialog fullScreen={fullScreen} open={this.state.open} onClose={() => this.setState({ open: false })} title="Habitación DeLuxe">
					<DialogContent className={classes.popup}>
						<ListBanks banksFinancing={banksFinancing} onChange={financing => console.log({ financing })} />
					</DialogContent>
				</ResDialog>
			</React.Fragment>
		)
	}

}

CreditCardCss.propTypes = {
	classes: PropTypes.isRequired
}

export default withMobileDialog()(
	withStyles(({ mauri: { marginT40, marginT20, simpleFlex, paddingBox, paddingObject, padding10, containerlg } }) => ({
		card: {
			maxWidth: 360,
			minHeight: 180,
			width: '100%',
			background: '#FCD1A6',
			borderRadius: 6,
			padding: 15,
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column'
		},
		noWrapper: {
			overflowX: 'scroll',
			background: '#f2f2f2',
			padding: 10,
			whiteSpace: 'nowrap',
			width: '100%',
			'@media (max-width: 800px)': {
				position: 'fixed',
				zIndex: 5,
				padding: 5,
				background: 'transparent',
				backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(0,0,0,.4))',
				bottom: 0,
				left: 0
			}
		},
		viewRooms: {
			width: '100%',
			display: 'flex'
		},
		padding10,
		resumenBusqueda: {
			display: 'none',
			width: '100%',

			'@media (max-width: 600px)': {
				position: 'absolute',
				zIndex: 2,
				top: 60,
				display: 'block'
			}
		},
		infoHotel: {
			background: '#f2f2f2',
			'@media (max-width: 600px)': {
				display: 'none'
			}
		},
		marginTop10: {
			marginTop: 10
		},
		popup: {
			padding: 0
		},
		infoHotels: {
			width: '100%',
			display: 'inline-block',
			background: '#f2f2f2'
		},
		container: {
			width: '100%',
			maxWidth: 800,
			margin: 'auto',
			padding: '0 10px',
			height: 'auto'
		},
		footerFixed: {
			background: 'white',
			boxShadow: '0 -4px 12px rgba(0,0,0,0.2)',
			padding: '0 20px',
			position: 'fixed',
			width: '100%',
			bottom: 0,
			left: 0
		},
		displayFlex: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			alignSelf: 'center',
			justifyContent: 'space-between'
		},
		marginLeft20: { marginLeft: 20 },
		itemRomm: {
			width: 290,
			margin: 5
		},

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
		},

		paddingObject,
		containerlg,
		paddingBox,
		marginT40,
		marginT20,
		simpleFlex
	}))(CreditCardCss)
)
