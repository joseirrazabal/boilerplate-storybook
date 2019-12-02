import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import Typography from '../../Atoms/TitleLabel/Typography'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardAction from '../../Atoms/Card/CardAction'
import CardContent from '../../Atoms/Card/CardContent'

const SmallCard = ({image, title, subtitle, lineThrough, minHeight, width, alt, ImageFull, tag, classes}) => (
  <ContainerCard shadow flex="row">
		<CardAction>
			<div style={{
    width
  }}>
				<div className={classes.tag}>{tag}</div>
				<ImageBackground
  fixed
  heightResize={minHeight}
  minHeight={minHeight}
  elevation={0}
  alt={alt}
  backgroundImage={image}
  />
			</div>
		</CardAction>
		{ImageFull ? (
    <React.Fragment />
    ) : (
    <CardContent paddingConfig={15} flex="column">
				<TitleSecondary content={title} size={18} center />
				<Typography content={subtitle} center size={16} />
			</CardContent>
    )}
	</ContainerCard>
)
SmallCard.defaultProps = {
  image: '',
  ImageFull: false,
  title: 'Hoteles en Miami',
  // subtitle: 'Ultimos lugares!',
  subtitle: '',
  alt: 'Alt de ejemplo',
  minHeight: 160,
  width: '100%',
  tag: false,
  lineThrough: false
}

SmallCard.propTypes = {
  title: PropTypes.string,
  ImageFull: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  tag: PropTypes.string,
  subtitle: PropTypes.string,
  width: PropTypes.number,
  minHeight: PropTypes.number,
  lineThrough: PropTypes.bool
}
const styles = () => ({
  tag: {
    position: 'absolute',
    top: 10,
    left: 0
  }
})
export default withStyles(styles)(SmallCard)
