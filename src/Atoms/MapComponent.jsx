import React from 'react'
import PropTypes from 'prop-types'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

const MyMap = withScriptjs(
	withGoogleMap(({ onMapMounted, isMarkerShown, onZoomChanged, defaultCenter, defaultZoom }) => (
		<GoogleMap ref={onMapMounted} onZoomChanged={onZoomChanged} defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
			{isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
		</GoogleMap>
	))
)

class MapComponent extends React.PureComponent {
	render() {
		const { classes, onMapMounted, defaultZoom, defaultCenter, onZoomChanged } = this.props
		return (
			<div style={{ width: '100%' }}>
				<MyMap
					isMarkerShown
					onMapMounted={onMapMounted}
					onZoomChanged={onZoomChanged}
					defaultZoom={defaultZoom}
					defaultCenter={defaultCenter}
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBg9z5PJwgYBLbHtsR0rRTw7HLefjAG7RA&v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div className={classNames(classes.mapView)} />}
					containerElement={<div className={classNames(classes.mapView)} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		)
	}
}
MapComponent.defaultProps = {
	onMapMounted: undefined,
	onZoomChanged: undefined
}
MapComponent.propTypes = {

	onMapMounted: PropTypes.func,
	onZoomChanged: PropTypes.func
}

export default withStyles(() => ({
	mapView: {
		height: '100vh',
		overflow: 'hidden',
		'@media (max-width: 1270px)': {
			display: 'none'
		},
		'@media (max-width: 800px)': {
			display: 'block',
			width: '100%',
			height: 300
		}
	}
}))(MapComponent)
