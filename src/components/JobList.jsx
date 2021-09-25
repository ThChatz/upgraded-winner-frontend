import { useState, useEffect } from 'react';
import get from "axios";
import Loader from './Loader';
import Media from 'react-bootstrap/Media';
import ListGroup from 'react-bootstrap/ListGroup';
import InfiniteScroll from 'react-infinite-scroll-component';

const JobListItem = (props) =>
<Media>
    <img src={props.companyLogo} />
    <Media.Body>
	<h5>{props.companyName}</h5>
	<p>{props.jobDescription}</p>
    </Media.Body>
</Media>;


function JobList(props) {
    const [curPg, setPg] = useState(0);
    const [hasMore, setHasMore] = useState(true)

    const [items, setItems] = useState([]);

    const next_fn = function () {
	get(props.src+'/'+curPg)
	    .catch(() => {setHasMore(false); return {"data": {"jobs": []}}})
	    .then((response) => response.data.jobs)
	    .then((x) => {setItems(items.concat(x)); return x})
	    .then((x) => x.length < 20 ? setHasMore(false) : 0);
	setPg(curPg+1);
    }
    

    useEffect(next_fn, []);

    return (
	<InfiniteScroll
	    dataLength={items.length}
	    next={next_fn}
	    hasMore={hasMore}
	    loader={<h4>Loading</h4>}
	    endMessage={
		<p style={{ textAlign: 'center' }}>
		<b>Yay! You have seen it all</b></p>}>
	    <ListGroup>
		{items.map((i) => <ListGroup.Item>
				     <JobListItem {...i} />
				 </ListGroup.Item>)}
	    </ListGroup>
	</InfiniteScroll>
    );

}

export default JobList;
