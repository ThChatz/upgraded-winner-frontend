import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect, useRef } from 'react';

import get from 'axios';


function FetchScroll(props) {
    const bottom = useRef();
    
    const [hasMore, setHasMore] = useState(true)

    const [items, setItems] = useState([]);

    const [switchSrc, setSwitchSrc] = useState(true);

    const [newestTs, setNewestTs] = useState(Date.now());
    const [oldestTs, setOldestTs] = useState(Date.now());

    const [scroll, setScroll] = useState(0);

    const base_url = process.env.REACT_APP_API_ROOT+props.src;

    const next_fn = function () {
	get(base_url + '?limit=20&before=' + oldestTs,
	    { withCredentials: true })
	    .then((response) => response.data)
	    .then((x) => { setItems(items.concat(x)); return x })
	    .then((x) => { setOldestTs(items.slice(-1).pop().time); return x })
	    .then((x) => x.length < 20 ? setHasMore(false) : 0)
	    .catch(() => {});
    }

    const refresh_fn = function () {
	setItems([]);
	setOldestTs(Date.now());
	setNewestTs(Date.now());
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
	    get(base_url + "?after=" + newestTs)
		.then((x) => {
		    setItems([...items, ...(x.data.filter((item => item.time > newestTs)))]);
		    setNewestTs(x.data[0].time);
		})
		.catch(() => { })
	}, 1000);
	return () => clearInterval(interval);
    }, [items, newestTs]);

    useEffect (() => {
	bottom.current.scrollIntoView({behavior: 'smooth'})
    }, [newestTs, bottom.current])

    const wrapFn = props.wrapFn === undefined ? x => x : props.wrapFn;

    return (
	<div {...props}>
	    <InfiniteScroll
		dataLength={items.length}
		next={next_fn}
		hasMore={hasMore}
		scrollableTarget="conv"
		style={props.InfScrollStyle}
		inverse={props.inverse}
		loader={<h4>Loading...</h4>}
		refreshFunction={refresh_fn}
		endMessage={
		    <p style={{ textAlign: 'center' }}>
		    <b>Yay! You have seen it all</b></p>}>
		<div ref={bottom}/>
		{wrapFn(items.map(props.mapFn))}
	    </InfiniteScroll>
	</div>
    );

}

export default FetchScroll;
