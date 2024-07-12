import React, { Component } from "react";

 class Counter extends Component {
 
  render() {
    const { count ,increment} = this.props;
    return (
      <div>
        <button onClick={increment}> click {count} Times</button>
      </div>
    );
  }
}

export default Counter;
