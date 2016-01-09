/**
  slide component
*/

import React from 'react'
import Styles from '../styles'
import { LyricLine } from './StageUtils'

export default class Slide extends React.Component {
  render() {
      return (
        <div style={Styles.Slide}>
          <LyricLine>What to say</LyricLine>
        </div>
      )
  }
}
