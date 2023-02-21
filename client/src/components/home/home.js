import React, { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                <h1 className="title">Welcome to CoV-19 Tracker </h1>
                <p className="subtitle">
                  The best platform to keep track of the currrent corona virus
                  cases in a region.
                </p>
                <div className="buttonContainer">
                  <Link to="/login">
                    <Button size="lg" className="landingbutton">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      variant="outline-primary"
                      size="lg"
                      className="landingbutton"
                    >
                      Signup
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
