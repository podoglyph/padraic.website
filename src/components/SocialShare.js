import React, { Component } from 'react';

class SocialShare extends Component {
  render() {
    return (
      <div className="SocialShare">
        {this.props.socialShare}
      </div>
    )
  }
}

export default SocialShare;
