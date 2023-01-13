import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AirBnb from "../../icons/AirBnb.svg"
import Amazon from "../../icons/Amazon.svg"
import FedEx from "../../icons/FedEx.svg"
import Google from "../../icons/Google.svg"
import Ola from "../../icons/Ola.svg"
import Oyo from "../../icons/Oyo.svg"
import Walmart from "../../icons/Walmart.svg"
import Microsoft from "../../icons/Microsoft.svg"
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const Customers = () => {
  return (
    <div className="customersContainer">
      <Container>
      <Row className="align-items-center">
      <Col sm={12} md={6} lg={4}>
      <h1 className="customer-numbers">1,50,000+</h1>
      <p className="customers-description" >
      Customers who use Landify UI Kit to build their new startup landing page.
      </p>
      </Col>
      <Col sm={12} md={6} lg={8} >
      <Row className="customer-icons">
        <Col sm={6} md={12} lg={3}>
        <AirBnb/>
        </Col>
        <Col sm={6} md={12} lg={3}>
        <Amazon/>
        </Col>
        <Col sm={6} md={12} lg={3}>
        <FedEx/>
        </Col>
        <Col sm={6} md={12} lg={3}>
        <Microsoft/>
        </Col>
      </Row>
      <Row className="customer-icons" >
        <Col sm={6} md={12} lg={3}>
        <Google/>
        </Col>
        <Col sm={6} md={12} lg={3}>
        <Ola/>
        </Col>
        <Col sm={6} md={12} lg={3}>
        <Walmart/>
        </Col>
        <Col sm={6} md={12} lg={3}>
        <Oyo/>
        </Col>
      </Row>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Customers;
