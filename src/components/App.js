import React, { Component } from 'react';
import PostContent from './PostContent.js'
import './styles/App.css';

const postContent = "Some thrilling blog post."

class App extends Component {

  render() {

    return (
      <div className="App">
        <PostContent post={postContent} />
      </div>
    );
  }
}

export default App;
