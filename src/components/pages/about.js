import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import AboutImg from "../../../static/assets/IMAGES/me2.jpg";

export default class AboutPage extends Component {
  constructor() {
    super();

    this.state = {
      title: "About",
      contentMain: "contentMain",
      contentSecondary: "contentSecondary",
    };
  }

  render() {
    return (
      <div className="about-wrapper">
        <div className="about">
          <div className="left-columnA">
            <img className="imgA" src={AboutImg} alt="me" />
          </div>
          <div className="right-columnA">
            <div className="title">{this.state.title}</div>
            <div className="contentA">
              <div className="contentMain">{this.state.contentMain}</div>
              <div className="contentSecondary">
                {this.state.contentSecondary}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
