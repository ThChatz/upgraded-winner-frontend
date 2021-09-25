import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';

import get from 'axios';
import Loader from '../Loader';


function FetchScroll(props) {
	const [hasMore, setHasMore] = useState(true)

	const [items, setItems] = useState([]);

	const [switchSrc, setSwitchSrc] = useState(true);

	const [newestTs, setNewestTs] = useState("");
	const [oldestTs, setOldestTs] = useState("");

	const next_fn = function () {
		get(props.src + '?limit=20&before=' + oldestTs,
			{ withCredentials: true })
			.catch(() => { setHasMore(false); return { "data": { "messages": [] } } })
			.then((response) => response.data.messages)
			.then((x) => { setItems(items.concat(x)); return x })
			.then((x) => { setOldestTs(items.slice(-1).pop().time); return x })
			.then((x) => x.length < 20 ? setHasMore(false) : 0)
			.catch(() => {});
	}

	const refresh_fn = function () {
		setItems([]);
		setOldestTs("");
		setNewestTs("");
		setHasMore(true);
		setSwitchSrc(true);
	}

	useEffect(() => {
		refresh_fn();
	}, [props.src]);

	useEffect(() => {
		if (switchSrc === true) {
			next_fn();
			setSwitchSrc(false);
		}
	}, [switchSrc, next_fn]);

	useEffect(() => {
		const interval = setInterval(() => {
			get(props.src + "?after=" + newestTs)
				.then((x) => {
					setItems([...x.data.messages, ...items]);
					setNewestTs(items[0].time)
				})
				.catch(() => { })
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
			<div {...props}>
				<InfiniteScroll
					dataLength={items.length}
					next={next_fn}
					hasMore={hasMore}
					scrollableTarget="conv"
					style={props.InfScrollStyle}
					inverse={props.inverse}
					loader={<Loader/>}
					refreshFunction={refresh_fn}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all</b></p>}>
					{items.map(props.mapFn)}
				</InfiniteScroll>
			</div>
	);

}

export default FetchScroll;