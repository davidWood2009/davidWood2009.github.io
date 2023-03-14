import React, { Component } from "react";
import "./photo-circular.css";
import photo from "./me-edited-200.jpeg";
class PhotoCircular extends Component {
  state = {};
  render() {
    return <img src={photo} className="circular" alt="Image of David" />;
  }
}

export default PhotoCircular;
