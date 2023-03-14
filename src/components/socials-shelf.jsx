import React, { Component } from "react";
import GithubButton from "./github-icon";
class SocialsShelf extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-row p-2 bd-highlight">
        <GithubButton></GithubButton>
      </div>
    );
  }
}

export default SocialsShelf;
