import React, { Component } from "react";
import '../App.css';
export default class Login extends Component {
    render() {
        return (
            <div className = "App">    
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <br/>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <p >
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}