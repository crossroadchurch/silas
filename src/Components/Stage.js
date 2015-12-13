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
    }
  }

  componentDidMount() {
    const url = 'http://192.168.1.100:4316/api/controller/live_chords'
    request
      .get(url)
      .type('json')
      .set('Access-Control-Allow-Origin', '*')
      .end(function(err, res) {
        console.log(res.text)
      })
  }

  render() {
    return (
      <div style={Styles.Stage}>
        <LyricLine><Chord>G</Chord>Bless the Lord <Chord>C</Chord>Oh my soul</LyricLine>
      </div>
    )
  }
}
