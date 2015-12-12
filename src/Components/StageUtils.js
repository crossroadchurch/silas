import React from 'react'
import Styles from '../styles'

export class ChordLine extends React.Component {
  render() {
    return (
      <span style={Styles.ChordLine}>
        {this.props.children}
      </span>
    )
  }
}

export class LyricLine extends React.Component {
  render() {
    return (
      <span style={Styles.LyricLine}>
        {this.props.children}
      </span>
    )
  }
}

export class Space extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: props.amount
    }
  }

  render() {
    return (
      <span>&nbsp;</span>
    )
  }
}
