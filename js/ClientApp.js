/* global React ReactDOM */

import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div
var h1 = React.DOM.h1
var MyTitleFactory = React.createFactory(MyTitle)
var randomSentence = "This is a jsx test"

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'Excellent omgz', color: 'peru'}),
        MyTitleFactory({title: 'no more semicolon\'s plz', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'ur muther', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'wipe the lint off your shirt', color: 'cornflowerblue'}), 
        <h1 style={{color: "olive" }}>{randomSentence.toUpperCase()}</h1>
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))