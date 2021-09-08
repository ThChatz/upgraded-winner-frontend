import React from 'react';
import './App.css';
import FeedView from "./views/FeedView"
import ProfileView from "./views/ProfileView"
import {HashRouter, Route, Switch} from "react-router-dom"


const App = (props) =>
      <>
	  <HashRouter>
	      <Switch>
		  <Route path="/" component={FeedView} exact/>
		  <Route path="/home" component={FeedView} exact/>
		  <Route path="/profile" component={ProfileView} exact/>
	      </Switch>
	  </HashRouter>
      </>

export default App;
