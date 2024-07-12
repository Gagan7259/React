import React, { Component } from "react";

class ClassRef extends Component {
  constructor(props) {
    super(props);

    this.inputref = React.createRef();
  }
  FocusInput = () => {
    this.inputref.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputref} />
      </div>
    );
  }
}

export default ClassRef;
