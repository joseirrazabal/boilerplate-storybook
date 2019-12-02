import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

class SlickFixed extends React.Component {
	render() {
		const { classes, useDefaultCursor } = this.props

		return (
			<div>
				<div
					style={{
						width: '100%',
						height: 400,
						background: 'green'
					}}
				/>
				<div
					style={{
						width: '100%',
						height: 400,
						background: 'blue'
					}}
				/>
				<StickyContainer>
					<div
						style={{
							width: '100%',
							height: 400,
							background: 'red'
						}}
					>
						<Sticky>
							{({
								style,
								// the following are also available but unused in this example
								isSticky,
								wasSticky,
								distanceFromTop,
								distanceFromBottom,
								calculatedHeight
							}) => <header style={style}>hola</header>}
						</Sticky>
					</div>
					{/* ... */}
				</StickyContainer>
			</div>
		)
	}
}
SlickFixed.defaultProps = {}

SlickFixed.propTypes = {

}

export default withStyles(({ mauri: { color, variables, flex, paddingObject } }) => ({}))(SlickFixed)
