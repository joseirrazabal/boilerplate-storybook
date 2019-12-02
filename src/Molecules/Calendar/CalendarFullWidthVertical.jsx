import React from 'react'
import PropTypes from 'prop-types'
import momentPropTypes from 'react-moment-proptypes'
import moment from 'moment'
import omit from 'lodash/omit'
import IconsFont from '../../Atoms/IconsFont'

// import { DateRangePicker, DateRangePickerShape, isInclusivelyAfterDay } from '@upate/react-dates/'
// import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_RIGHT } from '@upate/react-dates/constants'
//
// import '@upate/react-dates/initialize'
// import '@upate/react-dates/lib/css/_datepicker.css'
//
import 'moment/locale/es' 

class CalendarFullWidthVertical extends React.Component {
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
		const { stateDateWrapper, onChange } = this.props
		this.setState({
			startDate: startDate && stateDateWrapper(startDate),
			endDate: endDate && stateDateWrapper(endDate)
		})
		onChange({ startDate, endDate })
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
			<div style={{ zIndex: 5 }}>
				<DateRangePicker
					{...props}
					onDatesChange={this.onDatesChange}
					onFocusChange={this.onFocusChange}
					focusedInput={focusedInput}
					startDate={startDate}
					endDate={endDate}
					daySize={50}
					small
					noBorder
					numberOfMonths={12}
					customArrowIcon={<IconsFont icon="flaticon-calendar" />}
					orientation="verticalScrollable"
					withFullScreenPortal
				/>
			</div>
		)
        */
	}
}

CalendarFullWidthVertical.propTypes = {
	autoFocus: PropTypes.bool,
	autoFocusEndDate: PropTypes.bool,
	stateDateWrapper: PropTypes.func,
	initialStartDate: momentPropTypes.momentObj,
	initialEndDate: momentPropTypes.momentObj,
	// ...omit(DateRangePickerShape, ['startDate', 'endDate', 'onDatesChange', 'focusedInput', 'onFocusChange'])
}

CalendarFullWidthVertical.defaultProps = {
	autoFocus: false,
	autoFocusEndDate: false,
	initialStartDate: null,
	initialEndDate: null,
	// startDateId: START_DATE,
	startDatePlaceholderText: 'Desde',
	// endDateId: END_DATE,
	endDatePlaceholderText: 'Hasta',
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

export default CalendarFullWidthVertical
