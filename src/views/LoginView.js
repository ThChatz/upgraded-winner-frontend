import React, { Component, useContext } from "react";
import '../App.css';
import App from '../App.js';
import { submitHandler } from '../submitForm'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";


const Login = (props) => {
    const context = useContext(App.UserContext);

    const onSubmit = (e) => {
        submitHandler("post", "/session")(e)
            .then((r) => {
                console.log(r);
                context.setUser(r.data);
                return r;
            })
    }


    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Form onSubmit={onSubmit}>
                    <h3>Sign In</h3>
                    {/* [{JSON.stringify(context)}] */}
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                            name="email"
                            placeholder="Enter Email" />


                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            name="password"
                            placeholder="Enter your password" />
                        <br />
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p >
                            Forgot <a href="#">password?</a>
                        </p>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default Login;
