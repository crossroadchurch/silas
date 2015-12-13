import React from 'react'
import Styles from '../styles'

export class Chord extends React.Component {
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


export class SongOrder extends React.Component {
  render() {
    return (
      <ul style={Styles.SongOrder}>
        {this.props.children}
      </ul>
    )
  }
}

export class SongOrderChild extends React.Component {
  render() {
    return (
      <li style={Styles.SongOrderChild}>{this.props.children}</li>
    )
  }
}
