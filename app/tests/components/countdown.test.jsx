var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });
  // Async countdown using done() function
  describe('handleSetCountdown', () => {
      it('should set state to started and coutdown', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown />);
        countdown.handleSetCountdown(10);

        expect(countdown.state.count).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(() => {
          expect(countdown.state.count).toBe(9);
          done();
        }, 1001)
      });

      it('should not countdown to negative number', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown />);
        countdown.handleSetCountdown(1);

        setTimeout(() => {
          expect(countdown.state.count).toBe(0);
          done();
        }, 3001)
      });

  });
});
