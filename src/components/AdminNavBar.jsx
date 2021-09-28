import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineArrowUp } from "react-icons/ai"
import { Nav } from 'react-bootstrap';
function AdminNavBar() {
    return (
        <>
            <Navbar className="navbar-light fixed-top shadow-sm d-flex justify-content-between py-0">
                <Navbar.Brand className="navbar-brand fw-bold" href="#Home">
                    <AiOutlineArrowUp style={{ "float": "left" }} size="60" />
                    <text>Upgraded<br />Winner</text>
                </Navbar.Brand>
                <Nav></Nav>
                <Nav>
                    <Nav.Link href="#">Sign Out</Nav.Link>
                </Nav>
            </Navbar>
            <br />
            <br />
        </>
    );
}
export default AdminNavBar;