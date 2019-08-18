import React, { Component } from "react";
import Home from "./HomeComponent";
import Aboutme from "./aboutme_media";
import blog from "./blogpage";
import contactme from "./contact.js";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <Switch>
        <Route path="/portfolio/home" component={HomePage} />
        <Route exact path="/portfolio/aboutme" component={Aboutme} />
        <Route exact path="/portfolio/blog" component={blog} />
        <Route exact path="/portfolio/contact" component={contactme} />;
        <Redirect to="/portfolio/home" />
      </Switch>
    );
  }
}

export default Main;
