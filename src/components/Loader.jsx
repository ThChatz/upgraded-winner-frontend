import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
function Loader() {
    return (
        <Container style={{"height": "36px", "width": "84px"}}>
        <Spinner animation="border" role="status" style ={{}}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </Container>
    );
}
export default Loader;