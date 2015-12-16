import React from 'react'
import request from 'superagent'

import Styles from '../styles'
import { Chord, LyricLine } from './StageUtils'
import Scene from './Scene'

export default class Stage extends React.Component {
  render() {
    return (
      <Scene host={'localhost'} port={4316} />
    )
  }
}
