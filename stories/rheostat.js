import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'

import LabeledSlider from '../src/Atoms/LabeledSlider'

const stories = storiesOf('Rheostats', module)

stories.add('Rheostats', () => {
  function MyHandle({ style, ...passProps }) {
    return (
      <div
        {...passProps}
        style={{
          ...style,
          backgroundColor: '#FF4D4D',
          borderRadius: '100%',
          cursor: 'ew-resize',
          marginLeft: -13,
          height: 15,
          width: 15,
          zIndex: 3
        }}
      />
    )
  }
  MyHandle.propTypes = {
    style: PropTypes.object
  }
  MyHandle.defaultProps = {
    style: null
  }

  return <LabeledSlider handle={MyHandle} values={{ from: 300, to: 4000 }} extremes={{ min: 300, max: 4000 }} />
})
