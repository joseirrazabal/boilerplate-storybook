import React from 'react'
import PropTypes from 'prop-types'
import momentPropTypes from 'react-moment-proptypes'
import moment from 'moment'
import omit from 'lodash/omit'
// import { SingleDatePicker, SingleDatePickerShape, SingleDatePickerPhrases } from '@upate/react-dates/'
// import { HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from '@upate/react-dates/constants'
//
// import '@upate/react-dates/initialize'
// import '@upate/react-dates/lib/css/_datepicker.css'

class SingleDatePickerWrapper extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			focused: props.autoFocus,
			date: props.initialDate
		}

		this.onDateChange = this.onDateChange.bind(this)
		this.onFocusChange = this.onFocusChange.bind(this)
	}

	onDateChange(date) {
		const { onChange } = this.props
		onChange && onChange(date)
		this.setState({ date })
	}

	onFocusChange({ focused }) {
		this.setState({ focused })
	}

	render() {
		const { focused, date } = this.state

		const props = omit(this.props, [
			'autoFocus',
			'initialDate',
			'onChange',
			'initialStartDate',
			'initialEndDate',
			'name',
			'onDateChange'
		])

    return <div>123</div>
      /*
		return (
			<SingleDatePicker
				{...props}
				id="date_input"
				date={date}
				// placeholder={this.props.name}
				noBorder
				withPortal
				block
				focused={focused}
				onDateChange={this.onDateChange}
				onFocusChange={this.onFocusChange}
			/>
		)
        */
	}
}

SingleDatePickerWrapper.propTypes = {
	name: PropTypes.string,
	onChange: PropTypes.func,
	// example props for the demo
	autoFocus: PropTypes.bool,
	initialDate: momentPropTypes.momentObj,
	// ...omit(SingleDatePickerShape, ['date', 'onDateChange', 'focused', 'onFocusChange'])
}

SingleDatePickerWrapper.defaultProps = {
	// example props for the demo
	autoFocus: false,
	initialDate: null,

	// input related props
	id: 'date',
	placeholder: 'Ida',
	disabled: false,
	required: false,
	screenReaderInputMessage: '',
	showClearDate: false,
	showDefaultInputIcon: false,
	customInputIcon: null,
	block: false,
	small: true,
	regular: false,
	verticalSpacing: undefined,
	keepFocusOnInput: false,

	// calendar presentation and interaction related props
	renderMonth: null,
	// orientation: HORIZONTAL_ORIENTATION,
	// anchorDirection: ANCHOR_LEFT,
	horizontalMargin: 0,
	withPortal: false,
	withFullScreenPortal: false,
	initialVisibleMonth: null,
	numberOfMonths: 2,
	keepOpenOnDateSelect: false,
	reopenPickerOnClearDate: false,
	isRTL: false,

	// navigation related props
	navPrev: null,
	navNext: null,
	onPrevMonthClick() {},
	onNextMonthClick() {},
	onClose() {},

	// day presentation and interaction related props
	renderCalendarDay: undefined,
	renderDayContents: null,
	enableOutsideDays: false,
	isDayBlocked: () => false,
	//isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
	isDayHighlighted: () => {},

	// internationalization props
	displayFormat: () => moment.localeData().longDateFormat('L'),
	monthFormat: 'MMMM YYYY',
	// phrases: SingleDatePickerPhrases
}

export default SingleDatePickerWrapper
