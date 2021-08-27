import React from 'react';
import './App.css';

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreatePost from './components/CreatePost/CreatePost';
import NavBar from './components/navbar';
import Post from './components/Post/Post';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <NavBar/>

      <Container >
      <Row>
      <Col>
      <LeftSideBar 
        profile_pic="my-account/profile-pic.jpg" 
        username="Hackerman"
        bio="I am hack yr comput0r :^(("
      />
      </Col>
      <Col xs={6}>
      <CreatePost/>

      <Post/>
      </Col>
      <Col xs={2}></Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;