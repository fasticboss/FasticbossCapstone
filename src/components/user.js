import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

export default class TestApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.userID,
      blogItem: {},
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/users/${this.state.currentId}`)
      .then((res) => {
        this.setState({
          blogItem: res.data,
        });
      })
      .catch((error) => {
        console.error("getBlogItem error", error);
      });
  }

  render() {
    const { username, email, description, borf } = this.state.blogItem;

    const contentManager = () => {
      return (
        <div className="user-profile">
          <div className="user">
            <h1 className="usernameE">{username}</h1>
            <div className="emailE">{email}</div>
            <div className="borf">{borf}</div>
            <div className="desWrapper">
              <div className="descriptionE"> {description} </div>
            </div>
          </div>
        </div>
      );
    };

    return <div className="blog-container">{contentManager()}</div>;
  }
}
