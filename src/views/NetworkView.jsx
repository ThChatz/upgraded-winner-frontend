import React from 'react';
import DefaultLayout from "../layouts/DefaultLayout"
import LeftSideBar from "../components/LeftSideBar/LeftSideBar"

import NetworkSuggestions from '../components/NetworkSuggestions/NetworkSuggestions'

function NetworkView() {
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
		<NetworkSuggestions src="/network"/>
	    </DefaultLayout.Content>
	    
	</DefaultLayout>);
}

export default NetworkView;
