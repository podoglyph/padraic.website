import React, { Component } from 'react';

class PostContent extends Component {
  render() {
    return (
      <div className="PostContent">
        {this.props.post}
      </div>
    )
  }
}

export default PostContent;
