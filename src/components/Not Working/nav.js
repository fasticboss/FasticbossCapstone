import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

// import ApiSpotify from "./api-spotify";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="nav-bar">
          <div className="navLinks">
            <div className="nav-link">
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div className="nav-link">
              <Link className="link" to="/about">
                About
              </Link>
            </div>
            <div className="nav-link">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </div>
            <div className="nav-link">
              <Link className="link" to="/music">
                Other
              </Link>
            </div>
          </div>

          <div></div>

          <div className="title-extra">
            {/* <ApiSpotify /> */}
          </div>
        </div>
      </div>
    );
  }
}
