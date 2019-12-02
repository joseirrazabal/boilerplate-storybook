import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

const styles = {
	CardContent: {
		height: 'auto',
		width: '100%'
	}
}
function CardContent(props) {
	const { useFlex, classes, children, paddingConfig, flex, justify, align, background, position } = props

	return (
		<div
			className={classes.CardContent}
			style={{
				display: useFlex ? 'flex' : '',
				padding: paddingConfig,
				flexDirection: flex,
				justifyContent: justify,
				alignItems: align,
				backgroundColor: background,
				position: position
			}}
		>
			{children}
		</div>
	)
}
CardContent.defaultProps = {
	paddingConfig: 0,
	flex: 'row',
	justify: 'center',
	// align: 'center',
	background: 'white',
	useFlex: true
}
CardContent.propTypes = {
	flex: PropTypes.string,
	useFlex: PropTypes.bool,
	background: PropTypes.string,
	justify: PropTypes.string,
	align: PropTypes.string,
	paddingConfig: PropTypes.number,
	position: PropTypes.string
}

export default withStyles(styles)(CardContent)
