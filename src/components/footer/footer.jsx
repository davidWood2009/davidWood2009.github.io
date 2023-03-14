import React, { Component } from "react";
import DarkMode from "../dark-mode/dark-mode";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <footer className="d-flex flex-row justify-content-center footer">
        <DarkMode></DarkMode>
      </footer>
    );
  }
}

export default Footer;
