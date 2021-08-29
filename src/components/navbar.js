import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'bootstrap';
import SearchField from "react-search-field";
import { BsFillHouseDoorFill, BsPeopleFill, BsBriefcaseFill, BsFillCursorFill, BsFillBellFill } from "react-icons/bs";

class NavBar extends Component{
    render() {
        return (
            <>
            <Navbar className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
                <Container className="container px-5">
                <Navbar.Brand className="navbar-brand fw-bold" href="#home">Linked out</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <SearchField
                        placeholder="Search..."
                        // onChange={onChange}
                        // searchText="Search..."
                        classNames="test-class"
                    />
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-item" href="#Home"><BsFillHouseDoorFill size="30" title="Home" /><br/></Nav.Link>
                        <Nav.Link className="nav-item" href="#Network"><BsPeopleFill size="30" title="Home" /><br/></Nav.Link>
                        <Nav.Link className="nav-item" href="#Jobs"><BsBriefcaseFill size="30" title="Home" /><br/></Nav.Link>
                        <Nav.Link className="nav-item" href="#Messaging"><BsFillCursorFill size="30" title="Home" /><br/></Nav.Link>
                        <Nav.Link className="nav-item" href="#Notifications"><BsFillBellFill size="30" title="Home" /><br/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>     
            <br/>
            <br/>  
            </>
        );
    }
}

export default NavBar;

