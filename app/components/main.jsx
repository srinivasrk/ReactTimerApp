var React = require('react');
var CustomNav = require('CustomNav');
// var Main = React.createClass({
//   render:function(){
//     return (
//       <div>
//         <Nav></Nav>
//         <h2> Main component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <CustomNav></CustomNav>
      <div>
          <p>Main.JSX rendered</p>
          {props.children}
      </div>
    </div>
  );
}
module.exports = Main;
