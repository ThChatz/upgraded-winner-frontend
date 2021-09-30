import UserInfo from "../UserInfo/UserInfo.js";
import FetchScroll from "../FetchScroll/FetchScroll.jsx";
import { ListGroup } from "react-bootstrap";
import { useState } from 'react';

import get from 'axios';

function NetworkSuggestions(props) {

	const [list, setList] = useState([]);

	get(`${process.env.REACT_APP_API_ROOT}${props.src}`, 
	{withCredentials: true})
	.then(resp => setList(resp.data))

	return (
		list.map((item) =>
		<ListGroup.Item key={item.friend} >
			<UserInfo.byId id={item.friend}/>
		</ListGroup.Item>)
	)
}

export default NetworkSuggestions;
