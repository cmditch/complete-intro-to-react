// import React from 'react'
// import ReactDOM from 'react-dom'
// var React = require('react')
// var ReactDOM = require('react-dom')

var div = React.DOM.div
var h1  = React.DOM.h1

var MyTitle = React.createClass({
  render: function() {
    return (
      h1(null, "This isn't really my first compnonent, but any-hoo")
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function (){
    return (
      div (null,
        MyTitleFactory(null),
        MyTitleFactory(null),
        MyTitleFactory(null),
        MyTitleFactory(null)
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))