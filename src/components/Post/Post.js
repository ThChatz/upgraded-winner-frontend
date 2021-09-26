import React, { useState, useEffect } from 'react';
import '../CreatePost/CreatePost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Post.css';
import ReactButton from '../ReactButton/ReactButton';
import UserRef from '../UserRef/UserRef';


import { Avatar } from '@material-ui/core'
import { CameraAlt, VideoCall, CalendarToday, Assignment } from '@material-ui/icons'

import get from "axios";

const Post_by_id = (props) => {
    const [post, setPost] = useState({
	"profilePic": "",
	"profileName": "",
	"postLocation": "",
	"postedAt": "",
	"text": "",
	"img": ""
    });

	const [user, setUser] = useState({});
	useEffect(() =>
		get("/post/"+props.post_id)
		.then((resp) => resp.data)
		.then((data) => {console.log(data); return data})
		.then((data) => setPost(data))
		.catch((a) => console.log(a)), [props.post_id])

	useEffect(() =>
		get("/user/"+post.usr)
		.then((resp) => setUser(resp.data))
	, [post.usr])

    return Post({...post, user});
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
	    {(content in props) ?
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
	<div className="cardbox-base">
	    <ReactButton post_id={props.id} />

	    <ul className="float-right">
		<li><a><i className="fa fa-comments"></i></a></li>
		<li><a><em className="mr-5">{props.comment_count}</em></a></li>
	    </ul>
	    
		<span>Reactions: {props.like_count + ", " + props.dislike_count, props.love_count}</span>
		<span>Comments: {props.comment_count}</span>
	</div>
	<div className="cardbox-comments">
	    <span className="comment-avatar float-left">
		<a href=""><img className="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..." /></a>
	    </span>
	    <div className="search">
		<input placeholder="Write a comment" type="text" />
		<Button><i className="fa fa-camera"></i></Button>
	    </div>
	</div>

    </div>
</section>

Post.by_id = Post_by_id;

export default Post;
