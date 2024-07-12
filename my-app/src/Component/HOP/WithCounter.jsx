import React, { Component } from "react";
const UpdateComponent = (OriginalCpomponet) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    CounterChange = () => {
      this.setState((prevstate) => {
        return { count: prevstate.count + 1 };
      });
    };
    render() {
      return (
        <OriginalCpomponet
          count={this.state.count}
    
          increMent={this.CounterChange}
        />
      );
    }
  }
  return NewComponent;
};
export default UpdateComponent;
