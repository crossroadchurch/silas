import React, { Component } from 'react'
import { createStore } from 'redux'

import Stage from './Components/Stage'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chords: true
    }
  }

  render() {
    const usingChords = this.state.chords
    return (
      <Stage host={'192.168.1.101'} port={4316} chords={usingChords} />
    )
  }
}
