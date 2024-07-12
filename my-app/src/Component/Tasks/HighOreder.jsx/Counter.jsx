import React, { Component } from "react";
import NewReturnComponet from "./NewConponent";
class Counter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>Clicked {count} Times</button>
      </div>
    );
  }
}

export default NewReturnComponet(Counter,3);
