import React, { Component } from "react";
import { submitHandler, submitHandlerMultipart } from "../submitForm.js";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import SignUp from "../components/SignUp/SignUp";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// export default class SignUp extends Component {
//     render() {
//         const onSubmit = submitHandler("post", "/user", {})
	      

//         return (
//             <div className="auth-wrapper">
//                 <div className="auth-inner">
// 		    <Form onSubmit={submitHandlerMultipart("post", "/media/image")}>
//                         <Form.Label>Profile picture</Form.Label>
//                         <Form.Control type="file"
// 				      name="file" />
//                         <button type="submit" className="btn btn-primary btn-block">Upload</button>			
// 		    </Form>


//                     <Form onSubmit={onSubmit}>
//                         <h3>Sign Up</h3>

//                         <Form.Group>

//                             <Form.Label>Profile picture</Form.Label>
//                             <Form.Control type="file" name="picture"
// 					  onChange={(e) => console.log(e.target.files[0])}/>

//                             <Form.Label>First name</Form.Label>
//                             <Form.Control type="text"
//                                 name="first-name"
//                                 placeholder="First name" />

//                             <Form.Label>Last name</Form.Label>
//                             <Form.Control type="text"
//                                 name="last-name"
//                                 placeholder="Last name" />

//                             <Form.Label>Email address</Form.Label>
//                             <Row>
//                                 <Col>
//                                     <Form.Control type="email"
//                                         name="email"
//                                         placeholder="Enter email" />
//                                 </Col>
//                                 <Col xs={3} value={false}>
//                                     <Form.Control as="select" name="email-private">
//                                         <option value={false}>private</option>
//                                         <option value={true}>public</option>
//                                     </Form.Control>
//                                 </Col>
//                             </Row>

//                             <Form.Label>Phone Number</Form.Label>
//                             <Row>
//                                 <Col>
//                                     <Form.Control type="text"
//                                         name="phone"
//                                         placeholder="Enter phone number" />
//                                 </Col>
//                                 <Col xs={3} value={false}>
//                                     <Form.Control as="select" name="phone-private">
//                                         <option value={false}>private</option>
//                                         <option value={true}>public</option>
//                                     </Form.Control>
//                                 </Col>
//                             </Row>

//                             <Form.Label>Current Job</Form.Label>
//                             <Row>
//                                 <Col>
//                                     <Form.Control type="text"
//                                         name="job"
//                                         placeholder="Enter your current job position" />
//                                 </Col>
//                                 <Col xs={3} value={false}>
//                                     <Form.Control as="select" name="job-private">
//                                         <option value={false}>private</option>
//                                         <option value={true}>public</option>
//                                     </Form.Control>
//                                 </Col>
//                             </Row>

//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password"
//                                 name="password"
//                                 placeholder="Enter your password" />
//                             <Form.Label>Confirm password</Form.Label>
//                             <Form.Control type="password"
//                                 placeholder="Retype your password" />

//                         </Form.Group>

//                         <Form.Control as="select" name="bio-private">
//                             <option value={false}>private</option>
//                             <option value={true}>public</option>
//                         </Form.Control>

//                         <Form.Control as="select" name="network-private">
//                             <option value={false}>private</option>
//                             <option value={true}>public</option>
//                         </Form.Control>

//                         <Form.Control type="text" name="bio" />

//                         <br />
//                         <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
//                         <p className="forgot-password text-right">
//                             Already registered <a href="#/login">sign in?</a>
//                         </p>
//                     </Form>
//                 </div>
//             </div>
//         );
//     }
// }

const SignUpView = (props) =>
<div className="auth-wrapper">
    <div className="auth-inner">
	<SignUp>
	    <Tab title="Personal" eventKey="Personal">
		<SignUp.Personal />
	    </Tab>
	    <Tab title="Bio" eventKey="Bio">
		<SignUp.Bio />
	    </Tab>
	    <Tab title="Privacy" eventKey="Privacy">
		<SignUp.Privacy />
	    </Tab>
	    <Tab title="Password" eventKey="Password">
		<SignUp.Password />
	    </Tab>
	    <Tab title="Picture" eventKey="ProfilePic">
		<SignUp.ProfilePic />
	    </Tab>
	</SignUp>
    </div>
</div>

export default SignUpView;
