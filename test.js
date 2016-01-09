const React = require('react')

const h = React.createClass({
  render: function() {
    return (
      React.DOM.h1(null, "Hello, world!")
    )
  }
})

eval(h)
