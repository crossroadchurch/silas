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
      <span style={Styles.LyricLine} dangerouslySetInnerHTML={{__html: this.props.children}}/>
    )
  }
}

export class NextLine extends React.Component {
  render() {
    return (
      <span style={Styles.NextLine}>
        {this.props.children}
      </span>
    )
  }
}

export class Error extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span style={Styles.Error}>
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

export class Highlight extends React.Component {
  render() {
    return (
      <span style={Styles.Highlight}>{this.props.children}</span>
    )
  }
}
