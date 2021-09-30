import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';
import { formHandler, submitHandler } from '../../submitForm';
import FetchScroll from '../FetchScroll/FetchScroll';
import get from 'axios';

import ListGroup from 'react-bootstrap/ListGroup';

import "./Conversation.css";
import axios from 'axios';
import { BubbleChart } from '@material-ui/icons';


const MessageForm = (props) =>
	<Row>
		<Form onSubmit={submitHandler('post', props.src)}
			className="send-message form">
			<Form.Control type="text"
				placeholder="Enter your message."
				      className="send-message control"
			name="message"/>
			<Form.Text class="rounded" />
			<Button type='submit' className="send-message submit" />
		</Form>
	</Row>


const Bubble = (props) =>
	<div className={"conv-row " + props.side}>
		<div style={{ ...props.style }}
			className={props.className + " conv-bubble " +
				props.color + " " + props.side} {...props}>
			{props.message !== undefined ? props.message : <> </>}
		</div>
	</div>



function Conversation(props) {
    return (
	<>
	    <div style={{maxHeight: "80vh", 'overflow-y': "scroll"}}>
		<FetchScroll 
		    className="conv" 
		    id="conv" 
		    InfScrollStyle={{ display: 'flex', flexDirection: 'column-reverse' }}
		    inverse={true}
		    mapFn={(props) => <ListGroup.Item key={props.time}><Bubble {...props}/></ListGroup.Item>}
		    wrapFn={(c) => <ListGroup>{c}</ListGroup>}
		    src={props.src}/>
	    </div>
	    <MessageForm src={props.src}/>
	</>
    );

}

Conversation.bubble = Bubble;
Conversation.sendMessage = MessageForm;

export default Conversation;
