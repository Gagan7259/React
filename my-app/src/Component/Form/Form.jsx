import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "React",
    };
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCoomentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submitHandler = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">UserName</label>
            <input
              type="text"
              value={username}
              onChange={this.handleUserChange}
            />
          </div>
          <div>
            <label htmlFor="">Comments</label>
            <textarea
              onChange={this.handleCoomentChange}
              value={comments}
            ></textarea>
          </div>
          <div>
            <label htmlFor="name">Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">VueJs</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
