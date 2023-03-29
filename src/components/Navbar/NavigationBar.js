import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      variant="light"
      bg="light"
      className="shadow"
      id="navTop"
      // style={{
      //   backgroundColor: "#FFDEE9",
      //   backgroundImage: "linear-gradient(0deg, #e5dbd950 0%, #173d4830 100%)",
      // }}
    >
      <Container>
        <Navbar.Brand href="/">User Input Manipulation</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Contact us</Nav.Link>
            <Nav.Link
              eventKey={2}
              href="https://www.google.com/maps/dir//SA_Interior_Scapes/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2c17853b6e3bd:0xa1244618292130ca!2m2!1d73.86110409999999!2d18.5125366"
              target="_blank"
            >
              Get Directions
            </Nav.Link>
            <Nav.Link
              href="https://www.facebook.com/aishwaryakhinvasaraa"
              target="_blank"
            >
              <i class="fa fa-facebook"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/sa_interior_scapes/?hl=en"
              target="_blank"
            >
              <i class="fa fa-instagram"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.youtube.com/channel/UC-vTo8hZf5CXbzvVKjLIizg"
              target="_blank"
            >
              <i class="fa fa-youtube"></i>
            </Nav.Link>
            <Nav.Link
              href="https://twitter.com/sainteriorscape"
              target="_blank"
            >
              <i class="fa fa-twitter"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/aishwarya-khinvasara-18051998a/"
              target="_blank"
            >
              <i class="fa fa-linkedin"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
