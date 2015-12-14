import React from 'react'
import { Container } from 'react-bootstrap'
import { Chord, LyricLine } from './StageUtils'
import Styles from '../styles'

import request from 'superagent'

export default class Stage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      host: props.host,
      port: props.port,
      live_chords: {},
      current_slide: {},
    }
  }

  handleChordsRequest(err, res) {
    if (err) {
      console.log(err)
    }

    this.live_chords = res.body
    console.log(res.body)
    console.log(live_chords)

    let current_slide = {}
    this.live_chords.results.slides.map((slide) => {
      if (slide.selected) {
        current_slide = slide
      }
    })
    this.current_slide = current_slide
  }

  componentDidMount() {
    const url = 'http://localhost:4316/api/controller/live_chords'
    request
      .get(url)
      .end((err, res) => this.handleChordsRequest(err, res))
  }

  render() {
    return (
      <div style={Styles.Stage}>
        <LyricLine><Chord>G</Chord>Bless the Lord <Chord>C</Chord>Oh my soul</LyricLine>
      </div>
    )
  }
}
