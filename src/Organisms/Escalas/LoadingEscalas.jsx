import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import times from 'lodash/times'

const styles = {
  contentCard: {
    background: 'white',
    borderRadius: 0,
    overflow: 'hidden',
    minHeight: 60
  },
  bloque: {
    width: '100%',
    minHeight: 120,
    background: '#f9f8f7',
    margin: 1
  },
  textLoading: {
    width: '100%',
    minHeight: 20,
    background: '#f9f8f7'
  },
  padding20: {
    padding: 10
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%'
  }
}
const Items = props => {
  const {classes} = props
  return (
    <div style={{
      backgroundColor: 'white',
      width: '100%'
    }}>
			<div className={classNames(classes.padding20)}>
				<div className="linear-background" />
			</div>
			<div className={classNames(classes.bloque)} />
		</div>
  )
}

Items.defaultProps = {}
Items.propTypes = { }

const StyleItem = withStyles(styles)(Items)

function LoadingEscalas(props) {
  const {classes, items} = props

  return (
    <div className={classNames(classes.contentCard, classes.flex)}>
			{times(items, String).map(i => (
      <StyleItem key={i} />
    ))}
		</div>
  )
}

LoadingEscalas.defaultProps = {}
LoadingEscalas.propTypes = {
  items: PropTypes.number.isRequired
}

export default withStyles(styles)(LoadingEscalas)
