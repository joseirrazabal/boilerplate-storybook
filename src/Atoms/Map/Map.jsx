import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import { withStyles } from '@material-ui/styles'

class FlightMap extends Component {
	render() {
		const { defaultZoom, width, height, children, renderPolylines, center } = this.props

		return (
			<React.Fragment>
				<div
					style={{
						height,
						width
					}}
				>
					<GoogleMapReact
						bootstrapURLKeys={{ key: 'AIzaSyCxoqeE5ruW6dyKFheMiNCJrhajc7yOXDU', language: 'es', region: 'ar' }}
						defaultZoom={defaultZoom}
						defaultCenter={center}
						center={center}
						onGoogleApiLoaded={({ map, maps }) => renderPolylines(map, maps)}
					>
						{children}
					</GoogleMapReact>
				</div>
			</React.Fragment>
		)
	}
}

FlightMap.propTypes = {

	places: PropTypes.arrayOf(
		PropTypes.shape({
			lat: PropTypes.number,
			lng: PropTypes.number,
			name: PropTypes.string
		})
	),
	defaultZoom: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	renderPolylines: PropTypes.func
}

FlightMap.defaultProps = {
	renderPolylines: () => {},
	defaultZoom: 0,
	places: [],
	width: 700,
	height: 400
}

const styles = ({ palette }) => ({
	wrapper: {
		background: '#f9f8f7',
		padding: 0,
		width: '100%'
	}
})
export default withStyles(styles)(FlightMap)
