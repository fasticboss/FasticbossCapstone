import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import ContactImg from "../../../static/assets/IMAGES/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFhone,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact">
          <div className="left-columnC">
            <img src={`${ContactImg}`} alt="contactPageImage" />
          </div>
          <div className="right-columnC">
            <div className="columnC">
              <div className="number">
                <p>
                  <FontAwesomeIcon icon={faMobileAlt} /> 636-700-2634
                </p>
              </div>
              <div className="email">
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> enochleb123
                  <span>@gmail.com</span>
                </p>
              </div>
              <div className="location">
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> chihuahua Mexico
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
