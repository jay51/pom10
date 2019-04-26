import React, { Component } from "react";

export default class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      secs: 0,
      mins: 1,
    };
    this.onTick = this.onTick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onReset = this.onReset.bind(this);
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
        else this.setState({ mins: mins - 1, secs: 60 });
      }
    }

  }

  handleClick() {
    this.setState({ running: !this.state.running, previouseTime: Date.now() });
  }

  onReset() {
    this.setState({ secs: 0, mins: 1 });
  }

  render() {
    const { mins, running, secs } = this.state;

    return (
      <div>

        <div className="time">{mins > 9 ? mins : "0" + mins}:{secs > 9 ? secs : "0" + secs}</div>


        <button onClick={this.handleClick}>
          {running ? "Stop" : "Start"}
        </button>

        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}


// TODO:
// Done - Make it stop and start as it's now
// Done - Make it count down instead of up
// Done - Make it count down to 0 then decremant the mins