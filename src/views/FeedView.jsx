import React, {useContext} from 'react';
import NavBar from "../components/navbar.js";
import DefaultLayout from "../layouts/DefaultLayout"
import LeftSideBar from "../components/LeftSideBar/LeftSideBar"
import Profile from '../components/Profile/Profile';
import Post from '../components/Post/Post'
import Feed from '../components/Feed/Feed'
import CreatePost from '../components/CreatePost/CreatePost'
import App from '../App.js';

function FeedView() {
    const user = useContext(App.UserContext).user;
    return (
	<DefaultLayout>
	    <DefaultLayout.LeftSideBar>
                        <LeftSideBar {...user}/>
	    </DefaultLayout.LeftSideBar>
	    <DefaultLayout.Content>
		<CreatePost />
		<Feed feedSrc="/feed"/>
	    </DefaultLayout.Content>
	    
	</DefaultLayout>);
}

export default FeedView;
