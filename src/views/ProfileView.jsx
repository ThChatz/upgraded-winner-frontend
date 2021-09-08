import Profile from "../components/Profile/Profile";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import Feed from "../components/Feed/Feed"

import DefaultLayout from "../layouts/DefaultLayout";

import get from "axios";

import {HashRouter, Route, Switch, useParams} from "react-router-dom"
import {useState, useEffect} from "react"


function ProfileView(props) {
    const [myAccount, setMyAccount] = useState({});
    const [viewAccount, setViewAccount] = useState({});

    const { user_id } = useParams();    

    useEffect(() => {


	get("/u/my-account")
	    .catch((x) => {return {"data": {}}})
	    .then((x) => x.data)
	    .then((x) => setMyAccount(x));

	get("/u/"+user_id)
	    .catch((x) => {return {"data": {}}})
	    .then((x) => x.data)
	    .then((x) => setViewAccount(x))
	    .then((x) => console.log(viewAccount));
    }, []);
    

    

    return (
	<DefaultLayout>
	    <DefaultLayout.LeftSideBar>
                <LeftSideBar {...myAccount} />
	    </DefaultLayout.LeftSideBar>
	    <DefaultLayout.Content>
	 	<Profile {...viewAccount}>
	 	    <Feed feedSrc="/feed"/>
	 	</Profile>
	    </DefaultLayout.Content>
	    
	</DefaultLayout>);
}

export default ProfileView;
