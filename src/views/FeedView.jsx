import React from 'react';
import NavBar from "../components/navbar.js";
import DefaultLayout from "../layouts/DefaultLayout"
import LeftSideBar from "../components/LeftSideBar/LeftSideBar"
import Profile from '../components/Profile/Profile';
import Post from '../components/Post/Post'
import Feed from '../components/Feed/Feed'

function FeedView() {
    return (
	<DefaultLayout>
	    <DefaultLayout.LeftSideBar>
                        <LeftSideBar
                            profile_pic="my-account/profile-pic.jpg"
                            username="Hackerman"
                            bio="I am hack yr comput0r :^(("
                        />
	    </DefaultLayout.LeftSideBar>
	    <DefaultLayout.Content>
		<Feed feedSrc="/feed"/>
	    </DefaultLayout.Content>
	    
	</DefaultLayout>);
}

export default FeedView;
