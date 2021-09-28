import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineArrowUp } from "react-icons/ai"
import { Nav } from 'react-bootstrap';
import { useContext } from 'react';
import App from '../App.js';
import { requestWithCsrf } from '../submitForm';

import Button from 'react-bootstrap/Button';

function AdminNavBar() {
    const context = useContext(App.UserContext);
    const signOut = (e) => requestWithCsrf("delete", process.env.REACT_APP_API_ROOT+"/session")(e)
	  .then((r) => { console.log(r); return r })
	  .then((r) => {
	      context.setUser({})
	      window.location = "#/"
	  })
	  .catch(() => { });


    return (
        <>
            <Navbar className="navbar-light fixed-top shadow-sm d-flex justify-content-between py-0">
                <Navbar.Brand className="navbar-brand fw-bold" href="#Home">
                    <AiOutlineArrowUp style={{ "float": "left" }} size="60" />
                    <text>Upgraded<br />Winner</text>
                </Navbar.Brand>
                <Nav></Nav>
                <Nav>
                    <Nav.Link onClick={() => signOut()}>Sign Out</Nav.Link>
                </Nav>
            </Navbar>
            <br />
            <br />
        </>
    );
}
export default AdminNavBar;
