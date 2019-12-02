import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Stars from '../../Atoms/Stars'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import { Text, TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import Fare from '../../Atoms/Fare'

const NavFixed = ({ nameHotel, price, stars, classes, onBuy }) => (
	<div className={classes.footerFixed}>
		<ContainerCard shadow radius={0}>
			<div className={classes.container}>
				<div className={classes.displayFlex} style={{ height: '100%' }}>
					<div>
						<Stars stars={stars} />
						<Text size={16} content={nameHotel} color="black" />
					</div>
					<div className={classes.displayFlex}>
						<div>
							<TitleSecondary content={<Fare amount={price} />} right bold italic />
							<Text style={{ width: '100%' }} size={12} content="Total" italic right color="black" />
						</div>
						<div className={classes.marginLeft20}>
							<Button text="Comprar" border radius onClick={onBuy} />
						</div>
					</div>
				</div>
			</div>
		</ContainerCard>
	</div>
)
NavFixed.defaultProps = {
	nameHotel: 'Tres Vagos',
	price: 4666,
	onBuy: () => { }
}

NavFixed.propTypes = {
	nameHotel: PropTypes.string,
	price: PropTypes.number,
	onBuy: PropTypes.func
}

export default withStyles(() => ({
	footerFixed: {
		position: 'fixed',
		width: '100%',
		bottom: 0,
		left: 0,
		'@media (max-width: 800px)': {
			display: 'none'
		}
	},
	container: {
		width: '100%',
		maxWidth: 800,
		margin: 'auto',
		height: 65
	},
	marginLeft20: {
		marginLeft: 20
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'space-between'
	}
}))(NavFixed)
