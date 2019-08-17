import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="app">
          <Navbar
            className="navbar navbar-dark navbar-expand-sm fixed-top navcss"
            expand="md">
            <Link className="p-2" tag={Link} to="/home">
              <img
                src="./assets/images/home.JPG"
                height="35"
                width="46"
                alt="yar"
              />
            </Link>
            <Nav className="ml-auto">
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="navbar-brand brackets"
                    to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="navbar-brand brackets"
                    to="/aboutme">
                    About Me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="navbar-brand brackets"
                    to="/blog">
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="navbar-brand brackets"
                    to="/contact">
                    Contact Me
                  </NavLink>
                </NavItem>
              </Collapse>
            </Nav>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
