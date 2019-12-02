import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import moment from 'moment'

import FechasCard from '../Card/FechasCard'

class DateContainer extends React.PureComponent {
  render() {
    const {classes, onSelect, onSubmit, dates, selected} = this.props

    return (
      <section id="card_pack_container" className={classes.noWrapper}>
				<ul className={classes.contentRooms}>
					{dates.map((option, i) => {
        let startDate = moment(option.date)
        let endDate = startDate.add(option.nights, 'days')

        return (
          <li key={option.date} className={classes.itemRomm}>
								<FechasCard
          {...option}
          onSubmit={() => onSubmit(option)}
          onSelect={onSelect}
          product={option}
          selected={selected === option.code}
          adults={option.adults}
          childs={option.childs}
          startDate={moment(option.date).format('YYYY-MM-DD')}
          endDate={endDate.format('YYYY-MM-DD')}
          />
							</li>
        )
      })}
				</ul>
			</section>
    )
  }
}

DateContainer.defaultProps = {
  dates: [
    {
      date: '1-12-2019',
      nights: '7',
      price: 4000,
      hotels: ['Hotel de ejemplo numero uno', 'Hotel de ejemplo numero dos']
    },
    {
      date: '5-12-2019',
      nights: '15',
      price: 4000,
      hotels: ['Hotel de ejemplo numero uno', 'Hotel de ejemplo numero dos']
    },
    {
      date: '13-12-2019',
      nights: '12',
      price: 4000,
      hotels: ['Hotel de ejemplo numero uno', 'Hotel de ejemplo numero dos']
    },
    {
      date: '22-12-2019',
      nights: '5',
      price: 4000,
      hotels: ['Hotel de ejemplo numero uno', 'Hotel de ejemplo numero dos']
    }
  ],
  onSelect: () => {
  }
}
DateContainer.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.node.isRequired),
  onSelect: PropTypes.func
}

export default withStyles(() => ({
  noWrapper: {
    overflowX: 'scroll',
    background: '#f2f2f2',
    padding: 10,
    whiteSpace: 'nowrap',
    width: '100%',
    '@media (max-width: 800px)': {
      position: 'fixed',
      zIndex: 6,
      padding: 5,
      background: 'transparent',
      backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(0,0,0,.4))',
      bottom: 0,
      left: 0
    }
  },
  contentRooms: {
    /* minWidth: 1400, */
    width: '100%',
    display: 'inline-flex'
  },
  itemRomm: {
    marginRight: 10,
    '&:last-child': {
      marginRight: 0
    }
  }
}))(DateContainer)
