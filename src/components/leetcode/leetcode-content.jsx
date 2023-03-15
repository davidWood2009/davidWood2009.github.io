import React from "react";
import Container from "react-bootstrap/Container";
import ReactEmbedGist from "react-embed-gist";

const LeetcodeContent = (props) => {
  const { problem } = props;
  const { name, number, description, gistId } = problem;

  const fullName = `${number}. ${name}`;

  if (name) {
    return (
      <Container className="justify-content-center" fluid>
        <h2>{number ? fullName : null}</h2>
        <p>{description}</p>
        <Container fluid>
          {gistId != undefined && <ReactEmbedGist gist={gistId} />}
        </Container>
      </Container>
    );
  } else {
    return <div></div>;
  }
};

export default LeetcodeContent;
