import React from 'react';
import './App.css';

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreatePost from './components/CreatePost/CreatePost';
import NavBar from './components/navbar';
function App() {
  return (
    <div>
      <NavBar/>
      <div className="App">
      <CreatePost/>
      </div>
    </div>
  );
}

export default App;