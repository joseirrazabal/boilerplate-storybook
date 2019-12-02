import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

import RangeFilter from './RangeFilter'
import ListFilter from './ListFilter'
import Stars from '../../Atoms/Stars'

class FiltersHotels extends React.PureComponent {
	state = {}

	handlePriceChange = values => {
		this.setState({ values })
	}

	getStarsTitle = values => {
		const sufix = values && values.length === 1 && values[0] === 1 ? 'Estrella' : 'Estrellas'
		return `${values.toString()} ${sufix}`
	}

	render() {
		const { classes, finalPrice, finalPriceExtremes } = this.props

		return (
			<div className={classNames(classes.contentFilters)}>
				<RangeFilter
					anchorId="precio_id"
					initialTitle="Precio"
					initialValues={finalPrice}
					onChange={this.handlePriceChange}
					formatValue={val => `$ ${val}`}
					extremes={finalPriceExtremes}
				/>
				<ListFilter
					anchorId="stars_id"
					initialTitle="Estrellas"
					initialValues={[1, 2]}
					getTitle={this.getStarsTitle}
					items={[
						{ value: 1, text: <Stars stars={1} />, primary: '100' },
						{ value: 2, text: <Stars stars={2} />, primary: '130' },
						{ value: 3, text: <Stars stars={3} />, primary: '130' },
						{ value: 4, text: <Stars stars={4} />, primary: '130' },
						{ value: 5, text: <Stars stars={5} />, primary: '130' }
					]}
				/>
				<ListFilter
					anchorId="board_id"
					initialTitle="Régimen"
					initialValues={[1, 2]}
					// getTitle={this.getBoardTitle}
					items={[
						{ value: 1, text: 'Sólo alojamiento', primary: '100' },
						{ value: 2, text: 'Desayuno', primary: '130' },
						{ value: 3, text: 'Media pensión', primary: '130' },
						{ value: 4, text: 'Pensión completa', primary: '130' },
						{ value: 5, text: 'All inclusive', primary: '130' }
					]}
				/>
			</div>
		)
	}
}

const facet = PropTypes.arrayOf(
	PropTypes.shape({
		count: PropTypes.number,
		value: PropTypes.number
	})
)

FiltersHotels.defaultProps = {
	board: {},
	finalPrice: {
		from: 10,
		to: 2000
	},
	finalPriceExtremes: {
		min: 10,
		max: 2000
	}
}
FiltersHotels.propTypes = {

	finalPrice: PropTypes.shape({
		max: PropTypes.number,
		min: PropTypes.number
	}),
	finalPriceExtremes: PropTypes.shape({
		min: PropTypes.number,
		max: PropTypes.number
	}),
	finalPriceTitle: PropTypes.string.isRequired,
	stars: facet.isRequired,
	starsTitle: PropTypes.string.isRequired,
	board: facet,
	boardTitle: PropTypes.string.isRequired
}

export default withStyles(({ mauri: { color } }) => ({
	contentFilters: {
		overflowX: 'scroll',
		whiteSpace: 'nowrap',
		width: '100%',
		':after': {
			content: "''",
			position: 'absolute',
			top: 0,
			right: 0,
			width: 60,
			height: '100%',
			backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,1))'
		}
	},
	color,
	menu: {
		padding: 0,
		margin: 0
	},
	menuItem: {
		width: '100%',
		minWidth: 400
	},
	button: {
		border: '1px solid silver',
		width: 'auto',
		marginRight: 10,
		display: 'inline-block',
		borderRadius: 6
	}
}))(FiltersHotels)
