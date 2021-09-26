import React, { useState } from 'react';
import '../CreatePost/CreatePost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Post.css';
import ReactButton from '../ReactButton/ReactButton';
import UserRef from '../UserRef/UserRef';
import Form from 'react-bootstrap/Form';
import Media from 'react-bootstrap/Media';
import { Avatar } from '@material-ui/core'
import { CameraAlt, VideoCall, CalendarToday, Assignment } from '@material-ui/icons'
import { Accordion } from 'react-bootstrap';
import get from "axios";
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Post_by_id = (props) => {
	const [post, setPost] = useState({
		"profilePic": "",
		"profileName": "",
		"postLocation": "",
		"postedAt": "",
		"text": "",
		"img": ""
	});

	get("/" + props.post_id)
		.then((resp) => resp.data)
		.then((data) => setPost(data))
		.catch(() => alert("An error has occured"));

	return Post(post);
}

const MakeComment = (props) =>
	<div className="messageSenderTop">
		<span className="comment-avatar float-left">
			<img className="rounded-circle" height="35px" width="35px" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..." />
		</span>
		<Form>
			<Form.Control
				className="messageSenderInput"
				placeholder={`What's on your mind?`}
				name="text"
			/>
			<button type="submit"></button>
		</Form>
	</div>

const ShowComments = (props) =>
	<Accordion defaultActiveKey="">
		<Card>
			<Card.Header>
				<Accordion.Toggle as={Button}
					variant="link" eventKey="0">
					Show Comments
				</Accordion.Toggle>
			</Card.Header>
			<Accordion.Collapse eventKey="0">
				<Card.Body>
					<div className="messageSenderTop">
						<Media style={{ width: "100%" }}>
							<img className="rounded-circle" height="35px" width="35px" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..." />
							<Container style={{ "borderRadius": "25px", "backgroundColor": "#eeeeee", "minWidth": "80%" }}>
								<Media.Body>
									<UserRef> Name </UserRef>
									test
								</Media.Body>
							</Container>
						</Media>
					</div>
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	</Accordion>

const Post = (props) =>
	<section >
		<div className="cardbox shadow-lg bg-white">
			<div className="cardbox-heading">
				<div className="media m-0">
					{/* Avatar */}
					<div className="d-flex mr-3">
						<a href="#">
							<img src={props.ProfilePic} />
						</a>
					</div>
					<div className="media-body ">
						{/* Name */}
						<p className="m-0">{UserRef(props)}</p>
						{/* Location */}
						{/* Time */}
						<small><span><i className="icon ion-md-time"></i>{props.created_at}</span></small>
					</div>
				</div>
			</div>
			{/* Content */}
			<div className="cardbox-item mx-5">
				{("Text" in props) ?
					<p>{props.content}</p> :
					("Image" in props) ?
						<p>{props.ProfileName} uploaded an image.</p> :
						<></>
				}
				{("Image" in props) ?
					<img className="img-fluid" src={props.Image} alt="Image" /> :
					<></>
				}

			</div>
			<div className="cardbox-base">
				<ReactButton post_id={props.id} />
				<span>14 Comments </span>
				<span>242 Likes</span>
			</div>
			<MakeComment />
			<ShowComments />
		</div>
	</section>

Post.by_id = Post_by_id;

export default Post;
