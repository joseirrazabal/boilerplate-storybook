import React from 'react'
import PropTypes from 'prop-types'
import { FaPencilAlt } from 'react-icons/fa'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import IconsFont from '../../Atoms/IconsFont'

const ResumenBusquedaPaquetes = ({ classes, origin }) => (
	<div>
		<div className={classNames(classes.contentCard)}>
			<div className={classNames(classes.contentinfo)}>
				<div className={classNames(classes.headerCard)}>
					<Text content={origin} size={15} left color="black" />
				</div>
				<div className={classNames(classes.flex, classes.padding)}>
					<div className={classNames(classes.flex)}>
						<IconsFont size={20} icon="flaticon-calendar" />
						<Text content="del 10 al 20 de Julio" size={14} left style={{ marginLeft: 10 }} color="black" />
					</div>
					<div className={classNames(classes.flex, { maxWidth: 60 })}>
						<div className={classNames(classes.flex)}>
							<IconsFont size={20} icon="flaticon-user-2" />
							<Text content="2" size={14} left style={{ marginLeft: 10 }} color="black" />
						</div>
					</div>
				</div>
			</div>
			<div className={classNames(classes.edit)}>
				<Button
					style={{ borderRadius: '0 6px 6px 0', position: 'absolute', height: '100%' }}
					iconLeft={<FaPencilAlt />}
				/>
			</div>
		</div>
	</div>
)

ResumenBusquedaPaquetes.defaultProps = {
	title: 'Comentarios',
	content: null
}

ResumenBusquedaPaquetes.propTypes = {

	title: PropTypes.string,
	content: PropTypes.string
}
const styles = () => ({
	contentCard: {
		background: 'white',
		position: 'relative',
		boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
		borderRadius: 6,
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'stretch',
		margin: 10
	},
	headerCard: {
		width: '100%',
		padding: 10,
		borderBottom: '0.5px solid #f2f2f2'
	},
	padding: {
		padding: 10
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	contentinfo: {
		width: 'calc(100% - 40px)'
	}
})
export default withStyles(styles)(ResumenBusquedaPaquetes)
