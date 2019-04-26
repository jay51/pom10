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
        {/* <Watch /> */}
        <div id="container">

          <Watch />
        </div>
      </div>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
