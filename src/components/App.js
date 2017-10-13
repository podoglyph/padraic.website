import React, { Component } from 'react';
import Post from './Post.js'
import './styles/App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
      <div className="wrapper">
        <div className="nav"></div>
        <div className="main">
          <div className="post">
            <Post />
          </div>
        </div>
        <div className="sidebar"></div>
      </div>

      </div>
    );
  }
}

export default App;
