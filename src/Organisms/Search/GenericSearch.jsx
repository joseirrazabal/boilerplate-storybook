import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { FaSearch } from 'react-icons/fa'
import Button from '../../Atoms/Button/Button'

const searchStyles = {
	absolute: {
		position: 'absolute',
		right: 0,
		top: 0
	},
	DateRangePicker: {
		width: '100%'
	},
	listMenuBorderLine: {
		borderRight: '0.5px solid #ccc',
		paddingRight: 20
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	}
}

class GenericSearch extends Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false
		}
	}
	handleTooltipClose = () => {
		this.setState({ open: false })
	}

	handleTooltipOpen = () => {
		this.setState({ open: true })
	}
	render() {
		const { classes, leftComponent, centerComponent, rightComponent, onRightComponentClick, onSubmit } = this.props
		const { open } = this.state
		return (
			<div>
				<Paper elevation={2} style={{ borderRadius: 10 }}>
					<Grid
						container
						spacing={0}
						style={{ ...searchStyles.global }}
						className={classNames(classes.contentButtonSearch)}
					>
						<Grid container className={classNames(classes.contentDataSearch)}>
							<Grid
								item
								xs={12}
								sm={6}
								style={{ ...searchStyles.displayFlex }}
								className={classNames(classes.leftComponent)}
							>
								{leftComponent}
							</Grid>
							<Grid
								item
								className={classNames(classes.centerComponent)}
								xs={6}
								sm={4}
								style={{
									...searchStyles.displayFlex,
									borderLeft: '1px solid silver',
									borderRight: '1px solid silver'
								}}
							>
								{centerComponent}
							</Grid>
							<Grid
								id="grid-right-component"
								className={classNames(classes.people)}
								item
								xs={6}
								sm={2}
								style={{
									display: 'flex',
									justifyContent: 'space-around'
								}}
								onClick={onRightComponentClick}
							>
								{rightComponent}
							</Grid>
						</Grid>
						<Grid container spacing={0} className={classNames(classes.content_btn_search)}>
							<Button
								fullWidth
								style={{ borderRadius: '0 6px 6px 0' }}
								iconLeft={<FaSearch size={25} />}
								onClick={onSubmit}
							/>
						</Grid>
					</Grid>
				</Paper>
			</div>
		)
	}
}

/* const GenericSearch = ({
	classes,
	leftComponent,
	centerComponent,
	rightComponent,
	onRightComponentClick,
	onSubmit,
	state,
	handleTooltipClose,
	handleTooltipOpen
}) => (
	<Paper elevation={2} style={{ borderRadius: 10 }}>
		<Grid container spacing={0} style={{ ...searchStyles.global }} className={classNames(classes.contentButtonSearch)}>
			<Grid container className={classNames(classes.contentDataSearch)}>
				<Grid item xs={12} sm={6} style={{ ...searchStyles.displayFlex }} className={classNames(classes.leftComponent)}>
					{leftComponent}
				</Grid>
				<Grid
					item
					className={classNames(classes.centerComponent)}
					xs={6}
					sm={4}
					style={{
						...searchStyles.displayFlex,
						borderLeft: '1px solid silver',
						borderRight: '1px solid silver'
					}}
				>
					{centerComponent}
				</Grid>
				<Grid
					id="grid-right-component"
					className={classNames(classes.people)}
					item
					xs={6}
					sm={2}
					style={{
						display: 'flex',
						justifyContent: 'space-around'
					}}
					onClick={onRightComponentClick}
				>
					{rightComponent}
				</Grid>
			</Grid>
			<Grid container spacing={0} className={classNames(classes.content_btn_search)}>
				<React.Fragment>
					<ClickAwayListener onClickAway={this.handleTooltipClose}>
						<div>
							<Tooltip
								PopperProps={{
									disablePortal: true
								}}
								onClose={() => {}}
								open={true}
								disableFocusListener
								disableHoverListener
								disableTouchListener
								title="Search"
							>
								<Button
									fullWidth
									style={{ borderRadius: '0 6px 6px 0' }}
									iconLeft={<FaSearch size={25} />}
									onClick={onSubmit}
								/>
							</Tooltip>
						</div>
					</ClickAwayListener>
				</React.Fragment>
			</Grid>
		</Grid>
	</Paper>
)
 */
GenericSearch.defaultProps = {
	centerComponent: <div />,
	leftComponent: <div />,
	rightComponent: <div />,
	onRightComponentClick: () => {}
}
GenericSearch.propTypes = {

	centerComponent: PropTypes.node,
	leftComponent: PropTypes.node,
	rightComponent: PropTypes.node,
	onSubmit: PropTypes.func.isRequired,
	onRightComponentClick: PropTypes.func
}

export default withStyles(({ mauri: { variables } }) => ({
	contentButtonSearch: {
		minHeight: variables.searchMinHeight,
		fontFamily: 'Roboto, sans-serif',
		backgroundColor: 'white',
		position: 'relative',
		borderRadius: 6,
		boxSizing: 'border-box',
		boxShadow: '0 1px 1px rgba(0,0,0,0.3)',
		'@media (max-width: 800px)': {
			display: 'none'
		}
	},

	contentDataSearch: {
		width: `calc(100% / 1 - ${variables.searchWidthBtn})`
	},
	leftComponent: {
		minHeight: 35,
		paddingLeft: 20
	},
	content_btn_search: {
		width: `${variables.searchWidthBtn}!important`,
		minHeight: variables.searchMinHeight,
		position: 'absolute',
		right: 0
	},
	centerComponent: {
		display: 'flex',
		'@media (max-width: 800px)': {
			display: 'none'
		}
	},
	people: {
		display: 'flex',
		'@media (max-width: 800px)': {
			display: 'none'
		}
	}
}))(GenericSearch)
