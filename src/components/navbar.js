import React, {Component, useState, useRef} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import SearchField from "react-search-field";
import { BsFillHouseDoorFill, BsPeopleFill, BsBriefcaseFill, BsFillCursorFill, BsFillBellFill, BsPeopleCircle } from "react-icons/bs";
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


const popover = (
	<Popover>
		<Popover.Title as="h3">
		<Nav.Link href="/#/profile"> HackerMan </Nav.Link>
		</Popover.Title>
		<Popover.Content>
		<strong>Account</strong>
		<br/>
		<Nav.Link href="/settings">Settings and Privacy </Nav.Link>
		<Nav.Link href="/help">Help </Nav.Link>
		<Nav.Link href="/signout">Sign Out </Nav.Link>
	</Popover.Content>
	</Popover>
	);

function NavAccount() {


	return (
	
		<OverlayTrigger
			placement="bottom"
			trigger="click"
			overlay={popover}>
			<Nav.Link className = "nav-item text-center">
				<BsPeopleCircle size = "30" title = "Account" /> 
			</Nav.Link>
		</OverlayTrigger>

	);
}

class NavBar extends Component{
    render() {
        return (
            <>
		<Container>
		    <Navbar className="navbar-light fixed-top shadow-sm d-flex justify-content-between py-0">
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
				<NavAccount />
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

