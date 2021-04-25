import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-scroll';

class Header extends React.Component {
 render() {
    return (
        <Navbar style= {{background:"#D7DCEE"}} expand="lg">
            <Navbar.Brand href="/">
                <img style={{height: "64px", width: "80px", paddingLeft: "0px"}} src="/Header/header_logo.png" alt="qrate"></img>
            </Navbar.Brand>
            <Navbar.Brand href="/">
                <img style={{height: "64px", width: "320px", paddingLeft: "0px"}} src="/Header/header_logo_text.png" alt="qrate"></img>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end" style={{paddingRight:"22px"}}>
                <Nav>
                    <Nav.Link style={{color: "#072B46", fontWeight:"500"}}>
                        <Link to="Page1" spy={true} smooth={true}>Methodology</Link>
                    </Nav.Link>
                    <Nav.Link style={{color: "#072B46", fontWeight:"500"}}>
                        <Link to="Page2" spy={true} smooth={true}>Products</Link>
                    </Nav.Link>
                    <Nav.Link style={{color: "#072B46", fontWeight:"500"}}>
                        <Link to="Page5" spy={true} smooth={true}>Contact</Link>
                    </Nav.Link>
                </Nav>                
            </Navbar.Collapse>
        </Navbar>
    );
 }
}

export default Header;