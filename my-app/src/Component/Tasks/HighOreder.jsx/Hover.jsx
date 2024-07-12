import React, { Component } from "react";
import NewReturnComponet from "./NewConponent";
class Hover extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h1 onMouseOver={increment}>Hoverd {count} times</h1>
      </div>
    );
  }
}

export default NewReturnComponet(Hover,6);
