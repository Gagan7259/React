import React, { Component } from "react";
import ContexB from "./ContexB";
import UserContext from "./UserContexxx";

class Contex extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        Component Context {this.context}
        <ContexB />
      </div>
    );
  }
}
// Contex.contextType = UserContext;

export default Contex;
