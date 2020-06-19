import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { data } from "autoprefixer";
import ReactHtmlParser from "react-html-parser";

import { getBlogItem } from "../Test";

export default class ApiGet extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };

    this.userListMaker3000 = this.userListMaker3000.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://fasticboss.devcamp.space/portfolio/portfolio_blogs`)
      .then((res) => {
        console.log("res", res);
        res.data.portfolio_blogs.map((item) => {
          this.setState({
            users: this.state.users.concat(item),
          });
        });
      });
  }

  userListMaker3000() {
    return this.state.users.map((user) => {
      if (user.featured_image_url == null) {
        var image_url = "https://i.stack.imgur.com/l60Hf.png";
      } else {
        var image_url = user.featured_image_url;
      }

      if (user.content == null) {
        return (
          <Link
            to={`user-profile/${user.id}`}
            key={user.id}
            className="comUserWrapper"
          >
            <img src={image_url} className="userImage"></img>
            <div>
              <h1 className="userTitle">{user.title}</h1>
            </div>
          </Link>
        );
      }

      return (
        <Link
          to={`user-profile/${user.id}`}
          key={user.id}
          className="comUserWrapper"
        >
          <img src={image_url} className="userImage"></img>
          <div>
            <h1 className="userTitle">{user.title}</h1>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
       <h1> USERS </h1><br />
        <br />
        <div>
          <ul className="userWrapper">
            <this.userListMaker3000 />
          </ul>
        </div>
      </div>
    );
  }
}
