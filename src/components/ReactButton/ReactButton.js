import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { useState, useRef } from 'react'

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
    const [reaction, setReaction] = useState(0);
    const reaction_content=["Like", "👍", "👎", "❤️"]

    // TODO: send reaction to backend

    return (
        <>
                
            <Overlay
                target={self.current}
                show={show}
                placement='top' >
                        <Popover
                        onMouseOver={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}>
                    <ReactionPicker onClick={() => setReaction(1)}>
                        <ThumbUpRoundedIcon/>
                    </ReactionPicker>
                    <ReactionPicker onClick={() => setReaction(2)}>
                        <ThumbDownRoundedIcon/>
                    </ReactionPicker>
                    <ReactionPicker onClick={() => setReaction(3)}>
                        <FavoriteRoundedIcon/>
                    </ReactionPicker>
                </Popover>
                </Overlay>

                <Button variant="light"
                    onMouseOver={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    onClick={() => setReaction(0)}
                    ref={self}>

                    {reaction_content[reaction]}
                </Button>
        </>
    );
}

export default ReactButton;