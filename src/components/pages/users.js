import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { data } from "autoprefixer";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };

    this.userListMaker3000 = this.userListMaker3000.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users`).then((res) => {
      res.data.map((item) => {
        this.setState({
          users: this.state.users.concat(item),
        });
      });
    });
  }

  userListMaker3000() {
    return this.state.users.map((user) => {
      if (user.email == null) {
        return (
          <div className="usersU">
            <Link
              to={`user-profile/${user.id}`}
              key={user.id}
              className="user-wrapperU"
            >
              <div>
                <h1 className="usernameU">{user.username}</h1>
              </div>
            </Link>
          </div>
        );
      }

      return (
        <div className="users-wrapperU" key={user.id}>
          <div className="userU">
            <div className="aUser">
              <div>
                <h3 className="usernameU">{user.username}</h3>
                <h4 className="emailU"> {user.email}</h4>
              </div>

              <div className="userLinkWrapper">
                <Link className="userLinkU" to={`user-profile/${user.id}`}>
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1> USERS </h1>
        <br />
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
