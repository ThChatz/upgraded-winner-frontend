import Overlay from 'react-bootstrap/Overlay';
import Popover from "react-bootstrap/Popover";

import Button from "react-bootstrap/Button";
import { useState, useRef } from 'react'
import UserInfo from "../UserInfo/UserInfo"

import "./UserRef.css";

function UserRef(props) {
    const [show, setShow] = useState(false);
    const btn = useRef(null);

    return (<div
 		onMouseOver={() => setShow(true)}
		onMouseLeave={() => setShow(false)}>
		<Button variant="Link"
			ref={btn}>
		    {props.profileName}
		</Button>
		<Overlay show={show} target={btn}>
		    <Popover>
 			<Popover.Content>{UserInfo(props)}</Popover.Content>
 		    </Popover>
		</Overlay>
	    </div>);
}




export default UserRef;
