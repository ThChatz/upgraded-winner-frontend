import React, { Component } from "react";
import { submitHandler } from "../submitForm";
import Form from "react-bootstrap/Form";
import { AiOutlineArrowUp } from "react-icons/ai"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default class CreateAdmin extends Component {
	render() {
		const onSubmit = (e) => {
			submitHandler("post", "/install")(e)
				.then(() => location.reload())
		};

		return (
			<div className="auth-wrapper">
				<div className="auth-inner">
					<Container className="d-flex justify-content-center pb-sm-3">

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

						<br/>
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
