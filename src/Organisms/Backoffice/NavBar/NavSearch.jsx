import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/styles'
import { MdCreate, MdScreenShare, MdAdd, MdPersonAdd } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import OpenSelect from '../../../Atoms/Selects/OpenSelect'
import ContainerLg from '../../../Atoms/Containers/ContainerLg'
import { Text } from '../../../Atoms/TitleLabel/TitleLabel'
import Autocompletar from '../../../Molecules/Autocompletar/Autocompletar'
import ContainerCard from '../../../Atoms/Card/ContainerCard'
import CardContent from '../../../Atoms/Card/CardContent'

const styles = () => ({
	card: {
		border: '1px solid silver',
		borderRadius: 6,
		padding: 10,
		minWidth: 300
	},
	container: {
		maxWidth: 1300,
		width: '100%',
		margin: 'auto'
	},
	ul: {
		padding: 0,
		margin: 0,
		display: 'flex',
		alignItems: 'center'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'center',
		alignItems: 'center',
		'@media (max-width: 500px)': {
			flexDirection: 'column',
			justifyContent: 'flex-start'
		}
	},
	listMenu: {
		listStyle: 'none',
		width: '100%',
		margin: '0 10px'
	},
	listMenuBorderLine: {
		borderRight: '0.5px solid #ccc',
		paddingRight: 20
	},
	icon: {
		paddingRight: 10
	}
})

const Search = ({ placeholder }) => (
	<React.Fragment>
		<Autocompletar name="destination" placeholder={placeholder} />
	</React.Fragment>
)

const EditIcon = () => (
	<Tooltip title="editar">
		<Button>
			<MdCreate />
		</Button>
	</Tooltip>
)
const AddIcon = ({ classes, handleClick }) => (
	<Tooltip title="Nuevo" className={classes && classes.displayFlex}>
		<Button onClick={() => handleClick()}>
			<MdPersonAdd />
			<Text>Nuevo</Text>
		</Button>
	</Tooltip>
)
const ShareIcon = classes => (
	<Tooltip title="Compartir" className={classes.displayFlex}>
		<Button>
			<MdScreenShare />
			<Text>Compartir</Text>
		</Button>
	</Tooltip>
)
const SeeMoreIcon = () => (
	<Tooltip title="Agregar">
		<Button color="primary">
			<MdAdd />
			<Text>Agregar</Text>
		</Button>
	</Tooltip>
)
const PhoneIcon = classes => (
	<Tooltip title="Llamar">
		<Button color="Llamar">
			<div className={classNames(classes.icon)}>
				<FaPhone />
			</div>
			<Text>Llamar al cliente</Text>
		</Button>
	</Tooltip>
)

class NavSearch extends React.PureComponent {
	render() {
		const { classes, edit, search, share, seeMore, add, handleAdd, phone, filter, searchPlaceholder } = this.props

		return (
			<ContainerCard radius={0}>
				<ContainerLg>
					<CardContent paddingConfig={5}>
						<div className={classNames(classes.displayFlex)} style={{ width: '100%' }}>
							<div className={classNames(classes.displayFlex)}>
								{filter ? (
									<div style={{ position: 'relative' }}>
										<OpenSelect filters={filter} />
									</div>
								) : (
									<div />
								)}
								{search ? (
									<div className={classNames(classes.card)} style={{ width: '100%', maxWidth: 400 }}>
										<Search placeholder={searchPlaceholder} />
									</div>
								) : (
									<div />
								)}
							</div>
							<div className={classNames(classes.ul)}>
								<ul className={classNames(classes.ul)}>
									<li className={classNames(classes.listMenu)}>
										{edit ? <EditIcon /> : <React.Fragment />}
										{add ? <AddIcon handleClick={handleAdd} /> : <React.Fragment />}
										{share ? <ShareIcon /> : <React.Fragment />}
										{seeMore ? <SeeMoreIcon /> : <React.Fragment />}
										{phone ? <PhoneIcon /> : <React.Fragment />}
									</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</ContainerLg>
			</ContainerCard>
		)
	}
}
NavSearch.defaultProps = {
	search: false,
	add: false,
	edit: false,
	share: false,
	filter: false,
	seeMore: false,
	phone: false
}

NavSearch.propTypes = {

	search: PropTypes.object,
	phone: PropTypes.object,
	add: PropTypes.object,
	edit: PropTypes.object,
	share: PropTypes.object,
	seeMore: PropTypes.object,
	filter: PropTypes.object
}

export default withStyles(styles)(NavSearch)
