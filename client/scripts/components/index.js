/*jshint newcap:false */
'use strict';

var React = require('react');

// Alias for making element creation less verbose
var DOM = React.createElement;
var DefaultLayout = require('./layouts/default');
var DotView = function (numDots) {
  if (numDots > 1) {
    return 'there are a line of ' + numDots + ' dots';
  } 
  else {
    return 'there is a single delicious dot. Yummy!';
  }
};


var IndexComponent = React.createClass({
  displayName: 'IndexComponent',
  render: function() {
    return (
      DOM(DefaultLayout, null,
        DOM('div', {
            className: 'main-container'
          },
          DOM('div', {
              className: 'yeogurt-info'
            },
            DOM('h1', null, 'Pacman!'),
            DOM('p', null, 'You open your eyes. What is this place? You don\'t recognise it that\'s for sure. All you know is that you are starving.' ),
            DOM('p', null, 'You look down. Strange. You seem to be different. There\'s a yellowy quality to your skin. Are you sick? You don\' t feel sick. Just hungry. Really hungry.'),
            DOM('p', null, 'And you\'re spherical. You\'re spherical!', 
              ' Completely round...waaaaaat? This is utterly bizarre.', 
              ' You try and think back how you got here but you are too hungry to concentrate.', 
              ' You need ', DOM('strike',null,'food'), ' to eat!'),
            DOM('p',null,'Some unknown force is compelling you forwards.',
              ' You look up. You see what you can only describe as bright yellow dots ahead of you and boy do they look delicious!') , 

            DOM('div', { 
              id:'maze-position' 
            }, 
            DOM('p', null, 'You are in a corridor. The walls are radiating a deep blue. Looking ahead of you ', DotView(8)),
              'In the foreground you can see another path off ahead to the right.',
              'You can leave forwards or backwards'
            ),
            DOM('p', null, 'You feel like a dot.')

          )
        ),
        DOM('code', {
          className: 'version'
        }, 'v0.14.2')
      )
    );
  }
});

module.exports = IndexComponent;
