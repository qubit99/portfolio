import React, { Component } from "react";
import { Media } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Bottom from "./footer";

import "../App.css";

class Aboutme extends Component {
  render() {
    return (
      <div className="bg aboutcss">
        <Header />
        <div className="jumbotron">
          <h1 className="container pt-4">
            Wow! A Whole page just about me XD!
          </h1>
        </div>
        <Media className="contain">
          I am an Information Technology student at Jadavpur University and I am
          an aspiring developer. I am always willing and dedicated to learn new
          things and keep myself updated with the advancements happening around
          me. If I have to choose 4 things I really love, it would Math,
          computers, physics and music! As of now, I am interested in
          programming languages and Artificial Intelligence. I spend my spare
          time by dancing, hanging out with friends, going out for a cinema or
          perhaps an odd club or pub, and eating at fancy resturants! :P
        </Media>
        <br />
        <br />
        <div class="container-fluid">
          <div className="row">
            <div className="col col-sm col-md">
              <h2>Interests</h2>
            </div>
          </div>
          <div className="row m-2">
            <div className="col col-sm col-md">
              <h3>Python</h3>
              <p>
                I was introduced to programming in class 11 through Python, and
                I have been love with it since then. Python is open source, easy
                to read and powerful which makes it the favourite language of
                most programmers. And the extensive support of libraries for
                Python is just an icing on the cake which makes it perfect for
                almost everything.
              </p>
            </div>
          </div>
          <div className="row m-2">
            <div className="col col-sm col-md">
              <h3>Machine Learning</h3>
              <p>
                Machine Learning is the FUTURE!! We had the industrial
                revolution, the green revolution and now we are in the AI
                revolution. This is primarily what attracted me to study this
                course in the first place. We are surrounded by technologies
                surrounded by AI, without even realizing. People often debate
                whether Machine Learning is actually AI or is it just another
                fancy name for Statistical Computing. Well, whatever we 'think'
                or 'feel' is a chemical reaction and our brain 'solves' some
                pretty complicated differential equations before we attempt to
                catch a ball. And our brain 'learns' from past experience to
                improve our skills. Well, present day computers are way behind
                Human Intelligence but can be classified as 'Intelligent'.
                Although I am currently a noob in this field, but I want to make
                a mark in this field!
              </p>
            </div>
          </div>
          <div className="row m-2">
            <div className="col col-sm col-md">
              <h3>Web Development</h3>
              <p>
                I started my development experience with frontend web
                development and I made a couple of small projects. I made this
                website in Reactjs. I have used Bootstrap for designing.
              </p>
            </div>
          </div>
        </div>

        <Bottom />
      </div>
    );
  }
}

export default Aboutme;
