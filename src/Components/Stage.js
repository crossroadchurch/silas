import React from 'react'
import { Container } from 'react-bootstrap'
import { ChordLine } from './StageUtils'
import Styles from '../styles'

export default class Stage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      host: props.host,
      port: props.port
    }
  }

  render() {
    return (
      <div>
        <ChordLine>D</ChordLine>
      </div>
    )
  }
}
