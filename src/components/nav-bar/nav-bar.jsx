import "./nav-bar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import LogoComponent from "../logo/logo-component";

import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar bg={props.theme} variant={props.theme} expand="sm">
      <Container className="justify-content-left" fluid>
        <Navbar.Brand href="#home">
          <LogoComponent />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            defaultActiveKey="home"
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
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
