import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Slider from 'react-slick'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import ImageBackground from '../../Atoms/Images/ImageBackground'

const settings = {
	className: 'center',
	centerMode: false,
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}

const ContentCard = ({ classes, images, description, children, alt }) => (
	<ContainerCard shadow overflow="hidden">
		<div className={classNames(classes.contentCard)}>
			<div className={classNames(classes.global)}>
				<Slider {...settings} className="carousel">
					{images &&
						images.map(image => {
							return (
								<div className="itemImage">
									<ImageBackground
										minHeight={350}
										imageSize={800}
										alt={alt}
										backgroundImage={`http://photos.hotelbeds.com/giata/original/${image.path}`}
										radius={0}
									/>
								</div>
							)
						})}
				</Slider>
			</div>
			<CardContent flex="column" paddingConfig={15}>
				<Text
					style={{ width: '100%', lineHeight: '25px' }}
					size={15}
					content={<div dangerouslySetInnerHTML={{ __html: description }} />}
					left
					color="black"
				/>
			</CardContent>
			<CardContent>{children}</CardContent>
		</div>
	</ContainerCard>
)

ContentCard.defaultProps = {
	title: 'Titulo de la Card',
	alt: ''
}
ContentCard.propTypes = {

	title: PropTypes.string,
	alt: PropTypes.string
}

const styles = () => ({
	global: {
		backgroundColor: 'white',
		height: 'auto',
		position: 'relative'
	},
	contentCard: {
		width: '100%'
	},
	headerCard: {
		width: '100%',
		padding: 15,
		borderBottom: '0.5px solid silver'
	},
	padding: {
		padding: 15
	},
	fechaIcons: {
		backgroundColor: 'white'
	},
	displayFlex: {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})
export default withStyles(styles)(ContentCard)
