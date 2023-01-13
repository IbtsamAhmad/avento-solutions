import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Frontend from "../../icons/Frontend.svg";
import Database from "../../icons/Database.svg";
import Backend from "../../icons/Backend.svg";
import Mobile from "../../icons/Mobile.svg";

const Technologies = () => {
  const frontend = (
    <div>
      <Frontend /> Frontend Development
    </div>
  );
  const backend = (
    <div>
      <Backend /> Backend Development
    </div>
  );
  const mobile = (
    <div>
      <Mobile /> Mobile Development
    </div>
  );
  const database = (
    <div>
      <Database /> Databases
    </div>
  );
  return (
    <div className="technologies-container">
      <Container>
        <h2 className="heading">Technologies Proficiency</h2>
        <p className="description">
          Our services lets our clients to experience growth with their products
          and gain huge benefits affiliated with it.
        </p>
        <Tab.Container id="left-tabs-example" defaultActiveKey="frontend">
          <Row className="tabs-container">
            <Col sm={12} md={5} lg={4}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="frontend">{frontend}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="backend">{backend}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="mobile">{mobile}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="database">{database}</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12} md={7} lg={{ span: 6, offset: 1 }}>
              <Tab.Content>
                <Tab.Pane eventKey="frontend">
                  <Row>
                    <Col sm={4} md={4} lg={4} className="technology-col">
                      <img
                        src="/assets/images/technology1.png"
                        alt=""
                        className="technology-img"
                      />
                      <p className="technologyName">HTML5</p>
                    </Col>
                    <Col sm={4} md={4} lg={4} className="technology-col">
                      <img
                        src="/assets/images/technology2.png"
                        alt=""
                        className="technology-img"
                      />
                      <p className="technologyName">CSS3</p>
                    </Col>
                    <Col sm={4} md={4} lg={4} className="technology-col">
                      <img
                        src="/assets/images/technology3.png"
                        alt=""
                        className="technology-img"
                      />
                      <p className="technologyName">JavaScript</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4} md={4} lg={4} className="technology-col">
                      <img
                        src="/assets/images/technology4.png"
                        alt=""
                        className="technology-img"
                      />
                      <p className="technologyName">JQuery</p>
                    </Col>
                    <Col sm={4} md={4} lg={4} className="technology-col">
                      <img
                        src="/assets/images/technology5.png"
                        alt=""
                        className="technology-img"
                      />
                      <p className="technologyName">Angular Js</p>
                    </Col>
                    <Col sm={4} md={4} lg={4} className="technology-col">
                      <img
                        src="/assets/images/technology6.png"
                        alt=""
                        className="technology-img"
                      />
                      <p className="technologyName">React Js</p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="backend">Backend</Tab.Pane>
                <Tab.Pane eventKey="mobile">Mobile</Tab.Pane>
                <Tab.Pane eventKey="database">Database</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Technologies;
