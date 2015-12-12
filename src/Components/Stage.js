import React from 'react'
import { Container } from 'react-bootstrap'
import { ChordLine, LyricLine } from './StageUtils'
import Styles from '../styles'

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
    console.log(url)
    $.ajax({
      url: url,
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      success: function(data) {
        console.log(data)
      }
    });
  }

  render() {
    return (
      <div style={Styles.Stage}>
        <ChordLine>D</ChordLine>
        <LyricLine>Where can I go?</LyricLine>
      </div>
    )
  }
}
