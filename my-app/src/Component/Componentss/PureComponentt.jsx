import React, { PureComponent } from "react";

class PureComponentt extends PureComponent {
  render() {
    console.log("Pure component render");

    return (
      <div>
        <h1>Pure COMPONENT {this.props.name}</h1>
      </div>
    );
  }
}
export default PureComponentt;
