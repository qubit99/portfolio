import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Bottom from "./footer";
import { Link } from "react-router-dom";
import pythonblog from "./blogs/python_blog";

const blogs = [
  {
    id: 1,
    blogheading: "Why I love Python",
    blogcontent: " My views on Python's increasing popularity among developers."
  },
  {
    id: 2,
    blogheading: "How I made this website",
    blogcontent:
      " Want to know how I made this portfolio? Check my deatailed blog here and learn to make your own portfolio with react!"
  },
  {
    id: 3,
    blogheading: "My favourite topics in physics!",
    blogcontent:
      " I discuss about womholes, blackholes and the long way we have come since Galileo and still how much is left there to discover!"
  },
  {
    id: 4,
    blogheading: "Cost function in Logistic Regression explained!",
    blogcontent:
      " Here I show, how we can get more intuition about the cost function in logistic regression with the help of Maximum Likelihood Estimation! "
  }
];

function searchingFor(term) {
  return function(x) {
    return x.blogheading.toLowerCase().includes(term.toLowerCase()) || null;
  };
}

class blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: blogs,
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="bg childcss">
        <Header />
        <div className="jumbotron row">
          <div className="col-12 col-sm-6 text-center">
            <h1 className="container">Feeling bored? Read my blogs!</h1>
          </div>
          <div className="col-12 col-sm-6 text-center">
            <input
              type="text"
              maxlength="12"
              placeholder="Search..."
              className="searchbar"
              onChange={this.searchHandler}
            />
          </div>
        </div>
        <br />
        <div>
          {this.state.blogs.filter(searchingFor(this.state.term)).map(post => (
            <div className="contain" key={post.id}>
              <Link
                to="pythonblog"
                Route
                exact
                path="./blog/pythonblog"
                component={pythonblog}
                className="bloglink">
                <h2>{post.blogheading}</h2>
                <p>{post.blogcontent}</p>
              </Link>
              <br />
            </div>
          ))}
        </div>
        <br />
        <div className=" row justify-content-center">
          <div className="col-10 col-lg-8">
            <div className="card card-body bg-dark" style={{ opacity: "0.7" }}>
              <blockquote className="blockquote">
                <p className="mb-0" style={{ color: "white" }}>
                  “Blogging is a conversation, not a code.”
                </p>
                <footer className="blockquote-footer text-right">
                  Mike Butcher
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Bottom />
      </div>
    );
  }
}

export default blog;
