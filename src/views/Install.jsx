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
        const onSubmit = (e) => {
	    submitHandler("post", "/install")(e)
		.then(() => location.reload())
	};

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
		    <Form onSubmit={onSubmit}>
			<Form.Label>Name</Form.Label>
			<Form.Control type="text"
				      placeholder="Enter your name"
				      name="name"
				      required />

			<Form.Label>Email</Form.Label>
			<Form.Control type="email"
				      placeholder="Enter your email address"
				      name="email"
				      required />


			<Form.Label>Password</Form.Label>
			<Form.Control type="password"
				      placeholder="Enter your password"
				      name="password"
				      required />


                        <Button type="submit"
				variant="primary">
			    Finish
			</Button>
		    </Form>
                </div>
            </div>
        );
    }
}
