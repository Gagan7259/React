import React, { Component } from "react";

export class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevstate) => ({ time: prevstate.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        class time={this.state.time}
        <button
          onClick={() => {
            clearInterval(this.interval);
          }}
        >
          Clear Timer
        </button>
      </div>
    );
  }
}

export default ClassTimer;
