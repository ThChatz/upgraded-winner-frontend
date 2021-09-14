import React, { Component } from "react";
import { submitHandler } from "../submitForm.js";


export default class SignUp extends Component {
    render() {
	const onSubmit = submitHandler("post", "/user");

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={onSubmit}>
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text"
				   name="first-name"
				   className="form-control"
				   placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text"
				   name="last-name"
				   className="form-control"
				   placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email"
				   name="email"
				   className="form-control"
				   placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password"
				   name="password"
				   className="form-control"
				   placeholder="Enter password" />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#/login">sign in?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
