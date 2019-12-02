import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { TitleSecondary } from '../TitleLabel/TitleLabel'

class HeaderCard extends React.PureComponent {
  render() {
    const {classes, paddingConfig, title} = this.props
    return (
      <div className={classes.headerCard} style={{
        padding: paddingConfig
      }}>
				<TitleSecondary content={title} size={16} left italic color="black" />
			</div>
    )
  }
}

HeaderCard.defaultProps = {
  title: 'Hotel de ejemplo Buenos Aires',
  paddingConfig: 15
}

HeaderCard.propTypes = {
  title: PropTypes.string,
  paddingConfig: PropTypes.number
}

export default withStyles(() => ({
  headerCard: {
    background: '#f9f8f7',
    width: '100%',
    borderBottom: '0.5px solid silver'
  }
}))(HeaderCard)
