import React from "react"
import { AiOutlineArrowUp } from "react-icons/ai"

const Footer = () => <footer className="page-footer font-small blue pt-4" style ={{backgroundColor:'#CFCFCF'}}>
    <div className="navbar-brand fw-bold">

        <AiOutlineArrowUp style={{ "float": "left" }} size="60" />
        <text>Upgraded<br />Winner</text>
    </div>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">

                
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">General</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Sign Up</a></li>
                    <li><a href="#!">Sign In</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Browse</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Feed</a></li>
                    <li><a href="#!">Jobs</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a href="#"> Upgradedwinner.com</a>
    </div>

</footer>

export default Footer
