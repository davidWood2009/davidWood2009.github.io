import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./leetcode.css";
import Sidebar from "./sidebar";
import LeetcodeNavItem from "./leetcode-nav-item";
import DataService from "../../services/data-service";
import { problemData } from "../../data/data";

const Leetcode = (props) => {
  // const listItems = (
  //   <LeetcodeNavItem problemNumber="problem1"></LeetcodeNavItem>
  // );

  return (
    <Container fluid>
      <Row className="justify-content-left">
        <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
          <p className="m-1">Problems</p>
          <Sidebar>
            {problemData.map((data, key) => {
              return (
                <LeetcodeNavItem
                  problemName={data.name}
                  problemNumber={data.number}
                ></LeetcodeNavItem>
              );
            })}
          </Sidebar>
        </Col>
        <Col>
          <div>Content</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Leetcode;
