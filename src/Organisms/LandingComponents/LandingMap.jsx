import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import { withStyles } from '@material-ui/styles'
import Indicador from '../../Molecules/Indicadores/IndicadorMapa'

const LandingMap = ({ center, zoom, text, height, width }) => (
	<div style={{ height, width }}>
		<GoogleMapReact
			bootstrapURLKeys={{ key: 'AIzaSyBg9z5PJwgYBLbHtsR0rRTw7HLefjAG7RA' }}
			defaultCenter={center}
			defaultZoom={zoom}
			center={(center.lat, center.lng)}
		>
			<div
				lat={center.lat}
				lng={center.lng}
				style={{ height: 100, position: 'absolute', marginTop: -25, marginLeft: -37 }}
			>
				<Indicador point={6} isSelected principalText={text} />
			</div>
		</GoogleMapReact>
	</div>
)

LandingMap.defaultProps = {
	width: 800,
	height: 600
}

LandingMap.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number
}

const styles = () => ({
	wrapper: {
		background: '#f9f8f7',
		padding: 0,
		width: '100%'
	}
})
export default withStyles(styles)(LandingMap)
