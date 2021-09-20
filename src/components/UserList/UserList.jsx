import { useState, useEffect } from 'react';
import get from "axios";

import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';

import ListGroup from 'react-bootstrap/ListGroup';
import InfiniteScroll from 'react-infinite-scroll-component';


const UserListItem = (props) =>
<a href={"#/Users/"+(props.threadId === undefined ? 
						"no_thread" : props.threadId)}>
<Media>
    <Media.Body > 
	<h5>{props.profileName}</h5>
    </Media.Body>
</Media>
</a>;


function UserList(props) {
    const [curPg, setPg] = useState(0);
    const [hasMore, setHasMore] = useState(true)

    const [items, setItems] = useState([]);

    const next_fn = function () {
	get(props.src+'/'+curPg)
	    .catch(() => {setHasMore(false); return {"data": {"friends": []}}})
	    .then((response) => response.data.friends)
	    .then((x) => {setItems(items.concat(x)); return x})
	    .then((x) => x.length < 20 ? setHasMore(false) : 0);
	setPg(curPg+1);
    }
    

    useEffect(next_fn, []);

    return (
	<div style={{"overflow": "auto",
		     "height": "80%",
		     "display": "flex",
		     "flexDirection": "column",
			 "boxSizing": "unset",
			 }}>
	<InfiniteScroll
	    dataLength={items.length}
	    next={next_fn}
	    hasMore={hasMore}
	    loader={<h4>Loading...</h4>}
	    endMessage={
		<p style={{ textAlign: 'center' }}>
		<b>Yay! You have seen it all</b></p>}>
	    <ListGroup>
		{items.map((i) => <ListGroup.Item>
				     <UserListItem {...i} />
				 </ListGroup.Item>)}
	    </ListGroup>
	</InfiniteScroll>
	</div>
    );

}

export default UserList;
