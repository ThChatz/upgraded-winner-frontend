import { Component, useState } from 'react';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function OpenPhoto(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            
            <img src={props.profilePic} alt="..." width="130" height="130" className="rounded mb-2 img-thumbnail" onClick={() => handleShow()} />
            
            <Modal
                show = {show}
                onHide={() => handleClose()}
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Container >
                        <img src={props.profilePic} alt="..." width="500" height="500" className="rounded mb-2 img-thumbnail"  />
                    </Container>
                </Modal.Body>    
            </Modal>
        </>
    );

}
export default OpenPhoto;