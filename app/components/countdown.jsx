var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function(){
    return{
      count : 0,
      countdownStatus: 'stopped'
     };
  },
  // do not run long methods here. Just check for updates and call other functions to handle the changes
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.countdownStatus != prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },


  componentWillUnmount: function(){
    //console.log("Component did unmount");
    clearInterval(this.timer);
    this.timer = undefined;
  },

  startTimer: function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0){
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  },

  handleSetCountdown: function(seconds){
    this.setState({
      count:seconds,
      countdownStatus: 'started'
    });
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus : newStatus
    });
  },

  render: function(){
    var {count} = this.state;
    var {countdownStatus} = this.state;

    var renderControlArea = () => {
      if(countdownStatus != 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}  />
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />
      }
    }
    return(
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
