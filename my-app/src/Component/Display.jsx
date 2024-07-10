import React, { Component } from "react";
class Display extends Component {
  render() {
    return (
      <div>
        {" "}
        console.log(this.props)
        <h1>Welcome {this.props.name}</h1>
      </div>
    );
  }
}

export default Display;
