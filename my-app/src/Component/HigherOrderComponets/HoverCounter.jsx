import React, { Component } from "react";
import UpdateComponent from "../HOP/WithCounter";
class HoverCounter extends Component {
  render() {
    const { increMent,count } = this.props;
    return (
      <div>
        <h2 onMouseOver={increMent}>Hover {count} Times</h2>
      </div>
    );
  }
}

export default UpdateComponent(HoverCounter);
