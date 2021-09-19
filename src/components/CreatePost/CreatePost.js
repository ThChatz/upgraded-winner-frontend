import React, { useState } from 'react';
import './CreatePost.css'
// icons
import { Avatar } from '@material-ui/core'
import { CameraAlt, VideoCall, CalendarToday, Assignment, Audiotrack} from '@material-ui/icons'

import Form from "react-bootstrap/Form";

const CreatePost = () => {

    return (
                    <div className="cardbox shadow-lg bg-white">
                        <div className="messageSender">
                            <div className="messageSenderTop">
                                <Avatar>H</Avatar>
                                <Form>
                                    <Form.Control
                                        className="messageSenderInput"
                                        placeholder={`What's on your mind?`}
                                    />

                                    <button type="submit"></button>

                                </Form>

                            </div>


                            <div className="messageSenderBottom">
                                <div className="messageSenderOption">
                                    <VideoCall />
                                    <h3>Video</h3>
                                </div>

                                <div className="messageSenderOption">
                                    <CameraAlt />
                                    <h3>Photo</h3>
                                </div>

                                <div className="messageSenderOption">
                                    <Audiotrack />
                                    <h3>Audio</h3>
                                </div>

                            </div>
                        </div>
                    </div>
    )
}

export default CreatePost;






