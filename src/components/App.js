import React, { Component } from 'react';
import PostContent from './PostContent.js'
import PostTitle from './PostTitle.js'
import PostDate from './PostDate.js'
import SocialShare from './SocialShare.js'
import './styles/App.css';

const postContent = "Some thrilling blog post."
const postTitle = "A really intriguing title."
const postDate = "January 1, 2018"
const socialShare = "Insert buttons here."

class App extends Component {

  render() {

    return (
      <div className="App">
      <div className="wrapper">
        <div className="nav"></div>
        <div className="main">
          <div className="post">
            <PostTitle postTitle={ postTitle } />
            <PostDate postDate={ postDate } />
            <PostContent postContent={ postContent } />
            <SocialShare socialShare={ socialShare } />
          </div>
        </div>
        <div className="sidebar"></div>
      </div>

      </div>
    );
  }
}

export default App;
