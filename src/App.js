import React from 'react';
import './App.css';
import FeedView from "./views/FeedView"
import ProfileView from "./views/ProfileView"
import NetworkView from "./views/NetworkView"
import {HashRouter, Route, Switch} from "react-router-dom"


const App = (props) =>
      <>
	  <HashRouter>
	      <Switch>
		  <Route path="/" component={FeedView} exact/>
		  <Route path="/home" component={FeedView} exact/>
		  <Route path="/profile" component={ProfileView} exact/>
		  <Route path="/network" component={NetworkView} exact/>
	      </Switch>
	  </HashRouter>
      </>

export default App;
