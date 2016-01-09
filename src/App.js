import React, { Component } from 'react'
import { createStore } from 'redux'

import pkg from '../package'
import Stage from './Components/Stage'

export class App extends Component {
  render() {
    return (
      <Stage host={'192.168.1.108'} port={4316} />
    )
  }
}

export class Footer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        version: pkg.version
      }
    }

    render() {
      return (
        <h4 id="release">
          <strong>Silas</strong> unstable {this.state.version}
        </h4>
      )
    }
}
