import React from 'react'
import "./style.css"
import logo from "../../Images/logo.svg"
import {Form} from "react-bootstrap";
    import {FormControl} from "react-bootstrap";
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';


function Navbarmain() {
    return (
        <>
          <Navbar collapseOnSelect expand="lg"  variant="dark">
                <Navbar.Brand href="#home" id="brndname"><img src={logo} alt="logo" /></Navbar.Brand>
                <Form inline>
                     <FormControl type="text" placeholder="Search..." id="search"/>  
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="respon"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="ml-auto" id="Nav">
                        <Nav.Link href="#features" id="navitems">Features</Nav.Link>
                        <Nav.Link href="#pricing" id="navitems">Pricing</Nav.Link>
                        <Nav.Link href="#deets" id="navitems">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" id="navitems">
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navbarmain
