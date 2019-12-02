import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
// import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import PropTypes from 'prop-types'
import React from 'react'
import Autosuggest from 'react-autosuggest'
import ListAutocomplete from '../List/ListAutocomplete'
import SimpleList from '../List/SimpleList'

const styles = theme => ({
	container: {
		flexGrow: 1,
		position: 'relative'
	},
	gradientInput: {
		width: '100%',

		'&:after': {
			content: "''",
			position: 'absolute',
			right: 0,
			width: '40%',
			height: '98%',
			backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,1))',
			pointerEvents: 'none'
		}
	},
	suggestionsContainerOpen: {
		position: 'absolute',
		zIndex: 10,
		marginTop: theme.spacing.unit,
		left: 0,
		right: 0
	},
	minWidth: {
		minWidth: 450
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
	textFieldFormLabel: {
		fontSize: 14
	}
})

class IntegrationAutosuggest extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			touched: false,
			select: false,
			value: (props.initialValue && props.initialValue.label) || '',
			suggestions: []
		}
	}

	renderInput = ({ classes, ref, ...other }) => {
		// return (
		// 	<div className={classes.gradientInput}>
		// 		<InputBase
		// 			fullWidth
		// 			style={{ borderRadius: 6 }}
		// 			inputProps={{
		// 				'aria-label': 'Description',
		// 				inputRef: ref,
		// 				disableUnderline: true,
		// 				...other
		// 			}}
		// 		/>
		// 	</div>
		// )
		return (
			<div className={classes.gradientInput}>
				<TextField
					fullWidth
					style={{ borderRadius: 6 }}
					InputProps={{
						'aria-label': 'Description',
						inputRef: ref,
						disableUnderline: true,
						...other
					}}
				/>
			</div>
		)
	}

	handleSuggestionsFetchRequested = ({ value }) => {
		if (this.props.getSuggestions) {
			this.props.getSuggestions(value)
		}
	}

	handleSuggestionsClearRequested = () => {
		if (this.props.clear) this.props.clear()
	}

	// handleBlur = (event, { highlightedSuggestion }) => {
	handleBlur = (event, { highlightedSuggestion }) => {
		const { select } = this.state
		if (!select && highlightedSuggestion) {
			this.setState({
				touched: true,
				value: highlightedSuggestion.label
			})
			if (this.props.onChange) this.props.onChange(highlightedSuggestion)
		}
		this.setState({
			touched: false
		})
	}

	handleChange = (event, val) => {
		this.setState({
			touched: true,
			value: val.newValue.label || val.newValue
		})
	}

	shouldRenderSuggestions = value => value.trim().length > (this.props.suggestWhenCharsAreBiggerThan || 0)

	getSectionSuggestions = section => {
		return section.values
	}

	getSuggestionValue = suggestion => {
		return suggestion.label
	}

	onSuggestionSelected = (event, values) => {
		this.setState({
			select: true
		})
		if (this.props.onChange) this.props.onChange(values.suggestion)
	}

	renderSuggestionsContainer = ({ containerProps, children }) => {
		return (
			<Paper style={{ minWidth: 400, overflow: 'auto', maxHeight: 500 }} {...containerProps} square>
				{children}
			</Paper>
		)
	}

	renderSectionTitle = ({ title, icon }) => {
		return <ListAutocomplete icon={icon} title={title} />
	}

	renderSuggestion = (suggestion, { query, isHighlighted }) => {
		const matches = match(suggestion.label, query)
		const parts = parse(suggestion.label, matches)

		const content = parts.map(part => {
			return part.highlight ? <strong style={{ background: 'rgba(255, 77, 77, .5)' }}>{part.text}</strong> : part.text
		})

		return (
			<MenuItem selected={isHighlighted} component="div">
				<div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
					<SimpleList title={content} borderBottom subtitle={suggestion.secondaryLabel} />
				</div>
			</MenuItem>
		)
	}

	render() {
		const { name, classes, multiSection, suggestions } = this.props
		const { touched, value } = this.state
		const { container, suggestionsContainerOpen, suggestionsList, suggestion } = classes

		return (
			<Autosuggest
				theme={{
					container,
					suggestionsContainerOpen,
					suggestionsList,
					suggestion
				}}
				highlightFirstSuggestion={true}
				renderInputComponent={this.renderInput}
				suggestions={suggestions}
				onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
				onSuggestionSelected={this.onSuggestionSelected}
				renderSuggestionsContainer={this.renderSuggestionsContainer}
				getSuggestionValue={this.getSuggestionValue}
				renderSuggestion={this.renderSuggestion}
				shouldRenderSuggestions={this.shouldRenderSuggestions}
				inputProps={{
					classes,
					placeholder: this.props.placeholder,
					value: touched ? value : value || (this.props.initialValue && this.props.initialValue.label) || '',
					onFocus: event => {
						event.target.select()
					},
					onBlur: this.handleBlur,
					onChange: this.handleChange
				}}
				multiSection={multiSection}
				getSectionSuggestions={this.getSectionSuggestions}
				renderSectionTitle={this.renderSectionTitle}
				id={name}
			/>
		)
	}
}

IntegrationAutosuggest.defaultProps = {
	placeholder: '¿A donde queres ir?',
	suggestWhenCharsAreBiggerThan: 2,
	initialValue: null,
	onClear() {},
	suggestions: [],
	multiSection: false
}

const destinationType = PropTypes.shape({
	label: PropTypes.string.isRequired,
	secondaryLabel: PropTypes.string,
	value: PropTypes.string.isRequired
})

IntegrationAutosuggest.propTypes = {

	classes: PropTypes.objectOf(PropTypes.string).isRequired,
	initialValue: destinationType,
	multiSection: PropTypes.bool,
	placeholder: PropTypes.string,
	suggestWhenCharsAreBiggerThan: PropTypes.number,
	getSuggestions: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onClear: PropTypes.func,
	suggestions: PropTypes.arrayOf(destinationType)
}

export { destinationType }

export default withStyles(styles)(IntegrationAutosuggest)
