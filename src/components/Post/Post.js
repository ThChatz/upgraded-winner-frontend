import React, { useState } from 'react';
import '../CreatePost/CreatePost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Post.css';
import ReactButton from '../ReactButton/ReactButton';

import { Avatar } from '@material-ui/core'
import { CameraAlt, VideoCall, CalendarToday, Assignment } from '@material-ui/icons'
const CreatePost = () => {

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
										<a href="">
										<Avatar>B</Avatar>
										</a>
									</div>
									<div className="media-body">
										{/* Name */}
										<p className="m-0">Benjamin Robinson</p>
										{/* Location */}
										<small><span><i className="icon ion-md-pin"></i> Nairobi, Kenya</span></small>
										{/* Time */}
										<small><span><i className="icon ion-md-time"></i> 10 hours ago</span></small>
									</div>
								</div>
							</div>
							{/* Content */}
							<div className="cardbox-item">
								<img className="img-fluid" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/1.jpg" alt="Image" />
								{/* <p>lalala</p> */}
							</div>
							<div className="cardbox-base">
							<ReactButton></ReactButton>

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

export default CreatePost;