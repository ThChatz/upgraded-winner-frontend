import React from 'react';

import NavBar from '../components/navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// This is the standard 3-column layout with a navbar

const LeftSideBar = (props) =>
<Col xs={4} {...props}>
    {props.children}
</Col>;

const Content = (props) =>
<Col xs={8} {...props}>
    {props.children}
</Col>

function TwoColLayout(props) {
    let Left_ =
	props.children.find(({ type }) => type === LeftSideBar);
    let Content_ =
	props.children.find(({ type }) => type === Content);

    return(
	<Col {...props}>
	    <NavBar />
	    <Container className="py-5">
		<Row>
		    {Left_ ? Left_ : LeftSideBar({})}
		    {Content_ ? Content_ : Content({})}
		</Row>
	    </Container>
	</Col>);
}

TwoColLayout.LeftSideBar = LeftSideBar;
TwoColLayout.Content = Content;

export default TwoColLayout;
