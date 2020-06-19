import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
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

  // dynamicColor: "pink",
  // dynamicColor2: "pink",
  // dynamicTheme: "dark",

  // theme: "dark",
  // <div className={this.state.dynamicTheme}></div>

  render() {
    return <div className="home-wrapper"></div>;
  }
}
