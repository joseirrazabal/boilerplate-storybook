import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import resize from '../../utils/resize'

class ImageBackground extends React.PureComponent {
	_isMounted = false

	imgObj = undefined

	constructor(props) {
		super(props)
		this.state = { clase: false }
	}

	getImgObj = () => {
		if (this.imgObj === undefined) {
			this.imgObj = new Image()
		}
		return this.imgObj
	}

	handleOnLoadImage = () => {
		if (this._isMounted) this.setState({ clase: true, loaded: true })
	}

	loadImage = src => {
		const { loaded } = this.state
		if (this._isMounted && !loaded) {
			this.getImgObj().src = src
			this.getImgObj().onload = this.handleOnLoadImage
		}
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	componentDidMount() {
		const { backgroundImage, heightResize, widthResize } = this.props
		this._isMounted = true
		this.loadImage(resize({ src: backgroundImage, height: heightResize, width: widthResize }))
	}

	render() {
		const {
			classes,
			cover,
			minHeight,
			alt,
			backgroundImage,
			height,
			width,
			widthResize,
			heightResize,
			noRepeat
		} = this.props
		const { clase } = this.state

		const imageStyles = {
			backgroundImage: {
				backgroundImage: `url(${resize({ src: backgroundImage, height: false, width: false, blur: true })})`,
				// backgroundSize: 'cover',
				backgroundSize: cover
					? `cover`
					: width || widthResize
					? `${width || widthResize}px `
					: height || heightResize
					? `auto ${height || heightResize}px`
					: '',
				backgroundPosition: 'center',
				backgroundRepeat: noRepeat ? 'no-repeat' : 'auto'
			},
			minHeight: {
				minHeight
			},
			displayFlex: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}
		}

		return (
			<div
				alt={alt}
				className={classNames({ [`${classes.image}`]: clase })}
				style={{
					...imageStyles.minHeight,
					...imageStyles.backgroundImage,
					backgroundImage: `${
						this.props.style && this.props.style.backgroundImage ? `${this.props.style.backgroundImage},` : ``
					} ${imageStyles.backgroundImage.backgroundImage}`
				}}
			/>
		)
	}
}

ImageBackground.defaultProps = {
	backgroundImage: null,
	alt: null,
	width: 0,
	height: 0,
	widthResize: false,
	heightResize: false
}

ImageBackground.propTypes = {
	alt: PropTypes.string,
	backgroundImage: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	minHeight: PropTypes.number.isRequired,
	widthResize: PropTypes.node,
	heightResize: PropTypes.node
}

const withStylesProps = styles => Component => props => {
	const Comp = withStyles(styles(props))(Component)
	return <Comp {...props} />
}

const styles = props => ({
	image: {
		backgroundImage: `${
			props.style && props.style.backgroundImage ? `${props.style.backgroundImage},` : ``
		} ${`url(${resize({
			src: props.backgroundImage,
			height: props.heightResize,
			width: props.widthResize
		})})!important`}`
	}
})

export default withStylesProps(styles)(ImageBackground)
