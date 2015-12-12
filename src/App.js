import React, { Component } from 'react'
import { createStore } from 'redux'

import Stage from './Components/Stage'

export class App extends Component {

  render() {
    return (
      <Stage host={'localhost'} port={4316}/>
    )
  }
}
