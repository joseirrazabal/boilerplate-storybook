import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import IconsFont from '../../Atoms/IconsFont'

class SearchHotelsMobile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			checkedA: true,
			open: false,
			open2: false,
			auth: true,
			anchorEl: null,
			calendar: {},
			passenger: {},
			place: '',
			suggestions: []
		}
	}

	handleClick = event => {
		const { handleClick } = this.props
		if (handleClick) handleClick(event)
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	handleClose2 = () => {
		this.setState({ open2: false })
	}

	render() {
		const { classes, placeholder, onSubmit, getSuggestions, suggestions: suggestionsProps } = this.props
		const { open, suggestions: suggestionsState, checkedB, passengers, openPassengers, type } = this.state

		return (
			<div className={classes.containerSearch}>
				<Paper key={1} onClick={this.handleClick} elevation={2} style={{ backgroundColor: 'transparent' }}>
					<Grid container spacing={0} className={classNames(classes.SearchHotelsMobile)}>
						<Grid item xs={1}>
							<IconsFont iconSize={30} icon="flaticon-reception-bell" />
						</Grid>
						<Grid item xs={10}>
							<Text style={{ marginLeft: 20 }} size={16} content={placeholder} />
						</Grid>
						<Grid item xs={1}>
							<IconsFont iconSize={30} icon="flaticon-search" />
						</Grid>
					</Grid>
				</Paper>
			</div>
		)
	}
}
SearchHotelsMobile.defaultProps = {
	placeholder: '¿Dónde querés hospedarte?',
	handleClick: () => {}
}

SearchHotelsMobile.propTypes = {

	placeholder: PropTypes.string,
	handleClick: PropTypes.func
}

export default withStyles(() => ({
	containerSearch: {
		display: 'none',

		'@media (max-width: 800px)': {
			display: 'block',
			cursor: 'pointer'
		}
	},

	SearchHotelsMobile: {
		width: '100%',
		maxWidth: 700,
		borderRadius: 10,
		padding: '20px 10px',
		backgroundColor: 'white',

		'@media (max-width: 800px)': {
			display: 'flex',
			alignItems: 'center'
		}
	}
}))(SearchHotelsMobile)
