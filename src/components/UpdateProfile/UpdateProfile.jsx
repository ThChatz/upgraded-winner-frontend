import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import DynamicInput from "../DynamicInput";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import QualPrivacy from '../QualPrivacy/QualPrivacy';

function UpdateProfile() {

    return (

        <Form>
            <Tabs defaultActiveKey="Personal" className="mb-3">
                <Tab eventKey="Personal" title="Personal">
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Phone" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Current Job</Form.Label>
                                    <Form.Control type="text" placeholder="Current Job" />
                                </Form.Group>                                
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control type="text" placeholder="Website" />
                                </Form.Group>
                            </Col>

                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="Qualifications" title="Qualifications">
                    <DynamicInput />
                </Tab>
                <Tab eventKey="Privacy" title="Privacy" style={{'overflow-x': 'hidden'}}>
                    <div style={{'height': 500, 'overflow-x': 'hidden', 'overflow-y': 'auto'}}> 
                    <QualPrivacy src="/chats" >
                        <Row>
                            <Col>
                                <h4>Email </h4>
                                <br /><br />
                            </Col>
                            <Col>
                                <Form.Control as="select" name="email-private">
                                    <option value={false}>private</option>
                                    <option value={true}>public</option>
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h4>Phone </h4>
                                <br /><br />
                            </Col>
                            <Col>
                                <Form.Control as="select" name="phone-private">
                                    <option value={false}>private</option>
                                    <option value={true}>public</option>
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h4>Current Job</h4>
                                <br /><br />
                            </Col>
                            <Col>
                                <Form.Control as="select" name="job-private">
                                    <option value={false}>private</option>
                                    <option value={true}>public</option>
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h4>Bio</h4>
                                <br /><br />
                            </Col>
                            <Col>
                                <Form.Control as="select" name="bio-private">
                                    <option value={false}>private</option>
                                    <option value={true}>public</option>
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h4>Network</h4>
                                <br /><br />
                            </Col>
                            <Col>
                                <Form.Control as="select" name="network-private">
                                    <option value={false}>private</option>
                                    <option value={true}>public</option>
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                                <h4 className="d-flex justify-content-around">
                                    <div>Job Qualifications</div>
                                    <div>Private?</div>
                                    </h4>
                                <div style={{ "overflow": "auto", "height": "328.406" }}>
                                </div>
                        </Row>
                        </QualPrivacy>
                        </div>
                </Tab>
            </Tabs>
        </Form>

    );
}

export default UpdateProfile;