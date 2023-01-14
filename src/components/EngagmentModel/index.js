import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Engage from "../../icons/Engage.svg";

const EngagementModel = () => {
  return (
    <div className="engModel-container">
      <h1 className="heading">Engagement Models</h1>
      <p className="description">
        Depending on your project specifics and needs you can choose from
      </p>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={{ offset: 2, span: 4 }}>
            <Card
              className="engageCard"
              // data-aos="fade-right"
              // data-aos-duration="1500"
            >
              <Card.Body>
                <Engage />
                <h1>Fixed Price</h1>
                <p>
                  With our talented and highly experienced full stack
                  developers, we deliver rich user experiences that cater beyond
                  everything you need.
                </p>
                <Button className="engageBtn">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={{ offset: 0, span: 4 }}>
            <Card
              className="engageCard cardTwo"
            >
              <Card.Body>
                <Engage />
                <h1>Dedicated Team</h1>
                <p>
                  We have experienced technology experts who develop hybrid and
                  native mobile applications. we offer end to end solutions to
                  our clients. We never fail to satisfy our clients.
                </p>
                <Button className="engageBtn buttonTwo">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EngagementModel;
