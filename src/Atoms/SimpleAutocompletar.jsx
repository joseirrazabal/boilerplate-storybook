import React from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import IconList from '../Molecules/List/IconList'
import SimpleList from '../Molecules/List/SimpleList'
/* import { MenuItem } from "material-ui/Menu"; */
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import { withStyles } from 'material-ui/styles'

import FlightIcon from '@material-ui/icons/Flight'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import IconsFont from '../Atoms/IconsFont'

const styles = theme => ({
	container: {
		flexGrow: 1,
		position: 'relative'
		//height: 250,
	},
	suggestionsContainerOpen: {
		position: 'absolute',
		zIndex: 1,
		marginTop: theme.spacing.unit,
		left: 0,
		right: 0
	},
	minWidth: {
		minWidth: 400
	},
	suggestion: {
		display: 'block',
		fontSize: 12
	},
	suggestionsList: {
		margin: 0,
		padding: 0,
		listStyleType: 'none'
	},
	input: {
		padding: 0,
		margin: 0,
		color: 'black',
		fontSize: 13
	},
	textFieldFormLabel: {
		fontSize: 14
	}
})

function renderInput(inputProps) {
	const { classes, ref, ...other } = inputProps

	return (
		<TextField
			fullWidth
			style={{ borderRadius: 6 }}
			InputProps={{
				inputRef: ref,
				disableUnderline: true,
				classes: {
					input: classes.input
				},
				...other
			}}
		/>
	)
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
	const matches = match(suggestion.label, query)
	const parts = parse(suggestion.label, matches)

	return (
		<ListItem selected={isHighlighted} component="div">
			{/* {suggestion.type == "airport" && <IconsFont icon="flaticon-bed" />} */}
			{/* {suggestion.type == "city" && <IconsFont icon="flaticon-bed" />} */}

			{parts.map((part, index) => {
				return part.highlight ? (
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<ListItemIcon>
							<IconsFont
								icon={
									suggestion.type == 'airport'
										? 'flaticon-people'
										: suggestion.type == 'hotel'
											? 'flaticon-bell'
											: 'flaticon-building-1'
								}
							/>
						</ListItemIcon>
						<ListItemText
							primary={part.text}
							//secondary={secondary ? 'Secondary text' : null}
						/>
					</div>
				) : (
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<ListItemText
							primary={part.text}

							//secondary={secondary ? 'Secondary text' : null}
						/>
					</div>
				)
			})}
		</ListItem>
	)

	return (
		<div selected={isHighlighted} component="div">
			<div style={{ minWidth: 400 }}>
				{parts.map((part, index) => {
					return part.highlight ? (
						<IconList key={String(index)} title={part.text} subtitle={'Hotel'} borderBottom={true} />
					) : (
						<IconList key={String(index)} title={part.text} subtitle={'Hotel'} borderBottom={true} />
					)
				})}
			</div>
		</div>
	)
}

function renderSuggestionsContainer(options) {
	const { containerProps, children } = options

	return (
		<Paper style={{ minWidth: 400 }} {...containerProps} square>
			{children}
		</Paper>
	)
}

function getSuggestionValue(suggestion) {
	return suggestion
	//   return suggestion.value || suggestion.label;
}

class IntegrationAutosuggest extends React.Component {
	state = {
		value: '',
		suggestions: null
	}
	constructor(props) {
		super(props)
		this.state = {
			value: (props.initialValues && props.initialValues.value) || ''
		}
	}

	handleSuggestionsFetchRequested = ({ value }) => {
		this.props.getSuggestions(value)
	}

	handleSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		})
	}

	handleChange = (event, { newValue }) => {
		this.setState({
			value: newValue.label || newValue
		})
		this.props.onChange(newValue, this.props.name || null)
	}

	render() {
		const { classes } = this.props

		return (
			<Autosuggest
				theme={{
					container: classes.container,
					suggestionsContainerOpen: classes.suggestionsContainerOpen,
					suggestionsList: classes.suggestionsList,
					suggestion: classes.suggestion
				}}
				style={{ borderRadius: 6 }}
				renderInputComponent={renderInput}
				suggestions={this.props.suggestions}
				onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
				renderSuggestionsContainer={renderSuggestionsContainer}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={{
					classes,
					placeholder: this.props.placeholder || '¿A donde queres ir?',
					value: this.state.value,
					onChange: this.handleChange
				}}
			/>
		)
	}
}

IntegrationAutosuggest.propTypes = {
	classes: PropTypes.isRequired
}

export default withStyles(styles)(IntegrationAutosuggest)
