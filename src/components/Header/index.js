import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import CapsDown from "../../icons/CapsDown.svg";
import Link from "next/link";

const Header = () => {
  useEffect(() => {
    const nav = document.querySelector(".site-header");
    window.addEventListener("scroll", fixNav);
    function fixNav() {
      if (window.scrollY > 20) {
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    }
  }, []);

  return (
    <div className="header-container">
      <Navbar collapseOnSelect expand="lg" className="site-header">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" href="/" passHref>
              <img src="/assets/images/logo.png" alt="logo" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="custom-class">
            <Nav className="">
              <Link href="/" passHref>
                <Nav.Link className="active">Home</Nav.Link>
              </Link>
              {/* <NavDropdown
                title={
                  <>
                  <p>
                  Services 
                  </p>
                  <span><CapsDown/></span>
                  </>
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown> */}

              <Link href="/team" passHref>
                <Nav.Link href="#features">Team</Nav.Link>
              </Link>
              <Link href="/portfolio" passHref>
                <Nav.Link href="#features">Portfolio</Nav.Link>
              </Link>
              <Link href="/contact-us" passHref>
                <Nav.Link href="#features">Contact Us</Nav.Link>
              </Link>
            </Nav>
            <Button className="btn-hire-us">Hire Us</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
