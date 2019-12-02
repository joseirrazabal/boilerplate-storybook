import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/styles'
import { FaSearch } from 'react-icons/fa'
import Tooltip from '@material-ui/core/Tooltip'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '../../Atoms/Button/Button'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import Passengers from '../Passengers/Passengers'
import HotelOccupancy from './Occupancy/HotelOccupancy'

const styles = theme => ({
	containerSearch: {
		display: 'block',
		'@media (max-width: 800px)': {
			display: 'none'
		}
	},
	formControl: {
		/* margin: theme.spacing.unit, */
		minWidth: '100%',
		borderRadius: '0px!important'
	},
	InputLabel: {
		background: 'white',
		padding: '2px 5px'
	},
	lightTooltip: {
		background: theme.palette.common.white,
		color: theme.palette.text.primary,
		boxShadow: theme.shadows[1],
		fontSize: 11
	},
	arrowPopper: {
		'&[x-placement*="bottom"] $arrowArrow': {
			top: 0,
			left: 0,
			marginTop: '-0.9em',
			width: '3em',
			height: '1em',
			'&::before': {
				borderWidth: '0 1em 1em 1em',
				borderColor: `transparent transparent ${theme.palette.grey[700]} transparent`
			}
		},
		'&[x-placement*="top"] $arrowArrow': {
			bottom: 0,
			left: 0,
			marginBottom: '-0.9em',
			width: '3em',
			height: '1em',
			'&::before': {
				borderWidth: '1em 1em 0 1em',
				borderColor: `${theme.palette.grey[700]} transparent transparent transparent`
			}
		},
		'&[x-placement*="right"] $arrowArrow': {
			left: 0,
			marginLeft: '-0.9em',
			height: '3em',
			width: '1em',
			'&::before': {
				borderWidth: '1em 1em 1em 0',
				borderColor: `transparent ${theme.palette.grey[700]} transparent transparent`
			}
		},
		'&[x-placement*="left"] $arrowArrow': {
			right: 0,
			marginRight: '-0.9em',
			height: '3em',
			width: '1em',
			'&::before': {
				borderWidth: '1em 0 1em 1em',
				borderColor: `transparent transparent transparent ${theme.palette.grey[700]}`
			}
		}
	},
	arrowArrow: {
		position: 'absolute',
		fontSize: 7,
		width: '3em',
		height: '3em',
		'&::before': {
			content: '""',
			margin: 'auto',
			display: 'block',
			width: 0,
			height: 0,
			borderStyle: 'solid'
		}
	},
	button: {
		margin: theme.spacing.unit
	}
})

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			age: '',
			labelWidth: 0,
			arrowRef: null
		}
	}

	handleArrowRef = node => {
		this.setState({
			arrowRef: node
		})
	}

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
		})
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		const { classes, age, labelWidth } = this.props
		return (
			<div className={classes.containerSearch}>
				<ContainerCard radius={10} shadow>
					<CardContent flex="row" justify="space-around" paddingConfig={10}>
						<div style={{ width: '100%', paddingRight: 10 }}>
							<FormControl variant="filled" className={classes.formControl} disabled>
								<InputLabel
									ref={ref => {
										this.InputLabelRef = ref
									}}
									className={classes.InputLabel}
								>
									Buenos Aires, Argentina
								</InputLabel>
								<Select
									value={age}
									onChange={this.handleChange}
									input={<OutlinedInput labelWidth={labelWidth} name="age" id="age-simple" />}
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</div>
						<div style={{ width: '100%', paddingRight: 10 }}>
							<FormControl variant="filled" className={classes.formControl}>
								<InputLabel
									ref={ref => {
										this.InputLabelRef = ref
									}}
									className={classes.InputLabel}
									htmlFor="outlined-age-simple"
								>
									Seleccionar Destino
								</InputLabel>
								<Select
									value={age}
									onChange={this.handleChange}
									input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
								>
									<MenuItem value="">
										<em>Todos</em>
									</MenuItem>
									<MenuItem value={10}>Brasil</MenuItem>
									<MenuItem value={20}>Chile</MenuItem>
									<MenuItem value={30}>Mexico</MenuItem>
								</Select>
							</FormControl>
						</div>
						<div style={{ width: '100%', paddingRight: 10 }}>
							<FormControl variant="filled" className={classes.formControl}>
								<InputLabel
									ref={ref => {
										this.InputLabelRef = ref
									}}
									className={classes.InputLabel}
									htmlFor="outlined-age-simple"
								>
									Seleccionar mes
								</InputLabel>
								<Select
									value={age}
									onChange={this.handleChange}
									input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
								>
									<MenuItem value="">
										<em>Todos</em>
									</MenuItem>
									<MenuItem value={10}>Abril</MenuItem>
									<MenuItem value={20}>Mayo</MenuItem>
									<MenuItem value={30}>Junio</MenuItem>
								</Select>
							</FormControl>
						</div>
						<div
							style={{
								padding: 10,
								borderRadius: 6,
								display: 'flex',
								justifyContent: 'space-between',
								border: '1px solid silver',
								marginRight: 10
							}}
						>
							<HotelOccupancy>
								<Passengers />
							</HotelOccupancy>
						</div>
						<div>
							<Tooltip
								title={
									<React.Fragment>
										Add
										<span className={classes.arrowArrow} ref={this.handleArrowRef} />
									</React.Fragment>
								}
								classes={{ popper: classes.arrowPopper }}
								PopperProps={{
									popperOptions: {
										modifiers: {
											arrow: {
												enabled: Boolean(this.state.arrowRef),
												element: this.state.arrowRef
											}
										}
									}
								}}
							>
								<Button fullWidth style={{ height: 56 }} radius iconLeft={<FaSearch size={25} />} />
							</Tooltip>
						</div>
					</CardContent>
				</ContainerCard>
			</div>
		)
	}
}

Search.propTypes = {

	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Search)
