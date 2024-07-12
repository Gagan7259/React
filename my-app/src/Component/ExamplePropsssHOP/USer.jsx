import React, { Component } from "react";

export class USer extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.render(false)}</h2>
      </div>
    );
  }
}

export default USer;
