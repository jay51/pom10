import React, { Component } from "react";

export default class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      secs: 0,
      mins: 25,
      currentTime: 25
    };

    this.onTick = this.onTick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onReset = this.onReset.bind(this);
    this.shortBreack = this.shortBreack.bind(this);
    this.longBreack = this.longBreack.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.onTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onTick() {

    if (this.state.running) {
      const { secs, mins, running } = this.state;
      if (mins >= 0) {

        // Order matters
        if (mins == 0 && secs <= 0) {
          this.setState({ secs: 0, mins: 1, running: !running });
          return;
        }

        if (secs > 0) {
          this.setState({ secs: secs - 1 });
          return;
        }
        else this.setState({ mins: mins - 1, secs: 59 });
      }
    }

  }

  handleClick() {
    this.setState({ running: !this.state.running });
  }

  onReset() {
    this.setState({ secs: 0, mins: this.state.currentTime });
  }

  longBreack() {
    this.setState({ secs: 0, mins: 10, currentTime: 10 });
  }

  shortBreack() {
    this.setState({ secs: 0, mins: 5, currentTime: 5 });
  }

  render() {
    const { mins, running, secs } = this.state;

    return (
      <div>
        <div id="timer">
          <div id="time">
            <span id="minutes">{mins > 9 ? mins : "0" + mins}</span>
            <span id="colon">:</span>
            <span id="seconds">{secs > 9 ? secs : "0" + secs}</span>
          </div>
          <div id="filler" />
        </div>

        <div id="buttons">
          <button id="work" onClick={this.handleClick}>
            {running ? "Stop" : "Start"}
          </button>
          <button id="shortBreak" onClick={this.shortBreack}>Break <strong>-</strong></button>
          <button id="longBreak" onClick={this.longBreack}>Break <strong>+</strong></button>
          <button id="stop" onClick={this.onReset}>Reset</button>
        </div>
      </div>
    );
  }
}


// TODO:
// Done - Make it stop and start as it's now
// Done - Make it count down instead of up
// Done - Make it count down to 0 then decremant the mins
// - Make the cericle itself a stop/start button
