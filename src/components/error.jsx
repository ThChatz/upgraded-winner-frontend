import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import Install from '../views/Install';


const Error_ = (props) =>
<Modal show={props.show}>
    <Modal.Header closebutton>
	<Modal.Title>Error during {props.cause}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
	Response status: {props.status} <br />
	{props.message}
    </Modal.Body>
    <Modal.Footer>
	<Button variant="secondary" onClick={props.handleClose}>
            Close
        </Button>
	{props.moreButtons}
    </Modal.Footer>
</Modal>


const Error = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const [err, setErr] = useState({});

    const default_handler = (response, moreButtons=[]) => setErr({
	status: response.status,
	cause: response.data.cause,
	message: response.data.message,
	moreButtons: moreButtons
    })

    useEffect(() =>
	axios.interceptors.response.use(undefined, (err) => {
	    if(err.response.status === 503 &&
	       err.response.data.cause === "Application not Installed") {
		default_handler(err.response, 
		    <Button variant="primary"
			    onClick={() => {
				ReactDOM.render(
				    <Install />,
				    document.getElementById("root")
				)
				setShow(false);
			    }}>	Install </Button>
				
		);
		setShow(true);
	    }
	})
	, [])

    return <Error_ {...err}
		   show={show}
		   handleClose={handleClose} />;
}


export default Error;
