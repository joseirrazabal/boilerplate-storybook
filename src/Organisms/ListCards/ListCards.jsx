import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import Bank from '../../Atoms/Bank'
/* import Button from '../../Atoms/Button/Button' */
import ContainerCard from '../../Atoms/Card/ContainerCard'

const settings = {
	centerMode: false,
	autoplay: true,
	// autoplaySpeed:1000,
	dots: false,
	infinite: true,
	slidesToShow: 7,
	speed: 500,
	slidesToScroll: 1,
	swipeToSlide: true,
	lazyLoad: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1100,
			settings: {
				autoplay: true,
				arrows: false,
				slidesToShow: 8,
				slidesToScroll: 1,
				swipeToSlide: true,
				lazyLoad: true,
				draggable: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1,
				swipeToSlide: true,
				lazyLoad: true,
				initialSlide: 0,
				draggable: true
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				swipeToSlide: true,
				lazyLoad: true,
				draggable: true
			}
		}
	]
}

const stylesItemSlide = {
	flexCenterColumn: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	}
}

let ItemSlide = ({ classes, bankId, installments, dues }) => {
	return (
		<React.Fragment>
			<Bank bankId={bankId} />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div className={classes.flexCenterColumn} />
			</div>
			{installments ? (
				<div>
					<Text size={10} center bold content={`${installments} CUOTAS`} />
					{dues ? <Text size={9} center italic content="FIJAS" style={{ lineHeight: '5px' }} /> : <React.Fragment />}
				</div>
			) : (
				''
			)}
		</React.Fragment>
	)
}

ItemSlide = withStyles(stylesItemSlide)(ItemSlide)

ItemSlide.propTypes = {
	classes: PropTypes.isRequired,
	bankId: PropTypes.string.isRequired,
	installments: PropTypes.string,
	dues: PropTypes.bool
}

ItemSlide.defaultProps = {
	installments: null,
	dues: false
}

const getInstallments = bankFinancing =>
	bankFinancing.cardFinancing.reduce((maxInstallments, cardFinancing) => {
		const installments = cardFinancing.installmentsFinancing.reduce((max, installmentsFinancing) => {
			return Math.max(installmentsFinancing.installments, max)
		}, 0)

		return Math.max(installments, maxInstallments)
	}, 0)

const ListCards = ({ classes, banksFinancing }) => (
	<ContainerCard position={'relative'} margin={'50px 0 0 0'} radius={5}>
		<section className={classNames(classes.global)}>
			<div className={classNames(classes.container)}>
				<div className={classNames(classes.flexResponsive)}>
					<div className={classNames(classes.flexCenterColumn)} style={{ width: '100%', minWidth: 200, maxWidth: 200 }}>
						<TitleSecondary bold center size={16} content="La mejor forma de pagar" />
						{/* <div style={{ width: '100%', marginBottom: 5 }}>
							<Button text="ver mas bancos" size="small" fullWidth primary={false} link />
						</div> */}
					</div>
					<div className={classNames(classes.contentSlide)}>
						<Slider {...settings}>
							{banksFinancing.map(bankFinancing => (
								<div className={classNames(classes.flexCenterColumn)}>
									<ItemSlide bankId={bankFinancing.bank.bankId} installments={getInstallments(bankFinancing)} />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	</ContainerCard>
)

ListCards.defaultProps = {
	banksFinancing: []
}
ListCards.propTypes = {
	classes: PropTypes.isRequired,
	banksFinancing: PropTypes.arrayOf(PropTypes.node.isRequired)
}

const styles = {
	global: {
		backgroundColor: 'white',
		padding: 15
	},
	container: {
		maxWidth: 1200,
		width: '100%',
		margin: 'auto'
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		width: '100%'
	},
	flexResponsive: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'@media (max-width: 800px)': {
			flexDirection: 'column'
		}
	},
	contentSlide: {
		width: '100%',
		marginTop: 15,
		'@media (max-width: 800px)': {
			width: '100%'
		}
	},
	flexCenterColumn: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'center'
	}
}

export default withStyles(styles)(ListCards)
