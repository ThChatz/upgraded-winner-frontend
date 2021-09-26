import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../Post/Post.js';
import Spinner from 'react-bootstrap/Spinner';
import get from "axios";
import { Container } from 'react-bootstrap';

function Feed(props) {

	const [curPg, setPg] = useState(0);
	const [hasMore, setHasMore] = useState(true)

	const [items, setItems] = useState([]);

	const next_fn = function () {
		get(props.feedSrc + '/' + curPg)
			.catch(() => { setHasMore(false); return { "data": { "post_ids": [] } } })
			.then((response) => response.data.post_ids)
			.then((x) => setItems(items.concat(x)));
		setPg(curPg + 1);
	}


	useEffect(next_fn, []);

	return (
		<InfiniteScroll
			dataLength={items.length}
			next={next_fn}
			hasMore={hasMore}
			loader={<h4>Loading...</h4>}
			endMessage={
				< p style={{ textAlign: 'center' }}>
					<b>Yay! You have seen it all</b></p >}>
		{items.map((props) => <li key={props.id}><Post.by_id post_id={props.id}/></li>)}
		</InfiniteScroll >


	)


}

export default Feed;
