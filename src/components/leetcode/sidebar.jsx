import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./sidebar.css";
const Sidebar = (props) => {
  return (
    <Navbar className="p-0 ms-0" bg={props.theme} variant={props.theme}>
      <Nav className="p-0 justify-content-left" defaultActiveKey="home">
        <Container
          fluid
          className="align-items-start d-flex flex-column p-0 sidebar-container"
        >
          {props.children}
        </Container>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
