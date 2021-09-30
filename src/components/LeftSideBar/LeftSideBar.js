import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import App from '../../App.js';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { submitHandler } from '../../submitForm';


function AddJobModal(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const onChange = (e) => {
		submitHandler("post", "/jobs")(e);
		handleClose();
	}
	return (
		<>
			<Button style={{ "padding-left": "0px", "paddint-top": "0px" }} variant="link" onClick={handleShow}>
				Add Job
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Job</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={(e) => onChange(e)} id="form">
						<Container>
							<Row>
								<Col>
									<Form.Group className="mb-3" controlId="jobPhoto">
										<Form.Label>Job Photo</Form.Label><br />
										<Form.Control type="file" name="image(pic)" required />
									</Form.Group>
									<Form.Group className="mb-3" controlId="jobName">
										<Form.Label>Job Name</Form.Label>
										<Form.Control type="text" placeholder="Job name" name="title" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="JobShortDesc">
										<Form.Control
											as="textarea"
											placeholder="Job Short Description"
											style={{ height: '100px' }}
											name="description_short"
										/>
									</Form.Group>

									<Form.Group className="mb-3" controlId="JobFullDesc">
										<Form.Control
											as="textarea"
											placeholder="Job Full Description"
											style={{ height: '100px' }}
											name="description_full"
										/>
									</Form.Group>
									
								</Col>
							</Row>
						</Container>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" type="submit" form="form">Submit</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}



function LeftSideBar(props) {
	const user = useContext(App.UserContext).user;
	return (
		<Card className="bg-white shadow rounded  container"
			style={{ "max-width": "18rem", "max-height": "30rem" }}>
			<Card.Img variant="top" src={user.picture} />
			<Card.Body>
				<Card.Title>{user.first_name + " " + user.last_name + ", " + user.job}</Card.Title>
				<Card.Text>
					{user.bio}
				</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>
					<Card.Link href="#/Network">
						My Connections
					</Card.Link>
				</ListGroup.Item>
				<ListGroup.Item style={{ "height": "41px", "padding-top": "0px" }}>
					<AddJobModal />
				</ListGroup.Item>
				<ListGroup.Item>
					<Card.Link>
						My Settings
					</Card.Link>
				</ListGroup.Item>
			</ListGroup>
			<Card.Body>
				<Card.Link href="#">Privacy Policy</Card.Link>
				<Card.Link href="#">Contact Us</Card.Link>
			</Card.Body>
		</Card>
	);
}

export default LeftSideBar;
