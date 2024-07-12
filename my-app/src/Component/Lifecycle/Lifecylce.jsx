import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";
class Lifecylce extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Gagan",
    };
    console.log("Life cyle A");
  }

  static getDerivedFromProps(props, state) {
    console.log("Life Cycle getDerivedFromProps");
    return true;
  }

  componentDidMount() {
    console.log("Life Cycle A componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("This Is lifecycle A shouldComponentUpdate()");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("Life Cycle A shouldComponentUpdate()");
  }

  componentDidUpdate() {
    console.log("Life Cycle A componentDidUpdate()");
  }

  render() {
    console.log("Life Cycle Render Method()");
    return (
      <div>
        <div>
          <h1>Life Cycle A</h1>
        </div>
        <div>
          <button onClick={this.ChangeState}>Change state</button>
        </div>
        <LifeCycleB />
      </div>
    );
  }
}

export default Lifecylce;
