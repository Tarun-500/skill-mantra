import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Image from 'next/image';
const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/images/logo.png" 
            alt="Skill Mantra Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="ms-2 fw-bold" style={{ color: '#222' }}>
            Skill <span style={{ color: '#00d9c0' }}>Mantra</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="/courses" className="mx-2">
              Courses
            </Nav.Link>
            <Nav.Link href="/about" className="mx-2">
              About Us
            </Nav.Link>
          </Nav>

          <div className="d-flex ms-3">
            <Button variant="outline-primary" className="me-2">
              Sign In
            </Button>
            <Button variant="primary">Log In</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;