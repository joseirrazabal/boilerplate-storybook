import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import IconsFont from '../../Atoms/IconsFont'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

class TabsOrdenar extends React.Component {
	render() {
		const { classes, useDefaultCursor } = this.props
		return (
			<Paper elevation={2} className={classNames(classes.content)}>
				<Grid container spacing={0}>
					<Grid item xs={4} sm={4} lg={4} className={classNames(classes.tab, classes.flexBox, classes.borderRight)}>
						<div>
							<IconsFont size={20} icon="flaticon-money-1" />
						</div>
						<div style={{ marginLeft: 15 }}>
							<TitleSecondary
								content="Precio"
								size={14}
								left
								bold
								// color={'black'}
							/>
							<Text style={{ width: '100%' }} size={13} content="$12000" italic color="black" />
						</div>
					</Grid>
					<Grid item xs={4} sm={4} lg={4} className={classNames(classes.tab, classes.flexBox, classes.borderRight)}>
						<div>
							<IconsFont size={20} icon="flaticon-star-5" />
						</div>
						<div style={{ marginLeft: 15 }}>
							<TitleSecondary
								content="Estrellas"
								size={14}
								left
								bold
								// color={'black'}
							/>
							<Text style={{ width: '100%' }} size={13} content="$12000" italic color="black" />
						</div>
					</Grid>
					<Grid item xs={4} sm={4} lg={4} className={classNames(classes.tab, classes.flexBox)}>
						<div>
							<IconsFont size={20} icon="flaticon-star-5" />
						</div>
						<div style={{ marginLeft: 15 }}>
							<TitleSecondary
								content="Estrellas"
								size={14}
								left
								bold
								// color={'black'}
							/>
							<Text style={{ width: '100%' }} size={13} content="$12000" italic color="black" />
						</div>
					</Grid>
				</Grid>
			</Paper>
		)
	}
}
TabsOrdenar.defaultProps = {
	title: ''
}
TabsOrdenar.propTypes = {
	image: PropTypes.string
}

export default withStyles(({ mauri: { color, variables } }) => ({
	content: {
		background: 'white',
		width: '100%'
	},
	tab: {
		cursor: 'pointer',
		transition: '1s',
		':hover': {
			background: '#f2f2f2',
			transition: '1s'
		}
	},
	borderRight: {
		borderRight: '1px solid #f2f2f2'
	},
	flexBox: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5
	}
}))(TabsOrdenar)
