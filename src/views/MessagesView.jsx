import React from 'react';
import { useState, useEffect } from 'react';

import NavBar from "../components/navbar.js";
import DefaultLayout from "../layouts/DefaultLayout";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";

import Conversation from "../components/Conversation/Conversation";
import MessagesFriendList from "../components/MessagesFriendsList/MessagesFriendsList";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {useParams} from "react-router-dom"

const MessagesView_ = (props) =>
<Col>
<NavBar />
<Container className="py-5" style={{"max-width": "100%"}}>
	<Row>
	<Col xs={3}>
		<MessagesFriendList src="/conversations"/>
	</Col>
	<Col xs={7} style={{"position": "relative"}}>
	<div style={{
		"position": "absolute",
		"verticalAlign": "sub",
		"width": "100%",
		"bottom": "0"}}>
		<Conversation src={"/conversations/" + props.thread_id} style={{"height": "84vh"}}/>
	</div>
	</Col>
	<Col xs={2} />
	</Row>
</Container>
</Col>


function MessagesView() {
	const params = useParams();
	document.body.style.overflow="hidden";
    return (<MessagesView_ thread_id={params.thread_id} />);
}

export default MessagesView;
