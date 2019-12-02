import React from 'react'
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames'
import { withStyles } from '@material-ui/styles'
const styles = () => ({
	headerRooms: {
		width: '100%',
		background: 'white',
		padding: 15,
		textAlign: 'center'
	}
})

class HeaderLanding extends React.PureComponent {
	render() {
		let { classes, title, price } = this.props
		return <Grid container spacing={0} className={classNames(classes.headerRooms)} />
	}
}

export default withStyles(styles)(HeaderLanding)
