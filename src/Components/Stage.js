import React from 'react'
import { Container } from 'react-bootstrap'
import { ChordLine, LyricLine, Space } from './StageUtils'
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
    const url = 'http://' + this.state.host + ':' + this.state.port + '/api/controller/live_chords'
    request
      .get(url)
      .set('Access-Control-Allow-Origin', '*')
      .end(function(resp){
        console.log(resp)
      })
  }

  render() {
    return (
      <div style={Styles.Stage}>
        <ChordLine>D<Space amount={10}/>E</ChordLine>
        <LyricLine>Where can I go?</LyricLine>
      </div>
    )
  }
}
