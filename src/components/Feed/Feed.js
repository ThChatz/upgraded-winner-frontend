import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../Post/Post.js';

import get from "axios";


function Feed(props) {

    const [curPg, setPg] = useState(0);
    const [hasMore, setHasMore] = useState(true)

    const [items, setItems] = useState([]);

    const next_fn = function () {
	get(props.feedSrc+'/'+curPg)
	    .catch(() => {setHasMore(false); return {"data": {"post_ids": []}}})
	    .then((response) => response.data.post_ids)
	    .then((x) => setItems(items.concat(x)));
	setPg(curPg+1);
    }
    

    useEffect(next_fn, []);

    return (
	    <InfiniteScroll
		dataLength={items.length}
		next={next_fn}
		hasMore={hasMore}
		loader={<h4>Loading...</h4>}
		endMessage={
		    <p style={{ textAlign: 'center' }}>
		    <b>Yay! You have seen it all</b></p>}>
		{items.map(Post)}
	    </InfiniteScroll>
		
	
    )

    
}

export default Feed;
