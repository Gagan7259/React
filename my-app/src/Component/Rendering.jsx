import React, { Component } from "react";

export class Rendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // USING IF ELSE STATEMENT
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Gagan</div>;
    // } else {
    //   return alert(" Welcome, Hey Wait Who are you");
    // }
    //USING VARIABLE
    // let Message;
    // if (this.state.isLoggedIn) {
    //   Message=" Welcome Gagan";
    // } else {
    //   Message= alert("Get Out");
    // }
    // return <div>{Message}</div>;

    //USING TERNARY OPERATER
    // return this.state.isLoggedIn ? (
    //   <div>Hey Welcome</div>
    // ) : (
    //   alert("Please Login First")
    // );

    return this.state.isLoggedIn && <div>wecome Vishwas</div>;
  }
}

export default Rendering;
