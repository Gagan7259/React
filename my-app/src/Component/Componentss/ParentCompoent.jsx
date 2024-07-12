import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComponentt from "./PureComponentt";
import Memmo from "../Memmo";

class ParentCompoent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Gagan",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "welcome Gagan",
      });
    }, 2000);
  }

  render() {
    console.log("***************PArent component render************");
    return (
      <div>
        <h1>Parent Component</h1>
        <Memmo name={this.state.name} />
        <PureComponentt name={this.state.name} />
        <RegularComponent name={this.state.name} />
      </div>
    );
  }
}

export default ParentCompoent;
