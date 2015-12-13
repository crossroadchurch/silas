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
    const url = 'http://' + this.state.host + ':' + this.state.port + '/api/controller/live_chords'
    request
      .get(url)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (res.ok) {
          alert('yay got ' + JSON.stringify(res.body));
        } else {
          alert('Oh no! error ' + res.text);
        }
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
