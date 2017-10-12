import React, { Component } from 'react';

class PostTitle extends Component {
  render() {
    return (
      <div className="PostTitle">
        {this.props.postTitle}
      </div>
    )
  }
}

export default PostTitle;
