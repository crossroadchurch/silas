import React from 'react'
import { connect } from 'react-refetch'

import Styles from '../styles'
import { Chord, LyricLine, NextLine, SongOrder, SongOrderChild, Highlight } from './StageUtils'
import LoadingAnimation from 'react-loading'

function isChord(string) {
  const chord = string.match(/<chord[\w\+#"='' ]* \/>/)
  if (chord) {
    return chord.index
  } else {
    return false
  }
}

class Stage extends React.Component {
  constructor(props) {
    super(props)
    this.parseLiveChords = this.parseLiveChords.bind(this)
  }

  parseLiveChords(updateFetch) {
    let slide_data = updateFetch.current_slide
    let chords = slide_data.match(/<chord[\w\+#"='' ]* \/>/g)
    chords.map((chord) => {
      const id = chord.match(/'\w+'/)[0].slice(1, -1)
      slide_data = slide_data.replace(chord, '<span class="chord-line">' + id + '</span>')
    })
    const lines = slide_data.split('<br>')

    let next_line = updateFetch.next_slide
    next_line = next_line.split('<br>')

    let song_order = updateFetch.song_order.split(' ')

    return (
      <div>
        <SongOrder>
          {song_order.map((item) => {
            return (
              <SongOrderChild>
                {item}
              </SongOrderChild>
            )
          })}
        </SongOrder>

        {lines.map((line) => {
          return (
            <LyricLine>
              {line}
            </LyricLine>
          )
        })}

        <NextLine>{next_line[0]}</NextLine>
      </div>
    )
  }

  render() {
    const { updateFetch } = this.props

    if (updateFetch.pending) {
      return <span>Loading...</span>
    } else if (updateFetch.rejected) {
      return <span>Error Loading Song</span>
    } else if (updateFetch.fulfilled) {
      return (
        <div style={Styles.Scene}>
          {this.parseLiveChords(updateFetch.value)}
        </div>
      )
    }
  }
}

export default connect(props => ({
  updateFetch: {
    url: `http://${props.host}:${props.port}/silas/update-id`,
    refreshInterval: 1000
  }
}))(Stage)
