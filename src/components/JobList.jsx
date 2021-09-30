import { useState, useEffect } from 'react';
import get from "axios";
import Loader from './Loader';
import Media from 'react-bootstrap/Media';
import ListGroup from 'react-bootstrap/ListGroup';
import FetchScroll from './FetchScroll/FetchScroll';

const JobListItem = (props) =>
	<Media>
		<img src={props.pic} />
		<Media.Body>
			<h5>{props.title}</h5>
			<p>{props.description_short}</p>
		</Media.Body>
	</Media>;


function JobList(props) {
	const [curPg, setPg] = useState(0);
	const [hasMore, setHasMore] = useState(true)

	const [items, setItems] = useState([]);

	const next_fn = function () {
		get(process.env.REACT_APP_API_ROOT + props.src)
			.then((response) => response.data)
			.then((x) => { setItems(items.concat(x)); return x })
			.then((x) => x.length < 20 ? setHasMore(false) : 0)
			.catch(() => {});
		setPg(curPg + 1);
	}


	useEffect(next_fn, []);

	return (
		<FetchScroll
			src={props.src}
			inverse={false}
			wrapFn={(items) => <ListGroup>{items}</ListGroup>}
			mapFn={(item) =>
				<ListGroup.Item key={item.id} >
					<JobListItem {...item} />
				</ListGroup.Item>} />
	);

}

export default JobList;
