// Initial welcome page. Delete the following line to remove it.
"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Watch from "./components/Watch";

class App extends Component {
  render() {
    return (
      <div id="pomodoro-app">
        <Watch />
        <div id="container">
          <div id="timer">
            <div id="time">
              <span id="minutes">25</span>
              <span id="colon">:</span>
              <span id="seconds">00</span>
            </div>
            <div id="filler" />
          </div>

          <div id="buttons">
            <button id="work">Work</button>
            <button id="shortBreak">Short Break</button>
            <button id="longBreak">Long Break</button>
            <button id="stop">Stop</button>
          </div>
        </div>
      </div>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
