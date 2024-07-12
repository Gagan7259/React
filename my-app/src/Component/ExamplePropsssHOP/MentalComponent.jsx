import React, { Component } from "react";

class MentalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  IncrementHandler = () => {
    this.setState((prevcount) => {
      return { count: prevcount.count + 1 };
    });
  };
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.IncrementHandler)}
        </div>
    );
  }
}

export default MentalComponent;
