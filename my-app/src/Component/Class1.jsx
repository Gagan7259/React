import React, { Component } from "react";

class Class1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   count: 0
      Message: "Are u animal",
    };
  }

  //   increMentHandlefr() {
  //     this.setState({
  //       count: this.state.count + 1,
  //     })
  //   }

  changeMessage() {
    this.setState({
      Message: "😂😂😂😂😂",
    });
  }

  render() {
    return (
      <div>
        {/* <h1>Counter - {this.state.count}</h1>
        <button
          onClick={() => {
            this.increMentHandlefr();
          }}
        >
          Add To Cart
        </button> */}

        <h1>♨️ - {this.state.Message}</h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          NO
        </button>
      </div>
    );
  }
}

export default Class1;
