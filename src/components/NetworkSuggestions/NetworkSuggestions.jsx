import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useRef, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../Post/Post.js';


import get from "axios";


const NetworkSuggestion = (props) =>
<Card>
    <Card.Img variant="top" src={props.profilePic} />
    <Card.Body>
	<Card.Title>{props.profileName}</Card.Title>
	<Card.Text>{props.profileJob}</Card.Text>
	<Button style={{"font-size": "0.9em"}} variant="outline-primary">Connect</Button>
    </Card.Body>
</Card>;


function NetworkSuggestions(props) {

    const [curPg, setPg] = useState(0);
    const [hasMore, setHasMore] = useState(true)

    const [items, setItems] = useState([]);
    const [itemsLen, setItemsLen] = useState(0);
    
    const [firstRun, setFirstRun] = useState(true);



    const next_fn = function () {
	get(props.src+'/'+curPg)
	    .catch(() => {setHasMore(false); return {"data": {"suggestions": []}}})
	    .then((response) => response.data.suggestions)
	    .then((x) => setItems(items.concat(x)));
	setPg(curPg+1);
    }
    
    useEffect(next_fn, firstRun);

    const colProps = {
	"lg": 3,
	"md": 6,
	"sm": 12,
    }


    return (
	<InfiniteScroll
	    dataLength={items.length > 0 ? 1 : items.length}
	    next={next_fn}
	    hasMore={hasMore}
	    loader={<h4 onLoad={next_fn}>Loading...</h4>}
	    style={{
		"overflow-x": "hidden"
	    }}
	    endMessage={
		<p style={{ textAlign: 'center' }}>
		<b>Yay! You have seen it all</b></p>}>
	    <Row>{items.map((x) => <Col {...colProps}>{NetworkSuggestion(x)}</Col>)}</Row>
	</InfiniteScroll>
    )

    
}

export default NetworkSuggestions;
