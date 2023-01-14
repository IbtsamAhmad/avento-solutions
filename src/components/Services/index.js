import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import EnterpriseService from "../../icons/EnterpriseService.svg";
import WebService from "../../icons/WebService.svg";
import MobileService from "../../icons/MobileService.svg";
import AnalyticsService from "../../icons/AnalyticsService.svg";
import ConsultationService from "../../icons/ConsultationService.svg";
import SeoService from "../../icons/SeoService.svg";

const Services = () => {
  return (
    <div className="servicesContainer">
      <h2 className="heading">
        Offering the latest software and IT services to our customers!
      </h2>
      <Container>
        <Row className="serviceCards-row">
          <Col sm={12} md={6} lg={4}>
            <Card className="service-card">
              <Card.Body>
                <WebService />
                <h1>Web Development</h1>
                <p>
                  With our talented and highly experienced full stack
                  developers, we deliver rich user experiences that cater beyond
                  everything you need.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="service-card" >
              <Card.Body>
                <MobileService />
                <h1>Mobile App Development</h1>
                <p>
                  We have experienced technology experts who develop hybrid and
                  native mobile applications. we offer end to end solutions to
                  our clients. We never fail to satisfy our clients.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="service-card" >
              <Card.Body>
                <EnterpriseService />
                <h1>Enterprise Solutions</h1>
                <p>
                  We research extensively to build up your user personas. We
                  make sure that we propose top-notch technology to deliver
                  engrossing experiences that solves minor as well as major
                  challenges.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="serviceCards-row">
          <Col sm={12} md={6} lg={4}>
            <Card className="service-card" >
              <Card.Body>
                <ConsultationService />
                <h1>Business Consultancy</h1>
                <p>
                  Our expert business consultants are always there to help our
                  clients digitally market their business.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="service-card" >
              <Card.Body>
                <AnalyticsService />
                <h1>Data Analytics</h1>
                <p>
                  Our highly accurate and customized Big Data solutions perform
                  efficiently to elevate your business with better development
                  strategies, improved researches and precise results.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="service-card">
              <Card.Body>
                <SeoService />
                <h1>SEO</h1>
                <p>
                  Our SEO consultants will help you attract organic traffic
                  towards your site and engage a needful audience.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
