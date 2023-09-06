import React, { Component } from "react";
import logo from "./logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  
  
  render() {
    return (
      <div className="Navcontainer">
        <div className="newsLogo">
          <img src={logo} alt="logo" />
          
          <Link to="/business">Business</Link>
                <Link to="/entertainment">Entertainment</Link>
                <Link to="/general">General</Link>
                <Link to="/health">Health</Link>
                <Link to="/science">Science</Link>
        </div>
        <div className="login">
          <a href="/">Login</a>
        </div>
      </div>
    );
  }
}
