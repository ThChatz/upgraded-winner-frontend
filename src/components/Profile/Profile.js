import Container from "react-bootstrap/Container";
import './Profile.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import OpenPhoto from "../OpenPhotos";
function EditProfileModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit Profile
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateProfile/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function Profile(props) {
    // props should contain
    // ProfileName: username
    // ProfilePicurl: url of profile pic

    return (
        <Container className="bg-white shadow rounded ">
            <div className="px-4 pt-0 pb-4 bg-dark">
                <div className="align-items-end profile-header">
                    <div className="mb-5 text-white">
                        <h4 className="mt-0 mb-0">{props.profileName}</h4>
                        <p className="small mb-4">
                            <i className="fa fa-map-marker mr-2"></i>
                            {props.profileLocation}
                        </p>
                    </div>

                    <div className="profile mr-3 ">
                        
                        <OpenPhoto profilePic = {props.profilePic}/>
                        {/* <img src={props.profilePic} alt="..." width="130" className="rounded mb-2 img-thumbnail" /> */}
                        <br />
                        <EditProfileModal />
                    </div>
                </div>
            </div>

            <br style={{ "line-height": "5em" }} />
            <div className="py-5 px-4 profile-body">
                {props.children}
            </div>
        </Container>
    );
}


export default Profile;
