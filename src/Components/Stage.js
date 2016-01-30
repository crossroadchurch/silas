import React from 'react'
import { connect } from 'react-refetch'

import Styles from '../styles'
import { Chord, LyricLine, NextLyricLine, NextLine, SongOrder, SongOrderChild, Highlight } from './StageUtils'
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
    let chords = slide_data.match(/<chord[\w\+\/#"='' ]* \/>/g)
    
    if (chords) {
      chords.map((chord) => {
        let id = chord.match(/'[\w\+#\/]*'/)
		if (id) {
		  id = id[0].slice(1, -1)
		  slide_data = slide_data.replace(chord, '<span class="chord-line">' + id + '</span>')
		}
      })
    }
    const lines = slide_data.split('<br>')

    let next_slide_data = updateFetch.next_slide
    let next_chords = next_slide_data.match(/<chord[\w\+\/#"='' ]* \/>/g)
    
    if (next_chords) {
      next_chords.map((next_chord) => {
        let id = next_chord.match(/'[\w\+#\/]*'/)
		if (id) {
		  id = id[0].slice(1, -1)
		  next_slide_data = next_slide_data.replace(next_chord, '<span class="next-chord-line">' + id + '</span>')
		}
      })
    }
    let next_lines = next_slide_data.split('<br>')
	if (next_lines.length > 2) {
		next_lines = next_lines.slice(0, 2)
	}
	
	// let next_line = updateFetch.next_slide
    // next_line = next_line.replace(/<chord[\w\+#"='' ]* \/>/g, '')
    // next_line = next_line.split('<br>')

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

		{next_lines.map((next_line) => {
          return (
            <NextLyricLine>
              {next_line}
            </NextLyricLine>
          )
        })}
		
        
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
