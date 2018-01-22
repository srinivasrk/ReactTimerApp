var React = require('react');
var {Link, IndexLink}  = require('react-router');

var customNav = React.createClass({
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"> React Timer application</li>
            <li><IndexLink to ="/" activeClassName="active-link"> Timer </IndexLink> </li>
            <li> <Link to="/" activeClassName="active-link"> Countdown </Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text"> Created by <a href="https://www.linkedin.com/in/srini-cincy/" target="_blank"> Srinivas R Kulkarni </a></li>
          </ul>
        </div>
      </div>
    );
  }
})

module.exports = customNav;
