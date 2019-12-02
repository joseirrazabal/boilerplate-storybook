import React from 'react'
/* import PropTypes from 'prop-types' */
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import IdeameHeader from '../../Organisms/Header/IdeameHeader'
import Footer from '../../Organisms/Footer/Footer'
import SimpleCard from '../../Organisms/Card/SimpleCard'
import SmallCard from '../../Organisms/Card/SmallCard'
import IdCardFullBackground from '../../Organisms/Card/IdCardFullBackground'
import IdProjectCard from '../../Organisms/Card/IdProjectCard'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'
import Slider from '../../Organisms/Slider/Slider'

class IdeameHome extends React.PureComponent {
	render() {
		const { classes } = this.props

		return (
			<div>
				<IdeameHeader />
				<div key={3} className={classes.container}>
					<Grid item xs={12} className={classes.paddingBox}>
						<TitleSecondary center size={18} content="Titulo de ejemplo" />
					</Grid>
					<Slider slidesToShow={3} className="carousel">
						<div className={classes.items}>
							<IdProjectCard />
						</div>
						<div className={classes.items}>
							<IdProjectCard />
						</div>
						<div className={classes.items}>
							<IdProjectCard />
						</div>
					</Slider>
				</div>
				<div key={3} className={classes.container}>
					<Grid item xs={12} className={classes.paddingBox}>
						<TitleSecondary center size={18} content="Titulo de ejemplo" />
					</Grid>
					<Slider slidesToShow={3} className="carousel">
						<div className={classes.items}>
							<SimpleCard
								imageUrl="https://s3.amazonaws.com/ideame-images/resizers/214990_336_189_undefined_undefined_projectImageOriginalUrl.jpeg"
								title="Hotel Buenos Aires Ejemplo dos titulo largo…"
							/>
						</div>
						<div className={classes.items}>
							<SimpleCard
								imageUrl="https://s3.amazonaws.com/ideame-images/resizers/212610_336_189_undefined_undefined_projectImageOriginalUrl.jpeg"
								title="Hotel Buenos Aires Ejemplo dos titulo largo…"
							/>
						</div>
						<div className={classes.items}>
							<SimpleCard
								imageUrl="https://s3.amazonaws.com/ideame-images/resizers/208736_336_189_undefined_undefined_projectImageOriginalUrl.jpeg"
								title="Hotel Buenos Aires Ejemplo dos titulo largo…"
							/>
						</div>
					</Slider>
				</div>
				<div key={1} className={classNames(classes.container)}>
					<Grid item xs={12} className={classes.paddingBox}>
						<TitleSecondary center size={18} content="Titulo de ejemplo" />
					</Grid>
					<Slider slidesToShow={2} lassName="carousel">
						<div className={classes.items}>
							<SmallCard
								image="https://s3.amazonaws.com/ideame-images/resizers/214424_336_189_undefined_undefined_projectImageOriginalUrl.jpeg"
								title="IKIGAI - LA PELÍCULA"
								minHeight={200}
								width={300}
								subtitle="Recaudó $ 5.650 ARS"
							/>
						</div>
						<div className={classes.items}>
							<SmallCard
								image="https://s3.amazonaws.com/ideame-images/resizers/214113_336_189_undefined_undefined_projectImageOriginalUrl.jpeg"
								title="BUENOS AIRES PARA (DES) ARMAR"
								minHeight={200}
								width={300}
								subtitle="Recaudó $ 31.800 ARS"
							/>
						</div>
					</Slider>
				</div>
				<div key={3} className={classes.container}>
					<Grid item xs={12} className={classes.paddingBox}>
						<TitleSecondary center size={18} content="Titulo de ejemplo" />
					</Grid>
					<Slider slidesToShow={5} className="carousel">
						<div className={classes.items}>
							<SimpleCard
								imageUrl="https://s3.amazonaws.com/ideame-images/resizers/211566_336_189_undefined_undefined_projectImageOriginalUrl.jpeg"
								title="Hotel Buenos Aires Ejemplo dos titulo largo…"
							/>
						</div>
						<div className={classes.items}>
							<SimpleCard
								imageUrl="https://s3.amazonaws.com/ideame-images/resizers/211898_336_189_undefined_undefined_projectImageOriginalUrl.jpeg"
								title="Hotel Buenos Aires Ejemplo dos titulo largo…"
							/>
						</div>
						<div className={classes.items}>
							<SimpleCard
								imageUrl="https://s3.amazonaws.com/ideame-images/resizers/213854_336_189_undefined_undefined_projectImageOriginalUrl.jpeg"
								title="Hotel Buenos Aires Ejemplo dos titulo largo…"
							/>
						</div>
						<div className={classes.items}>
							<SimpleCard
								imageUrl="https://s3.amazonaws.com/ideame-images/resizers/214127_336_189_undefined_undefined_projectImageOriginalUrl.jpeg"
								title="Hotel Buenos Aires Ejemplo dos titulo largo…"
							/>
						</div>
						<div className={classes.items}>
							<SimpleCard title="Hotel Buenos Aires Ejemplo dos titulo largo…" />
						</div>
					</Slider>
				</div>
				<div key={7} className={classes.container}>
					<Grid item xs={12} className={classes.paddingBox}>
						<TitleSecondary center size={18} content="Titulo de ejemplo" />
					</Grid>
					<Slider slidesToShow={2} className="carousel">
						<div className={classes.items}>
							<IdCardFullBackground />
						</div>
						<div className={classes.items}>
							<IdCardFullBackground />
						</div>
					</Slider>
				</div>
				<Footer />
			</div>
		)
	}
}

export default withStyles(() => ({
	noWrapper: {
		'@media (max-width: 800px)': {
			overflowX: 'scroll',
			background: '#f2f2f2',
			padding: 10,
			display: 'block',
			whiteSpace: 'nowrap',
			width: '100%'
		}
	},
	marginTopNegativo: {
		marginTop: '-90px',
		position: 'relative',
		zIndex: 1
	},
	items: {
		padding: 10
	},
	container: {
		margin: 'auto',
		width: '100%',
		maxWidth: 1200
	},
	paddingBox: {
		paddingTop: 30,
		paddingBottom: 30
	}
}))(IdeameHome)
