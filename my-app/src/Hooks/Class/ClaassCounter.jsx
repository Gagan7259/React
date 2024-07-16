import React, { Component } from "react";

export class ClaassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
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
        <button onClick={this.incrementHandler}>
          {this.state.count} items Added
        </button>
      </div>
    );
  }
}

export default ClaassCounter;
