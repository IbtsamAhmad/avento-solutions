import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Button from "react-bootstrap/Button";
const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center hero-row">
          <Col sm={12} md={7} lg={7}>
            <h1 className="heading">
              Delivering Unblemished <br></br>Infotech Solutions
            </h1>
            <p className="description">
              Our motive is to bring your ideas to life! Avento solutions is
              here to help you get your work done as quickly as possible. Our
              general role is vital to the growth of effective communications.
            </p>
            <div className="btn-wrap">
              <Button className="hero-btn">Start a Project</Button>
              <a className="more-link">More About Us</a>
            </div>
          </Col>
          <Col sm={12} md={5} lg={5} className="hero-img-column">
            <img
              src="assets/images/home-hero-img.png"
              alt=""
              className="home-hero-img"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="align-items-center goal-container">
          <Col sm={12} md={5} lg={5}>
            <h1 className="heading">
              We are <br />
              Avento Solutions
            </h1>
          </Col>
          <Col sm={12} md={7} lg={7}>
            <p className="description">
              Our main goal is to deliver the correct solutions at the correct
              time to satisfy our clients. Our team consists of well experienced
              professionals who are very thoughtful about the customers and
              believe in adding value by providing technical work and putting
              strong focus on the project from the start towards it&apos;s
              completion.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
