/**
  styles.js
  Styles for Silas Components
*/

const styles = {
  Loading: {
    display: 'block',
    fill: '#d922d2',
    margin: '0 auto'
  },
  Scene: {
    maxWidth: '1000px',
    height: '100vh',
    margin: '0 auto',
    padding: '0.95em',
    paddingTop: '2em',
    fontSize: '2.5em',
    display: 'flex',
    justifyContent: 'center'
  },
  ChordLine: {
    color: '#d922d2',
    display: 'inline-block',
    position: 'relative',
    top: '-1.1em',
    width: '0px',
    marginTop: '0.5em'
  },
  LyricLine: {
    color: 'white',
    display: 'block'
  },
  NextLine: {
    display: 'block',
    color: '#999',
    marginTop: '2em',
    fontSize: '0.8em',
  },
  Highlight: {
    color: '#d922d2'
  },
  Error: {
    color: 'red'
  },
  SongOrder: {
    listStyleType: 'none',
    padding: '0',
    marginBottom: '2em',
  },
  SongOrderChild: {
    display: 'inline',
    color: 'white',
    margin: '0px 5px'
  }
}

export default styles
