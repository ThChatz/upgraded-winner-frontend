import React, { useState } from 'react';
import '../CreatePost/CreatePost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Post.css';
import ReactButton from '../ReactButton/ReactButton';

import { Avatar } from '@material-ui/core'
import { CameraAlt, VideoCall, CalendarToday, Assignment } from '@material-ui/icons'

import get from "axios";

const Post = (props) => {
    const [profilePic, setProfilePic] = useState("");
    const [profileName, setProfileName] = useState("");
    const [postLocation, setPostLocation] = useState("");
    const [postedAt, setPostedAt] = useState("");
    const [text, setText] = useState("");
    const [img, setImg] = useState("");

    const post_id = props.post_id;

    const post = get("/"+post_id).then(
	function(response) {
	    setProfilePic(response.data.ProfilePic);
	    setProfileName(response.data.ProfileName);
	    setPostLocation(response.data.PostLocation);
	    setPostedAt(response.data.PostedAt);
	    setText(response.data.text);
	    setImg(response.data.img);
	}
    )

    const getPost = async (post_url) => {
	let post_p = get(post_url).then((response) => (response.data));
	let post = await post_p;
	return post;
    }


    return (
	<section>
	    <div className="cardbox shadow-lg bg-white">
		<div className="cardbox-heading">
		    {/* <div className="dropdown float-right">
			<button className="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
			<em className="fa fa-ellipsis-h"></em>
			</button>
			<div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" >
			<a className="dropdown-item" href="#">Hide post</a>
			<a className="dropdown-item" href="#">Stop following</a>
			<a className="dropdown-item" href="#">Report</a>
			</div>
			</div> */}
		    <div className="media m-0">
			{/* Avatar */}
			<div className="d-flex mr-3">
			    <a href="#">
				<img src={profilePic} />
			    </a>
			</div>
			<div className="media-body ">
			    {/* Name */}
			    <p className="m-0">{profileName}</p>
			    {/* Location */}
			    <small><span><i className="icon ion-md-pin"></i>{postLocation}</span></small>
			    {/* Time */}
			    <small><span><i className="icon ion-md-time"></i>{postedAt}</span></small>
			</div>
		    </div>
		</div>
		{/* Content */}
		<div className="cardbox-item mx-5">
		    {(text != undefined) ?
		     <p>{text}</p> :
		     (img != undefined) ?
		     <p>{profileName} uploaded an image.</p> :
		     <></>
		    }
		    {(img != undefined) ?
		     <img className="img-fluid" src={img} alt="Image" /> :
		     <></>
		    }
		    
		</div>
		<div className="cardbox-base">
		    <ReactButton />

		    <ul className="float-right">
			<li><a><i className="fa fa-comments"></i></a></li>
			<li><a><em className="mr-5">12</em></a></li>
			<li><a><i className="fa fa-share-alt"></i></a></li>
			<li><a><em className="mr-3">03</em></a></li>
		    </ul>
		    <ul>
			<li><a><i className="fa fa-thumbs-up"></i></a></li>
			<li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg" className="img-fluid rounded-circle" alt="User" /></a></li>
			<li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg" className="img-fluid rounded-circle" alt="User" /></a></li>
			<li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg" className="img-fluid rounded-circle" alt="User" /></a></li>
			<li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg" className="img-fluid rounded-circle" alt="User" /></a></li>
			<li><a><span>242 Likes</span></a></li>1
		    </ul>
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
    )
}

export default Post;
