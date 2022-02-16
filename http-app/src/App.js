import React, { Component } from "react";
import axios from 'axios';

import "./App.css";

const apiEndpoint = 'http://jsonplaceholder.typicode.com/posts';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    // pending > resolved (success) OR rejected (failure)
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = {title : 'hello world', body :'thank you'};
    const { data : post } = await axios.post(apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({posts});
  };

  handleUpdate = async post => {
    post.title = "UPDATED";
    await axios.put(apiEndpoint + "/" + post.id, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  //为了给用户良好的体验，采用先界面删除，在去服务器删除，如果后端请求出错，则可以回滚补救
  handleDelete = post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter( p => p.id !== post.id);
    this.setState({ posts });

    try {
      axios.delete(apiEndpoint + '/' + post.id);
    } catch (e) {
      if (e.response && e.response.status === 404)
        alert('This post has already benn deleted');
      else {
        console.log('Loging the error', e);
        alert('未知错误发生')
      }

      this.setState({ posts : originalPosts }); //回滚
    }
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
