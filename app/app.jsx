var React = require('react');
var ReactDOM = require('react-dom');
// ES6 Destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');
//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');

//app css
require('style!css!sass!applicationStyles');
$(document).foundation();

// var obj = {
//   name: 'Andrew'
// }
//
// var {name} = obj;

ReactDOM.render(
  <Router histroy={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="timer" component={Timer} />
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />  
    </Route>
  </Router>,
  document.getElementById('app')
);
