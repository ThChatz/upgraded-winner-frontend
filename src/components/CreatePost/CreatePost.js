import React, { useState, useContext } from 'react';
import './CreatePost.css'
import { Avatar } from '@material-ui/core'
import { CameraAlt, VideoCall, CalendarToday, Assignment, Audiotrack } from '@material-ui/icons'
import Form from "react-bootstrap/Form";
import App from '../../App';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import { submitHandler, submitHandlerMultipart } from "../../submitForm";

function UploadVideoModal(props) {
    const user = useContext(App.UserContext).user;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="messageSenderOption" onClick={handleShow}>
                <VideoCall />
                <h3>Video</h3>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className="d-flex justify-content-between">
                        <Form id="vidUpload" onSubmit={props.video_handler}>
                            <Form.Control type="file" onChange={props.onChange} name="file" required />
                        </Form>
                    </Container>
                    <input type="hidden" form="publish" name="int(video)" value={props.videoId} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={handleClose}
                        form="vidUpload"
                        onClick={props.onClick}
                        type="submit">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


function UploadPicModal(props) {
    const user = useContext(App.UserContext).user;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="messageSenderOption" onClick={handleShow}>
                <CameraAlt />
                <h3>Photo</h3>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className="d-flex justify-content-between">
                        <Form id="picUpload" onSubmit={props.pic_handler}>
                            <Form.Control type="file" onChange={props.onChange} name="file" required />
                        </Form>
                    </Container>
                    <input type="hidden" form="publish" name="int(picture)" value={props.picId} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={handleClose}
                        form="picUpload"
                        onClick={props.onClick}
                        type="submit">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function UploadAudioModal(props) {
    const user = useContext(App.UserContext).user;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="messageSenderOption" onClick={handleShow}>
                <Audiotrack />
                <h3>Audio</h3>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Audio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className="d-flex justify-content-between">
                        <Form id="audioUpload" onSubmit={props.audio_handler}>
                            <Form.Control type="file" onChange={props.onChange} name="file" required />
                        </Form>
                    </Container>
                    <input type="hidden" form="publish" name="int(audio)" value={props.audioId} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={handleClose}
                        form="audioUpload"
                        onClick={props.onClick}
                        type="submit">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


const CreatePost = () => {
    const user = useContext(App.UserContext).user;
    const [show, setShow] = useState(false);

    const [videohiddenValue, setvideoHiddenValue] = useState(-1);
    const [hasUploaded, setHasUploaded] = useState(false);
    const video_upload_fn = (e) =>
        submitHandlerMultipart("post", "/media/video")(e)
            .then((resp) => setvideoHiddenValue(resp.data.id));

    const video_handler = (e) => {
        if(hasUploaded === false){
            video_upload_fn(e);
            setHasUploaded(true);
        }
    }

    const [pichiddenValue, setpicHiddenValue] = useState(-1);
    const pic_upload_fn = (e) =>
        submitHandlerMultipart("post", "/media/image")(e)
            .then((resp) => setpicHiddenValue(resp.data.id));

    const pic_handler = (e) => {
        if(hasUploaded === false){
            pic_upload_fn(e);
            setHasUploaded(true);
        }
    }

    const [audiohiddenValue, setaudioHiddenValue] = useState(-1);
    const audio_upload_fn = (e) =>
        submitHandlerMultipart("post", "/media/audio")(e)
            .then((resp) => setaudioHiddenValue(resp.data.id));

    const audio_handler = (e) => {
        if(hasUploaded === false){
            audio_upload_fn(e);
            setHasUploaded(true);
        }
    }

    return (
        <div className="cardbox shadow-lg bg-white">
            <div className="messageSender">
                <div className="messageSenderTop">
                    <img className="rounded-circle" height="35px" width="35px" src={user.picture} alt="..." />
                    <Form id="publish" onSubmit={submitHandler("post", "/post")}>
                        <Form.Control
                            className="messageSenderInput"
                            placeholder={`What's on your mind?`}
                            name="text"
                        />
                        <button type="submit"></button>
                    </Form>
                </div>
                <div className="messageSenderBottom">
                    <UploadVideoModal
                        video_handler={video_handler} />
                    <UploadPicModal
                        pic_handler={pic_handler} />
                    <UploadAudioModal
                        audio_handler={audio_handler} />
                </div>
            </div>
        </div>
    )
}

export default CreatePost;






