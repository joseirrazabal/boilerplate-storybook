import React from 'react'
import PropTypes from 'prop-types'
import momentPropTypes from 'react-moment-proptypes'
import moment from 'moment'
import omit from 'lodash/omit'
import Tooltip from '@material-ui/core/Tooltip'
// import componentQueries from 'react-component-queries'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import IconsFont from '../../Atoms/IconsFont'

// import {
// 	DateRangePicker,
// 	DateRangePickerShape,
// 	DateRangePickerPhrases,
// 	isInclusivelyBeforeDay,
// 	isInclusivelyAfterDay
// } from '@upate/react-dates'
//
// import {
// 	START_DATE,
// 	END_DATE,
// 	VERTICAL_ORIENTATION,
// 	HORIZONTAL_ORIENTATION,
// 	ANCHOR_RIGHT
// } from '@upate/react-dates/constants'
//
//
// import '@upate/react-dates/initialize'
// import '@upate/react-dates/lib/css/_datepicker.css'

import 'moment/locale/es'

const propTypes = {
	initialStartDate: PropTypes.any,
	initialEndDate: PropTypes.any,
	//   initialStartDate: momentPropTypes.momentObj,
	//   initialEndDate: momentPropTypes.momentObj,
	orientationWidth: PropTypes.bool,
	onChange: PropTypes.any,
	style: PropTypes.any,
	autoFocus: PropTypes.bool,
	autoFocusEndDate: PropTypes.bool,
	stateDateWrapper: PropTypes.func,
	useTooltip: PropTypes.bool,
	tooltipSingular: PropTypes.string,
	tooltipPlural: PropTypes.string,
	// ...omit(DateRangePickerShape, ['startDate', 'endDate', 'onDatesChange', 'focusedInput', 'onFocusChange'])
}

const defaultProps = {
	// example props for the demo
	tooltipPlural: 'noches',
	tooltipSingular: 'noche',
	initialStartDate: null,
	initialEndDate: null,
	endDateId: 'end_date_input',
	orientationWidth: false,
	onChange: function() {},
	autoFocus: false,
	autoFocusEndDate: false,
	// startDateId: START_DATE,
	startDatePlaceholderText: 'Desde',
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
	//renderMonth: null,
	//orientation: HORIZONTAL_ORIENTATION,
	//orientation: VERTICAL_ORIENTATION,
	//anchorDirection: ANCHOR_RIGHT,
	horizontalMargin: 0,
	//withPortal: true,
	withFullScreenPortal: false,
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
	useTooltip: false,
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

class Calendar extends React.Component {
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
		// 	startDate: props.initialStartDate ? moment(props.initialStartDate) : null,
		// 	endDate: props.initialEndDate ? moment(props.initialEndDate) : null,
		// 	minimumNights: Number.isInteger(props.minimumNights) ? props.minimumNights : 1
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

		this.props.onChange({
			startDate: startDate && stateDateWrapper(startDate),
			endDate: endDate && stateDateWrapper(endDate)
		})
	}

	onFocusChange(focusedInput) {
		this.setState({ focusedInput })
	}

	renderContentDays = (day, modifiers) => {
		const { tooltipSingular, tooltipPlural, useTooltip } = this.props
		const { startDate, endDate } = this.state

		if (useTooltip && startDate && startDate < day && modifiers.has('hovered') && endDate === null) {
			const days = day.diff(startDate, 'days')
			const title = days === 1 ? tooltipSingular : tooltipPlural
			return (
				<Tooltip title={`${days} ${title}`} placement="top" style={{ background: 'red' }}>
					<p
						style={{
							width: '100%',
							height: '100%',
							padding: 5,
							boxSizing: 'border-box',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Text size={14} color="black" center>
							{day.format('D')}
						</Text>
					</p>
				</Tooltip>
			)
		}

		return day.format('D')
	}

	render() {
    return <div>123</div>
    /*

		const { focusedInput, startDate, endDate, minimumNights } = this.state
		const { orientationWidth } = this.props

		// autoFocus, autoFocusEndDate, initialStartDate and initialEndDate are helper props for the
		// example wrapper but are not props on the SingleDatePicker itself and
		// thus, have to be omitted.
		const props = omit(this.props, [
			'useTooltip',
			'tooltipSingular',
			'tooltipPlural',
			'orientationWidth',
			'style',
			'onChange',
			'className',
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
					anchorDirection="left"
					onDatesChange={this.onDatesChange}
					onFocusChange={this.onFocusChange}
					focusedInput={focusedInput}
					startDate={startDate}
					endDate={endDate}
					daySize={40}
					withPortal
					small
					block
					displayFormat="MMM D"
					renderDayContents={this.renderContentDays}
					noBorder
					minimumNights={minimumNights}
					customArrowIcon={<IconsFont icon="flaticon-calendar" />}
					endDateId={'end_date_input'}
					orientation={orientationWidth ? VERTICAL_ORIENTATION : HORIZONTAL_ORIENTATION}
					//showDefaultInputIcon
				/>
			</div>
		)
    */
	}
}

Calendar.propTypes = propTypes
Calendar.defaultProps = defaultProps

export default Calendar

// export default componentQueries(({ width }) => {
// 	if (width > 280 && width <= 900) return { orientationWidth: true }
// 	return { orientationWidth: false }
// })(Calendar)
