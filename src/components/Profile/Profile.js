import Container from "react-bootstrap/Container";
import './Profile.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import OpenPhoto from "../OpenPhotos";
import { requestWithCsrf } from "../../submitForm";
import App from '../../App';
import { useContext } from "react";


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
    const context = useContext(App.UserContext);
    const onClick = (e) => requestWithCsrf("post", "/connections/"+props.id)(e)
		.then((r) => { console.log(r); return r })
		.catch(() => { });

    const MsgButton = () => (
        <Button onClick={window.location="#/Conversations"}>
            Message
        </Button>
    );
    // post/connection/user_id
    const AddButton = () => (
        <Button onClick={onClick}>
            Add
        </Button>
    );

    return (
        <Container className="bg-white shadow rounded ">
            <div className="px-4 pt-0 pb-4 bg-dark">
                <div className="align-items-end profile-header">
                    <div className="mb-5 text-white">
                        <h4 className="mt-0 mb-0">{props.first_name + " " + props.last_name}</h4>
                        <p className="small mb-4">
                            <i className="fa fa-map-marker mr-2"></i>
                            {props.job}
                        </p>
                    </div>

                    <div className="profile mr-3 ">
                        
                        <OpenPhoto profilePic = {props.picture}/>
                        {/* <img src={props.profilePic} alt="..." width="130" className="rounded mb-2 img-thumbnail" /> */}
                        <br />
                        {props.me ? <EditProfileModal/> : (props.connected ? <MsgButton/> : <AddButton />)}
                        
                        {/* <EditProfileModal /> */}
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
