import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'

const IndicadorMapa = ({ classes, principalText, currency, topText, isSelected }) => {
	return (
		<div className={classNames(classes.contentIndicadorMap, { [classes.selected]: isSelected })}>
			<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
				{topText && (
					<div className={classNames(classes.contentPoint, { [classes.isSelected2]: isSelected })}>
						<Text center color="white" size={13} content={topText} />
					</div>
				)}

				<div key={1} className={classNames(classes.contentPrecio, { [classes.isSelected]: isSelected })}>
					<Text center italic size={14} content={`${principalText}`} />
				</div>
				<div key={2} className={classNames(classes.tick, { [classes.isTickSelected]: isSelected })} />
			</div>
		</div>
	)
}

IndicadorMapa.defaultProps = {
	isSelected: false
}

IndicadorMapa.propTypes = {

	lat: PropTypes.number.isRequired,
	lng: PropTypes.number.isRequired,
	isSelected: PropTypes.bool,
	principalText: PropTypes.string.isRequired,
	topText: PropTypes.string.isRequired
}

export default withStyles(() => ({
	contentIndicadorMap: {
		maxWidth: 100,
		width: '100%',
		borderRadius: 6
		/* overflow: 'hidden' */
	},
	contentPoint: {
		width: '100%',
		background: '#55C443',
		minHeight: 15,
		padding: 5
	},
	contentPrecio: {
		background: 'white',
		borderRadius: '0 0 6px 6px',
		width: '100%',
		minWidth: 65,
		minHeight: 25,
		padding: 5,
		boxShadow: '0 1px 4px rgba(0,0,0,0.3)'
	},
	tick: {
		width: 10,
		height: 10,
		border: '6px solid #fff',
		borderColor: '#fff transparent transparent',
		borderWidth: '6px 6px 0'
	},
	isSelected: {
		border: '#F2F2F2 !important',
		zIndex: 9999
	},
	isSelected2: {
		zIndex: 9999
	},
	isTickSelected: {
		border: '6px solid #F2F2F2 !important',
		borderColor: '#F2F2F2 transparent transparent !important'
	}
}))(IndicadorMapa)
