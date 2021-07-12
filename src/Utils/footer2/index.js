import React from "react"
import "./style.css"
const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
                <h5 className="normal">Shortly</h5>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="main-cate">features</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link Shorting</a></li>
                    <li><a href="#!">Branded Links</a></li>
                    <li><a href="#!">Analytics</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="main-cate">Resources</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Blog</a></li>
                    <li><a href="#!">Developers</a></li>
                    <li><a href="#!">Support</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="main-cate">Company</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Our Team</a></li>
                    <li><a href="#!">Careers</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/" style={{textDecoration:"none"}}> shashankkumarjha</a>
    </div>

</footer>

export default Footer