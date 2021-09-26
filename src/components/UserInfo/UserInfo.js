import { requestWithCsrf } from "../../submitForm";

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";



const ConnectBtn = (props) =>
<Button style={{"font-size": "0.9em"}} 
        variant="outline-primary"
        onClick={() => requestWithCsrf('post', '/network')({friend: props.id})}>
        Connect
</Button>

const MessageBtn = (props) =>
<Button style={{"font-size": "0.9em"}} 
        variant="primary"
        onClick={() => requestWithCsrf('post', '/conversations')
                    ({people: [props.id]})}>
        Send Message
</Button>


const UInfoBtn = (props) =>
    props.connected ? MessageBtn(props) : ConnectBtn(props);

const UserInfo = (props) =>
<Card>
    <Card.Img variant="top" src={props.picture} />
    <Card.Body>
	<Card.Title>{props.first_name + " " + props.last_name}</Card.Title>
	<Card.Text>{props.job}</Card.Text>
    <UInfoBtn id={props.id} connected={props.connected} />
    </Card.Body>
</Card>;




export default UserInfo;
