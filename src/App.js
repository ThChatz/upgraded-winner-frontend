import React from 'react';
import NavBar from "./components/navbar.js";
import './App.css';
import HomePage from './components/HomePage/HomePage';
import {Profile, RecentPhotos, RecentPosts} from './components/Profile/Profile';

function App() {
    return (
	<>
	    <NavBar />
	    <Profile ProfileName="hackerman"
		     ProfilePicUrl="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
		     ProfileLocation="Ur Mom">
		<RecentPhotos />
		<RecentPosts />
	    </Profile>
	</>
  );
}

export default App;
