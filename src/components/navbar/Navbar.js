import React from "react";
import { Nav, NavDropdown, FormControl, Button, Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <>
      <Navbar bg='light' expand='lg' className='navbar'>
        <Navbar.Brand>
          <Link className='navLink' style={{ color: "black" }} to='/'>
            <h3>IGNOU@Grocery</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link>
              <Link className='navLink' to='/'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='navLink' to='/product'>
                Sales
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='navLink' to='/cart'>
                Cart
              </Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <h4 className='text-light'>Welcome @Neeraj verma</h4>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
