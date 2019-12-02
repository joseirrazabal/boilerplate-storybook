/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'

import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Slider from 'react-slick'
import get from 'lodash/get'
import { Text, TextNoWrap } from '../../Atoms/TitleLabel/TitleLabel'
import AirlineIconChildren from '../../Molecules/AirlineIcon/AirlineIcon'
import Fare from '../../Atoms/Fare'
import LoadingEscalas from './LoadingEscalas'

const styles = () => ({
	global: {
		background: 'white',
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		overflow: 'hidden',
		border: '0.5px solid silver'
	},
	staticInfo: {
		display: 'flex',
		width: '20%',
		flexDirection: 'column',
		'@media (max-width: 600px)': {
			width: '30%'
		},
		'@media (max-width: 400px)': {
			width: '35%'
		}
	},
	flexRow: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	dinamicInfo: {
		width: '80%',
		position: 'relative',
		flexDirection: 'row',
		'@media (max-width: 600px)': {
			width: '70%'
		},
		'@media (max-width: 400px)': {
			width: '65%'
		},
		'&:before': {
			content: "''",
			position: 'absolute',
			zIndex: 1,
			top: 0,
			left: 0,
			width: 50,
			height: '100%',
			backgroundImage: 'linear-gradient(to left,rgba(255,255,255,0),rgba(204,204,204,.6))'
		},
		'&:after': {
			content: "''",
			position: 'absolute',
			top: 0,
			right: 0,
			width: 50,
			height: '100%',
			backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0),rgba(204,204,204,.6))'
		}
	},
	title: {
		background: '#f9f8f7',
		padding: 5
	},
	selected: {
		padding: 5,
		minHeight: 30,
		// border: '0.5px solid #4A90E2 !important',
    boxShadow: 'inset 0px 0px 0px 2px #4A90E2 !important',
		boxSizing: 'border-box',
		background: '#f9f8f7'
	},
	recomendado: {
		padding: 5,
		minHeight: 30,
		// border: '0.5px solid #2ed412 !important',
    boxShadow: 'inset 0px 0px 0px 2px #2ed412 !important',
		boxSizing: 'border-box',
		background: '#f9f8f7'
	},
	selectable: {
		cursor: 'pointer'
	},
	disabled: {
		cursor: 'not-allowed',
		background: '#f2f2f2',
		color: 'silver'
	},
	item: {
		// padding: 5,
		paddingTop: '5px',
		borderTop: '0.5px solid silver',
		boxSizing: 'border-box',
		minHeight: 30,
		'&:hover': {
      padding: '-2px',
			// border: '2px solid #4A90E2',
      boxShadow: 'inset 0px 0px 0px 3px #4A90E2',
      boxSizing: 'border-box',
			background: '#f9f8f7'
		}
	},
	ul: {
		padding: 0,
		margin: 0,
		minHeight: 120
	},
	borderL: {
		borderLeft: '0.5px solid silver'
	}
})
const settings = {
	className: 'center',
	centerMode: false,
	infinite: false,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				arrows: true
			}
		}
	]
}

const getScalePrice = (scales, count) => {
	const scale = scales.find(scale => scale.scales === count)
	if (!scale) return null

	return scale.fare
}

const isBestPrice = (bestPrice, scales, count) => {
	const scale = scales.find(scale => scale.scales === count)
	if (!scale) return null
	return scale.fare <= bestPrice
}

const Price = ({ classes, best, value, onClick, selected }) =>
	value ? (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<li onClick={onClick} className={classNames(classes.selectable, classes.item, { [classes.selected]: selected })}>
			{best ? (
				<Text size={12} center color="green" bold content={<Fare amount={value} />} />
			) : (
				<Text size={12} center color="black" content={<Fare amount={value} />} />
			)}
		</li>
	) : (
		<li className={classNames(classes.item, classes.disabled)} />
	)

const isSelected = (selected, airline, scales) =>
	get(selected, 'airline') === airline && get(selected, 'scales') === scales

const AirlineScale = ({ classes, airlineScales, onSelect, selected, bestPrice }) => (
	<div>
		<ul className={classNames(classes.ul, classes.borderL)}>
			<li className={classNames(classes.title, classes.flexRow)}>
				<AirlineIconChildren code={airlineScales.airline.code} iso />
				<TextNoWrap size={12} left color="black" content={airlineScales.airline.name} />
			</li>
			<Price
				classes={classes}
				value={getScalePrice(airlineScales.scales, 0)}
				best={isBestPrice(bestPrice, airlineScales.scales, 0)}
				selected={isSelected(selected, airlineScales.airline.code, 0)}
				onClick={() => onSelect({ airline: airlineScales.airline.code, scales: 0 })}
			/>
			<Price
				classes={classes}
				value={getScalePrice(airlineScales.scales, 1)}
				best={isBestPrice(bestPrice, airlineScales.scales, 1)}
				selected={isSelected(selected, airlineScales.airline.code, 1)}
				onClick={() => onSelect({ airline: airlineScales.airline.code, scales: 1 })}
			/>
			<Price
				classes={classes}
				value={getScalePrice(airlineScales.scales, 2)}
				best={isBestPrice(bestPrice, airlineScales.scales, 2)}
				selected={isSelected(selected, airlineScales.airline.code, 2)}
				onClick={() => onSelect({ airline: airlineScales.airline.code, scales: 2 })}
			/>
		</ul>
	</div>
)

const airlinesHasScales = (airlines, scalesCount) =>
	airlines &&
	airlines.some(airline => airline.scales && airline.scales.some(airlineScale => airlineScale.scales === scalesCount))

const getBestPrice = airlinesScales => {
	let bestPrice = null

	for (const airlineScale of airlinesScales)
		for (const scales of airlineScale.scales) if (!bestPrice || bestPrice > scales.fare) bestPrice = scales.fare

	return bestPrice
}

const Scales = ({ classes, airlinesScales, onSelect, selected, loading }) => {
	if (loading) {
		return <LoadingEscalas items={5} />
	}

	const bestPrice = getBestPrice(airlinesScales)
	return (
		<div className={classes.global}>
			<div className={classes.staticInfo}>
				<ul className={classes.ul}>
					<li className={classes.title}>
						<Text size={13} center color="black" content="Resumen" />
					</li>
					<li
						className={classNames(classes.item, {
							[classes.disabled]: !airlinesHasScales(airlinesScales, 0)
						})}
					>
						<Text size={12} center color="silver" content="Directos" />
					</li>
					<li
						className={classNames(classes.item, {
							[classes.disabled]: !airlinesHasScales(airlinesScales, 1)
						})}
					>
						<Text size={12} center color="black" content="1 Escala" />
					</li>
					<li
						className={classNames(classes.item, {
							[classes.disabled]: !airlinesHasScales(airlinesScales, 2)
						})}
					>
						<Text size={12} center color="black" content="2 Escalas " />
					</li>
				</ul>
			</div>
			<div className={classes.dinamicInfo}>
				<Slider {...{ ...settings, slidesToShow: airlinesScales.length < 4 ? airlinesScales.length : 4 }}>
					{airlinesScales &&
						airlinesScales.map(airlineScales => (
							<AirlineScale
								key={airlineScales.airline.code}
								bestPrice={bestPrice}
								selected={selected}
								onSelect={onSelect}
								classes={classes}
								airlineScales={airlineScales}
							/>
						))}
				</Slider>
			</div>
		</div>
	)
}

Scales.defaultProps = {
	airlinesScales: []
}

Scales.propTypes = {

}

export default withStyles(styles)(Scales)
