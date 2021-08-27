import React, { useState } from 'react';
import './CreatePost.css'
// icons
import { Avatar } from '@material-ui/core'
import { CameraAlt, VideoCall, CalendarToday, Assignment } from '@material-ui/icons'
const CreatePost = () => {

    return (
                    <div className="cardbox shadow-lg bg-white">
                        <div className="messageSender">
                            <div className="messageSenderTop">
                                <Avatar>H</Avatar>
                                <form>
                                    <input
                                        value=""
                                        className="messageSenderInput"
                                        placeholder={`What's on your mind?`}
                                    />

                                    <button type="submit"></button>
                                </form>
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
                                    <CalendarToday />
                                    <h3>Event</h3>
                                </div>

                                <div className="messageSenderOption">
                                    <Assignment />
                                    <h3>Write Article</h3>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default CreatePost;