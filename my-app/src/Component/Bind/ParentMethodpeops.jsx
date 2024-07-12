import React, { Component } from "react";
import Child from "./Child";

export class ParentMethodpeops extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentsName: "Parent",
    };
    this.greetHandler = this.greetParent.bind(this);
  }

  greetParent(ChildName) {
    alert(`Hello ${this.state.parentsName} from ${this.ChildName}`);
  }

  render() {
    return (
      <div>
        {/* <Child grret={this.greetHandler} /> */}
        <Child a={this.greetParent} />
      </div>
    );
  }
}

export default ParentMethodpeops;
