import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Bottom from "./footer";
import "../App.css";

export class contactme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    alert("Thanks " + this.state.firstname + "!");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="bg childcss">
          <Header />

          <div className="row row-content">
            <div className="col-12 mx-5 m-2">
              <h3>Drop me a message!</h3>
            </div>
            <div className="col-12 col-md-9">
              <form className="px-5" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label">First Name</label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      id="firstname"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.handleChange}
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label">Last Name</label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      id="lastname"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.handleChange}
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-2 col-form-label">Your Email</label>
                  <div className="col-md-8">
                    <input
                      type="email"
                      className="form-control bg-dark text-light"
                      id="emailid"
                      name="emailid"
                      value={this.state.emailid}
                      onChange={this.handleChange}
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-2 col-form-label">
                    Your Message
                  </label>
                  <div className="col-md-8">
                    <textarea
                      className="form-control bg-dark text-light"
                      id="feedback"
                      name="feedback"
                      value={this.state.feedback}
                      onChange={this.handleChange}
                      rows="12"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-md-2 col-md-8">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <Bottom />
        </div>
      </div>
    );
  }
}

export default contactme;
