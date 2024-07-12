import React, { Component } from "react";

class LifecylceB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Gagan",
    };
    console.log("Life cyle B");
  }

  static getDerivedFromProps(props, state) {
    let a = console.log("Life Cycle B getDerivedFromProps");
    return a;
  }

  componentDidMount() {
    console.log("Life Cycle B componentDidMount");
  }

  ChangeState = (event) => {
    this.setState({
      name: "Frontent Developer",
    });
  };
  shouldComponentUpdate() {
    console.log("This Is lifecycle B shouldComponentUpdate()");
    return null;
  }

  getSnapshotBeforeUpdate() {
    console.log("Life Cycle B shouldComponentUpdate()");
  }

  componentDidUpdate() {
    console.log("Life Cycle B componentDidUpdate()");
  }

  render() {
    console.log("Life Cycle B Render Method()");
    return (
     <div>
        <h1>Life Cycle B</h1>
     </div>
    );
  }
}

export default LifecylceB;
