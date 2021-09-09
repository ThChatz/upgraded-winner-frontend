import React from 'react';
import NavBar from "../components/navbar.js";
import DefaultLayout from "../layouts/DefaultLayout";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";

import Conversation from "../components/Conversation/Conversation";
import MessagesFriendList from "../components/MessagesFriendsList/MessagesFriendsList";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {useParams} from "react-router-dom"

function MessagesView() {

	const params = useParams();
	const thread_id = params.thread_id === undefined ? 
						"no_thread" : 
						params.thread_id;


	document.body.style.overflow="hidden";
    return (
	<>
	    <Col>
		<NavBar />
		<Container className="py-5" style={{"max-width": "100%"}}>
		    <Row>
			<Col xs={3}>
			    <MessagesFriendList src="/chats"/>
			</Col>
			<Col xs={7} style={{"position": "relative"}}>
			<div style={{
				"position": "absolute",
				"verticalAlign": "sub",
				"width": "100%",
				"bottom": "20%"}}>
			    <Conversation src={"/t/" + thread_id} style={{"height": "84vh"}}/>
			</div>
			</Col>
			<Col xs={2} />
		    </Row>
		</Container>
	    </Col>
	</>);
}

export default MessagesView;
