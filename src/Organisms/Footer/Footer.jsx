import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Image from '../../Atoms/Images/Image'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import SelectNumber from '../../Atoms/SelectNumber'
import IconsFont from '../../Atoms/IconsFont'

const socialMedia = [
	{
		icon: 'flaticon-social-media-2',
		title: 'Facebook',
		link: 'https://www.facebook.com/upateonline/'
	},
	{
		icon: 'flaticon-social-media-1',
		title: 'Twitter',
		link: 'https://twitter.com/upateonline'
	},
	{
		icon: 'flaticon-social-media',
		title: 'Instagram',
		link: 'https://www.instagram.com/upate/'
	}
]
const dataLegal = [
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Cpf0ilDdbX6DlDbInB7z-Aq7NR_MHUbhYjGo1DY2YeqKRkB2A',
		title: 'data fiscal Upate',
		link: 'http://qr.afip.gob.ar/?qr=rEj5BL3gqUIq5pqk4SwJNg,,'
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/IATAlogo.svg/245px-IATAlogo.svg.png',
		title: 'IATA',
		link: '#'
	},
	{
		image: 'https://www.argenprop.com/Content/images/pdp-logo.png',
		title: 'PDP',
		link: 'http://www.argentina.gob.ar/aaip/datospersonales'
	}
]
const termsPolitics = [
	{
		title: 'Ayuda',
		link: '/ayuda'
	},
	{
		title: 'Políticas de cancelación',
		link: '/politicas'
	},
	{
		title: 'Politicas de privacidad',
		link: '/privacidad'
	},
	{
		title: 'Quienes somos?',
		link: '/nosotros'
	}
]

class Footer extends React.PureComponent {
	render() {
		const { classes, staticPolitics, dataEnterprise } = this.props
		return (
			<footer className={classNames(classes.footer)}>
				<Grid container spacing={2} className={classNames(classes.containerlg)}>
					<Grid key={1} item xs={12}>
						<div className={classNames(classes.contentRedes)}>
							{socialMedia.map(icons => (
								<a
									name={icons.title}
									href={icons.link}
									alt={icons.title}
									rel="noopener noreferrer"
									target="_blank"
									aria-label={icons.title}
								>
									<div className={classNames(classes.colorIcon)}>
										<IconsFont primaryColor size={20} icon={icons.icon} />
									</div>
								</a>
							))}
						</div>
					</Grid>
					<Grid
						key={2}
						item
						xs={12}
						sm={4}
						lg={4}
						className={classNames(classes.borderTop, classes.paddingBox, classes.footerxs)}
					>
						<TitleSecondary left content="Información" />
						<ul className={classNames(classes.informacion, classes.font)}>
							{termsPolitics.map(i => (
								<li>
									<Text size={11} italic>
										<Link to={i.link} className={classes.link}>
											{i.title}
										</Link>
									</Text>
								</li>
							))}
						</ul>
					</Grid>
					<Grid
						key={3}
						item
						xs={12}
						sm={8}
						lg={8}
						className={classNames(classes.borderTop, classes.paddingBox, classes.footerxs)}
					>
						<TitleSecondary left content="Contacto" />
						<ul className={classNames(classes.contacto, classes.font)}>
							{dataEnterprise.map(item => (
								<li>
									<Text size={11} italic>
										{item.title}
									</Text>
								</li>
							))}
						</ul>
					</Grid>
					{false && (
						<Grid key={4} item xs={12} sm={4} lg={4} className={classNames(classes.borderTop)}>
							<div className={classNames(classes.flex)}>
								<Grid item xs={6} className={classNames(classes.padding10)}>
									<SelectNumber inputName="nombre1" inputId="1" />
								</Grid>
								<Grid item xs={6} className={classNames(classes.padding10)}>
									<SelectNumber inputName="nombre2" inputId="2" />
								</Grid>
							</div>
						</Grid>
					)}
					<Grid
						p={10}
						direction="row"
						justify="space-between"
						alignItems="center"
						container
						key={5}
						className={classNames(classes.borderTop, classes.paddingBox, classes.flexCenter)}
					>
						<div className={classNames(classes.p10)}>
							<Text content="Upate 2019" />
						</div>
						<div>
							{' '}
							<ul style={{ width: '100%' }} className={classNames(classes.borderTop, classes.flexbox)}>
								{dataLegal.map(legal => (
									<li style={{ padding: 5, width: '100px' }}>
										<a
											href={legal.link}
											rel="noopener noreferrer"
											target="_blank"
											alt={legal.title}
											name={legal.title}
											aria-label={legal.title}
										>
											<Image height={30} image={legal.image} />
										</a>
									</li>
								))}
							</ul>
						</div>
					</Grid>
					<Grid
						key={6}
						item
						xs={12}
						className={classNames(classes.borderTop, classes.paddingBox, classes.staticPolitics)}
					>
						<Text size={10} italic left content={staticPolitics} />
					</Grid>
				</Grid>
				{/* <Grid container spacing={16} className={classNames(classes.containerlg)}>
					<ul style={{ width: '100%' }} className={classNames(classes.borderTop, classes.flexbox)}>
						{dataLegal.map(legal => (
							<li style={{ padding: 5, width: '100px' }}>
								<a
									href={legal.link}
									rel="noopener noreferrer"
									target="_blank"
									alt={legal.title}
									name={legal.title}
									aria-label={legal.title}
								>
									<Image height={40} image={legal.image} />
								</a>
							</li>
						))}
					</ul>
				</Grid> */}
			</footer>
		)
	}
}
Footer.defaultProps = {
	image: '',
	colorPrimary: true,
	staticPolitics:
		'Dirección general de defensa y protección al consumidor - consultas y/o denuncias. El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326". "La direccion nacional de proteccion de datos personales, organo de control de la ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.',
	dataEnterprise: [
		{ title: 'Teléfono: 0800 345 5100' },
		{ title: 'Horario de atención: lunes a viernes de 9 a 19hs.' },
		{ title: 'Honduras 5522 1er piso- CABA' },
		{ title: 'Razón social: UPATE SAU' },
		{ title: 'Legajo: 17.406 Cuit :30-71580308-5' }
	]
}

Footer.propTypes = {
	image: PropTypes.string,
	colorPrimary: PropTypes.string,
	staticPolitics: PropTypes.string,
	dataEnterprise: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string
		})
	)
}
const styles = ({ palette }) => ({
	footer: {
		background: 'white',
		borderTop: '1px solid rgba(128,128,128,0.6)',
		marginTop: 40
	},
	font: {
		marginTop: 10
	},
	flexbox: {
		display: 'flex'
	},
	containerlg: {
		width: '100%',
		maxWidth: 1300,
		margin: 'auto',
		padding: '0 20px',

		'@media (max-width: 800px)': {
			padding: '0 10px'
		}
	},
	borderTop: {
		borderTop: '1px solid #f2f2f2'
	},
	link: {
		color: '#1856A0!important'
	},
	contentRedes: {
		maxWidth: 200,
		margin: 'auto',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	colorIcon: {
		color: palette.primary.main
	},
	informacion: {
		padding: 0,
		fontSize: 12,
		lineHeight: '20px',
		color: palette.optional.link
	},
	contacto: {
		padding: 0,
		fontSize: 12,
		lineHeight: '20px',
		color: 'gray'
	},
	p10: {
		paddingLeft: '10px'
	},
	footerxs: {
		'@media (max-width: 600px)': {
			'& h2': {
				textAlign: 'center!important'
			},
			'& ul>li>p': {
				textAlign: 'center!important'
			}
		}
	},
	flexCenter: {
		'@media (max-width: 600px)': {
			justifyContent: 'center',
			'& p': {
				padding: 5
			}
		}
	},
	staticPolitics: {
		'@media (max-width: 600px)': {
			'& p': {
				textAlign: 'justify!important'
			}
		}
	}
})
export default withStyles(styles)(Footer)
