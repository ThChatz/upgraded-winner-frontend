import React, { useState, useEffect, useContext } from 'react';
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
import { BsPersonPlus } from 'react-icons/bs';
import App from '../../App';
import { submitHandler } from '../../submitForm';
import { post } from 'jquery';
import { ListGroup } from 'react-bootstrap';

const Post_by_id = (props) => {
	const [post, setPost] = useState({
		"profilePic": "",
		"profileName": "",
		"postLocation": "",
		"postedAt": "",
		"text": "",
		"img": ""
	});

	const me = useContext(App.UserContext).user;

	const [user, setUser] = useState({});
	const reactionState = useState(null);

	useEffect(() =>
		get(process.env.REACT_APP_API_ROOT + "/post/" + props.post_id)
			.then((resp) => resp.data)
			.then((data) => { console.log(data); return data })
			.then((data) => {
				setPost(data);
				reactionState[1](data.reaction)
			})
			.catch((a) => console.log(a)), [props.post_id])

	useEffect(() => {
		if ("usr" in post) {
			return get(process.env.REACT_APP_API_ROOT + "/user/" + post.usr)
				.then((resp) => setUser(resp.data))
		}
	}, [post.usr])

	return Post({ ...post, user, me, reactionState});
}

const MakeComment = (props) => {
	const [val, setVal] = useState("");
	const onChange = (e) => setVal(e.target.value);

	console.log(props)

	const submit = (e) => {
		submitHandler("post", "/post/" + props.post + "/comment")(e);
		setVal("");
	}

	return (<div className="messageSenderTop">
		<span className="comment-avatar float-left">
			<img className="rounded-circle" height="35px" width="35px" src={props.me.picture} alt="..." />
		</span>
		<Form onSubmit={submit}>
			<Form.Control
				className="messageSenderInput"
				placeholder={`Comment on this post...`}
				name="content"
				value={val}
				onChange={onChange}
			/>
			<button type="submit"></button>
		</Form>
	</div>);
}

const Comment = (props) => {

	const [user, setUser] = useState({
		first_name: "user",
		last_name: "name",
	});

	useEffect(() => {
		get(process.env.REACT_APP_API_ROOT + "/user/" + props.usr)
			.then((resp) => setUser(resp.data))
			.catch(() => { }, [])
	}, []);

	return (
		<div className="messageSenderTop">
			<Media style={{ width: "100%" }}>
				<img className="rounded-circle" height="35px" width="35px" src={user.picture} alt="..." />
				<Container style={{ "borderRadius": "25px", "backgroundColor": "#eeeeee", "minWidth": "80%" }}>
					<Media.Body>
						<UserRef {...user} />
						{props.content}
					</Media.Body>
				</Container>
			</Media>
		</div>);
}

const ShowComments = (props) => {
	const [comments, setComments] = useState([])

	useEffect(() => {
		console.log(comments == [])
		if (comments.length === 0) {
			get(process.env.REACT_APP_API_ROOT + "/post/" + props.post + "/comments")
				.then(resp => setComments(resp.data))
				.catch(() => { })
			console.log(props.post)
		}
	}, [props.post])

	return (
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
						<ListGroup>
							{comments.map((comment) =>
								<ListGroup.Item key={comment.id}>
									<Comment {...comment} />
								</ListGroup.Item>)}
						</ListGroup>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>

	);
}


const Post = (props) =>
	<section >
		<div className="cardbox shadow-lg bg-white">
			<div className="cardbox-heading">

				<div className="media m-0">
					{/* Avatar */}
					<div className="d-flex mr-3">
						<a href="#">
							<img src={props.user.picture} />
						</a>
					</div>
					<div className="media-body ">
						{/* Name */}
						<p className="m-0">{UserRef(props.user)}</p>
						{/* Location */}
						{/* Time */}
						<small><span><i className="icon ion-md-time"></i>{new Date(props.created_at).toString()}</span></small>
					</div>
				</div>
			</div>
			{/* Content */}
			<div className="cardbox-item mx-5">
				{("content" in props) ?
					<p>{props.content}</p> :
					("Image" in props) ?
						<p>{props.user.first_name + " " + props.user.last_name} uploaded an image.</p> :
						<></>
				}
				{("Image" in props) ?
					<img className="img-fluid" src={props.Image} alt="Image" /> :
					<></>
				}

			</div>
			<div className="cardbox-base d-flex justify-content-around">
				<ReactButton post={props.id} reactionState={props.reactionState}/>
				<span>{props.comment_count + ""} Comments</span>
				<span>{props.like_count + props.dislike_count + props.love_count} reactions</span>
			</div>
			<MakeComment me={props.me} post={props.id} />
			<ShowComments post={props.id} />
		</div>
	</section>
Post.by_id = Post_by_id;

export default Post;
