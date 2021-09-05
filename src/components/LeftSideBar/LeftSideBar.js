import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function LeftSideBar(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.profile_pic} />
            <Card.Body>
		<Card.Title>{props.username}</Card.Title>
		<Card.Text>
		    {props.bio}
		</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
		<ListGroup.Item>
                    <Card.Link>
			My Connections
                    </Card.Link>
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
