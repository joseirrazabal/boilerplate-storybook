import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Collapse from '@material-ui/core/Collapse'
// import sizeMe from 'react-sizeme'
/* import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel' */
import SeeMoreButton from '../../Atoms/Button/SeeMoreButton'
import HeaderCard from '../../Atoms/Card/HeaderCard'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'

class DesplegableContentCard extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			expanded: true,
			expandedHeight: 0
		}
	}

	componentDidMount() {
		let { clientHeight } = this.refs.divCollapse
		this.setState({
			expanded: false,
			expandedHeight: clientHeight
		})
	}

	handleExpandLess = () => {
		this.setState({
			expanded: false
		})
	}

	handleExpandMore = () => {
		this.setState({
			expanded: true
		})
	}

	static getDerivedStateFromProps(props, state) {
		const { size } = props

		const { expandedHeight } = state
		if (size && size.height && size.height !== 0 && expandedHeight === 0) {
			return {
				expandedHeight: size.height
			}
		}
	}

	render() {
		const { classes, title, content } = this.props
		const { expanded, expandedHeight } = this.state
		let { collapsedHeight, autoHeight } = this.props
		autoHeight ? (collapsedHeight = expandedHeight) : (autoHeight = false)
		let showMore = expandedHeight > collapsedHeight

		return (
			<ContainerCard shadow>
				<HeaderCard title={title} />
				<CardContent paddingConfig={15} position={'relative'}>
					<Collapse style={{ width: '100%' }} in={expanded} collapsedHeight={`${collapsedHeight}px`}>
						<div ref="divCollapse" style={{ width: '100%' }}>
							{content}
						</div>
					</Collapse>
					{showMore && !autoHeight && !expanded && <div className={classes.shadow} />}
				</CardContent>
				{showMore && !autoHeight && (
					<SeeMoreButton
						expanded={expanded}
						onExpandMore={this.handleExpandMore}
						onExpandLess={this.handleExpandLess}
					/>
				)}
			</ContainerCard>
		)
	}
}
DesplegableContentCard.defaultProps = {
	title: '',
	titleSize: 18,
	content: '',
	collapsedHeight: 200,
	size: undefined
}

DesplegableContentCard.propTypes = {

	title: PropTypes.string,
	titleSize: PropTypes.number,
	content: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
	collapsedHeight: PropTypes.number,
	size: PropTypes.shape({
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired
	})
}

const styles = () => ({
	title: {
		background: '#f9f8f7',
		padding: 20,
		width: '100%',
		borderBotton: '0.5px solid silver'
	},
	container: {
		overflow: 'hidden',
		width: '100%',
		minHeight: '100px',
		position: 'relative'
	},
	shadow: {
		backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1))',
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: 100
	}
})
// export default sizeMe({
// 	monitorHeight: true
// })(withStyles(styles)(DesplegableContentCard))

export default withStyles(styles)(DesplegableContentCard)
