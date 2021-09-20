import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UserList from '../UserList/UserList';

export default class UserData extends Component {
    render() {
        return (
            <Container>

                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Container>
                            <Row>
                                <Col>
                                    <h4>Name </h4> Bob <br /><br />
                                </Col>
                                <Col>
                                    <h4>Surname </h4> Ross <br /><br />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Bio </h4> hck ur m0m <br /><br />
                                </Col>
                                <Col>
                                    <h4>Job </h4> HackerC0rp <br /><br />
                                </Col>
                            </Row>
                            </Container>
                            <Container>
                            <Row>
                                <h4>Friends</h4>
                                <div style={{ "overflow": "auto", "height": "328.406" }}>
                                    <UserList src="/chats" />
                                </div>
                            </Row>
                            <Row>
                                <h4>Posts</h4>
                                <div style={{ "overflow": "auto" }}>
                                    <UserList src="/chats" />
                                </div>
                            </Row>
                            <Row>
                                <h4>Comments</h4>
                                <div style={{ "overflow": "auto" }}>
                                    <UserList src="/chats" />
                                </div>
                            </Row>

                        </Container>
                    </div>
                </div>
            </Container>
        );
    }
}
