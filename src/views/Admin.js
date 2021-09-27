import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import UserList from '../components/UserList/UserList';
import UserData from '../components/UserData/UserData';
import { useParams } from "react-router-dom"
import AdminNavBar from '../components/AdminNavBar.jsx';

function Admin() {

	const [threadId, setThreadId] = useState("no_thread");

	const params = useParams();

	useEffect(() => {
		if (params.thread_id !== undefined) {
			setThreadId(params.thread_id);
		}
	}, [params]);


	document.body.style.overflow = "auto";
	return (
		<>
			<Col>
				<AdminNavBar />
				<Container className="py-5" style={{ "max-width": "100%", "overflow": "auto" }}>
					<Row>
						<Col xs={3}>
							<h3>Users</h3>
							<UserList src="/chats" />
						</Col>
						<Col xs={7} style={{ "position": "relative" }}>
							<UserData />
						</Col>
						<Col xs={2} />
					</Row>
				</Container>
			</Col>
		</>);
}

export default Admin;
