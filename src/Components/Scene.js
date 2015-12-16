/**
  scene.js

  Scene component is the main child component
  of the Stage which recieves & processes live
  data from the Paul Server.
*/

import React from 'react'
import Styles from '../styles'
import request from 'superagent'
import { createStore } from 'redux'
import {
  Chord,
  LyricLine
} from './StageUtils'

export default class Scene extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      serverHost: props.host,
      serverPort: props.port,
      fetchedData: {},
      currentSlide: {
        chords: false,
        lines: [],
        data: {}
      }
    }

    this.fetchData = this.fetchData.bind(this)
  }

  fetchData() {
    console.log("Fetching")
    const URL = 'http://' + this.state.serverHost + ':' + this.state.serverPort
                + '/api/controller/live_chords'
    request
      .get(URL)
      .end((err, res) => {
        if (err) {
          console.log(err)
        }

        const json = res.body
        if (json.results) {
          this.state.fetchedData = json.results.slides

          let currentSlide = {}
          this.state.fetchedData.map((slide) => {
            if (slide.selected) {
              currentSlide = slide
            }
          })
          this.state.currentSlide.data = currentSlide
          this.state.currentSlide.chords = false
          this.state.currentSlide.lines = this.state.currentSlide.data.html.split('<br>')
        }
      })

      console.log(this.state.currentSlide)
  }

  componentWillMount() {
    this.fetchData()
  }

  componentWillUpdate() {
    this.fetchData()
  }

  render() {
    return (
      <div style={Styles.Scene}>
        {this.state.currentSlide.lines.map((line) => {
          return <LyricLine>{line}</LyricLine>
        })}
      </div>
    )
  }
}
