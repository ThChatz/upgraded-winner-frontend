import React from 'react';
import './App.css';

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreatePost from './components/CreatePost/CreatePost';
function App() {
  return (
    <div className="App">
      
     <CreatePost/>
    </div>
  );
}

export default App;