import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

const Typography = ({classes, content, children, center, right, color, colorPrimary, italic, size, lineThrough}) => (
  <p
  className={classNames(
    classes.global,
    italic && classes.italic,
    center && classes.AlignCenter,
    right && classes.AlignRight,
    colorPrimary && classes.primaryColor,
    lineThrough && classes.textLineThrough
  )}
  style={{
    fontSize: size,
    color
  }}
  >
		{content}
		{children}
	</p>
)

Typography.defaultProps = {
  bold: false,
  italic: false,
  colorPrimary: true,
  colorSecondary: false,
  color: '',
  size: 13,
  center: false,
  right: false,
  lineThrough: false
}

Typography.propTypes = {
  bold: PropTypes.string,
  italic: PropTypes.string,
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
  color: PropTypes.string,
  center: PropTypes.string,
  size: PropTypes.number,
  right: PropTypes.string,
  lineThrough: PropTypes.string
}

const styles = ({palette, color}) => ({
  global: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'left',
    fontSize: 13,
    width: '100%',
    margin: 0,
    color,
    textDecoration: 'none'
  },
  primaryColor: {
    color: palette.primary.main
  },
  seconudaryColor: {
    color: palette.secondary.main
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontWeight: 'italic'
  },
  AlignCenter: {
    textAlign: 'center'
  },
  AlignRight: {
    textAlign: 'right'
  },
  textLineThrough: {
    textDecoration: 'line-through'
  }
})

export default withStyles(styles)(Typography)
