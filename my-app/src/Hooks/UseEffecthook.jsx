import React, { Component } from "react";

class UseEffecthook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Don't Click Please
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default UseEffecthook;
