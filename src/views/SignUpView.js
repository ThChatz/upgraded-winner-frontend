import React, { Component, useState } from "react";
import { submitHandler, submitHandlerMultipart } from "../submitForm.js";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import SignUp from "../components/SignUp/SignUp";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const SignUpView = (props) =>
<div className="auth-wrapper">
    <div className="auth-inner">
	<SignUp>
	    <Tab title="Personal" eventKey="Personal">
		<SignUp.Personal />
	    </Tab>
	    <Tab title="Bio" eventKey="Bio">
		<SignUp.Bio />
	    </Tab>
	    <Tab title="Privacy" eventKey="Privacy">
		<SignUp.Privacy />
	    </Tab>
	    <Tab title="Password" eventKey="Password">
		<SignUp.Password />
	    </Tab>
	    <Tab title="Picture" eventKey="ProfilePic">
		<SignUp.ProfilePic />
	    </Tab>
	</SignUp>
    </div>
</div>

export default SignUpView;
