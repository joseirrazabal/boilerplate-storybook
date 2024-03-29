import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/styles'
import { Text } from './TitleLabel/TitleLabel'

export const IconsFont = {
	iconSize: PropTypes.number,
	color: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.oneOf([
		'flaticon-agenda',
		'flaticon-airplane-ticket',
		'flaticon-alarm',
		'flaticon-alarm-1',
		'flaticon-alarm-clock',
		'flaticon-arrival',
		'flaticon-arrows',
		'flaticon-baby-cutlery',
		'flaticon-baby-cutlery-1',
		'flaticon-baggage',
		'flaticon-banner',
		'flaticon-beach',
		'flaticon-bed',
		'flaticon-bell',
		'flaticon-briefcase',
		'flaticon-building',
		'flaticon-building-1',
		'flaticon-building-2',
		'flaticon-calendar',
		'flaticon-calendar-1',
		'flaticon-chat-3',
		'flaticon-checked',
		'flaticon-cityscape',
		'flaticon-close',
		'flaticon-cogwheel',
		'flaticon-coins',
		'flaticon-commerce',
		'flaticon-commerce-1',
		'flaticon-communication-2',
		'flaticon-computer-2',
		'flaticon-conditioning-air',
		'flaticon-credit-card-5',
		'flaticon-croissant',
		'flaticon-departure',
		'flaticon-departures',
		'flaticon-discount',
		'flaticon-disney',
		'flaticon-disneyland-castle',
		'flaticon-dumbbell',
		'flaticon-dustbin',
		'flaticon-favourite',
		'flaticon-filter',
		'flaticon-flag',
		'flaticon-furniture',
		'flaticon-gear',
		'flaticon-gift',
		'flaticon-gift-1',
		'flaticon-half-moon',
		'flaticon-heart',
		'flaticon-heart-1',
		'flaticon-heart-2',
		'flaticon-horizon',
		'flaticon-horizontal-arrows',
		'flaticon-hotel',
		'flaticon-interface',
		'flaticon-interface-1',
		'flaticon-kitchen',
		'flaticon-knob',
		'flaticon-led-tv',
		'flaticon-levels',
		'flaticon-luggage',
		'flaticon-magnifier-tool',
		'flaticon-mail',
		'flaticon-man',
		'flaticon-medal',
		'flaticon-menu',
		'flaticon-menu-1',
		'flaticon-menu-2',
		'flaticon-mercury-thermometer-and-a-snowflake',
		'flaticon-message',
		'flaticon-money',
		'flaticon-money-1',
		'flaticon-money-2',
		'flaticon-moon',
		'flaticon-moon-phase-outline',
		'flaticon-multimedia',
		'flaticon-nature',
		'flaticon-new',
		'flaticon-parking',
		'flaticon-people',
		'flaticon-people-1',
		'flaticon-photo',
		'flaticon-placeholder',
		'flaticon-placeholder-1',
		'flaticon-placeholder-2',
		'flaticon-plane-ticket',
		'flaticon-plate-of-food-with-rounded-cover-outline',
		'flaticon-pool',
		'flaticon-question',
		'flaticon-question-1',
		'flaticon-reception-bell',
		'flaticon-rest',
		'flaticon-sale',
		'flaticon-screen',
		'flaticon-search',
		'flaticon-search-1',
		'flaticon-serving',
		'flaticon-serving-dish',
		'flaticon-settings-1',
		'flaticon-settings-2',
		'flaticon-shop',
		'flaticon-shopping-cart',
		'flaticon-signs',
		'flaticon-signs-1',
		'flaticon-skiing-stickman',
		'flaticon-skyscraper',
		'flaticon-smart-tv',
		'flaticon-snowflake',
		'flaticon-snowflake-1',
		'flaticon-snowflake-2',
		'flaticon-snowflake-3',
		'flaticon-social-2',
		'flaticon-social-3',
		'flaticon-social-4',
		'flaticon-social-5',
		'flaticon-social-6',
		'flaticon-social-7',
		'flaticon-social-media',
		'flaticon-social-media-1',
		'flaticon-social-media-2',
		'flaticon-social-media-3',
		'flaticon-social-media-4',
		'flaticon-social-media-6',
		'flaticon-sports-car',
		'flaticon-star-3',
		'flaticon-star-5',
		'flaticon-stroller',
		'flaticon-suitcase',
		'flaticon-sun',
		'flaticon-sun-2',
		'flaticon-swimming-pool',
		'flaticon-symbol',
		'flaticon-tag',
		'flaticon-tag-3',
		'flaticon-take-off',
		'flaticon-technology-1',
		'flaticon-technology-3',
		'flaticon-thermometer',
		'flaticon-time',
		'flaticon-transfer',
		'flaticon-transport-1',
		'flaticon-transport-2',
		'flaticon-transport-3',
		'flaticon-transport-5',
		'flaticon-travel',
		'flaticon-travel-1',
		'flaticon-traveler-with-a-suitcase',
		'flaticon-trophy',
		'flaticon-tv',
		'flaticon-user',
		'flaticon-user-1',
		'flaticon-user-2',
		'flaticon-wifi',
		'flaticon-youtube'
	])
}

const IconsFontComponent = ({ color, icon, title, classes, primaryColor }) => (
	<span style={{ display: 'flex', justifyContent: 'flex-start', padding: '5px 0' }}>
		<i className={classNames(classes.i, icon, primaryColor && classes.colorPrimary)} style={{ color }} />
		{title && (
			<div style={{ marginLeft: 10 }}>
				<Text color={color}>{title}</Text>
			</div>
		)}
	</span>
)

IconsFontComponent.defaultProps = {
	borderBottom: '1px solid silver',
	iconSize: null,
	color: '',
	primaryColor: false,
	icon: '',
	title: null
}

IconsFontComponent.propTypes = {

	iconSize: PropTypes.number,
	icon: PropTypes.string,
	primaryColor: PropTypes.string,
	title: PropTypes.string,
	color: PropTypes.string,
	borderBottom: PropTypes.string
}
const styles = ({ palette, iconSize, color }) => ({
	i: {
		color,
		':before': {
			margin: 0,
			fontSize: iconSize
		}
	},
	colorPrimary: {
		color: palette.primary.main
	}
})
export default withStyles(styles)(IconsFontComponent)
