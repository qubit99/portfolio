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
        <Route path="/home" component={HomePage} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/blog" component={blog} />
        <Route exact path="/contact" component={contactme} />;
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default Main;
