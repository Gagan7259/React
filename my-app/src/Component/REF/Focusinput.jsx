import React, { Component } from "react";
import ClassRef from "./ClassRefs";

class Focusinput extends Component {
  constructor(props) {
    super(props);

    this.ComponentRefs = React.createRef();
  }
  ClickHandler = () => {
    this.ComponentRefs.current.FocusInput();
  };

  render() {
    return (
      <div>
        <ClassRef ref={this.ComponentRefs} />
        <button onClick={this.ClickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default Focusinput;
