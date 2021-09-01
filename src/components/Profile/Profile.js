import NavBar from "../navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Profile.css';


function RecentPhotos(props) {
    return (
	<div className="overflow-hidden">
            <Container className="d-flex justify-content-around">
		<h5 className="mb-0">Recent photos</h5>
		<a href="#" className="btn btn-link text-muted">Show all</a>
	    </Container>
	    <Row>
		<div className="col-lg-6 mb-2 pl-lg-1">
		    <img src="https://images.theconversation.com/files/125391/original/image-20160606-13080-s7o3qu.jpg?ixlib=rb-1.1.0&rect=273%2C0%2C2639%2C1379&q=45&auto=format&w=926&fit=clip" alt="" className="img-fluid rounded shadow-sm" />
		</div>
		<div className="col-lg-6 mb-2 pl-lg-1">
		    <img src="https://images.theconversation.com/files/125391/original/image-20160606-13080-s7o3qu.jpg?ixlib=rb-1.1.0&rect=273%2C0%2C2639%2C1379&q=45&auto=format&w=926&fit=clip" alt="" className="img-fluid rounded shadow-sm" />
		</div>
	    </Row>
	</div>
    );
}

function RecentPosts(props) {
    return (
	<>
	    <Container className="d-flex justify-content-around">
		<h5 className="mb-0">Recent Posts</h5>
	    </Container>

            <div className="p-4 bg-light rounded shadow-sm">
                <p className="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul className="list-inline small text-muted mt-3 mb-0">
                    <li className="list-inline-item"><i className="fa fa-comment-o mr-2"></i>12 Comments</li>
                    <li className="list-inline-item"><i className="fa fa-heart-o mr-2"></i>200 Likes</li>
                </ul>
            </div>
            <div className="p-4 bg-light rounded shadow-sm">
                <p className="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul className="list-inline small text-muted mt-3 mb-0">
                    <li className="list-inline-item"><i className="fa fa-comment-o mr-2"></i>12 Comments</li>
                    <li className="list-inline-item"><i className="fa fa-heart-o mr-2"></i>200 Likes</li>
                </ul>
            </div>


	</>
    );
}

function Profile(props) {
    // props should contain
    // ProfileName: username
    // ProfilePicurl: url of profile pic

    return (
        <Container className="bg-white shadow rounded ">
            <div className="px-4 pt-0 pb-4 bg-dark">
                <div className="align-items-end profile-header">
                    <div className="mb-5 text-white">
                        <h4 className="mt-0 mb-0">{props.ProfileName}</h4>
                        <p className="small mb-4">
			    <i className="fa fa-map-marker mr-2"></i>
			    {props.ProfileLocation}
			</p>
                    </div>

                    <div className="profile mr-3 ">
		    <img src={props.ProfilePicUrl} alt="..." width="130" className="rounded mb-2 img-thumbnail"/><br /><a href="#" className="btn btn-dark btn-sm btn-block">Edit profile</a></div>
                </div>
            </div>
	    
	    <br style={{"line-height": "5em"}}/>
            <div className="py-5 px-4 profile-body">
                {props.children}
            </div>
            </Container>
    );
}


export {RecentPhotos, RecentPosts, Profile};
