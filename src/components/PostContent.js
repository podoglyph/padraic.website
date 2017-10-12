import React, { Component } from 'react';

class PostContent extends Component {
  render() {
    return (
      <div className="PostContent">
        {this.props.postContent}
      </div>
    )
  }
}

export default PostContent;
