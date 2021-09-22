import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import DynamicInput from "../DynamicInput";

function UpdateProfile() {

    return (

        <Form>
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
            <DynamicInput />
        </Form>

    );
}

export default UpdateProfile;