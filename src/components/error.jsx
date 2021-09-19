import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

const Error = (props) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    useEffect(() => setShow(props.show),
	     [props.show])

    return <Error_ {...props}
		   show={show}
		   handleClose={handleClose} />;
}

const Error_ = (props) =>
<Modal show={props.show}>
    <Modal.Header closebutton>
	<Modal.Title>Error during {props.cause}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
	Response status: {props.status}
	{props.message}
    </Modal.Body>
    <Modal.Footer>
	<Button variant="secondary" onClick={props.handleClose}>
            Close
        </Button>
	{props.moreButtons}
    </Modal.Footer>
</Modal>

export default Error;
