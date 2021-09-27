import React, { Component, useState, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineArrowUp } from "react-icons/ai"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Login from './LoginView';
import Footer from '../components/Footer/Footer';

class WelcomePage extends Component {
    render() {
        return (
            <>
                <Container>
                    <Navbar className="navbar-light fixed-top shadow-sm d-flex justify-content-between py-0">
                        <Navbar.Brand className="navbar-brand fw-bold" href="#profile">
                            <AiOutlineArrowUp style={{ "float": "left" }} size="60" />
                            <text>Upgraded<br />Winner</text>
                        </Navbar.Brand>

                        <Nav>
                            <Nav.Link href="#signup">Join Now</Nav.Link>
                            <Nav.Link href="#login">Sign In</Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
                <br /><br />
                <br /><br />
                <div></div>
                <Container>
                    <Row>
                        <Col>
                            <Login />
                        </Col>
                        <Col>
                            <Image src={process.env.PUBLIC_URL+"/welcome.jpg"} fluid />
                        </Col>
                    </Row>
                    
                </Container>
                <Row>
                        <div style={{ backgroundColor: '#B2BEB5' }}>
                            <br /><br />
                            <br /><br />
                            <h1>Find the right job or internship for you</h1>
                            <h3>Browse through our list of available jobs and find the best for your needs.</h3>
                            <br /><br />
                            <br /><br />
                        </div>
                    </Row>
                <Footer/>


                <br />
                <br />
            </>
        );
    }
}

export default WelcomePage;

