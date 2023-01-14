import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AirBnb from "../src/icons/AirBnb.svg";
import Instagram from "../src/icons/Instagram.svg";
import Linkedin from "../src/icons/Linkedin.svg";
import Twitter from "../src/icons/Twitter.svg";
import Facebook from "../src/icons/Facebook.svg";
import ContactForm from "../src/components/ContactForm";

const TeamPage = () => {
  return (
    <div className="teams-container">
      <Container>
        <Row className="teamsRow-container align-items-center justify-content-between">
          <Col sm={12} md={6} lg={6} className="team-colOne">
            <h1 className="heading">
              Delivering Unblemished Infotech Solutions
            </h1>
            <p className="description">
              Our motive is to bring your ideas to life! Avento solutions is
              here to help you get your work done as quickly as possible. Our
              general role is vital to the growth of effective communications.
            </p>
            <p className="description">
            Project description our motive is to bring your ideas to life! Avento solutions is here to help you get your work done as quickly as possible.
            </p>
            <button className="hireButton">Hire Developer</button>
          </Col>
          <Col sm={12} md={6} lg={6} className="teamsImgColumn">
            {/* <img
              src="/assets/images/teamsHeader.png"
              className="teamsHeaderimg"
              alt="teamsHeader"
            /> */}
              <img
              src="assets/images/home-hero-img.png"
              alt=""
              className="home-hero-img"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-cards-container" >
          <h1 className="heading">Our Creative Team</h1>
          <Tabs
            defaultActiveKey="All Team"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="All Team" title="All Team">
          <Row>
          <Col sm={12} md={4} lg={4} className="projectCard">
          <Card className="team-card">
                <Card.Body>
                  <img
                    src="/assets/images/teamImage.png"
                    alt="team-img"
                    className="team-img"
                    data-aos="fade-up"
                  />
                  <h5 className="team-name">Abdul</h5>
                  <p className="team-post">Full-Stack developer</p>
                  <div className="social-links">
                    <Instagram />
                    <Linkedin />
                    <Twitter />
                    <Facebook />
                  </div>
                </Card.Body>
              </Card>
          </Col>
          <Col sm={12} md={4} lg={4} className="projectCard">
          <Card className="team-card">
                <Card.Body>
            
                  <img
                    src="/assets/images/teamImage.png"
                    alt="team-img"
                    className="team-img"
                  />
                  <h5 className="team-name">Abdul</h5>
                  <p className="team-post">UI/UX Developer</p>
                  <div className="social-links">
                    <Instagram />
                    <Linkedin />
                    <Twitter />
                    <Facebook />
                  </div>
                </Card.Body>
              </Card>
          </Col>
          <Col sm={12} md={4} lg={4} className="projectCard">
          <Card className="team-card">
                <Card.Body>
             
                  <img
                    src="/assets/images/teamImage.png"
                    alt="team-img"
                    className="team-img"
                  />
                  <h5 className="team-name">Abdul</h5>
                  <p className="team-post">Android developer</p>
                  <div className="social-links">
                    <Instagram />
                    <Linkedin />
                    <Twitter />
                    <Facebook />
                  </div>
                </Card.Body>
              </Card>
          </Col>
            </Row>
            <Row>
          <Col sm={12} md={4} lg={4} className="projectCard">
          <Card className="team-card">
                <Card.Body>
                  <img
                    src="/assets/images/teamImage.png"
                    alt="team-img"
                    className="team-img"
                  />
                  <h5 className="team-name">Abdul</h5>
                  <p className="team-post">Android developer</p>
                  <div className="social-links">
                    <Instagram />
                    <Linkedin />
                    <Twitter />
                    <Facebook />
                  </div>
                </Card.Body>
              </Card>
          </Col>
          <Col sm={12} md={4} lg={4} className="projectCard">
          <Card className="team-card">
                <Card.Body>
                  <img
                    src="/assets/images/teamImage.png"
                    alt="team-img"
                    className="team-img"
                  />
                  <h5 className="team-name">Abdul</h5>
                  <p className="team-post">Full-Stack developer</p>
                  <div className="social-links">
                    <Instagram />
                    <Linkedin />
                    <Twitter />
                    <Facebook />
                  </div>
                </Card.Body>
              </Card>
          </Col>
          <Col sm={12} md={4} lg={4} className="projectCard">
          <Card className="team-card">
                <Card.Body>
                  <img
                    src="/assets/images/teamImage.png"
                    alt="team-img"
                    className="team-img"
                  />
                  <h5 className="team-name">Abdul</h5>
                  <p className="team-post">UI/UX Developer</p>
                  <div className="social-links">
                    <Instagram />
                    <Linkedin />
                    <Twitter />
                    <Facebook />
                  </div>
                </Card.Body>
              </Card>
          </Col>
            </Row>
             </Tab>
            <Tab eventKey="Developers" title="Developers">
              Developers
            </Tab>
            <Tab eventKey="Designers" title="Designers">
              Designers
            </Tab>
            <Tab eventKey="Admin" title="Admin">
              Admin
            </Tab>
            <Tab eventKey="HR" title="HR">
              HR
            </Tab>
          </Tabs>
          <button className="hire-btn">Hire Now</button>
        </div>
        <ContactForm info="Project description our motive is to bring your ideas to life! Avento solutions is here to help you get your work done as quickly as possible." />
      </Container>
    </div>
  );
};

export default TeamPage;
