import React, { useState, useContext } from 'react';
import './CreatePost.css'
import { CameraAlt, VideoCall, CalendarToday, Assignment, Audiotrack } from '@material-ui/icons'
import Form from "react-bootstrap/Form";
import App from '../../App';
import { submitHandler, submitHandlerMultipart } from "../../submitForm";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
const CreatePost = (props) => {
    const user = useContext(App.UserContext).user;

    const AccordionComp = (props) => (
        <Accordion activeKey={props.activeKey ? "on" : "off"}>
            <Card>
                <Accordion.Collapse eventKey="on">
                    <Card.Body>
                        <Form.Control type="file" onChange={props.onChange} name={`${props.type}(media)`} form="submit" />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    );
    const [accordionState, setAccordionState_] = useState(false);
    const [mediaType, setMediaType] = useState("");
    const [uploadState, setUploadState] = useState(false);
    const setAccordionState = (param) => {
        if( param === mediaType ) {
            setAccordionState_(!accordionState);
        } else {
            setMediaType(param);
            setAccordionState_(true);
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

                    <div className="messageSenderOption" onClick={() => { setAccordionState("video") }}>
                        <VideoCall />
                        <h3>Video</h3>
                    </div>

                    <div className="messageSenderOption" onClick={() => { setAccordionState("photo") }}>
                        <CameraAlt />
                        <h3>Photo</h3>
                    </div>

                    <div className="messageSenderOption" onClick={() => { setAccordionState("audio") }}>
                        <Audiotrack />
                        <h3>Audio</h3>
                    </div>
                    <br />

                </div>
                <AccordionComp
                    onChange={(e) => {
                        setUploadState(true);
                    }}
                    activeKey={accordionState}
                    type={mediaType}
                />
            </div>
        </div>
    )
}

export default CreatePost;






