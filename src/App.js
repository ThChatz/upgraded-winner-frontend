import React, { useState, useEffect, useContext, createContext, useDeepCompareEffect } from 'react';
import './App.css';
import FeedView from "./views/FeedView"
import ProfileView from "./views/ProfileView"
import NetworkView from "./views/NetworkView"
import MessagesView from "./views/MessagesView"
import JobView from "./views/JobView"
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView';
import WelcomePageView from './views/WelcomePageView';
import CreateAdmin from './views/CreateAdmin';
import Error from './components/error.jsx';
import Admin from './views/Admin';
import DynamicInput from './components/DynamicInput';
import get from 'axios';
import WelcomePage from './views/WelcomePageView';



const UserContext = createContext({ 'user': {}, 'setUser': () => { } });
const ErrorContext = createContext({ 'error': {}, 'setError': () => { } });


const App = (props) => {

    const [error, setError] = useState({})
    const [user, setUser] = useState({})

    const [routes, setRoutes] = useState(<></>);
    
    const adminRoutes = <><Route path="/admin" component={Admin} /></>;

    const publicRoutes = <><Route path="/signup" component={SignUpView} exact/>
			     <Route path="/welcome" component={WelcomePageView} exact/>
			 <Route path="/login" component={LoginView} exact /></>;

    const userRoutes = <>
			   <Route path="/home" component={FeedView} exact />
			   <Route path="/u/:user_id/" component={ProfileView} exact />
			   <Route path="/network" component={NetworkView} exact />
			   <Route path="/jobs" component={JobView} exact />
			   <Route path="/conversations/:thread_id" component={MessagesView} exact />
			   <Route path="/conversations/" component={MessagesView} exact />
		       </>;

    const [rootRedirect, setRootRedirect] = useState("welcome");

    useEffect(() =>
	get(process.env.REACT_APP_API_ROOT+"/session")
	    .then((resp) => setUser(resp.data)), [])

    useEffect(() => {
	if("id" in user && !user.is_admin) {
	    setRoutes(userRoutes);
	    setRootRedirect("home");
	    window.location = "#home";
	} else if(user.is_admin) {
	    setRoutes(adminRoutes);
	    setRootRedirect("admin");
	    window.location = "#admin";
	} else {
	    setRoutes(publicRoutes);
	    setRootRedirect("welcome");
	    window.location = "#welcome";
	}

    }, [user]);

    return (
	<>
	    <UserContext.Provider value={{ 'user': user, 'setUser': setUser }}>
		<Error {...error} />
		<HashRouter>
		    <Switch>
			<Route path="/" exact>
			    <Redirect to={rootRedirect} />
			</Route>

			{routes}
		</Switch>
	    </HashRouter>
	</UserContext.Provider>
	</>);
}

App.UserContext = UserContext;
export default App;

