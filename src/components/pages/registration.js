import React, { Component } from "react";
import axios from "axios";

export default class Res extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      description: "",
      borf: "Fun",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("Yes");
    axios
      .post("http://localhost:3000/users", {
        username: this.state.username,
        email: this.state.email,
        description: this.state.description,
        borf: this.state.borf,
      })
      .then(
        this.setState({
          username: "",
          email: "",
          description: "",
          borf: this.state.borf,
        })
      );
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="resWrapper">
        <h1>Add User</h1>
        <div className="formWrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="selectWrapper">
              <label for="cars">Here For?</label>
              <select
                name="borf"
                value={this.state.borf}
                onChange={this.handleChange}
              >
                <option value="Fun">Fun</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <div className="inputWrapper">
              <input
                type="text"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="textareaWrapper">
              <textarea
                type="description"
                placeholder="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btnR">
                Add user
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
