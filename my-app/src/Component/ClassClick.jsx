import React, { Component } from "react";

export class ClassClick extends Component {
  classClickHandler() {
    console.log("Class Click Button");
  }
  render() {
    return (
      <div>
        <button onClick={this.classClickHandler}>Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
