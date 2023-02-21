import React from "react";
import {
  Container,
  Form,
  // FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

// import { MenuItem, FormControl, Select } from "@material-ui/core";
// import logo from "../../corona-virus.svg";
// import { Link } from "react-router-dom";

const Header = () => {
  //log out handler
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    // this.props.history.push("/");
  };

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          {/* <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> */}
          CoV-19 Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <Nav className="m-auto">
            
          </Nav> */}
          <Nav className="m-auto">
            <Form className="d-flex">
              {/* <FormControl
                type=""
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> */}
            </Form>
          </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Link to="">
              <Nav.Link href="#action3">Prevention</Nav.Link>
            </Link> */}
            <NavDropdown title="Username" id="navbarScrollingDropdown">
              {/* {currentUser.username} */}
              <NavDropdown.Item href="#action3">
                <img
                  alt=""
                  src="../assets/corona-virus.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                My Profile
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" onClick={logoutHandler}>
                <img
                  alt=""
                  src="../assets/corona-virus.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
