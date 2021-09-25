import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UserList from '../UserList/UserList';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Button } from "react-bootstrap";

export default class UserData extends Component {
    render() {
        return (
            <Container>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Tabs defaultActiveKey="Info" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="Info" title="Info">
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
                            </Tab>
                            <Tab eventKey="Net" title="Net">
                                <Row>
                                    <h4>Friends</h4>
                                    <div style={{ "overflow": "auto", "height": "328.406" }}>
                                        <UserList src="/chats" />
                                    </div>
                                </Row>
                            </Tab>
                            <Tab eventKey="Posts" title="Posts">
                                <Row>
                                    <h4>Posts</h4>
                                    <div style={{ "overflow": "auto" }}>
                                        <UserList src="/chats" />
                                    </div>
                                </Row>
                            </Tab>
                            <Tab eventKey="Comments" title="Comments">
                                <Row>
                                    <h4>Comments</h4>
                                    <div style={{ "overflow": "auto" }}>
                                        <UserList src="/chats" />
                                    </div>
                                </Row>
                            </Tab>
                            <Tab eventKey="Download" title="Download">
                                <Container className = "d-flex justify-content-between pb-sm-3">
                                    
                                    <Button>
                                        JSON
                                    </Button>

                                    <Button>
                                        XML
                                    </Button>
                                    
                                </Container>

                                <Container>
                                    <textarea as="textarea"
										readOnly
                                        style={{"width":"100%"}}></textarea>
                                </Container>
                                <Container className = "d-flex justify-content-end">
                                    <Button>Save</Button>
                                </Container>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </Container>
        );
    }
}
