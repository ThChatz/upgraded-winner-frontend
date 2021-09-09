import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'

import get from 'axios';

import "./Conversation.css";

const Bubble = (props) =>
<div className={"conv-row " + props.side}>      
    <div style={{...props.style}}
	 className={props.className+" conv-bubble " +
		    props.color + " " + props.side} {...props}>
	{props.children}
    </div>
</div>

function Conversation(props) {
    return (
	<div className="conv">
		<Bubble color="blue" side="left">hi!</Bubble>
		<Bubble color="red" side="right">hello!</Bubble>
	</div>
    );
}

export default Conversation;
