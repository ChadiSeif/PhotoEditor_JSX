import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link exact to="/">
              Home
            </Link>
            <Link exact to="/Posts">
              Posts
            </Link>
            <Link exact to="/Comments">
              Comments
            </Link>
            {/* <Nav.Link href="#action2">Posts</Nav.Link>
            <Nav.Link href="#action2">Comments</Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Filter..."
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Filter</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
