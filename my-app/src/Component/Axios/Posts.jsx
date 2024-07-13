import axios from "axios";
import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        List Of Posts
        {this.state.posts.length
          ? this.state.posts.map((post) => {
              return (
                <div key={post.id}>
                  {post.id} <br />
                  {post.title} <br />
                  {post.body}
                  {/* <table>
                    <thead>
                      <th>{post.id}</th>
                      <th>{post.title}</th>
                      <th>{post.body}</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{}</td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Posts;
