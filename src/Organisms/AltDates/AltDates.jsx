import React from 'react'

import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Slider from 'react-slick'

import moment from 'moment'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
/* import Image from '../../Atoms/Images/Image' */
import Fare from '../../Atoms/Fare'

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
	recomendado: {
		background: '#f9f8f7',
		color: 'red'
	},
	selectable: {
		cursor: 'pointer'
	},
	selected: {
		border: '0.5px solid #4A90E2',
		background: '#f9f8f7'
	},
	item: {
		paddingTop: '5px',
		borderTop: '0.5px solid silver',
		boxSizing: 'border-box',
		minHeight: 30,
		'&:hover': {
			// border: '0.5px solid #4A90E2',
      boxShadow: 'inset 0px 0px 0px 2px #4A90E2',
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
	// dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 7,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1
			}
		}
	]
}



const Price = ({ classes, best, value, onClick, selected }) =>
	value ? (
		<li onClick={onClick} className={classNames(classes.selectable, classes.item, { [classes.selected]: selected })}>
			{best ? (
				<Text size={12} center bold color="green" content={<Fare amount={value} />} />
			) : (
					<Text size={12} center color="black" content={<Fare amount={value} />} />
				)}
		</li>
	) : (
			<li className={classes.item} />
		)

const GoingDateRangePrice = ({ classes, goingDate, onSelect, best, selected }) => (
	<div>
		<ul className={classNames(classes.ul, classes.borderL)}>
			<li className={classNames(classes.title, classes.flexRow)}>
				<Text size={13} center color="black" bold content={moment(goingDate.date).format('DD/MM/YYYY')} />
			</li>
			{goingDate.returnDates.map(returnDate => (
				<Price
					best={best >= returnDate.fare}
					selected={moment(goingDate.date).format('YYYY-MM-DD') === selected.departuredate && moment(returnDate.date).format('YYYY-MM-DD') === selected.returndate}
					classes={classes}
					value={returnDate && returnDate.fare}
					onClick={() =>
						onSelect({
							departuredate: moment(goingDate.date).format('YYYY-MM-DD'),
							returndate: moment(returnDate.date).format('YYYY-MM-DD')
						})
					}
				/>
			))}
		</ul>
	</div>
)

const cheapest = alternativeDates =>
	alternativeDates.reduce((acc, cur) => {
		const fare = cur.returnDates.reduce(
			(acc2, cur2) => ((!cur2.fare || (acc2 && acc2 < cur2.fare)) ? acc2 : cur2.fare),
			null
		)
		return (!fare || (acc && acc < fare)) ? acc : fare
	}, null)

const AltDates = ({ classes, alternativeDates, onSelect, selected }) => {
	const best = cheapest(alternativeDates)
	return (
		<div className={classes.global}>
			<div className={classes.staticInfo}>
				<ul className={classes.ul}>
					<li className={classes.title}>
						<Text size={13} center color="black" content="+/-3 días" />
					</li>
					{alternativeDates[0].returnDates.map(returnDate => (
						<li className={classNames(classes.item, classes.recomendado)}>
							<Text size={12} center color="black" bold content={moment(returnDate.date).format('DD/MM/YYYY')} />
						</li>
					))}
				</ul>
			</div>
			<div className={classes.dinamicInfo}>
				<Slider {...settings}>
					{alternativeDates &&
						alternativeDates.map(goingDate => (
							<GoingDateRangePrice selected={selected} best={best} onSelect={onSelect} classes={classes} goingDate={goingDate} />
						))}
				</Slider>
			</div>
		</div>
	)
}

AltDates.defaultProps = {
	selected: {}
}

AltDates.propTypes = {

}

export default withStyles(styles)(AltDates)
