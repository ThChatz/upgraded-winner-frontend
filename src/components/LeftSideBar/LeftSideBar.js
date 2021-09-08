import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import UserRef from "../UserRef/UserRef";

function LeftSideBar(props) {
    return (
        <Card className = "bg-white shadow rounded  container"
	      style={{"max-width": "18rem", "max-height": "30rem"}}>
            <Card.Img variant="top" src={props.profilePic} />
            <Card.Body>
		<Card.Title>{UserRef(props)}</Card.Title>
		<Card.Text>
		    {props.profileBio}
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
