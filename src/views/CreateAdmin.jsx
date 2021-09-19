import React, { Component } from "react";
import { submitHandler } from "../submitForm";
import Form from "react-bootstrap/Form";
import { AiOutlineArrowUp } from "react-icons/ai"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
export default class CreateAdmin extends Component {
    render() {
        const onSubmit = submitHandler("post", "/user");

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
                    <br/>
                    <Form onSubmit={onSubmit}>
                        <h3>Create Admin</h3>

                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text"
                                name="username"
                                placeholder="admin" />

                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                name="email"
                                placeholder="Enter email" />

                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                name="password"
                                placeholder="Enter your password" />
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password"
                                placeholder="Retype your password" />
                            
                        </Form.Group>


                        <br />
                        <button type="submit" className="btn btn-primary btn-block">Install</button>
                    </Form>
                </div>
            </div>
        );
    }
}
