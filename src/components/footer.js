import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faGoogle,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

// create our App
const Bottom = () => (
  <div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-5 pt-5">
            <a
              className="ic"
              href="https://www.facebook.com/archit.ranjan"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
            </a>

            <a
              className="ic"
              href="https://twitter.com/archit_ranjan"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
            </a>

            <a
              className="ic"
              href="https://github.com/qubit99"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
            </a>

            <a
              className="ic"
              href="https://www.linkedin.com/in/archit-ranjan-907a1a173/"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="white" />
            </a>

            <a
              className="ic"
              href="mailto:architranjan9@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGoogle} size="lg" color="white" />
            </a>

            <a
              className="ic"
              href="https://www.instagram.com/archit_ranjan/?hl=en"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" color="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Bottom;
