import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TestApp from "./Test";
import ApiGet from "./Not Working/apiget";
import Navigation from "./navigation";
import NavBar from "./Not Working/nav";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Theme from "./pages/theme";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />

        <div>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={ApiGet} />
          <Route exact path="/user-profile/:userID" component={TestApp} />
          <Route exact path="/theme" component={Theme} />
        </div>
      </div>
    );
  }
}

// https://fasticboss.devcamp.space/portfolio/portfolio_blogs // api for getting blogs
