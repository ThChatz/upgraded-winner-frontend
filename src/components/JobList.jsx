import { useState, useEffect } from 'react';
import get from "axios";
import Loader from './Loader';
import Media from 'react-bootstrap/Media';
import ListGroup from 'react-bootstrap/ListGroup';
import FetchScroll from './FetchScroll/FetchScroll';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import UserRef from './UserRef/UserRef';
import { PinDropSharp } from '@material-ui/icons';

const JobListItem = (props) =>
	<Accordion adefaultActiveKey="">
		<Card style={{ maxWidth: "100%" }}>
			<Card.Header>
				<Accordion.Toggle style={{ width: "100%" }} as={Button}
					variant="light" eventKey="0">
					<Media>
						<img src={props.pic} className="d-flex align-items-center" />
						<Media.Body>
							<h5>{props.title}</h5>
							<p>{props.description_short}</p>
						</Media.Body>
					</Media>
				</Accordion.Toggle>
			</Card.Header>
			<Accordion.Collapse eventKey="0">
				<Card.Body>
					<Container>
						<div className="d-flex justify-content-center" >
							<img src={props.pic} style={{ height: "150px", width: "150px" }} />
						</div>
						<Row>
							<Col>
								<h3>Job Title</h3>
								<p>{props.title}</p>
							</Col>
							<Col>
								<h3>Posted By</h3>
								<p><UserRef.from_id user_id={props.usr} /></p>
							</Col>
						</Row>
						<Row>
							<h3>Full Description</h3>
							<p>{props.description_full}</p>
						</Row>

					</Container>
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	</Accordion>;


function JobList(props) {
	return (
		<FetchScroll
			src={props.src}
			inverse={false}
			wrapFn={(items) => <ListGroup>{items}</ListGroup>}
			mapFn={(item) =>
				<ListGroup.Item key={item.id} >
					<JobListItem {...item} />
				</ListGroup.Item>} />
	);
}

export default JobList;
