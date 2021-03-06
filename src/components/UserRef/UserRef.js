import Overlay from 'react-bootstrap/Overlay';
import Popover from "react-bootstrap/Popover";

import Button from "react-bootstrap/Button";
import { useState, useRef, useEffect } from 'react'
import UserInfo from "../UserInfo/UserInfo"
import get from 'axios';

import "./UserRef.css";

function UserRef_from_id({ user_id }) {
    const [props, setProps] = useState({});
    
    useEffect(() => {
	get(process.env.REACT_APP_API_ROOT+"/user/"+user_id)
	    .then((resp) => setProps(resp.data))
	    .catch(() => alert("Invalid user id"))
    }, [])

	return <UserRef {...props} />
}

function UserRef(props) {
    const [show, setShow] = useState(false);
    const btn = useRef(null);

    return (<div
 		onMouseOver={(e) => setShow(true)}
		onMouseLeave={(e) => setShow(false)}>
		<Button variant="Link"
			ref={btn}
			href={"#u/"+props.id}>
		    {props.first_name + " " + props.last_name}
		</Button>
		<Overlay show={show} target={btn}>
		    <Popover>
 			<Popover.Content>{UserInfo(props)}</Popover.Content>
 		    </Popover>
		</Overlay>
	    </div>);
}


UserRef.from_id = UserRef_from_id;

export default UserRef;
