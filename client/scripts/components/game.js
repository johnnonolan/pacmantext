/*jshint newcap:false */
'use strict';

var React = require('react');

// Alias for making element creation less verbose
var DOM = React.createElement;
var DefaultLayout = require('./layouts/default');

var GameComponent = React.createClass({
  displayName: 'GameComponent',
  render: function() {
    return (
      DOM(DefaultLayout, null,
        DOM('div', {
            className: 'main-container'
          },
          DOM('div', {
              className: 'yeogurt-info'
            },
            DOM('h1', null, 'PacMan text!'),
            DOM('p' ,null, 'This is the GameComponent'
            )
          )
        )
      )
    );
  }
});

module.exports = GameComponent;
