import React, { Component } from "react";
import axios from "axios";

// import "./settingshelp";

export default class Theme extends Component {
  constructor() {
    super();

    this.state = {
      dynamicColor: "pink",
      dynamicColor2: "pink",
      dynamicTheme: "dark",

      theme: "dark",
    };
    this.updateColorPink = this.updateColorPink.bind(this);
    this.updateColorBlue = this.updateColorBlue.bind(this);
    this.updateColorPurple = this.updateColorPurple.bind(this);
    this.updateColorRed = this.updateColorRed.bind(this);
    this.updateColorPink1 = this.updateColorPink1.bind(this);
    this.updateColorBlue1 = this.updateColorBlue1.bind(this);
    this.updateColorPurple1 = this.updateColorPurple1.bind(this);
    this.updateColorRed1 = this.updateColorRed1.bind(this);
    this.updateThemeLight = this.updateThemeLight.bind(this);
    this.updateThemeDark = this.updateThemeDark.bind(this);
    this.updateThemeSolar = this.updateThemeSolar.bind(this);
  }

  // Theme

  updateThemeLight() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicTheme: "light",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicTheme: resp.data.dynamicTheme,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  updateThemeDark() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicTheme: "dark",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicTheme: resp.data.dynamicTheme,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  updateThemeSolar() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicTheme: "solar",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicTheme: resp.data.dynamicTheme,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  // color1

  updateColorPink1() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicColor1: "pink",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicColor1: resp.data.dynamicColor1,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  updateColorBlue1() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicColor1: "blue",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicColor1: resp.data.dynamicColor1,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  updateColorPurple1() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicColor1: "purple",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicColor1: resp.data.dynamicColor1,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  updateColorRed1() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicColor1: "red",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicColor1: resp.data.dynamicColor1,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  // color

  updateColorPink() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicColor: "pink",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicColor: resp.data.dynamicColor,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  updateColorBlue() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicColor: "blue",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicColor: resp.data.dynamicColor,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  updateColorPurple() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicColor: "purple",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicColor: resp.data.dynamicColor,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  updateColorRed() {
    axios
      .patch(`http://localhost:3000/colors/1`, {
        dynamicColor: "red",
      })
      .then((resp) => {
        console.log("resp", resp);
        this.setState({
          dynamicColor: resp.data.dynamicColor,
        });
      })
      .catch((err) => {
        console.error("error message", err);
      });
  }

  componentDidMount() {
    axios.get("http://localhost:3000/colors/1").then((res) => {
      this.setState({
        dynamicColor: res.data.dynamicColor,
        dynamicColor1: res.data.dynamicColor1,
        dynamicTheme: res.data.dynamicTheme,
      });
    });
  }

  render() {
    return (
      <div className={this.state.dynamicTheme}>
        <div className="helper">
          <header>
            <li className="theme-worker">
              <a className="theme" href="#">
                Theme
              </a>
              <ul className="dropdownS">
                <li className="dropdown-item">
                  <a id="light" href="#" onClick={this.updateThemeLight}>
                    light
                  </a>
                </li>
                <li className="dropdown-item">
                  <a id="dark" href="#" onClick={this.updateThemeDark}>
                    dark
                  </a>
                </li>
                <li className="dropdown-item" onClick={this.updateThemeSolar}>
                  <a id="solar" href="#">
                    solar
                  </a>
                </li>
              </ul>
            </li>
          </header>

          <main>
            <div className={this.state.dynamicColor1}>
              <div className="handleClick">
                <div className="theBox">
                  <div className="left-column-wrapper">
                    <button
                      className="button-pink"
                      onClick={this.updateColorPink1}
                    >
                      Pink
                    </button>
                  </div>

                  <div className="left-column-wrapper">
                    <button
                      className="button-blue"
                      onClick={this.updateColorBlue1}
                    >
                      Blue
                    </button>
                  </div>

                  <div className="left-column-wrapper">
                    <button
                      className="button-purple"
                      onClick={this.updateColorPurple1}
                    >
                      Purple
                    </button>
                  </div>
                  <div className="left-column-wrapper">
                    <button
                      className="button-red"
                      onClick={this.updateColorRed1}
                    >
                      Red
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${this.state.dynamicColor}`}>
              <div className="handleClick">
                <div className="theBox">
                  <div className="right-column-wrapper">
                    <button
                      className="button-pink"
                      onClick={this.updateColorPink}
                    >
                      Pink
                    </button>
                  </div>
                  <div className="right-column-wrapper">
                    <button
                      className="button-blue"
                      onClick={this.updateColorBlue}
                    >
                      Blue
                    </button>
                  </div>
                  <div className="right-column-wrapper">
                    <button
                      className="button-purple"
                      onClick={this.updateColorPurple}
                    >
                      Purple
                    </button>
                  </div>
                  <div className="right-column-wrapper">
                    <button
                      className="button-red"
                      onClick={this.updateColorRed}
                    >
                      Red
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
