/* eslint react/button-has-type:0 */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

const Button = ({fullWidth, border, disable, visibility, link, primary, secondary, size, radius, classes, className, text, onClick, iconLeft, iconRight, style, type, id, name}) => (
  <button
  aria-label={name}
  type={type}
  id={id}
  name={name}
  className={classNames(
    classes.Button,
    (border && classes.Button_border) || classes.Button_without_border,
    primary && classes.Button_primary,
    secondary && classes.Button_secondary,
    link && classes.Button_link,
    visibility && classes.Visibility,
    fullWidth && classes.Button_fullWidth,
    disable && classes.Button_disable,
    radius && classes.Button_radius,
    (size === 'small' && classes.Button_small) ||
    (size === 'medium' && classes.Button_medium) ||
    (size === 'big' && classes.Button_big),
    className
  )}
  style={style}
  disabled={disable}
  onClick={onClick}
  >
			{iconLeft != null && (
  <div>
					<span className={classNames(classes.Icon)}> {iconLeft}</span>
				</div>
  )}
			{text != null &&
  text !== '' && (
  <div id={id} style={{
    paddingLeft: 5,
    paddingRight: 5
  }}>
						{text}
					</div>
  )}
			{iconRight && (
  <div id={id}>
					<span id={id} className={classNames(classes.Icon)}>
						{iconRight}
					</span>
				</div>
  )}
		</button>
)

Button.defaultProps = {
  iconLeft: null,
  iconRight: null,
  size: 'medium',
  link: false,
  primary: true,
  secondary: false,
  visibility: false,
  disable: false,
  fullWidth: false,
  border: false,
  radius: false,
  color: '',
  text: null,
  className: '',
  style: {},
  type: 'submit'
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  text: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.string,
  secondary: PropTypes.bool,
  border: PropTypes.bool,
  radius: PropTypes.bool,
  visibility: PropTypes.string,
  disable: PropTypes.bool,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  style: PropTypes.object,
  iconRight: PropTypes.object,
  iconLeft: PropTypes.object
}

export { Button as PureButton }
const styles = ({palette}) => ({
  Button: {
    fontSize: '14px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'normal',
    width: 'auto',
    cursor: 'pointer',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '15px',
    paddingRight: '15px',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      background: '#f2f2f2'
    }
  },
  Button_link: {
    color: 'blue',
    background: 'transparent',
    opacity: 1,
    padding: '5px 0!important',

    '&:hover': {
      background: 'transparent'
    }
  },
  Button_primary: {
    color: palette.primary.contrastText,
    background: palette.primary.main,
    /* borderBottomColor: palette.primary.dark, */
    transition: '0.5s',
    opacity: 1,

    '&:hover': {
      background: palette.primary.main,
      transition: '0.5s',
      opacity: 0.8
    }
  },
  Button_secondary: {
    color: palette.secondary.contrastText,
    background: palette.secondary.main,
    /* 		borderBottomColor: palette.secondary.dark, */
    transition: '0.5s',
    opacity: 1,

    '&:hover': {
      background: palette.secondary.main,
      transition: '0.5s',
      opacity: 0.8
    }
  },
  Button_fullWidth: {
    width: '100%'
  },
  Visibility: {
    visibility: 'hidden'
  },
  Button_border: {
    borderBottom: '3px solid',
    borderBottomColor: palette.primary.dark
  },
  Button_without_border: {
    borderBottom: '0px'
  },
  Button_radius: {
    borderRadius: '6px'
  },
  Button_small: {
    paddingTop: '9px',
    paddingBottom: '9px',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  Button_medium: {
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  Button_big: {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '40px',
    paddingRight: '40px'
  },
  Button_disable: {
    color: 'gray',
    backgroundColor: '#f2f2f2',
    cursor: 'not-allowed',
    borderBottom: '3px #ccc solid'
  },
  Icon: {
    marginRight: 0,
    maxHeight: 15,
    verticalAlign: 'initial'
  }
})
export default withStyles(styles)(Button)
