import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { useState, useRef } from 'react'
import { requestWithCsrf } from '../../submitForm';

import post from "axios";

function ReactionPicker(props) {
    return (
        <Button variant="link" {...props}>
            {props.children}
        </Button>
    );
}


function ReactButton (props) {

    const [show, setShow] = useState(false);
    const self = useRef(null);
    const [reaction, setReaction_] = props.reactionState;
    const reaction_content=
    {
        null: "Like",
        'like': "👍", 
        'dislike': "👎", 
        'love': "❤️"
    }
    const post_id = props.post_id;


    const setReaction = (reaction) => {
        if(reaction === 0) {
            requestWithCsrf("delete", "/post/"+props.post+"/react")({})
            .then(() => setReaction_(reaction))
            .catch(() => {})
        } else {
            requestWithCsrf("post", "/post/"+props.post+"/react")({reaction: reaction})
            .then(() => setReaction_(reaction))
            .catch(() => {})    
        }
	}


    return (
        <>
                
            <Overlay
                target={self.current}
                show={show}
                placement='top' >
                        <Popover
                        onMouseOver={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}>
                    <ReactionPicker onClick={() => setReaction('like')}>
                        <ThumbUpRoundedIcon/>
                    </ReactionPicker>
                    <ReactionPicker onClick={() => setReaction('dislike')}>
                        <ThumbDownRoundedIcon/>
                    </ReactionPicker>
                    <ReactionPicker onClick={() => setReaction('love')}>
                        <FavoriteRoundedIcon/>
                    </ReactionPicker>
                </Popover>
                </Overlay>

                <Button variant="light"
                    onMouseOver={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
			onClick={() => reaction === 0 ? setReaction(1) : setReaction(0)}
                    ref={self}>

                    {reaction_content[reaction]}
                </Button>
        </>
    );
}

export default ReactButton;
