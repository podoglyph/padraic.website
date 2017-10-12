import React, { Component } from 'react';

class PostDate extends Component {
  render() {
    return (
      <div className="PostDate">
        {this.props.postDate}
      </div>
    )
  }
}

export default PostDate;
