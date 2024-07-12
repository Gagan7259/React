import React, { Component } from "react";

const NewReturnComponet = (OriginalComponent,NumberIncrement) => {
  class NewConponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    ConterChange=()=> {
      this.setState((prevstate) => {
        return { count: prevstate.count + NumberIncrement };
      });
    }

    render() {
      return (
          <OriginalComponent

            count={this.state.count}
            increment={this.ConterChange}
          />
      );
    }
  }
  return NewConponent;
};
export default NewReturnComponet;
