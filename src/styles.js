/**
  styles.js
  Styles for Silas Components
*/

const styles = {
  Stage: {
    maxWidth: '768px',
    margin: '0 auto',
    padding: '0.95em',
    paddingTop: '1em',
    fontSize: '3em',
  },
  ChordLine: {
    color: 'yellow',
    display: 'inline-block',
    position: 'relative',
    top: '-1em',
    width: '0px',
    marginTop: '0.5em'
  },
  LyricLine: {
    color: 'white',
    display: 'block'
  },
  SongOrder: {
    display: 'block',
    listStyleType: 'none',
  },
  SongOrderChild: {
    display: 'inline',
    border: '1px solid yellow'
  }
}

export default styles
