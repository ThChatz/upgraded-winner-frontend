import React from 'react';
import NavBar from "./components/navbar.js";
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import RecentPhotos from './components/Profile/RecentPhotos';
import RecentPosts from './components/Profile/RecentPosts';
import Post from './components/Post/Post'
import Feed from './components/Feed/Feed'

function App() {
    return (
	<>
	    <NavBar />
	    <Profile ProfileName="hackerman"
		     ProfilePicUrl="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
		     ProfileLocation="Ur Mom">
		<RecentPhotos />
		<RecentPosts />

	 <Feed />
	    </Profile>
	</>
  );
}

export default App;
