import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";

const UserInfo = (props) =>
<Card>
    <Card.Img variant="top" src={props.profilePic} />
    <Card.Body>
	<Card.Title>{props.profileName}</Card.Title>
	<Card.Text>{props.profileJob}</Card.Text>
	<Button style={{"font-size": "0.9em"}} variant="outline-primary">Connect</Button>
    </Card.Body>
</Card>;




export default UserInfo;
