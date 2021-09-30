import React, { useState, useContext } from "react";
import { submitHandler, submitHandlerMultipart } from "../../submitForm";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import App from '../../App';
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import QualPrivacy from "../QualPrivacy/QualPrivacy";

const Personal = (props) =>
<Container>
    <Form.Group className="mb-3" controlId="formGroupName">
	<Form.Label>First Name</Form.Label>
	<Form.Control type="text" placeholder="Enter Full Name"
		      form="signUpForm"
		      name="first_name"
		      required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupSurname">
	<Form.Label>Last Name</Form.Label>
	<Form.Control type="text" placeholder="Enter Last Name"
		      form="signUpForm"
		      name="last_name"
		      required />
    </Form.Group>


    <Form.Group className="mb-3" controlId="formGroupPassword">
	<Form.Label>Phone</Form.Label>
	<Form.Control type="text" placeholder="Phone"
		      form="signUpForm"
		      name="phone" />

    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
	<Form.Label>Current Job</Form.Label>
	<Form.Control type="text" placeholder="Current Job"
		      form="signUpForm"
		      name="job"
		      required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupEmail">
	<Form.Label>Email</Form.Label>
	<Form.Control type="email" placeholder="Enter email"
		      form="signUpForm"
		      name="email"
		      required />
    </Form.Group>
</Container>

const Bio = (props) =>
<Form.Group className="mb-3">
    <Form.Label>Bio</Form.Label>
    <Form.Control as="textarea"
		  name="bio"
		  form="signUpForm"
		  placeholder="Write a short bio."
		  required />
</Form.Group>


const PrivacySelector = (props) =>
      <>
	  <Col>
	      <h5>{props.header}</h5>
	  </Col>
	  <Col>
	      <Form.Control as="select" name={`bool(${props.name})`} form="signUpForm">
		  <option value={true}>private</option>
		  <option value={false}>public</option>
	      </Form.Control>
	  </Col>
      </>

const Map = (props) =>
      props.children.map(props.mapFn);

const Privacy = (props) =>
      <>
	  {[<PrivacySelector header="Email" name="email_private" />,
	    <PrivacySelector header="Phone" name="phone_private" />,
	    <PrivacySelector header="Bio" name="bio_private" />,
	    <PrivacySelector header="Network" name="network_private" />,
	    <PrivacySelector header="Job" name="job_private" />]
	   .map((comp) =>
	       <Row style={{ "padding-bottom": 15, maxWidth: "100%" }}>
		   {comp}
	       </Row>)}
      </>

const Password = (props) =>
      <>
	  <Form.Label>Password</Form.Label>
	  <Form.Control type="password"
			name="password"
			placeholder="Enter your password"
			form="signUpForm"
			required />
	  <Form.Label>Confirm password</Form.Label>
	  <Form.Control type="password"
			placeholder="Retype your password"
			name="confirm_password"
			form="signUpForm"
			required />
      </>

const ProfilePic_ = (props) => 
      (
	  <>
	      <Container className="d-flex justify-content-between">
		  <Form.Label>Set your profile picture.</Form.Label>
		  <br />
		  <Image src={props.imgUrl} style={{ width: 128, height: 128, padding: 12 }} />
		  <br />
		  <Form.Control type="file" onChange={props.onChange} name="image(picture)" form="signUpForm" required />
	      </Container>
	  </>);

const ProfilePic = (props) => {
    const [pic, setPic] = useState("/my-account/profile-pic.jpg");

    return <ProfilePic_ onChange={(ev) => {
			    setPic(URL.createObjectURL(ev.target.files[0]));
			}}
			imgUrl={pic}/>
}

const SignUp = (props) => {
	const context = useContext(App.UserContext);

	const [validated, setValidated] = useState(false);
	
    const validate = (e) => {
		const form = e.currentTarget;
		const formData = new FormData(form);
        if (form.checkValidity() === false || formData.get("password") !== formData.get("confirm_password")) {
			console.log(formData.get("password"));
			console.log(formData.get("confirm_password"))
			console.log("Invalid")
			return false;
		}
	
        return true;
    };


    const onSubmit = (e) => {
	e.preventDefault();
	if(validate(e))
		submitHandler("post", "/user")(e);
		submitHandler("post", "/session")(e)
	  .then((r) => {console.log(r); return r})
	  .then((r) => context.setUser(r.data.user))
	  .catch(() => {});
    };



    
    return (
	<>
	    <Form id="signUpForm" onSubmit={onSubmit} />
	    <div className="py-sm-5">
		<Tabs defaultActiveKey={props.default} className="mb-3">
		    {props.children}
		</Tabs>
	    </div>
	    <Container className="d-flex justify-content-between">
		<Button variant="secondary" onClick={() => window.location = "#"}>Cancel</Button>
		<Button variant="primary" type="submit" form="signUpForm">Submit</Button>
	    </Container>
	</>
    );
}
SignUp.Personal = Personal;
SignUp.Bio = Bio;
SignUp.Privacy = Privacy;
SignUp.Password = Password;
SignUp.ProfilePic = ProfilePic;

export default SignUp;
