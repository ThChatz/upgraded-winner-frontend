import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'bootstrap';
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import SearchField from "react-search-field";
import { BsFillHouseDoorFill, BsPeopleFill, BsBriefcaseFill, BsFillCursorFill, BsFillBellFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai"

function NavHome() {
    return (
	<Nav.Link className="nav-item text-center" href="#Home">
 	    <BsFillHouseDoorFill size="30" title="Home" /><br/>
 	</Nav.Link>);
}

function NavNetwork() {
    return (
	<Nav.Link className="nav-item text-center" href="#Network">
 	    <BsPeopleFill size="30" title="Network" /><br/>
 	</Nav.Link>);
}

function NavJobs() {
    return (
	<Nav.Link className="nav-item text-center" href="#Jobs">
 	    <BsBriefcaseFill size="30" title="Jobs" /><br/>
 	</Nav.Link>);
}

function NavMessages() {
    return (
	<Nav.Link className="nav-item text-center" href="#Messages">
 	    <BsFillCursorFill size="30" title="Messages" /><br/>
 	</Nav.Link>);
}

function NavNotifications() {
    return (
	<Nav.Link className="nav-item text-center" href="#Notifications">
 	    <BsFillBellFill size="30" title="Notifications" /><br/>
 	</Nav.Link>);
}

class NavBar extends Component{
    render() {
        return (
            <>
		<Container>
		    <Navbar className="navbar-light fixed-top shadow-sm d-flex justify-content-between py-0" >
			<Navbar.Brand className="navbar-brand fw-bold" href="#profile">
			    <AiOutlineArrowUp style={{"float": "left"}} size="60"/>
			    <text>Upgraded<br/>Winner</text>
			</Navbar.Brand>
			<SearchField
			    placeholder="Search..."
			    // onChange={onChange}
			    classNames="test-class"
			/>
			<Nav>
			    <NavHome />
			    <NavNetwork />
			    <NavJobs />
			    <NavMessages />
			    <NavNotifications />
			</Nav>
		    </Navbar>     
		</Container>
		<br/>
		<br/>  
            </>
        );
    }
}

export default NavBar;

