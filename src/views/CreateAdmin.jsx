import React, { Component } from "react";
import { submitHandler } from "../submitForm";
import Form from "react-bootstrap/Form";
import { AiOutlineArrowUp } from "react-icons/ai"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Tab from "react-bootstrap/Tab";

import SignUp from "../components/SignUp/SignUp"

export default class CreateAdmin extends Component {
    render() {
        const onSubmit = submitHandler("post", "/install");

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Container style={{
				   "height": "48px",
				   "width": "155px"
			       }}>
                        <AiOutlineArrowUp style={{ "float": "left" }} size="50" />
                        <b>Upgraded<br />Winner</b>

                    </Container>
		    <br />
		    <h3>Admin Account Information</h3>
			<SignUp target="/install">
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

                        <br />
			<div className="d-flex justify-content-around">
                            <Button type="submit"
				    variant="primary">
				Finish
			    </Button>
			</div>
                </div>
            </div>
        );
    }
}
