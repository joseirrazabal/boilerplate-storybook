import React from 'react'
import PropTypes from 'prop-types'
import momentPropTypes from 'react-moment-proptypes'
import moment from 'moment'
import omit from 'lodash/omit'

// import {
// 	DateRangePicker,
// 	DateRangePickerShape,
// 	DateRangePickerPhrases,
// 	isInclusivelyBeforeDay,
// 	isInclusivelyAfterDay
// } from '@upate/react-dates/'
// import {
// 	START_DATE,
// 	END_DATE,
// 	VERTICAL_ORIENTATION,
// 	HORIZONTAL_ORIENTATION,
// 	ANCHOR_RIGHT
// } from '@upate/react-dates/constants'

// import '@upate/react-dates/initialize';

const propTypes = {
	// example props for the demo
	autoFocus: PropTypes.bool,
	autoFocusEndDate: PropTypes.bool,
	stateDateWrapper: PropTypes.func,
	initialStartDate: momentPropTypes.momentObj,
	initialEndDate: momentPropTypes.momentObj,

	// ...omit(DateRangePickerShape, ['startDate', 'endDate', 'onDatesChange', 'focusedInput', 'onFocusChange'])
}

const defaultProps = {
	// example props for the demo
	autoFocus: false,
	autoFocusEndDate: false,
	initialStartDate: null,
	initialEndDate: null,
	// input related props
	// startDateId: START_DATE,
	startDatePlaceholderText: 'Start Date',
	// endDateId: END_DATE,
	endDatePlaceholderText: 'End Date',
	disabled: false,
	required: false,
	screenReaderInputMessage: '',
	showClearDates: false,
	showDefaultInputIcon: false,
	customInputIcon: null,
	customArrowIcon: null,
	customCloseIcon: null,
	block: false,
	small: false,
	regular: false,

	// calendar presentation and interaction related props
	renderMonth: null,
	// orientation: HORIZONTAL_ORIENTATION,
	// anchorDirection: ANCHOR_RIGHT,
	horizontalMargin: 0,
	withPortal: true,
	withFullScreenPortal: true,
	initialVisibleMonth: null,
	numberOfMonths: 2,
	keepOpenOnDateSelect: false,
	reopenPickerOnClearDates: false,
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
	minimumNights: 1,
	enableOutsideDays: false,
	isDayBlocked: () => false,
	isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
	isDayHighlighted: () => false,

	// internationalization
	displayFormat: () => moment.localeData().longDateFormat('L'),
	monthFormat: 'MMMM YYYY',

	stateDateWrapper: date => date
}

class CalendarFullWidth extends React.Component {
	constructor(props) {
		super(props)

		// let focusedInput = null
		// if (props.autoFocus) {
		// 	focusedInput = START_DATE
		// } else if (props.autoFocusEndDate) {
		// 	focusedInput = END_DATE
		// }
    //
		// this.state = {
		// 	focusedInput,
		// 	startDate: props.initialStartDate,
		// 	endDate: props.initialEndDate
		// }
    //
		// this.onDatesChange = this.onDatesChange.bind(this)
		// this.onFocusChange = this.onFocusChange.bind(this)
	}

	onDatesChange({ startDate, endDate }) {
		const { stateDateWrapper } = this.props
		this.setState({
			startDate: startDate && stateDateWrapper(startDate),
			endDate: endDate && stateDateWrapper(endDate)
		})
	}

	onFocusChange(focusedInput) {
		this.setState({ focusedInput })
	}

	render() {
    return <div>123</div>

    /*
    const { focusedInput, startDate, endDate } = this.state
		const props = omit(this.props, [
			'autoFocus',
			'autoFocusEndDate',
			'initialStartDate',
			'initialEndDate',
			'stateDateWrapper'
		])

		return (
			<div>
				<DateRangePicker
					{...props}
					onDatesChange={this.onDatesChange}
					onFocusChange={this.onFocusChange}
					focusedInput={focusedInput}
					startDate={startDate}
					endDate={endDate}
					daySize={40}
					small
					noBorder
					customArrowIcon={<IconsFont icon="flaticon-calendar" />}
					withFullScreenPortal={true}
				/>
			</div>
		)
        */
	}
}

CalendarFullWidth.propTypes = propTypes
CalendarFullWidth.defaultProps = defaultProps

export default CalendarFullWidth
