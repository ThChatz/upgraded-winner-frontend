import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';


import get from 'axios';

import "./Conversation.css";


const MessageForm = (props) =>
<Row>
<Form onSubmit={() => alert(100)} className="send-message form">
	<Form.Control type="text" 
				  placeholder="Enter your message." 
				  className="send-message control"/>
	<Form.Text class="rounded"/>
	<Button type='submit' className="send-message submit"/>
</Form>
</Row>


const Bubble = (props) =>
<div className={"conv-row " + props.side}>      
    <div style={{...props.style}}
	 className={props.className+" conv-bubble " +
		    props.color + " " + props.side} {...props}>
	{props.text !== undefined ? props.text : <> </>}
	{props.img !== undefined ? props.img : <> </>}
    </div>
</div>



function Conversation(props) {
    const [curPg, setPg] = useState(0);
    const [hasMore, setHasMore] = useState(true)

    const [items, setItems] = useState([]);

	const [switchSrc, setSwitchSrc] = useState(true);
	
	const next_fn = function () {
	get(props.src+'/'+curPg)
	    .catch(() => {setHasMore(false); return {"data": {"messages": []}}})
	    .then((response) => response.data.messages)
	    .then((x) => {setItems(items.concat(x)); return x})
	    .then((x) => x.length < 20 ? setHasMore(false) : 0);
	setPg(curPg+1);
    }
    

    useEffect(() => {
		setItems([]);
		setPg(0);
		setHasMore(true);
		setSwitchSrc(true);
	}, [props.src]);

	useEffect(() => {
		if(switchSrc === true) {
			next_fn();
			setSwitchSrc(false);
		}
	}, [switchSrc, next_fn]);

    return (
		<>
	<div className="conv" id="conv" {...props}>
	<InfiniteScroll
	    dataLength={items.length}
	    next={next_fn}
	    hasMore={hasMore}
		scrollableTarget="conv"
		style={{ display: 'flex', flexDirection: 'column-reverse' }} 
		inverse={true}
	    loader={<h4>Loading...</h4>}
	    endMessage={
		<p style={{ textAlign: 'center' }}>
		<b>Yay! You have seen it all</b></p>}>
		{items.map(Bubble)}
	</InfiniteScroll>
	</div>
	<MessageForm />
	</>
    );

}

Conversation.bubble = Bubble;
Conversation.sendMessage = MessageForm;

export default Conversation;
