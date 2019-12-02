import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Button from '../../../Atoms/Button/Button'
import ContainerCard from '../../../Atoms/Card/ContainerCard'
import CardContent from '../../../Atoms/Card/CardContent'

const styles = () => ({
	container: {
		maxWidth: 1300,
		width: '100%',
		margin: 'auto'
	},
	ul: {
		padding: 0,
		margin: 0,
		display: 'flex',
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'center',
		alignItem: 'center'
	},
	listMenu: {
		fontSize: 13,
		listStyle: 'none',
		marginLeft: 10
	}
})

const NavBottom = ({ classes }) => (
	<div style={{ widht: '100%', marginTop: 15 }}>
		<ContainerCard flex="row" radius={0}>
			<CardContent paddingConfig={10} justify="flex-end">
				<div className={classNames(classes.displayFlex)}>
					<ul className={classNames(classes.ul)}>
						<li className={classNames(classes.listMenu)}>
							<Button text="MODIFICAR" primary={false} radius border />
						</li>
						<li className={classNames(classes.listMenu)}>
							<Button text="RESPONDER CONSULTA" radius border />
						</li>
					</ul>
				</div>
			</CardContent>
		</ContainerCard>
	</div>
)
NavBottom.defaultProps = {
	title: 'Usuarios'
}

NavBottom.propTypes = {

	title: PropTypes.string
}

export default withStyles(styles)(NavBottom)
