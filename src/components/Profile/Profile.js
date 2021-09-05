import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Profile.css';



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


export default Profile;
