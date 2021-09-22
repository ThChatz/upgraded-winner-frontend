import { useState, useEffect } from 'react';
import get from "axios";

import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';

import ListGroup from 'react-bootstrap/ListGroup';
import InfiniteScroll from 'react-infinite-scroll-component';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const QualItem = (props) =>
	<Row>
		<Col>
			<h5>{props.profileName}</h5>
		</Col>
		<Col className="d-flex justify-content-end">
			<Form.Check type="checkbox" />
		</Col>
	</Row>



function QualPrivacy(props) {
	const [curPg, setPg] = useState(0);
	const [hasMore, setHasMore] = useState(true)

	const [items, setItems] = useState([]);

	const next_fn = function () {
		get(props.src + '/' + curPg)
			.catch(() => { setHasMore(false); return { "data": { "friends": [] } } })
			.then((response) => response.data.friends)
			.then((x) => { setItems(items.concat(x)); return x })
			.then((x) => x.length < 20 ? setHasMore(false) : 0);
		setPg(curPg + 1);
	}

	console.log(props.children)

	useEffect(next_fn, []);

	return (
		<div style={{
			"overflow": "auto",
			"height": "100%",
			"display": "flex",
			"flexDirection": "column",
			"boxSizing": "unset",
		}}>
			<InfiniteScroll
				dataLength={items.length}
				next={next_fn}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b></p>}>
				<ListGroup>
					{[...props.children, ...items.map((i) => <ListGroup.Item>
						<QualItem {...i} />

					</ListGroup.Item>)]}
				</ListGroup>
			</InfiniteScroll>
		</div>
	);

}

export default QualPrivacy;
