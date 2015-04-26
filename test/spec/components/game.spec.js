/**
*   Index Component Spec Test
*/


'use strict';

var React = require('react');
var GameComponent = React.createFactory(require('../../../client/scripts/components/Game'));

describe('Game Component', function() {

  var ReactTestUtils;
  var reactRender;

  beforeEach(function() {
    ReactTestUtils = require('react/addons').addons.TestUtils;
    reactRender = ReactTestUtils.renderIntoDocument;
    this.gameComponent = new GameComponent();
  });

  it('provides the "Game Component" instance', function() {
    // Expect it to exist
    console.log("Hi", this.gameComponent);
    expect(this.gameComponent).to.be.ok;
  });

});