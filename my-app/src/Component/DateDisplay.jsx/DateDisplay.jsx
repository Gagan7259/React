import React, { Component } from "react";

export class DateDisplay extends Component {
  constructor() {
    super();
    this.state = {
      Message: "08/04/2020",
    };
  }

  changeHandler() {
    this.setState = {
      Message: "Hey Today 8/7/2024 ",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={() => this.changeHandler()}>Show Time</button>
      </div>
    );
  }
}

export default DateDisplay;
