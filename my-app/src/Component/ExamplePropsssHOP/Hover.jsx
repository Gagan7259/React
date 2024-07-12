import React, { Component } from "react";

class Hover extends Component {
  render() {
    const { count, increment } = this.props;

    return (
      <div>
        <h1 onMouseOver={increment}>Hoverd {count} Times</h1>
      </div>
    );
  }
}

export default Hover;
