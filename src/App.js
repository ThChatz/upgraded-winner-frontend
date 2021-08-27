import React from 'react';
import './App.css';

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreatePost from './components/CreatePost/CreatePost';
import NavBar from './components/navbar';
import Post from './components/Post/Post';
function App() {
  return (
    <div>
      <NavBar/>
      <div className="App">
      <CreatePost/>
      <Post/>
      </div>
    </div>
  );
}

export default App;