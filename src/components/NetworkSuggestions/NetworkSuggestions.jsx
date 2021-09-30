import UserInfo from "../UserInfo/UserInfo.js";
import FetchScroll from "../FetchScroll/FetchScroll.jsx";
import { Container, ListGroup } from "react-bootstrap";
import { useState } from 'react';

import get from 'axios';

function NetworkSuggestions(props) {

	const [reqList, setReqList] = useState([]);

	get(`${process.env.REACT_APP_API_ROOT}/connections/requests`,
		{ withCredentials: true })
		.then(resp => setReqList(resp.data))


	const [friendlist, setFriendList] = useState([]);

	get(`${process.env.REACT_APP_API_ROOT}/connections`,
		{ withCredentials: true })
		.then(resp => setFriendList(resp.data))

	return (
		<>
			<Container className="shadow p-3 mb-5 bg-white rounded">
				<h3>Friend Requests</h3>
				{reqList.map((item) =>
					<ListGroup.Item key={item.friend} >
						<UserInfo.byId id={item.friend} />
					</ListGroup.Item>)}
			</Container>
			<Container className="shadow p-3 mb-5 bg-white rounded">
				<h3>Friends</h3>
				{friendlist.map((item) =>
					<ListGroup.Item key={item.friend} >
						<UserInfo.byId id={item.friend} />
					</ListGroup.Item>)}
			</Container>
		</>
	)
}

export default NetworkSuggestions;
