import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      title: '',
      content: ''
    }

    this.getPosts = this.getPosts.bind(this)
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts() {
    axios.get('http://localhost:3000/api/v1/posts')
      .then((response) => {
        this.setState({posts: response.data})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className="Post">
        { this.state.posts.map(post =>
          <div key={post.id} className="post-wrapper">
            <div className="post-title">
              <h2>{post.title}</h2>
            </div>
            <div className="post-content">
              <div>{post.content}</div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Post;
