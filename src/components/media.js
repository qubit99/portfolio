import React from "react";
import { Media } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const Message = () => (
  <div className="bg">
    <br />
    <div className=" row justify-content-center">
      <div className="col-10 col-lg-8">
        <div className="card card-body bg-dark" style={{ opacity: "0.7" }}>
          <blockquote className="blockquote">
            <p className="mb-0" style={{ color: "white" }}>
              The true sign of intelligence is not knowledge but imagination.
            </p>
            <footer className="blockquote-footer text-right">
              Albert Einstein
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
    <br />
    <Media className="bg contain row row-content align-items-center">
      <Media left href="#" className="col-12 col-sm-3 col-md-4 text-center">
        <Media
          object
          src="./assets/images/1.jpeg"
          height="70%"
          width="70%"
          alt="Generic placeholder image"
          className="rounded"
        />
      </Media>
      <Media body className="col col-sm col-md text-center">
        <Media heading>Hello, there!</Media>I am an aspiring developer and I
        love to code! My other hoobies include cooking, watching movies, dancing
        and travelling. Cosmology, programming and food define the world around
        me! I aspire to become a computer scientist and contribute to the
        technological advances that are already happening to bring automation
        and make a better planet for everyone!
      </Media>
    </Media>
    <br />
  </div>
);

export default Message;
