import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeetcodeNavItem = (props) => {
  return (
    <Nav.Link
      as={Link}
      eventKey={props.problemNumber}
      to={`/${props.problemNumber}`}
      className="p-0"
    >
      {props.problemNumber}. {props.problemName}
    </Nav.Link>
  );
};

export default LeetcodeNavItem;
