import PropTypes from 'prop-types'

const Fare = ({ amount, financing, currency, installments }) =>
	`${currency} ${Math.ceil(amount)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
	`

Fare.defaultProps = {
	amount: 0,
	currency: '$'
}

Fare.propTypes = {
	amount: PropTypes.number,
	currency: PropTypes.string
}

export default Fare
