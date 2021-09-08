import React from 'react';

import NavBar from '../components/navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// This is the standard 3-column layout with a navbar

const LeftSideBar = (props) =>
<Col md={4} className="d-none d-md-flex" {...props}>
    {props.children}
</Col>;

const Content = (props) =>
<Col md={8} {...props}>
    {props.children}
</Col>

const RightSideBar = (props) =>
<Col xs={2} className={"d-none d-lg-flex" + props.className} {...props}>
    {props.children}
</Col>;

function DefaultLayout(props) {
    let Left_ =
	props.children.find(({ type }) => type === LeftSideBar);
    let Content_ =
	props.children.find(({ type }) => type === Content);
    let Right_ =
	props.children.find(({ type }) => type === RightSideBar);
    

    return(
	<Col>
	    <NavBar />
	    <Container className="py-5">
		<Row>
		    {Left_ ? Left_ : LeftSideBar({})}
		    {Content_ ? Content_ : Content({})}
		    {Right_ ? Right_ : RightSideBar({})}
		</Row>
	    </Container>
	</Col>);
}

DefaultLayout.LeftSideBar = LeftSideBar;
DefaultLayout.RightSideBar = RightSideBar;
DefaultLayout.Content = Content;

export default DefaultLayout;
