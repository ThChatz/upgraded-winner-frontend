import React, { Component, useState, useRef, useContext, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button'
import Media from 'react-bootstrap/Media';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import SearchField from "react-search-field";
import { BsFillHouseDoorFill, BsPeopleFill, BsBriefcaseFill, BsFillCursorFill, BsFillBellFill, BsPeopleCircle } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai"
import { requestWithCsrf } from '../submitForm';
import App from '../App';
import get from 'axios';
import FetchScroll from './FetchScroll/FetchScroll';
function NavHome() {
	return (
		<Nav.Link className="nav-item text-center" href="#Home">
			<BsFillHouseDoorFill size="30" title="Home" /><br />
		</Nav.Link>);
}

function NavNetwork() {
	return (
		<Nav.Link className="nav-item text-center" href="#Network">
			<BsPeopleFill size="30" title="Network" /><br />
		</Nav.Link>);
}

function NavJobs() {
	return (
		<Nav.Link className="nav-item text-center" href="#Jobs">
			<BsBriefcaseFill size="30" title="Jobs" /><br />
		</Nav.Link>);
}

function NavMessages() {
	return (
		<Nav.Link className="nav-item text-center" href="#Conversations">
			<BsFillCursorFill size="30" title="Messages" /><br />
		</Nav.Link>);
}

{/* Notification Link */ }
const NotificationsItem = (props) =>
	<a href={"#"}>
		<Media>
			<img src={props.profilePic} alt={props.profileName} />
			<Media.Body>
				<p>The user {props.profileName} {props.notification}</p>
			</Media.Body>
		</Media>
	</a>;

function NavNotifications(props) {
	const ref = useRef();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


		const [curPg, setPg] = useState(0);
	const [hasMore, setHasMore] = useState(true)

	const [items, setItems] = useState([]);

	const next_fn = function () {
		get(process.env.REACT_APP_API_ROOT+props.src)
			.catch(() => { setHasMore(false); return { "data": { "notification_ids": [] } } })
			.then((response) => response.data.notification_ids)
			.then((x) => setItems(items.concat(x)));
	}


	useEffect(next_fn, []);

	const notifications_popover = (
		<Popover>
			<Popover.Content>
			<FetchScroll
				inverse={false}
				mapFn={NotificationsItem}
				src={props.src}/>
			</Popover.Content>
			{/* ... */}
		</Popover>
		
		);
	
	return (


		<OverlayTrigger
			placement="bottom"
			trigger="click"
			overlay={notifications_popover}
			rootClose>
			<Nav.Link className="nav-item text-center">
				<BsFillBellFill size="30" title="Notifications" /><br />
			</Nav.Link>
		</OverlayTrigger>


	);
}





function NavAccount() {

	const context = useContext(App.UserContext);
	const onClick = (e) => requestWithCsrf("delete", "/session")(e)
		.then((r) => { console.log(r); return r })
		.then((r) => {
			context.setUser({})
			window.location = "#"
		})
		.catch(() => { });


	const popover = (
		<Popover>
			<Popover.Title as="h3">
				<Nav.Link href="#/u/my-account"> HackerMan </Nav.Link>
			</Popover.Title>
			<Popover.Content>
				<strong>Account</strong>
				<br />
				<Nav.Link href="#settings">Settings and Privacy </Nav.Link>
				<Nav.Link href="#help">Help </Nav.Link>
			    <Button onClick={() => onClick()} variant="link"> Sign Out </Button>
			</Popover.Content>
		</Popover>
	);

	return (

		<OverlayTrigger
			placement="bottom"
			trigger="click"
			overlay={popover}
			rootClose>
			<Nav.Link className="nav-item text-center">
				<BsPeopleCircle size="30" title="Account" />
			</Nav.Link>
		</OverlayTrigger>

	);
}

class NavBar extends Component {
	render() {
		return (
			<>
				<Container>
					<Navbar className="navbar-light fixed-top shadow-sm d-flex justify-content-between py-0">
						<Navbar.Brand className="navbar-brand fw-bold" href="#Home">
							<AiOutlineArrowUp style={{ "float": "left" }} size="60" />
							<text>Upgraded<br />Winner</text>
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

				<br />
				<br />
			</>
		);
	}
}

export default NavBar;

