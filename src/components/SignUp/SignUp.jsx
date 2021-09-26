import React, {useState} from "react";
import { submitHandler, submitHandlerMultipart } from "../../submitForm";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import QualPrivacy from "../QualPrivacy/QualPrivacy";

const Personal = (props) =>
<Container>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name"
		      form="signUpForm"
		      name="first-name"/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name"
		      form="signUpForm"
		      name="last-name"/>
    </Form.Group>


    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone"
		      form="signUpForm"
		      name="phone"/>

    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Current Job</Form.Label>
        <Form.Control type="text" placeholder="Current Job"
		      form="signUpForm"
		      name="job"/>
    </Form.Group>                                

    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
		      form="signUpForm"
		      name="email"/>
    </Form.Group>
</Container>

const Bio = (props) =>
<Form.Group className="mb-3">
    <Form.Label>Bio</Form.Label>
    <Form.Control as="textarea"
		  name="bio"
		  form="signUpForm"
		  placeholder="Write a short bio." />
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
    {[<PrivacySelector header="Email" name="email-private" />,
      <PrivacySelector header="Phone" name="phone-private" />,
      <PrivacySelector header="Bio" name="bio-private" />,
      <PrivacySelector header="Network" name="network-private" />,
      <PrivacySelector header="Job" name="job-private" />]
     .map((comp) =>
	 <Row style={{"padding-bottom": 15, maxWidth: "100%"}}>
	     {comp}
	 </Row>)}
</>

const Password = (props) =>
<>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"
                  name="password"
                  placeholder="Enter your password"
		  form="signUpForm"/>
    <Form.Label>Confirm password</Form.Label>
    <Form.Control type="password"
                  placeholder="Retype your password" />
</>

const ProfilePic_ = (props) =>
      <>
	  <Container className="d-flex justify-content-between">
	      <Form id="picUpload" onSubmit={props.picSubmit}>
		  <Form.Label>Set your profile picture.</Form.Label>
		  <br />
		  <Image src={props.imgUrl} style={{width: 128, height: 128, padding: 12}}/>
		  <br />
		  <Form.Control type="file" onChange={props.onChange} name="file"/>

	      </Form>
	      <Container className="d-flex justify-content-center" style={{flexDirection: "column"}}>
	      <Button style={{align: "middle"}}
		      form="picUpload"
		      variant="outline-primary"
		      onClick={props.onClick}
		      disabled={props.hasUploaded}
		      type="submit">
		  {props.hasUploaded
		   ? <>Picture<br/>already<br/>uploaded</> : <>Upload<br/>Picture</>}
	      </Button>
		  </Container>
	  </Container>
	  <input type="hidden" form="signUpForm" name="int(picture)" value={props.picId}/>

</>

const ProfilePic = (props) => {
    const [pic, setPic] = useState("/my-account/profile-pic.jpg");
    const [hasUploaded, setHasUploaded] = useState(false);
    const [hiddenValue, setHiddenValue] = useState(-1);

    const pic_upload_fn = (e) =>
	  submitHandlerMultipart("post", "/media/image")(e)
	  .then((resp) => setHiddenValue(resp.data.id));

    return <ProfilePic_ onChange={(ev) => {setPic(URL.createObjectURL(ev.target.files[0]));
					  setHasUploaded(false)}}
			imgUrl={pic}
			hasUploaded={hasUploaded}
			picId={hiddenValue}
			picSubmit={(e) => {
			    pic_upload_fn(e);
			    setHasUploaded(true);
			}}/>
}

const SignUp = (props) =>
      <>
	  <Form id="signUpForm" onSubmit={submitHandler("post", "/user")}/>
	  <div className="py-sm-5">
	  <Tabs defaultActiveKey={props.default} className="mb-3">
	      {props.children}
	  </Tabs>
	  </div>
	  <Container className="d-flex justify-content-between">
	      <Button variant="secondary" onClick={() => window.location="#"}>Cancel</Button>
	      <Button variant="primary" type="submit" form="signUpForm">Submit</Button>
	  </Container>
      </>

SignUp.Personal = Personal;
SignUp.Bio = Bio;
SignUp.Privacy = Privacy;
SignUp.Password = Password;
SignUp.ProfilePic = ProfilePic;

export default SignUp;
