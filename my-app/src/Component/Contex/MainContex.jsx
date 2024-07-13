import React, { Component } from "react";
import Contex from "./Contex";
import { UserProvider } from "./UserContexxx";

class MainContex extends Component {
  render() {
    return (
      <div>
        <UserProvider value={"Gagan"}>
          <Contex />
        </UserProvider>
      </div>
    );
  }
}

export default MainContex;
