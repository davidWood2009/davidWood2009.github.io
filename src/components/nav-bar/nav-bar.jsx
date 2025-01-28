import "./nav-bar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import LogoComponent from "../logo/logo-component";

import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar className="p-0" bg={props.theme} variant={props.theme}>
      <Container className="justify-content-center" fluid>
        {/* <Navbar.Brand className="p-2" href="#home">
          <LogoComponent />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-center" id="navbarScroll">
          <Nav defaultActiveKey="home" className="" navbarScroll>
            <Nav.Link as={Link} eventKey="home" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} eventKey="projects" to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} eventKey="leetcode" to="/leetcode">
              Leetcode
            </Nav.Link>
            <Nav.Link as={Link} eventKey="about" to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
