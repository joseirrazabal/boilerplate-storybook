import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { TitleSecondary, TitleH3, Text } from '../../Atoms/TitleLabel/TitleLabel'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import SmallSearch from '../../Organisms/Search/SmallSearch'
import Button from '../../Atoms/Button/Button'

class SimpleNews extends React.Component {
	render() {
		const { classes, useDefaultCursor } = this.props

		return (
			<section className={classes.contentSection}>
				<div className={classes.contentNews}>
					<div className={classes.paddingObject}>
						<TitleSecondary content={'¿Queres ser el primero?'} left size={20} />
					</div>
					<div className={classes.displayFlex}>
						<div style={{ width: '100%' }}>
							{false && <input className={classes.input} type="email" value="Ingresar email" required />}
						</div>
						<div style={{ width: '100%', maxWidth: 120 }}>
							<Button
								fullWidth
								size={'big'}
								primary={true}
								text={'SUSCRIBIRME'}
								onClick={this.submit}
								style={{ borderRadius: '0 6px 6px 0' }}
							/>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

SimpleNews.defaultProps = {
	content: null
}

SimpleNews.propTypes = {
	content: PropTypes.string
}
const styles = () => ({
	paddingObject: {},
	input: {
		width: '100%',
		border: 'none',
		padding: 18,
		background: '#f9f8f7',
		border: '1px solid #f2f2f2',
		margin: 0,
		fontSize: 15
	},
	contentSection: {
		background: 'white',
		width: '100%',
		paddingBottom: 30,
		boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
	},
	contentNews: {
		padding: 15,
		margin: 'auto',
		maxWidth: 800,
		display: 'flex',
		flexDirection: 'column'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})
export default withStyles(styles)(SimpleNews)
