import React, { Component } from "react";

export class ClaassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  incrementHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={this.incrementHandler}>
          {this.state.count} items Added
        </button>
      </div>
    );
  }
}

export default ClaassCounter;
