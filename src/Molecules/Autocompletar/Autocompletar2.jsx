import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import PropTypes from 'prop-types'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Autosuggest from 'react-autosuggest'
import ListAutocomplete from '../List/ListAutocomplete'
import SimpleList from '../List/SimpleList'
import UpateInput from './../../Atoms/UpateInput/upateInput'
const styles = theme => ({
	container: {
		flexGrow: 1,
		position: 'relative'
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
	input: {
		padding: 0,
		margin: 0,
		color: 'black',
		fontSize: 16
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
			value: (props.initialValue && props.initialValue.label) || '',
			suggestions: []
		}
	}

	renderInput = ({ classes, ref, ...other }) => {
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

	handleSuggestionsFetchRequested = ({ value }) => {
		if (this.props.getSuggestions) {
			this.props.getSuggestions(value)
		}
	}

	handleSuggestionsClearRequested = () => {
		if (this.props.clear) this.props.clear()
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
		if (this.props.onChange) this.props.onChange(values.suggestion)
	}

	renderSuggestionsContainer = ({ containerProps, children }) => {
		return (
			<Paper style={{ minWidth: 400 }} {...containerProps} square>
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
	handleNext = values => {}
	render() {
		const { classes, multiSection, suggestions, values, errors } = this.props
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
				id="autosuggest"
				value={values.autosuggest}
				error={errors.autosuggest}
				style={{ borderRadius: 6 }}
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
					onChange: this.handleChange
				}}
				multiSection={multiSection}
				getSectionSuggestions={this.getSectionSuggestions}
				renderSectionTitle={this.renderSectionTitle}
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
	multiSection: false,
	values: {},
	errors: {}
}

const destinationType = PropTypes.shape({
	label: PropTypes.string.isRequired,
	secondaryLabel: PropTypes.string,
	value: PropTypes.string.isRequired,
	values: PropTypes.object,
	errors: PropTypes.object
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
