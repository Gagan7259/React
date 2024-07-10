import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  handleUserChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="name">UserName</label>
            <input
              type="text"
              value={this.state.usename}
              onChange={this.handleUserChange}
            />
          </div>
          <div>
            <label htmlFor="name">Password</label>
            <input type="text" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
