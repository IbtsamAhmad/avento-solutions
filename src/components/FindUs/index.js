import React from "react";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import PakFlag from "../../icons/PakFlag.svg";
import UsaFlag from "../../icons/UsaFlag.svg";
const FindUs = () => {
  const TitleOne = (
    <div className="tab-title">
      <PakFlag /> Avento House
    </div>
  );
  const TitleTwo = (
    <div className="tab-title">
      <UsaFlag /> Avento Hub
    </div>
  );
  return (
    <div className="find-us-sec">
      <Container>
        <h2 className="heading">Find Us At</h2>
        <Tabs
          defaultActiveKey="Avento House"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Avento House" title={TitleOne}>
            <p className="tab-description">
              <strong>Avento House:</strong> Our motive is to bring your ideas
              to life! Avento solutions is here to help you get your work done
              as quickly as possible.
            </p>
            <img
              src="/assets/images/map-house.png"
              alt="map-image"
              className="map-image"
            />
          </Tab>
          <Tab eventKey="Avento Hub" title={TitleTwo}>
            <p className="tab-description">
              <strong>Avento Hub:</strong> Our motive is to bring your ideas to
              life! Avento solutions is here to help you get your work done as
              quickly as possible.
            </p>
            <img
              src="/assets/images/map-hub.png"
              alt=""
              className="map-image"
            />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default FindUs;
