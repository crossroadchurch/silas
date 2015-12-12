import React from 'react'

const styles = {
  ChordLine: {
    color: 'yellow'
  },
  LyricLine: {
    color: 'blue'
  }
}

export class ChordLine extends React.Component {
  render() {
    return (
      <span style={styles.ChordLine}>
        {this.props.children}
      </span>
    )
  }
}

export class LyricLine extends React.Component {
  render() {
    return (
      <span style={styles.LyricLine}>
        {this.props.children}>
      </span>
    )
  }
}
