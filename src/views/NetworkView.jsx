import React, { useContext }from 'react';
import DefaultLayout from "../layouts/DefaultLayout"
import LeftSideBar from "../components/LeftSideBar/LeftSideBar"
import App from "../App";
import NetworkSuggestions from '../components/NetworkSuggestions/NetworkSuggestions'

function NetworkView() {
	const user = useContext(App.UserContext).user;
    return (
	<DefaultLayout>
	    <DefaultLayout.LeftSideBar>
                        <LeftSideBar {...user}/>
	    </DefaultLayout.LeftSideBar>
	    <DefaultLayout.Content>
		<NetworkSuggestions src="/network"/>
	    </DefaultLayout.Content>
	    
	</DefaultLayout>);
}

export default NetworkView;
