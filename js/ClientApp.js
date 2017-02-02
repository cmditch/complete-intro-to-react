// import React from 'react'
// import ReactDOM from 'react-dom'
// var React = require('react')
// var ReactDOM = require('react-dom')

/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      h1({style: {color: this.props.color} }, this.props.title)
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'Excellent omgz', color: 'peru'}),
        MyTitleFactory({title: 'no more semicolon\'s plz', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'ur muther', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'wipe the lint off your shirt', color: 'cornflowerblue'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
