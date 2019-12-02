import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'

const NotResultHotels = ({ message }) => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="center">
					<div
						style={{
							display: 'flex',
							minWidth: 400,
							minHeight: 400,
							paddingTop: 30,
							paddingBottom: 30,
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<div className="notResultHotels" />
						<TitleSecondary center color="gray" size={18} content={message} />
					</div>
				</Grid>
			</Grid>
		</Grid>
	)
}

NotResultHotels.defaultProps = {
	message: '¡Ouch! No se encontraron resultados'
}
NotResultHotels.propTypes = {
	message: PropTypes.string
}

export default NotResultHotels
