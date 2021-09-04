import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../Post/Post.js';



function Feed(props) {

    const placeholder =
	  Post({"post_id": "samplePost.json"});


    const [items, setItems] = useState([]);
    

    return (
	    <InfiniteScroll
		dataLength={items.length}
		next={() => setItems([...items, placeholder])}
		hasMore={true}
		loader={<h4>Loading...</h4>}
		endMessage={
		    <p style={{ textAlign: 'center' }}>
			<b>Yay! You have seen it all</b>
		    </p>}> {items} </InfiniteScroll>
		
	
    )

    
}

export default Feed;
