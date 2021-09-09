import React from 'react';
import './App.css';
import FeedView from "./views/FeedView"
import ProfileView from "./views/ProfileView"
import NetworkView from "./views/NetworkView"
import MessagesView from "./views/MessagesView"
import JobView from "./views/JobView"
import {HashRouter, Route, Switch} from "react-router-dom"


const App = (props) =>
      <>
	  <HashRouter>
	      <Switch>
		  <Route path="/" component={FeedView} exact/>
		  <Route path="/home" component={FeedView} exact/>
		  <Route path="/u/:user_id/" exact>
		      <ProfileView />
		  </Route>
		  <Route path="/network" component={NetworkView} exact/>
		  <Route path="/jobs" component={JobView} exact />
		  <Route path="/messages/" component={MessagesView} exact />
	      <Route path="/messages/:thread_id" component={MessagesView} exact/>
		  </Switch>
	  </HashRouter>
      </>

export default App;
