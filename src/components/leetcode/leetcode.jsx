import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./leetcode.css";
import Sidebar from "./sidebar";
import LeetcodeNavItem from "./leetcode-nav-item";
import { problemData } from "../../data/data";
import LeetcodeContent from "./leetcode-content";

const Leetcode = (props) => {
  const [problemSelected, setProblemSelected] = useState({});

  const navItemClicked = (problem) => {
    setProblemSelected(problem);
  };

  return (
    <Container fluid>
      <Row className="flex-nowrap ms-1 p-0">
        <Col className="p-0" xs={2} sm={2}>
          <Container className="p-0">
            <Sidebar>
              {problemData.map((data, key) => {
                return (
                  <LeetcodeNavItem
                    key={data.number}
                    problemName={data.name}
                    problemNumber={data.number}
                    onClick={() => navItemClicked(data)}
                  ></LeetcodeNavItem>
                );
              })}
            </Sidebar>
          </Container>
        </Col>
        <Col className="p-0">
          <Container className="p-0">
            <LeetcodeContent problem={problemSelected} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Leetcode;
