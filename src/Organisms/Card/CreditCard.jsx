import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Bank from '../../Atoms/Bank'
import CardProduct from '../../Atoms/CardProduct'
import ListBanks from '../ListBanks/ListBanks'
import ResDialog from '../Dialogs/ResDialog'

const formatNumber = (type, number) => {
	switch (type) {
		case 'AMEX':
			return `${number.slice(0, 4)} ${number.slice(4, 10)} ${number.slice(10, 15)}`
		default:
		case 'VISA':
			return `${number.slice(0, 4)}  ${number.slice(4, 8)}  ${number.slice(8, 12)}  ${number.slice(12, 16)}`
	}
}

const formatExpiry = expiry => (expiry.length > 2 ? `${expiry.slice(0, 2)}/${expiry.slice(2, 4)}` : expiry)

class CreditCard extends React.Component {
	state = { open: false }

	render() {
		const {
			fullScreen,
			banksFinancing,
			onChange,
			classes,
			bank,
			number,
			card,
			name,
			expiry,
			cvc,
			rotate,
			amount,
			...props
		} = this.props
		const { open } = this.state
		return (
			<>
				<div className="creditcard" {...props}>
					<div
						className={classNames('flip', {
							[classes.rotate]: rotate
						})}
					>
						<div className="front">
							<div className="strip-bottom" />
							<div className="strip-top" />
							{/* <svg className="logo" width="40" height="40" viewbox="0 0 17.5 16.2">
							<path d="M3.2 0l5.4 5.6L14.3 0l3.2 3v9L13 16.2V7.8l-4.4 4.1L4.5 8v8.2L0 12V3l3.2-3z" fill="white" />
						</svg> */}
							<div style={{ padding: 15 }}>{bank && <Bank bankId={bank.bankId} />}</div>
							<div className="investor">
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
								<div className="section">{formatNumber(card, number)}</div>
							</div>
							<div className="end">
								<span className="end-text">exp. end:</span>
								<span className="end-date"> {formatExpiry(expiry)}</span>
							</div>
							<div className="card-holder">{name}</div>
							<div className="master">{card && <CardProduct cardId={card.cardId} />}</div>
							{!bank && !card && (
								<div className="AddCard" onClick={() => this.setState({ open: true })}>
									<span>+</span>
									<Text center size={13} color="gray">
										AGREGAR TARJETA DE CREDITO
									</Text>
								</div>
							)}
						</div>
						<div className="back">
							<div className="strip-black" />
							<div className="ccv">
								<label>ccv</label>
								<div>{cvc}</div>
							</div>
							<div className="terms">
								<p>
									This card is property of Monzo Bank, Wonderland. Misuse is criminal offence. If found, please return
									to Monzo Bank or to the nearest bank with MasterCard logo.
								</p>
								<p>Use of this card is subject to the credit card agreement.</p>
							</div>
						</div>
					</div>
				</div>
				<ResDialog
					fullScreen={fullScreen}
					open={open}
					onClose={() => this.setState({ open: false })}
					title="Seleccionar financiación"
				>
					<DialogContent className={classes.popup}>
						<ListBanks
							banksFinancing={banksFinancing}
							amount={amount}
							onChange={financing => {
								this.setState({ open: false })
								onChange(financing)
							}}
						/>
					</DialogContent>
				</ResDialog>
			</>
		)
	}
}

CreditCard.propTypes = {
	classes: PropTypes.isRequired,
	card: PropTypes.string,
	number: PropTypes.string,
	name: PropTypes.string,
	expiry: PropTypes.string,
	cvc: PropTypes.string,
	bank: PropTypes.string,
	rotate: PropTypes.bool,
	onChange: PropTypes.func,
	banksFinancing: PropTypes.array
}

CreditCard.defaultProps = {
	card: null,
	number: '',
	name: '',
	expiry: '',
	cvc: '',
	bank: null,
	rotate: false,
	onChange: () => { },
	banksFinancing: []
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
		rotate: {
			WebkitTransform: 'rotateY(180deg)',
			transform: 'rotateY(180deg)'
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
	}))(CreditCard)
)
