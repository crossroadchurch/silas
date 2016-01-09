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
    padding: '0.95rem',
    paddingTop: '2rem',
    fontSize: '2.5rem',
    display: 'flex',
    justifyContent: 'center'
  },
  ChordLine: {
    color: '#d922d2',
    display: 'inline-block',
    position: 'relative',
    top: '-1.1rem',
    width: '0px',
    marginTop: '0.5rem'
  },
  LyricLine: {
    color: 'white',
    display: 'block'
  },
  NextLine: {
    display: 'block',
    color: '#999',
    marginTop: '2rem',
    fontSize: '0.8rem',
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
    marginBottom: '2rem',
  },
  SongOrderChild: {
    display: 'inline',
    color: 'white',
    margin: '0px 5px'
  }
}

export default styles
