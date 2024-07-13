import React, { Component } from "react";
import Axios from "axios";
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      body: "",
      title: "",
    };
  }
  ChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    Axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    const { body, userId, title } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.ChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.ChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.ChangeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
