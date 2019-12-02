import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { MdChevronLeft } from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { TitleSecondary } from '../../../Atoms/TitleLabel/TitleLabel'
import ContainerCard from '../../../Atoms/Card/ContainerCard'

class NavGuide extends React.Component {
	render() {
		const { classes, useDefaultCursor, fullScreen, onClick } = this.props
		const classesHeader = {
			fixed: this.props.fixed
				? {
						position: 'fixed',
						top: 0,
						left: 0,
						zIndex: 10
				  }
				: {}
		}

		return (
			<ContainerCard radius={0}>
				<div className={classNames(classes.container, classes.displayFlex)}>
					<div className={classNames(classes.displayFlex)}>
						<Tooltip title="preview">
							<IconButton aria-label="preview" onClick={onClick}>
								<MdChevronLeft />
							</IconButton>
						</Tooltip>
					</div>
					<div className={classNames(classes.displayFlex, { marginLeft: 10 })}>
						<TitleSecondary size={16} content={this.props.title} />
					</div>
				</div>
			</ContainerCard>
		)
	}
}
NavGuide.defaultProps = {
	title: 'CONSULTA'
}

NavGuide.propTypes = {
	title: PropTypes.string
}

export default withStyles(({ mauri: { color, variables } }) => ({
	global: {
		fontFamily: 'Roboto, sans-serif',
		backgroundColor: 'white',
		padding: 0,
		width: '100%',
		zIndex: 2,
		boxSizing: 'border-box',
		boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
	},
	container: {
		maxWidth: 1300,
		width: '100%',
		margin: 'auto'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignSelf: 'center',
		alignItem: 'center'
	}
}))(NavGuide)
