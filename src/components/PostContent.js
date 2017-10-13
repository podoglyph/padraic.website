import React, { Component } from 'react';
import axios from 'axios'

class PostContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }

    this.getPosts = this.getPosts.bind(this)
  }

  getPosts() {
    axios.get('http://localhost:3000/api/v1/posts')
      .then((posts) => {
        console.log(posts)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className="PostContent">
        { this.getPosts() }
      </div>
    )
  }
}

export default PostContent;
