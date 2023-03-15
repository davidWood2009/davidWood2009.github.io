import React from "react";
import { Button } from "react-bootstrap";
import "./leetcode-nav-item.css";

const LeetcodeNavItem = (props) => {
  return (
    <Button className="nav-link p-0" variant="link" onClick={props.onClick}>
      {props.problemNumber}. {props.problemName}
    </Button>
  );
};

export default LeetcodeNavItem;
