import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Radio from '@material-ui/core/Radio'
import { TitleH3, Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardAction from '../../Atoms/Card/CardAction'
import CardContent from '../../Atoms/Card/CardContent'

class IdReward extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedValue: 'a'
		}
	}

	handleChange = event => {
		this.setState({ selectedValue: event.target.value })
	}

	render() {
		const { classes, imageUrl, title, descrip } = this.props
		return (
			<ContainerCard flex="column">
				<div className={classNames(classes.flex)}>
					<div className={classNames(classes.imageReward)}>
						<CardAction>
							<ImageBackground
								minHeight={110}
								elevation={0}
								imageSize="cover"
								alt="Nombre del Hotel"
								backgroundImage={
									imageUrl ||
									'https://s3.amazonaws.com/ideame-images/resizers/209446_686_387_fill_undefined_projectImageOriginalUrl.jpeg'
								}
							/>
						</CardAction>
					</div>
					<CardContent flex="column" paddingConfig={10} justify="space-between">
						<div style={{ width: '100%' }}>
							<div style={{ marginBottom: 10 }}>
								<TitleH3 size={18} content={title} />
							</div>
							<Text size={13} color="black">
								{descrip}
							</Text>
						</div>
					</CardContent>
				</div>
				<div className={classNames(classes.flex)}>
					<CardContent flex="column" paddingConfig={10} background="#f9f8f7" justify="space-between">
						<div style={{ width: '100%', marginBottom: 10 }}>
							<Text size={12} content="Seleccionar Medio de envio" color="gray" />
							<div className={classNames(classes.flexCenter)}>
								<Radio
									checked={this.state.selectedValue === 'a'}
									onChange={this.handleChange}
									value="a"
									className={classes.radius}
									name="radio-button-demo"
									aria-label="A"
								/>
								<Text>Retiro en el local</Text>
							</div>
							<div className={classNames(classes.flexCenter)}>
								<Radio
									checked={this.state.selectedValue === 'a'}
									onChange={this.handleChange}
									value="a"
									className={classes.radius}
									name="radio-button-demo"
									aria-label="A"
								/>
								<Text>Envio Gratis</Text>
							</div>
						</div>
						<div className={classNames(classes.flex)}>
							{/* <Button radius text="ELIMINAR" size="small" /> */}
							<Button radius text="AGREGAR" size="small" secondary />
						</div>
					</CardContent>
				</div>
			</ContainerCard>
		)
	}
}

IdReward.defaultProps = {
	title: '¿Quien mato a Nisman?',
	descrip:
		'¡Gracias por bancarnos! Vale por un sticker de CIRCA + Agradecimiento en redes sociales en cuanto la app esté lista. Bonus: la entrega incluye un abrazo consensuado.',
	fecha: '10 de abril',
	precio: '4000'
}

IdReward.propTypes = {

	title: PropTypes.string,
	descrip: PropTypes.string,
	fecha: PropTypes.string,
	precio: PropTypes.string,
	imageUrl: PropTypes.string
}

export default withStyles(() => ({
	global: {
		backgroundColor: 'white',
		height: 'auto'
	},
	radius: {
		padding: 0,
		marginRight: 10
	},
	flex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',

		'@media (max-width: 600px)': {
			flexDirection: 'column'
		}
	},
	flexCenter: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	flexColumn: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',

		'@media (max-width: 600px)': {
			flexDirection: 'row'
		}
	},
	imageReward: {
		width: 120,

		'@media (max-width: 600px)': {
			width: '100%'
		}
	}
}))(IdReward)
