'use strict';

var React = require('react');
var routeActions = require('./actions/routes');
var IndexPage = React.createFactory(require('./components/index'));
var GamePage = React.createFactory(require('./components/game'));
var render = function(Page) {
  React.render(new Page(), document.getElementById('app-wrapper'));
};


var index = function() {
  render(IndexPage);
};

var game = function() {
    render(GamePage);
};

var routes = {
  '/': game,
  'game': index,
  'sausage': index
};

module.exports = routes;
