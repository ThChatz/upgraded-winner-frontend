import React from 'react';
import NavBar from "../components/navbar.js";
import DefaultLayout from "../layouts/DefaultLayout";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";

import Conversation from "../components/Conversation/Conversation";
import MessagesFriendList from "../components/MessagesFriendsList/MessagesFriendsList";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function MessagesView() {
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
			<Col xs={7}>
			    <Conversation />
			</Col>
			<Col xs={2} />
		    </Row>
		</Container>
	    </Col>
	</>);
}

export default MessagesView;
