import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import times from 'lodash/times'

const styles = {
  imgLoading: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    background: '#f9f8f7'
  },
  textLoading: {
    width: '100%',
    maxWidth: 100,
    minHeight: 15,
    marginBottom: 5,
    background: '#f9f8f7'
  },
  textLoadingTwo: {
    width: '100%',
    maxWidth: 60,
    minHeight: 10,
    background: '#f9f8f7'
  },
  padding20: {
    padding: 10
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%'
  }
}
const Items = props => {
  const {classes} = props
  return (
    <div className={classNames(classes.flex, classes.padding20)} style={{
      backgroundColor: 'white',
      width: '100%'
    }}>
			<div className={classNames(classes.imgLoading)} />
			<div style={{
      width: '100%',
      maxWidth: 100
    }}>
				<div className="linear-background" style={{
      marginBottom: 5
    }} />
				<div className={classNames(classes.textLoadingTwo)} />
			</div>
		</div>
  )
}
Items.defaultProps = {}
Items.propTypes = {

}
const StyleItem = withStyles(styles)(Items)

function LoadingSortList(props) {
  const {classes, items} = props
  return (
    <div className={classNames(classes.contentCard, classes.flex)}>
			{times(items, String).map(i => (
      <StyleItem key={i} />
    ))}
		</div>
  )
}
LoadingSortList.defaultProps = {}
LoadingSortList.propTypes = {
  items: PropTypes.number.isRequired
}

export default withStyles(styles)(LoadingSortList)
